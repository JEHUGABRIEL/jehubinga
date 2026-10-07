import type { Metadata } from "next";
import { defaultContent, getSiteContent } from "@/lib/content";
import { PageHeader } from "../ui";
import { ContentEditor } from "./ContentEditor";

export const metadata: Metadata = { title: "Textes du site" };

export default async function ContentPage() {
  const [fr, en] = await Promise.all([getSiteContent("fr"), getSiteContent("en")]);
  return (
    <>
      <PageHeader
        title="Textes du site"
        description="Tous les textes affichés sur le portfolio, en français et en anglais."
      />
      <ContentEditor initial={{ fr, en }} defaults={defaultContent} />
    </>
  );
}
