import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../../ui";
import { ProjectForm } from "../ProjectForm";

export const metadata: Metadata = { title: "Nouveau projet" };

export default function NewProjectPage() {
  return (
    <>
      <Link href="/admin/projects" className="text-sm text-ink/60 hover:text-ink">
        ← Projets
      </Link>
      <PageHeader title="Nouveau projet" />
      <ProjectForm />
    </>
  );
}
