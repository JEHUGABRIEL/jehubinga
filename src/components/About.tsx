"use client";

import { ArrowUpRight } from "./icons";
import { MorphingPortrait } from "./MorphingPortrait";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";

export function About() {
  const t = useTranslations();

  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 sm:py-36">
      <MorphingPortrait />

      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-6xl font-black leading-none tracking-tightest sm:text-7xl">
          <SplitText text={t.about.greeting} />
        </h2>

        <div className="mt-14 grid items-end gap-10 sm:mt-20 md:grid-cols-3 md:gap-8">
          <Reveal delay={0.1} className="order-2 md:order-1">
            <p className="max-w-xs font-display text-xl font-semibold leading-snug sm:text-2xl">
              {t.about.intro}
            </p>
          </Reveal>

          <div
            className="order-1 mx-auto aspect-[4/5] w-full max-w-sm md:order-2"
            aria-hidden="true"
          />

          <Reveal delay={0.15} className="order-3">
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
              {t.about.description1}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              {t.about.description2}
            </p>
            <a
              href="#projects"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              {t.about.cta}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
