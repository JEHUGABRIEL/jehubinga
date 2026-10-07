import Link from "next/link";
import { getStats } from "@/lib/content";
import { Card, PageHeader } from "./ui";
import { ViewsChart } from "./ViewsChart";

function Stat({ label, value, note, href }: { label: string; value: number; note?: string; href?: string }) {
  const body = (
    <Card className="h-full transition-colors hover:border-ink/25">
      <p className="text-sm text-ink/60">{label}</p>
      <p className="mt-2 font-display text-4xl font-black tracking-tight tabular-nums">
        {value.toLocaleString("fr-FR")}
      </p>
      {note && <p className="mt-1 text-xs text-ink/55">{note}</p>}
    </Card>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}

function TopList({ title, rows, empty }: { title: string; rows: { label: string; views: number }[]; empty: string }) {
  const max = Math.max(1, ...rows.map((r) => r.views));
  return (
    <Card>
      <h2 className="font-display text-lg font-bold">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-ink/55">{empty}</p>
      ) : (
        <table className="mt-4 w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Élément</th>
              <th>Vues</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="relative py-1.5 pr-3">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0.5 left-0 rounded bg-ink/8"
                    style={{ width: `${(r.views / max) * 100}%` }}
                  />
                  <span className="relative block truncate px-2">{r.label}</span>
                </td>
                <td className="w-14 py-1.5 text-right tabular-nums text-ink/70">{r.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
}

function trend(current: number, previous: number) {
  if (previous === 0) return current > 0 ? "Nouveau sur la période" : "Aucune visite sur la période précédente";
  const pct = Math.round(((current - previous) / previous) * 100);
  return `${pct >= 0 ? "+" : ""}${pct} % vs 30 jours précédents`;
}

export default async function Dashboard() {
  const s = await getStats();
  return (
    <>
      <PageHeader title="Tableau de bord" description="Activité de votre portfolio sur les 30 derniers jours." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Visites (7 j)" value={s.views7d} />
        <Stat label="Visites (30 j)" value={s.views30d} note={trend(s.views30d, s.viewsPrev30d)} />
        <Stat
          label="Messages non lus"
          value={s.unreadMessages}
          note={`${s.totalMessages} au total`}
          href="/admin/messages"
        />
        <Stat
          label="Projets publiés"
          value={s.publishedProjects}
          note={`${s.totalProjects} au total`}
          href="/admin/projects"
        />
      </div>

      <Card className="mt-6">
        <h2 className="font-display text-lg font-bold">Visites par jour</h2>
        <ViewsChart data={s.daily} />
      </Card>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <TopList
          title="Pages les plus vues"
          rows={s.topPages.map((r) => ({ label: r.path, views: r.views }))}
          empty="Pas encore de visites."
        />
        <TopList
          title="Projets les plus vus"
          rows={s.topProjects.map((r) => ({ label: r.slug, views: r.views }))}
          empty="Aucune page projet vue."
        />
        <TopList
          title="Provenance"
          rows={s.topReferrers.map((r) => ({ label: r.referrer, views: r.views }))}
          empty="Visites directes uniquement."
        />
      </div>
    </>
  );
}
