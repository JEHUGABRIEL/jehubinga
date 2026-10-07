import type { Metadata } from "next";
import en from "../../../../messages/en.json";
import fr from "../../../../messages/fr.json";
import { WorkPageClient } from "./WorkPageClient";

const translations = { en, fr } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as "en" | "fr"] ?? translations.en;
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
  return <WorkPageClient lang={lang} />;
}
