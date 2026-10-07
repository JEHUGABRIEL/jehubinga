"use client";

import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";

const gradients = [
  "from-zinc-500 via-zinc-800 to-black",
  "from-zinc-400 via-zinc-700 to-black",
];

export function Thoughts() {
  const t = useTranslations();

  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-6xl font-black leading-none tracking-tightest sm:text-7xl">
          <SplitText text={t.thoughts.title} />
        </h2>

        <div className="mt-16 grid gap-6 sm:mt-24 md:grid-cols-3">
          {t.thoughts.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-near-black text-paper transition-transform duration-300 ease-out hover:-translate-y-1.5">
                <div className="aspect-[4/3] overflow-hidden">
                  <div
                    className={`h-full w-full bg-gradient-to-br ${gradients[i]} transition-transform duration-500 ease-out group-hover:scale-110`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-xs text-paper/55">{post.date}</p>
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-paper/60">{post.excerpt}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-near-black p-7 text-paper transition-transform duration-300 ease-out hover:-translate-y-1.5">
              <p className="font-display text-2xl font-bold leading-snug">
                {t.thoughts.cta}
              </p>
              <a
                href="#"
                className="group mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
              >
                {t.thoughts.viewAll}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
