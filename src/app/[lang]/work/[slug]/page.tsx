import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/content";
import type { Project } from "@/lib/types";
import { WorkDetailPageClient } from "./WorkDetailPageClient";

async function load(lang: string, slug: string) {
  const projects = await getProjects(lang === "fr" ? "fr" : "en");
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const others: Project[] = [];
  for (let i = 1; i < projects.length && others.length < 2; i++) {
    others.push(projects[(index + i) % projects.length]);
  }
  return { project: projects[index], others };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const data = await load(lang, slug);
  if (!data) return {};
  return {
    title: `${data.project.name} — BINGA`,
    description: data.project.intro,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const data = await load(lang, slug);
  if (!data) notFound();
  return <WorkDetailPageClient project={data.project} others={data.others} />;
}
