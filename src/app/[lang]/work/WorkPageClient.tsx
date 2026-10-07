"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WorkGrid } from "@/components/WorkGrid";
import { PageIntro } from "@/components/PageIntro";
import { projects } from "@/lib/projects";
import { useTranslations } from "@/lib/i18n";

export function WorkPageClient({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pb-16 pt-40 sm:px-10 sm:pt-48">
          <div className="mx-auto max-w-6xl">
            <PageIntro
              title={
                <>
                  {t.work.title.split("\n")[0]}
                  <br />
                  {t.work.title.split("\n")[1]}
                </>
              }
              subtitle={t.work.subtitle}
            />
          </div>
        </section>

        <section className="px-6 pb-28 sm:px-10 sm:pb-36">
          <div className="mx-auto max-w-6xl">
            <WorkGrid projects={projects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
