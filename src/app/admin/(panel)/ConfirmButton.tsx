"use client";

import { useEffect, useState } from "react";
import { buttonDanger } from "./ui";

/** Two-step destructive submit button: first click arms it, second click submits. */
export function ConfirmButton({ label, confirmLabel }: { label: string; confirmLabel: string }) {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!armed) return;
    const t = setTimeout(() => setArmed(false), 8000);
    return () => clearTimeout(t);
  }, [armed]);

  return (
    <button
      type="submit"
      onClick={(e) => {
        // Swapping `type` on click is not enough: React re-renders before the
        // browser runs the default action, so the first click would submit.
        if (!armed) {
          e.preventDefault();
          setArmed(true);
        }
      }}
      className={`${buttonDanger} ${armed ? "bg-accent-red text-white" : ""}`}
    >
      {armed ? confirmLabel : label}
    </button>
  );
}
