import type { Metadata } from "next";
import Link from "next/link";
import { ProjectThumb } from "@/components/ProjectThumb";
import { getProjectRecords } from "@/lib/content";
import { deleteProject, moveProject, togglePublished } from "../../actions";
import { ConfirmButton } from "../ConfirmButton";
import { buttonGhost, buttonPrimary, Card, PageHeader } from "../ui";

export const metadata: Metadata = { title: "Projets" };

export default async function ProjectsPage() {
  const projects = await getProjectRecords();

  return (
    <>
      <PageHeader
        title="Projets"
        description="L'ordre ici est l'ordre du site. Les 4 premiers publiés apparaissent sur l'accueil."
        action={
          <Link href="/admin/projects/new" className={buttonPrimary}>
            + Nouveau projet
          </Link>
        }
      />

      {projects.length === 0 ? (
        <Card>
          <p className="text-sm text-ink/60">Aucun projet pour l&apos;instant.</p>
        </Card>
      ) : (
        <ul className="flex flex-col gap-3">
          {projects.map((p, i) => (
            <li key={p.id}>
              <Card className="flex flex-col gap-4 !p-4 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <div className="aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-lg">
                    <ProjectThumb project={{ slug: p.slug, name: p.content.fr.name, imageUrl: p.imageUrl }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/admin/projects/${p.id}`}
                        className="truncate font-display text-lg font-bold hover:underline"
                      >
                        {p.content.fr.name}
                      </Link>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          p.published ? "bg-emerald-100 text-emerald-800" : "bg-ink/8 text-ink/60"
                        }`}
                      >
                        {p.published ? "● Publié" : "○ Brouillon"}
                      </span>
                      {p.published && i < 4 && (
                        <span className="rounded-full bg-ink/8 px-2 py-0.5 text-[11px] font-semibold text-ink/70">
                          Accueil
                        </span>
                      )}
                    </div>
                    <p className="truncate text-sm text-ink/60">
                      {p.content.fr.subtitle} · {p.year} · /{p.slug}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <form action={moveProject} className="flex gap-1">
                    <input type="hidden" name="id" value={p.id} />
                    <button
                      name="direction"
                      value="up"
                      disabled={i === 0}
                      aria-label="Monter"
                      className={buttonGhost}
                    >
                      ↑
                    </button>
                    <button
                      name="direction"
                      value="down"
                      disabled={i === projects.length - 1}
                      aria-label="Descendre"
                      className={buttonGhost}
                    >
                      ↓
                    </button>
                  </form>
                  <form action={togglePublished}>
                    <input type="hidden" name="id" value={p.id} />
                    <button className={buttonGhost}>{p.published ? "Dépublier" : "Publier"}</button>
                  </form>
                  <Link href={`/admin/projects/${p.id}`} className={buttonGhost}>
                    Modifier
                  </Link>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={p.id} />
                    <ConfirmButton label="Supprimer" confirmLabel="Confirmer la suppression" />
                  </form>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
