"use client";

import { createContext, useContext, ReactNode } from "react";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

export type Locale = "en" | "fr";

const translations = { en, fr } as const;

type Translations = typeof en;

const I18nContext = createContext<Translations>(en);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={translations[locale]}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  return useContext(I18nContext);
}

export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  if (seg === "fr") return "fr";
  return "en";
}

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";
