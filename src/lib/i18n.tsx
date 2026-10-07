"use client";

import { createContext, useContext, ReactNode } from "react";
import en from "../../messages/en.json";
import type { Locale, SiteContent } from "./types";

export type { Locale } from "./types";

const I18nContext = createContext<SiteContent>(en);

/** `messages` comes from the database (see getSiteContent), with JSON defaults. */
export function I18nProvider({
  messages,
  children,
}: {
  messages: SiteContent;
  children: ReactNode;
}) {
  return <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>;
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
