import { ensureSchema, hasDatabase, sql } from "@/lib/db";

const BOT = /bot|crawl|spider|slurp|preview|lighthouse|headless/i;

export async function POST(request: Request) {
  if (!hasDatabase() || BOT.test(request.headers.get("user-agent") ?? "")) {
    return new Response(null, { status: 204 });
  }

  let path = "";
  let referrer = "";
  try {
    const data = JSON.parse(await request.text());
    path = String(data.path ?? "").slice(0, 200);
    referrer = String(data.referrer ?? "");
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!path.startsWith("/") || path.startsWith("/admin")) {
    return new Response(null, { status: 204 });
  }

  // Keep only the referring host, and drop self-referrals.
  let refHost: string | null = null;
  try {
    refHost = referrer ? new URL(referrer).host : null;
  } catch {}
  if (refHost && refHost === new URL(request.url).host) refHost = null;

  const projectSlug = path.match(/^\/(?:en|fr)\/work\/([^/]+)/)?.[1] ?? null;

  await ensureSchema();
  await sql()`insert into page_views (path, project_slug, referrer)
              values (${path}, ${projectSlug}, ${refHost})`;
  return new Response(null, { status: 204 });
}
