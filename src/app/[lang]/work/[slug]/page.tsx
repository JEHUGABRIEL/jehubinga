import type { Metadata } from "next";
import { notFound } from "next/navigation";
import en from "../../../../../messages/en.json";
import fr from "../../../../../messages/fr.json";
import { getProject } from "@/lib/projects";
import { WorkDetailPageClient } from "./WorkDetailPageClient";

const translations = { en, fr } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const t = translations[lang as "en" | "fr"] ?? translations.en;
  return {
    title: `${project.name} — ${t.footer.contact === "/Contact" ? "BINGA" : "BINGA"}`,
    description: project.intro,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <WorkDetailPageClient slug={slug} lang={lang} />;
}
