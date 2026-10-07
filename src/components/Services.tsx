"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";

export function Services() {
  const t = useTranslations();

  return (
    <section id="services" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-6xl font-black leading-none tracking-tightest sm:text-7xl">
          <SplitText text={t.services.title} />
        </h2>

        <div className="mt-16 border-t border-ink/15 sm:mt-24">
          {t.services.items.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.06}>
              <div className="group flex flex-col gap-2 border-b border-ink/15 py-7 transition-[padding] duration-300 ease-out hover:pl-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-9">
                <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.name}
                </h3>
                <p className="text-sm text-ink-soft transition-colors duration-300 group-hover:text-ink sm:text-base">
                  {service.tags.join("  •  ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
