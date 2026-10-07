"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";
import { GITHUB_URL } from "@/lib/links";

const socials = [
  { Icon: GitHubIcon, label: "GitHub", href: GITHUB_URL },
  { Icon: XIcon, label: "X", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: YouTubeIcon, label: "YouTube", href: "#" },
];

export function Contact() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContactMessage,
    { status: "idle" }
  );
  const t = useTranslations();
  const sent = state.status === "sent";

  return (
    <section id="contact" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-6xl font-black leading-none tracking-tightest sm:text-7xl">
            <SplitText text={t.contact.title} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-sm text-ink-soft sm:text-base">
              {t.contact.description}
            </p>
            <div className="mt-10 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <Magnetic key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/8 text-ink transition-all duration-200 hover:scale-110 hover:bg-ink hover:text-paper"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <form
            action={formAction}
            className="flex flex-col gap-5 rounded-2xl bg-near-black p-7 text-paper sm:p-8"
          >
            <label className="flex flex-col gap-2 text-sm">
              {t.contact.name}
              <input
                required
                name="name"
                maxLength={120}
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition-colors duration-200 hover:border-paper/35 focus:border-paper/60"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t.contact.email}
              <input
                required
                name="email"
                maxLength={200}
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition-colors duration-200 hover:border-paper/35 focus:border-paper/60"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t.contact.project}
              <textarea
                required
                name="body"
                maxLength={5000}
                rows={4}
                placeholder={t.contact.projectPlaceholder}
                className="resize-y rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none focus:border-paper/50"
              />
            </label>
            {/* Honeypot for bots, hidden from people and assistive tech */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={pending || sent}
              className="mt-1 rounded-lg bg-paper py-3.5 text-sm font-semibold text-near-black transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:cursor-default disabled:opacity-80"
            >
              {sent
                ? t.contact.thankYou
                : pending
                  ? t.contact.sending
                  : t.contact.submit}
            </button>
            {state.status === "error" && (
              <p role="alert" className="text-sm text-red-300">
                {t.contact.error}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
