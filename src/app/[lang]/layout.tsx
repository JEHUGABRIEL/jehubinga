import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import "../globals.css";
import { I18nProvider, Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import en from "../../../messages/en.json";
import fr from "../../../messages/fr.json";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const translations = { en, fr } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Locale] ?? translations.en;
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

  return (
    <html
      lang={lang}
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink font-body">
        <MotionProvider>
          <ScrollProgress />
          <I18nProvider locale={lang as Locale}>{children}</I18nProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
