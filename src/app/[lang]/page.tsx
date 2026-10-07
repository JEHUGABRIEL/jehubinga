import { getProjects } from "@/lib/content";
import { HomePageClient } from "./HomePageClient";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const projects = await getProjects(lang === "fr" ? "fr" : "en");
  return <HomePageClient projects={projects} />;
}
