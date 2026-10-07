import type { Metadata } from "next";
import "../globals.css";
import { inter, interTight } from "../fonts";
import { I18nProvider } from "@/lib/i18n";
import { getSiteContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageViewTracker } from "@/components/PageViewTracker";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getSiteContent(lang === "fr" ? "fr" : "en");
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "fr") notFound();
  const messages = await getSiteContent(lang);

  return (
    <html
      lang={lang}
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink font-body">
        <MotionProvider>
          <ScrollProgress />
          <PageViewTracker />
          <I18nProvider messages={messages}>{children}</I18nProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
