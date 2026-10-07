"use client";

import { use } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WorkGrid } from "@/components/WorkGrid";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { getProject, getOtherProjects } from "@/lib/projects";
import { useTranslations } from "@/lib/i18n";

export function WorkDetailPageClient({
  slug,
  lang,
}: {
  slug: string;
  lang: string;
}) {
  const project = getProject(slug)!;
  const t = useTranslations();
  const { Thumb } = project;
  const others = getOtherProjects(slug);

  return (
    <>
      <Nav />
      <main>
        <section className="px-6 pb-16 pt-40 sm:px-10 sm:pt-48">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-8 md:grid-cols-2">
              <PageIntro title={project.name} />
              <Reveal delay={0.15}>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base md:mt-3">
                  {project.intro}
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={0.2}
              className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 sm:mt-20"
            >
              <div>
                <p className="text-sm text-ink-soft">{t.work.category}</p>
                <p className="mt-1 font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-ink-soft">{t.work.year}</p>
                <p className="mt-1 font-medium">{project.year}</p>
              </div>
              <a
                href={project.liveLink}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                {t.work.liveLink}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 sm:mt-14">
              <div className="aspect-video overflow-hidden rounded-2xl">
                <Thumb />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-28 sm:px-10 sm:pb-36">
          <div className="mx-auto max-w-6xl space-y-20 sm:space-y-28">
            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.aboutTemplate}
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
                {project.impactHeading}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.impactText}
              </p>
            </Reveal>

            <Reveal className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Thumb />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Thumb />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.visualLanguage}
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.visualLanguage.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.structuredStorytelling}
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.structuredStorytelling.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.builtForRealUse}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.builtForRealUse}
              </p>
            </Reveal>

            <Reveal>
              <div className="aspect-[21/9] overflow-hidden rounded-2xl">
                <Thumb />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.foundationForGrowth}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.foundationForGrowth}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                {t.work.clarityScales}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {project.clarityScales}
              </p>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="font-display text-5xl font-black tracking-tightest sm:text-6xl">
                  {t.work.moreProjects}
                </h2>
              </Reveal>
              <div className="mt-16">
                <WorkGrid projects={others} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
