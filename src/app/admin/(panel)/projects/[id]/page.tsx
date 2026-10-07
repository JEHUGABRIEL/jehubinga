import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectRecord } from "@/lib/content";
import { deleteProject } from "../../../actions";
import { ConfirmButton } from "../../ConfirmButton";
import { buttonGhost, PageHeader } from "../../ui";
import { ProjectForm } from "../ProjectForm";

export const metadata: Metadata = { title: "Modifier le projet" };

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = Number.isInteger(Number(id)) ? await getProjectRecord(Number(id)) : null;
  if (!project) notFound();

  return (
    <>
      <Link href="/admin/projects" className="text-sm text-ink/60 hover:text-ink">
        ← Projets
      </Link>
      <PageHeader
        title={project.content.fr.name}
        description={`Modifié le ${new Date(project.updatedAt).toLocaleString("fr-FR", { timeZone: "Africa/Bangui" })}`}
        action={
          <div className="flex gap-2">
            <a
              href={`/fr/work/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonGhost}
            >
              Voir ↗
            </a>
            <form action={deleteProject}>
              <input type="hidden" name="id" value={project.id} />
              <input type="hidden" name="redirect" value="1" />
              <ConfirmButton label="Supprimer" confirmLabel="Confirmer" />
            </form>
          </div>
        }
      />
      <ProjectForm project={project} />
    </>
  );
}
