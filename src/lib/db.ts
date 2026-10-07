import "server-only";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { seedProjects } from "./seed-projects";

let client: NeonQueryFunction<false, false> | null = null;

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

export function sql() {
  if (!client) {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
    client = neon(process.env.DATABASE_URL);
  }
  return client;
}

let ready: Promise<void> | null = null;

/**
 * Creates the tables on first use and seeds the initial projects once.
 * Memoised per server instance, so it costs one round-trip at cold start.
 */
export function ensureSchema() {
  ready ??= setup().catch((err) => {
    ready = null;
    throw err;
  });
  return ready;
}

async function setup() {
  const db = sql();
  await db.transaction([
    db`create table if not exists projects (
      id serial primary key,
      slug text unique not null,
      position integer not null default 0,
      published boolean not null default true,
      year text not null default '',
      live_link text not null default '',
      image_url text not null default '',
      content jsonb not null,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )`,
    db`create table if not exists messages (
      id serial primary key,
      name text not null,
      email text not null,
      body text not null,
      read boolean not null default false,
      created_at timestamptz not null default now()
    )`,
    db`create table if not exists site_content (
      locale text primary key,
      data jsonb not null,
      updated_at timestamptz not null default now()
    )`,
    db`create table if not exists page_views (
      id bigserial primary key,
      path text not null,
      project_slug text,
      referrer text,
      created_at timestamptz not null default now()
    )`,
    db`create index if not exists page_views_created_at_idx on page_views (created_at)`,
    db`create table if not exists settings (
      key text primary key,
      value text not null
    )`,
  ]);

  // Seed once: deleting every project later must not bring them back.
  const seeded = await db`select 1 from settings where key = 'projects_seeded'`;
  if (seeded.length > 0) return;
  await db.transaction([
    ...seedProjects.map(({ slug, year, liveLink, ...text }, i) =>
      db`insert into projects (slug, position, year, live_link, content)
         values (${slug}, ${i}, ${year}, ${liveLink}, ${JSON.stringify({ en: text, fr: text })})
         on conflict (slug) do nothing`
    ),
    db`insert into settings (key, value) values ('projects_seeded', 'true')
       on conflict (key) do nothing`,
  ]);
}
