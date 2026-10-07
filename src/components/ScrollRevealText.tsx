"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(
    progress,
    range,
    ["rgba(0, 0, 0, 0.1)", "rgb(17, 17, 17)"]
  );
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

export function ScrollRevealText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-4xl sm:leading-snug"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
