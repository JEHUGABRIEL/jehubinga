"use client";

import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const letter: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease } },
};

/**
 * Masked letter-by-letter rise. Lines are split on "\n".
 * By default it plays when scrolled into view; `onMount` plays it immediately.
 */
export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
  onMount = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-10% 0px" } };

  return (
    <motion.span
      initial="hidden"
      {...trigger}
      variants={container}
      className={className}
    >
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <span aria-hidden="true">
        {text.split("\n").map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi, words) => (
              <span key={wi}>
                <span className="-mb-[0.1em] inline-block overflow-hidden pb-[0.1em] align-bottom">
                  {Array.from(word).map((char, ci) => (
                    <motion.span
                      key={ci}
                      variants={letter}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {wi < words.length - 1 && " "}
              </span>
            ))}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
