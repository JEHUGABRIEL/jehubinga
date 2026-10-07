import type en from "../../messages/en.json";

export type Locale = "en" | "fr";
export const locales: Locale[] = ["en", "fr"];

/** Every translatable text of the site (mirrors messages/en.json). */
export type SiteContent = typeof en;

/** The per-locale text of a project. */
export type ProjectText = {
  name: string;
  subtitle: string;
  category: string;
  intro: string;
  about: string[];
  impactHeading: string;
  impactText: string;
  visualLanguage: string[];
  structuredStorytelling: string[];
  builtForRealUse: string;
  foundationForGrowth: string;
  clarityScales: string;
};

/** A project as shown on the public site, in one locale. */
export type Project = ProjectText & {
  slug: string;
  year: string;
  liveLink: string;
  imageUrl: string;
};

/** A project as stored and edited in the back-office. */
export type ProjectRecord = {
  id: number;
  slug: string;
  position: number;
  published: boolean;
  year: string;
  liveLink: string;
  imageUrl: string;
  content: Record<Locale, ProjectText>;
  updatedAt: string;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  body: string;
  read: boolean;
  createdAt: string;
};
