import "server-only";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import { ensureSchema, hasDatabase, sql } from "./db";
import { seedProjects } from "./seed-projects";
import type {
  ContactMessage,
  Locale,
  Project,
  ProjectRecord,
  ProjectText,
  SiteContent,
} from "./types";

export const defaultContent: Record<Locale, SiteContent> = { en, fr };

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Overlays saved values on the defaults, so keys added in code always exist. */
function mergeDefaults<T>(defaults: T, saved: unknown): T {
  if (isObject(defaults) && isObject(saved)) {
    const out: Record<string, unknown> = { ...defaults };
    for (const key of Object.keys(defaults)) {
      if (key in saved) out[key] = mergeDefaults(defaults[key], saved[key]);
    }
    return out as T;
  }
  if (Array.isArray(defaults)) return (Array.isArray(saved) ? saved : defaults) as T;
  return (typeof saved === typeof defaults ? saved : defaults) as T;
}

export async function getSiteContent(locale: Locale): Promise<SiteContent> {
  const defaults = defaultContent[locale];
  if (!hasDatabase()) return defaults;
  try {
    await ensureSchema();
    const rows = await sql()`select data from site_content where locale = ${locale}`;
    return rows.length ? mergeDefaults(defaults, rows[0].data) : defaults;
  } catch (err) {
    console.error("getSiteContent failed, using defaults", err);
    return defaults;
  }
}

type ProjectRow = {
  id: number;
  slug: string;
  position: number;
  published: boolean;
  year: string;
  live_link: string;
  image_url: string;
  content: Record<Locale, ProjectText>;
  updated_at: string | Date;
};

function toRecord(row: ProjectRow): ProjectRecord {
  return {
    id: row.id,
    slug: row.slug,
    position: row.position,
    published: row.published,
    year: row.year,
    liveLink: row.live_link,
    imageUrl: row.image_url,
    content: row.content,
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

function localize(record: ProjectRecord, locale: Locale): Project {
  const text = record.content[locale] ?? record.content.en;
  return {
    ...text,
    slug: record.slug,
    year: record.year,
    liveLink: record.liveLink,
    imageUrl: record.imageUrl,
  };
}

const fallbackProjects: Project[] = seedProjects.map((p) => ({ ...p, imageUrl: "" }));

export async function getProjectRecords(): Promise<ProjectRecord[]> {
  await ensureSchema();
  const rows = (await sql()`select * from projects order by position, id`) as ProjectRow[];
  return rows.map(toRecord);
}

export async function getProjectRecord(id: number): Promise<ProjectRecord | null> {
  await ensureSchema();
  const rows = (await sql()`select * from projects where id = ${id}`) as ProjectRow[];
  return rows.length ? toRecord(rows[0]) : null;
}

/** Published projects for the public site, in display order. */
export async function getProjects(locale: Locale): Promise<Project[]> {
  if (!hasDatabase()) return fallbackProjects;
  try {
    const records = await getProjectRecords();
    return records.filter((r) => r.published).map((r) => localize(r, locale));
  } catch (err) {
    console.error("getProjects failed, using seed data", err);
    return fallbackProjects;
  }
}

export async function getMessages(): Promise<ContactMessage[]> {
  await ensureSchema();
  const rows = await sql()`select * from messages order by created_at desc limit 500`;
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    body: r.body,
    read: r.read,
    createdAt: new Date(r.created_at).toISOString(),
  }));
}

export type Stats = {
  views7d: number;
  views30d: number;
  viewsPrev30d: number;
  unreadMessages: number;
  totalMessages: number;
  publishedProjects: number;
  totalProjects: number;
  daily: { day: string; views: number }[];
  topPages: { path: string; views: number }[];
  topProjects: { slug: string; views: number }[];
  topReferrers: { referrer: string; views: number }[];
};

export async function getStats(): Promise<Stats> {
  await ensureSchema();
  const db = sql();
  const [totals, messages, projects, daily, topPages, topProjects, topReferrers] =
    await db.transaction([
      db`select
          count(*) filter (where created_at > now() - interval '7 days')::int as views7d,
          count(*) filter (where created_at > now() - interval '30 days')::int as views30d,
          count(*) filter (where created_at <= now() - interval '30 days'
                             and created_at > now() - interval '60 days')::int as views_prev30d
        from page_views where created_at > now() - interval '60 days'`,
      db`select count(*) filter (where not read)::int as unread, count(*)::int as total from messages`,
      db`select count(*) filter (where published)::int as published, count(*)::int as total from projects`,
      db`select to_char(d, 'YYYY-MM-DD') as day, count(v.id)::int as views
         from generate_series(current_date - 29, current_date, interval '1 day') d
         left join page_views v on v.created_at::date = d::date
         group by d order by d`,
      db`select path, count(*)::int as views from page_views
         where created_at > now() - interval '30 days'
         group by path order by views desc limit 8`,
      db`select project_slug as slug, count(*)::int as views from page_views
         where project_slug is not null and created_at > now() - interval '30 days'
         group by project_slug order by views desc limit 6`,
      db`select referrer, count(*)::int as views from page_views
         where referrer is not null and referrer <> '' and created_at > now() - interval '30 days'
         group by referrer order by views desc limit 6`,
    ]);
  return {
    views7d: totals[0].views7d,
    views30d: totals[0].views30d,
    viewsPrev30d: totals[0].views_prev30d,
    unreadMessages: messages[0].unread,
    totalMessages: messages[0].total,
    publishedProjects: projects[0].published,
    totalProjects: projects[0].total,
    daily: daily as Stats["daily"],
    topPages: topPages as Stats["topPages"],
    topProjects: topProjects as Stats["topProjects"],
    topReferrers: topReferrers as Stats["topReferrers"],
  };
}
