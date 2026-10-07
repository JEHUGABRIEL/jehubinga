"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlipPortrait } from "./FlipPortrait";

export function MorphingPortrait() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.42, 1]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-x-0 top-[-58vh] h-[125vh] sm:top-[-53vh] sm:h-[125vh]"
      aria-hidden="true"
    >
      <div className="sticky top-28 sm:top-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 sm:px-10 md:grid-cols-3">
          <div className="hidden md:block" />
          <div className="flex justify-center">
            <motion.div
              style={{ scale }}
              className="pointer-events-auto w-full max-w-[280px] sm:max-w-sm"
            >
              <FlipPortrait
                rotateY={rotateY}
                className="aspect-[4/5] w-full"
                rounded="rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
