import type { ProjectText } from "./types";

/**
 * Initial projects, written to the database the first time it is used.
 * After that, projects are managed from the back-office (/admin/projects).
 */
export type SeedProject = ProjectText & {
  slug: string;
  year: string;
  liveLink: string;
};

export const seedProjects: SeedProject[] = [
  {
    slug: "gcfi",
    name: "GCFI",
    subtitle: "Telecom, Training & E-commerce Platform",
    category: "Corporate Website & Back-office",
    year: "2026",
    liveLink: "https://www.gcfi-rca.com",
    intro:
      "GCFI is the bilingual web platform of a telecom and IT company based in Bangui, Central African Republic. It brings its services, professional training catalogue and online shop together in one place, backed by a full admin back-office.",
    about: [
      "The site presents GCFI's telecom and IT services, lists its certified training sessions and sells equipment online, in French first with an English version.",
      "Behind the public pages sits an authenticated area for customers and a back-office where the team manages content, training sessions, products and orders without touching code.",
    ],
    impactHeading: "One Platform for Services, Training and Sales",
    impactText:
      "Before the platform, services, training and products lived in separate channels. Bringing them under one site gives clients a single entry point and gives the team one tool to keep everything up to date.",
    visualLanguage: [
      "A clean blue palette echoes the telecom world and keeps the interface trustworthy and professional.",
      "Large, legible typography and clear cards make the catalogue easy to browse on the mobile connections most visitors use.",
    ],
    structuredStorytelling: [
      "The home page moves from who GCFI is, to what it offers, to how to get in touch or buy — so every visitor finds a next step quickly.",
      "Training and product pages share the same structure, which keeps the experience predictable as the catalogue grows.",
    ],
    builtForRealUse:
      "Built with Next.js, TypeScript, Tailwind CSS and Supabase (auth, database, edge functions), with images served through Cloudinary and deployed on Vercel.",
    foundationForGrowth:
      "A modular feature-based architecture lets new services, training categories or shop features be added without reworking the existing pages.",
    clarityScales:
      "Whether a visitor is looking for connectivity, a training course or a product, the platform keeps the path short and the information clear.",
  },
  {
    slug: "cosi-lewa",
    name: "COSI Lewa",
    subtitle: "Audit & Consulting Firm Website",
    category: "Corporate Website",
    year: "2026",
    liveLink: "https://www.lewaconsultingroup.com",
    intro:
      "The institutional website of Cabinet COSI Lewa-Consulting Group, an audit, accounting, tax advisory and professional training firm based in Bangui, Central African Republic.",
    about: [
      "The site presents the firm's six areas of expertise — audit, accounting & finance, governance consulting, training, business support and professional events — each with its own detailed page.",
      "It also publishes the firm's training catalogue with pricing sheets, its news and its contact details, in both French and English.",
    ],
    impactHeading: "A Credible Online Presence for a Growing Firm",
    impactText:
      "For a consulting firm, trust is everything. The site gives prospective clients a clear, professional view of what the firm does and how it works, before the first meeting.",
    visualLanguage: [
      "Fraunces headings paired with Inter body text and IBM Plex Mono for figures give the site an editorial, serious tone suited to finance and audit.",
      "A warm, restrained palette keeps the focus on content and reinforces a sense of reliability.",
    ],
    structuredStorytelling: [
      "Each service page follows the same arc: the services offered, a four-step engagement process, and related training courses.",
      "This consistency helps visitors compare offerings and understand exactly what working with the firm looks like.",
    ],
    builtForRealUse:
      "Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4, with full FR/EN routing and dynamic pages for every service and training course.",
    foundationForGrowth:
      "Services, training courses and news are data-driven, so the firm can add new offerings without new layouts.",
    clarityScales:
      "As the catalogue grows, the shared page structure keeps every new service and course easy to find and to read.",
  },
  {
    slug: "ebia",
    name: "E-Bia",
    subtitle: "Music Streaming Platform for the CAR",
    category: "Web & Mobile Application",
    year: "2026",
    liveLink: "https://github.com/JEHUGABRIEL/ebia-v2",
    intro:
      "E-Bia — \"the musical pulse of the CAR\" — is a music streaming platform dedicated to Central African artists, with a web app, an Android app and a Shazam-style audio recognition feature.",
    about: [
      "Listeners can stream tracks, follow local artists, build playlists and discover trending music, while artists get a space to publish and promote their work.",
      "A dedicated audio service fingerprints validated tracks so users can identify a song playing around them in a few seconds.",
    ],
    impactHeading: "Giving Central African Music a Home Online",
    impactText:
      "Local artists rarely get visibility on global platforms. E-Bia gives them a platform built around their catalogue, and gives listeners an easy way to discover it.",
    visualLanguage: [
      "A dark interface with warm orange-to-rose accents puts album art and music front and center.",
      "Familiar streaming patterns — persistent player, cards, playlists — make the app instantly usable.",
    ],
    structuredStorytelling: [
      "Discovery flows from trending tracks to artists to albums, encouraging listeners to keep exploring the local scene.",
      "Artist pages, comments and reactions turn listening into a two-way relationship between artists and fans.",
    ],
    builtForRealUse:
      "React 19 + Vite + Tailwind front end packaged for Android with Capacitor, a Spring Boot microservice back end with Keycloak authentication and PostgreSQL, and a Python audio-fingerprinting service.",
    foundationForGrowth:
      "Separate services for the API, authentication and audio recognition let each part scale and evolve independently.",
    clarityScales:
      "As the catalogue grows, search, recognition and back-office validation keep the music library clean and easy to explore.",
  },
  {
    slug: "seni-biani",
    name: "Seni Biani",
    subtitle: "Clinic Management System",
    category: "Healthcare Web Application",
    year: "2026",
    liveLink: "https://gitlab.com/my-hospital-management/hospital-management",
    intro:
      "Seni Biani is a complete clinic and hospital management system covering the patient journey from appointment to billing, along with the pharmacy, laboratory, staff and administration.",
    about: [
      "The application centralises patients, medical records, appointments, prescriptions, hospitalisation, operating theatre, laboratory and pharmacy in a single tool.",
      "On the administrative side it handles billing and cash desk, staff planning, attendance, leave and salaries, with dashboards and statistics for management.",
    ],
    impactHeading: "Every Department Working From the Same Record",
    impactText:
      "Paper files and disconnected tools slow care down. Seni Biani gives every department access to the same up-to-date patient record, reducing errors and waiting time.",
    visualLanguage: [
      "A calm teal palette and a classic sidebar layout keep the interface reassuring and efficient for daily use.",
      "Dashboards surface the key numbers — patients, appointments, admissions — at a glance.",
    ],
    structuredStorytelling: [
      "Modules mirror how a clinic actually works: reception, consultation, prescription, laboratory, pharmacy, billing.",
      "Role-based access means doctors, nurses, cashiers and managers each see what matters to them.",
    ],
    builtForRealUse:
      "Angular 19 + Tailwind CSS front end (installable as a PWA) and a Spring Boot REST API, containerised with Docker and tested with Jest and Cypress.",
    foundationForGrowth:
      "A feature-module architecture lets new departments or services be added without disrupting the existing ones.",
    clarityScales:
      "Even with dozens of modules, consistent navigation and role-based views keep the system easy to learn and use.",
  },
  {
    slug: "stock-manager",
    name: "Stock Manager Pro",
    subtitle: "Multi-tenant Inventory Management SaaS",
    category: "SaaS Web Application",
    year: "2026",
    liveLink: "https://gitlab.com/stock-management-final-project/stock-frontend-react",
    intro:
      "Stock Manager Pro is a multi-tenant SaaS for inventory management: products, stock movements, suppliers, low-stock alerts and reports, for several companies on one platform.",
    about: [
      "Each company gets its own isolated workspace to manage its catalogue, track every stock entry and exit and follow its suppliers.",
      "Automatic alerts flag products running low, and reports give a clear view of stock value and movements over time.",
    ],
    impactHeading: "Knowing What's in Stock, in Real Time",
    impactText:
      "Stock-outs and overstock cost money. The application gives businesses an accurate, real-time picture of their inventory so they can reorder at the right time.",
    visualLanguage: [
      "A clean, data-first interface with colour-coded stock levels makes problems visible immediately.",
      "Consistent tables, forms and badges keep heavy data easy to scan.",
    ],
    structuredStorytelling: [
      "The dashboard leads from overall health to alerts to individual products, so users go straight to what needs attention.",
      "Everything is available in English and French.",
    ],
    builtForRealUse:
      "React 18 + Vite + TypeScript + TanStack Query front end, and a Spring Boot 3 / Java 21 API with JWT security, PostgreSQL, Redis caching and MinIO storage, all dockerised and tested with JUnit, Mockito and Vitest.",
    foundationForGrowth:
      "Multi-tenancy is built into the core, so onboarding a new company requires no extra deployment.",
    clarityScales:
      "As catalogues grow to thousands of products, caching, pagination and clear filters keep the app fast and readable.",
  },
  {
    slug: "liam-groupe",
    name: "LIAM Groupe",
    subtitle: "Institutional Website & Events Platform",
    category: "Corporate Website",
    year: "2026",
    liveLink: "https://liam-groupe.vercel.app",
    intro:
      "The website of LIAM Groupe, a Bangui-based network \"of excellence in the service of development\", presenting its activities, events, partners and news.",
    about: [
      "The site introduces the group and its mission, publishes its events by category and showcases its institutional and strategic partners.",
      "Visitors can subscribe to the newsletter, contact the team or apply to sponsor an event.",
    ],
    impactHeading: "Bringing Partners and Communities Together",
    impactText:
      "The platform gives the group a central place to share its activities and to turn visitors into partners, sponsors and participants.",
    visualLanguage: [
      "Gold and deep brown tones give the brand a premium, institutional feel.",
      "Generous spacing and strong headings keep the content clear and welcoming.",
    ],
    structuredStorytelling: [
      "The journey goes from mission to events to partners, ending with clear calls to get involved.",
      "Event categories make it easy to find relevant activities quickly.",
    ],
    builtForRealUse:
      "React + Vite front end connected to a dedicated back end (with Swagger-documented API) for events, partners, news and contact requests.",
    foundationForGrowth:
      "Events, partners and news are managed as data, so the group can keep the site current without developer help.",
    clarityScales:
      "As the number of events and partners grows, categories and consistent cards keep the site easy to navigate.",
  },
];
