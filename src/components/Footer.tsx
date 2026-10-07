"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";
import { GITHUB_URL } from "@/lib/links";

export function Footer() {
  const t = useTranslations();

  const quickLinks = [
    { label: t.footer.home, href: "/" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.projects.viewAll, href: "/work" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="overflow-hidden bg-near-black px-6 pt-24 text-paper sm:px-10">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-14 pb-20 sm:flex-row sm:justify-between">
        <h2 className="max-w-md font-display text-5xl font-black leading-[0.95] tracking-tightest sm:text-6xl">
          <SplitText text={t.footer.headline} stagger={0.015} />
        </h2>

        <div className="flex gap-16">
          <div>
            <p className="text-sm text-paper/55">{t.footer.quickLinks}</p>
            <div className="mt-4 flex max-w-[280px] flex-wrap gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-paper/10 px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-paper hover:text-near-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-paper/55">{t.footer.contact}</p>
            <a
              href="mailto:jehubin@gmail.com"
              className="mt-4 block w-fit text-sm font-medium underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
              jehubin@gmail.com
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-fit text-sm font-medium underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
              github.com/JEHUGABRIEL
            </a>
          </div>
        </div>
      </Reveal>

      <div
        className="select-none pb-2 text-center font-display font-black leading-[0.8] text-paper/10"
        style={{ fontSize: "clamp(4rem, 21vw, 16rem)" }}
        aria-hidden="true"
      >
        <SplitText text="BINGA" stagger={0.08} />
      </div>
    </footer>
  );
}
