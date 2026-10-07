"use client";

import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { TiltCard } from "./TiltCard";
import { useTranslations } from "@/lib/i18n";
import type { Project } from "@/lib/types";
import { ProjectThumb } from "./ProjectThumb";

export function Projects({ projects }: { projects: Project[] }) {
  const t = useTranslations();

  return (
    <section id="projects" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-6xl font-black leading-[0.95] tracking-tightest sm:text-7xl">
            <SplitText text={t.projects.title} />
          </h2>
          <Reveal delay={0.3}>
            <a
              href="/work"
              className="group mb-1 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              {t.projects.viewAll}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:mt-24 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <a href={`/work/${project.slug}`} className="group block">
                <TiltCard className="aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <ProjectThumb project={project} />
                </TiltCard>
                <h3 className="mt-5 inline-flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.name}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{project.subtitle}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
