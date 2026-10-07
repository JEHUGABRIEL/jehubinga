"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkPassword, endSession, requireAdmin, startSession } from "@/lib/auth";
import { ensureSchema, sql } from "@/lib/db";
import { defaultContent, getProjectRecords } from "@/lib/content";
import { locales, type Locale, type ProjectText } from "@/lib/types";

export type FormState = { error?: string; saved?: boolean };

function refreshSite() {
  revalidatePath("/", "layout");
}

// ---------- Session ----------

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    // Slow down guessing.
    await new Promise((r) => setTimeout(r, 800));
    return { error: "Mot de passe incorrect." };
  }
  await startSession();
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/admin/login");
}

// ---------- Projects ----------

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const URL_OR_EMPTY = /^(https?:\/\/\S+)?$/;

function text(formData: FormData, key: string, max = 4000) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

/** Paragraph lists are edited as one textarea, paragraphs separated by a blank line. */
function paragraphs(formData: FormData, key: string) {
  return text(formData, key, 20000)
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function projectText(formData: FormData, locale: Locale): ProjectText {
  const k = (field: string) => `${locale}.${field}`;
  return {
    name: text(formData, k("name"), 120),
    subtitle: text(formData, k("subtitle"), 200),
    category: text(formData, k("category"), 200),
    intro: text(formData, k("intro")),
    about: paragraphs(formData, k("about")),
    impactHeading: text(formData, k("impactHeading"), 300),
    impactText: text(formData, k("impactText")),
    visualLanguage: paragraphs(formData, k("visualLanguage")),
    structuredStorytelling: paragraphs(formData, k("structuredStorytelling")),
    builtForRealUse: text(formData, k("builtForRealUse")),
    foundationForGrowth: text(formData, k("foundationForGrowth")),
    clarityScales: text(formData, k("clarityScales")),
  };
}

export async function saveProject(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  await ensureSchema();

  const id = Number(formData.get("id")) || null;
  const slug = text(formData, "slug", 80).toLowerCase();
  const year = text(formData, "year", 20);
  const liveLink = text(formData, "liveLink", 500);
  const imageUrl = text(formData, "imageUrl", 1000);
  const published = formData.get("published") === "on";
  const content = { en: projectText(formData, "en"), fr: projectText(formData, "fr") };

  if (!SLUG.test(slug)) {
    return { error: "Slug invalide : lettres minuscules, chiffres et tirets uniquement (ex. mon-projet)." };
  }
  if (!content.en.name || !content.fr.name) {
    return { error: "Le nom du projet est requis en anglais et en français." };
  }
  if (!URL_OR_EMPTY.test(liveLink) || !URL_OR_EMPTY.test(imageUrl)) {
    return { error: "Les liens doivent commencer par http:// ou https://." };
  }

  const db = sql();
  try {
    if (id) {
      const rows = await db`update projects set
          slug = ${slug}, year = ${year}, live_link = ${liveLink}, image_url = ${imageUrl},
          published = ${published}, content = ${JSON.stringify(content)}, updated_at = now()
        where id = ${id} returning id`;
      if (!rows.length) return { error: "Ce projet n'existe plus." };
    } else {
      await db`insert into projects (slug, position, year, live_link, image_url, published, content)
        values (${slug}, (select coalesce(max(position), -1) + 1 from projects),
                ${year}, ${liveLink}, ${imageUrl}, ${published}, ${JSON.stringify(content)})`;
    }
  } catch (err) {
    if (String(err).includes("projects_slug_key")) {
      return { error: `Le slug « ${slug} » est déjà utilisé par un autre projet.` };
    }
    throw err;
  }

  refreshSite();
  revalidatePath("/admin/projects");
  if (!id) redirect("/admin/projects");
  return { saved: true };
}

export async function deleteProject(formData: FormData) {
  await requireAdmin();
  await sql()`delete from projects where id = ${Number(formData.get("id"))}`;
  refreshSite();
  revalidatePath("/admin/projects");
  if (formData.get("redirect")) redirect("/admin/projects");
}

export async function togglePublished(formData: FormData) {
  await requireAdmin();
  await sql()`update projects set published = not published, updated_at = now()
              where id = ${Number(formData.get("id"))}`;
  refreshSite();
  revalidatePath("/admin/projects");
}

export async function moveProject(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const direction = formData.get("direction") === "up" ? -1 : 1;
  const ids = (await getProjectRecords()).map((p) => p.id);
  const from = ids.indexOf(id);
  const to = from + direction;
  if (from === -1 || to < 0 || to >= ids.length) return;
  [ids[from], ids[to]] = [ids[to], ids[from]];
  const db = sql();
  await db.transaction(ids.map((pid, position) => db`update projects set position = ${position} where id = ${pid}`));
  refreshSite();
  revalidatePath("/admin/projects");
}

// ---------- Messages ----------

export async function setMessageRead(formData: FormData) {
  await requireAdmin();
  await sql()`update messages set read = ${formData.get("read") === "true"}
              where id = ${Number(formData.get("id"))}`;
  revalidatePath("/admin", "layout");
}

export async function deleteMessage(formData: FormData) {
  await requireAdmin();
  await sql()`delete from messages where id = ${Number(formData.get("id"))}`;
  revalidatePath("/admin", "layout");
}

// ---------- Site texts ----------

/** Keeps only keys that exist in the defaults, with the same shape. */
function sanitize(defaults: unknown, value: unknown): unknown {
  if (typeof defaults === "string") return typeof value === "string" ? value.slice(0, 5000) : defaults;
  if (Array.isArray(defaults)) {
    if (!Array.isArray(value)) return defaults;
    const template = defaults[0];
    return value.slice(0, 50).map((item) => sanitize(template, item));
  }
  if (typeof defaults === "object" && defaults !== null) {
    const src = (typeof value === "object" && value !== null ? value : {}) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(defaults).map(([k, d]) => [k, sanitize(d, src[k])])
    );
  }
  return defaults;
}

function parseLocale(value: FormDataEntryValue | null): Locale | null {
  return locales.includes(value as Locale) ? (value as Locale) : null;
}

export async function saveContent(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const locale = parseLocale(formData.get("locale"));
  if (!locale) return { error: "Langue inconnue." };
  let data: unknown;
  try {
    data = JSON.parse(String(formData.get("data") ?? ""));
  } catch {
    return { error: "Contenu illisible, rechargez la page." };
  }
  const clean = sanitize(defaultContent[locale], data);
  await ensureSchema();
  await sql()`insert into site_content (locale, data) values (${locale}, ${JSON.stringify(clean)})
              on conflict (locale) do update set data = excluded.data, updated_at = now()`;
  refreshSite();
  return { saved: true };
}

export async function resetContent(formData: FormData) {
  await requireAdmin();
  const locale = parseLocale(formData.get("locale"));
  if (!locale) return;
  await sql()`delete from site_content where locale = ${locale}`;
  refreshSite();
  revalidatePath("/admin/content");
}
