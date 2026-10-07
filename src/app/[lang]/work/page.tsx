import type { Metadata } from "next";
import { getProjects, getSiteContent } from "@/lib/content";
import { WorkPageClient } from "./WorkPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getSiteContent(lang === "fr" ? "fr" : "en");
  return {
    title: t.work.metaTitle,
    description: t.work.metaDescription,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const projects = await getProjects(lang === "fr" ? "fr" : "en");
  return <WorkPageClient projects={projects} />;
}
