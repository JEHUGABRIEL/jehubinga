"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageIntro({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-6xl font-black leading-[0.95] tracking-tightest sm:text-7xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-sm text-ink-soft sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
