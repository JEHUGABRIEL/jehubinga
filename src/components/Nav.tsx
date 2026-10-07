"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, MenuDotsIcon } from "./icons";
import { useTranslations } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed left-1/2 top-6 z-50 w-[92%] max-w-xs -translate-x-1/2 overflow-hidden rounded-[28px] bg-near-black text-paper shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <a
          href="/"
          className="font-display text-lg font-bold tracking-tight transition-opacity hover:opacity-70"
        >
          BINGA
        </a>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-near-black transition-transform duration-200 hover:scale-110 active:scale-90"
          >
            {open ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuDotsIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5 px-5 pb-5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-paper px-4 py-2.5 text-center text-sm font-medium text-near-black transition-colors hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
