"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";

const hues = [
  "from-orange-400 to-rose-500",
  "from-slate-300 to-slate-500",
  "from-amber-300 to-orange-400",
  "from-sky-300 to-indigo-400",
];

export function Testimonials() {
  const t = useTranslations();

  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-6xl font-black leading-none tracking-tightest sm:text-7xl">
          <SplitText text={t.testimonials.title} />
        </h2>

        <div className="mt-16 grid gap-5 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {t.testimonials.items.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <div className="flex h-full min-h-[320px] flex-col justify-between rounded-2xl bg-near-black p-7 text-paper transition-transform duration-300 ease-out hover:-translate-y-1.5">
                <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                <div className="mt-8 flex items-center gap-3">
                  <div
                    className={`h-9 w-9 shrink-0 rounded-full bg-gradient-to-br ${hues[i]} transition-transform duration-300 hover:scale-110`}
                  />
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-paper/55">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
