"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Portrait } from "./Portrait";

export function FlipPortrait({
  rotateY,
  className = "",
  rounded = "rounded-2xl",
  transformOrigin = "center center",
}: {
  rotateY: MotionValue<number>;
  className?: string;
  rounded?: string;
  transformOrigin?: string;
}) {
  const frontOpacity = useTransform(rotateY, (v) =>
    Math.cos((v * Math.PI) / 180) > 0 ? 1 : 0
  );
  const backOpacity = useTransform(rotateY, (v) =>
    Math.cos((v * Math.PI) / 180) > 0 ? 0 : 1
  );

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={{
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin,
        }}
        className="relative h-full w-full"
      >
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", opacity: frontOpacity }}
        >
          <Portrait tone="hero" className={`h-full w-full ${rounded}`} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            opacity: backOpacity,
          }}
        >
          <Portrait tone="about" className={`h-full w-full ${rounded}`} />
        </motion.div>
      </motion.div>
    </div>
  );
}
