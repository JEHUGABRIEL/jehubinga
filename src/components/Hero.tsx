"use client";

import { motion } from "framer-motion";
import { SparkleIcon, BoltIcon, StickerIcon } from "./icons";
import { SplitText } from "./SplitText";
import { useTranslations } from "@/lib/i18n";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-8 pt-32 sm:px-10">
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-1 -top-6 h-10 w-10 sm:h-14 sm:w-14"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
            className="h-full w-full"
          >
            <StickerIcon icon={SparkleIcon} className="h-full w-full" />
          </motion.div>
        </motion.div>

        <h1 className="font-display text-[15vw] font-black uppercase leading-[0.88] tracking-tightest sm:text-[10vw] lg:text-[7.2rem]">
          <SplitText
            onMount
            text={t.hero.line1}
            delay={0.1}
            stagger={0.04}
            className="block"
          />
          <SplitText
            onMount
            text={t.hero.line2}
            delay={0.35}
            stagger={0.04}
            className="block"
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute -right-1 bottom-2 h-10 w-8 sm:h-16 sm:w-12 lg:bottom-6"
        >
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
            className="h-full w-full"
          >
            <StickerIcon icon={BoltIcon} className="h-full w-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Reserved space for the morphing portrait */}
      <div
        className="mx-auto -mt-4 mb-10 aspect-[4/5] w-40 sm:w-48"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        className="relative mx-auto flex w-full max-w-6xl items-end justify-between text-ink"
      >
        <span className="font-display text-2xl font-black sm:text-3xl">
          {t.hero.copyright}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft sm:text-xs">
          {t.hero.tagline}
        </span>
      </motion.div>
    </section>
  );
}
