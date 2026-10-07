"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  en: "FR",
  fr: "EN",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/");
  const currentLocale = (segments[1] === "fr" ? "fr" : "en") as Locale;
  const targetLocale = labels[currentLocale];

  // Build new path with the other locale
  const newSegments = [...segments];
  newSegments[1] = currentLocale === "en" ? "fr" : "en";
  const newPath = newSegments.join("/") || "/";

  function switchLocale() {
    const next = currentLocale === "en" ? "fr" : "en";
    // Set cookie (1 year expiry)
    document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(newPath);
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      className="rounded-full border border-paper/20 px-3 py-1 text-xs font-medium text-paper/70 transition-all duration-200 hover:border-paper/50 hover:text-paper"
    >
      {targetLocale}
    </button>
  );
}
