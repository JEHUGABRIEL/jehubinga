"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Records one page view per navigation (see /api/track). */
export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const body = JSON.stringify({ path: pathname, referrer: document.referrer });
    if (!navigator.sendBeacon?.("/api/track", body)) {
      fetch("/api/track", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  }, [pathname]);

  return null;
}
