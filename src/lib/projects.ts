import type { ReactElement } from "react";
import {
  DamasThumb,
  NajmThumb,
  KaviThumb,
  PostWingThumb,
  ShamThumb,
  AbjadThumb,
  FaseelhThumb,
} from "@/components/ProjectThumbs";

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  year: string;
  liveLink: string;
  Thumb: () => ReactElement;
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

export const projects: Project[] = [
  {
    slug: "damas",
    name: "Damas",
    subtitle: "Agency Framer Template",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "#",
    Thumb: DamasThumb,
    intro:
      "Damas is a modern creative agency template built for bold visuals, smooth interactions, and standout storytelling. Perfect for agencies, studios, and creators who want a polished, high impact online presence without starting from scratch.",
    about: [
      "Damas is a refined digital template crafted for modern brands that value clarity, elegance, and strong visual presence. Built with versatility in mind, it adapts seamlessly across industries—whether for studios, agencies, or product-focused businesses looking to elevate their online identity.",
      "At its core, Damas is about balance. It blends bold structure with subtle sophistication, creating a foundation that feels both contemporary and timeless.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "The goal behind Damas was to create a system that doesn’t just look good, but performs. Every section is intentionally structured to guide attention, highlight key content, and support storytelling without overwhelming the user. The result is a template that feels confident, clean, and highly adaptable.",
    visualLanguage: [
      "Damas uses a minimal yet striking visual approach. Strong typography anchors the layout, while generous spacing and structured grids create rhythm and clarity. The color system is intentionally restrained, allowing brands to easily customize while maintaining a polished and cohesive look.",
      "Subtle contrasts and refined alignments bring a sense of precision, helping content stand out without unnecessary decoration.",
    ],
    structuredStorytelling: [
      "The layout is designed to flow naturally—from introduction to deeper engagement. Each section builds on the previous one, making it easy to present services, showcase work, or communicate brand values in a clear and compelling way.",
      "This structure ensures that users not only explore, but understand and connect with the content.",
    ],
    builtForRealUse:
      "Beyond aesthetics, Damas is highly practical. It’s optimized for performance, responsiveness, and ease of editing inside Framer. Every component is reusable and scalable, allowing creators to expand pages, adjust layouts, and maintain consistency without friction.",
    foundationForGrowth:
      "Damas is more than a template—it’s a system designed to evolve with the brand using it. Whether expanding content, launching new services, or refining positioning, the structure supports growth without losing visual integrity.",
    clarityScales:
      "Every element within Damas is crafted to serve a purpose—bringing together design and function in a way that feels effortless. It empowers brands to present themselves with confidence, precision, and lasting impact.",
  },
  {
    slug: "najm",
    name: "Najm",
    subtitle: "SaaS Framer Template",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "#",
    Thumb: NajmThumb,
    intro:
      "Najm is an AI-powered SaaS template built to present complex product features with clarity. Perfect for founders who need a polished, conversion-driven launchpad without a design team.",
    about: [
      "Najm is a dark, focused SaaS template designed for AI products that need to feel cutting-edge from the first scroll. It leans on contrast and motion to keep attention on the product itself.",
      "Every section is built to translate technical capability into a story users can immediately understand and trust.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "Najm was built so that every feature block earns its place. The layout guides visitors from problem to solution in a few deliberate steps, keeping the experience fast and confident.",
    visualLanguage: [
      "A near-black canvas with violet accent gradients gives Najm a premium, technical feel. Typography stays large and direct, so the product's value proposition is never in doubt.",
      "Micro-interactions on cards and buttons add just enough motion to feel alive without distracting from the content.",
    ],
    structuredStorytelling: [
      "The page is structured around a simple arc: capability, workflow, proof. Each section reinforces the next, so visitors build conviction as they scroll.",
      "Modular sections make it easy to reorder the narrative as the product evolves.",
    ],
    builtForRealUse:
      "Najm ships with reusable feature cards, pricing blocks, and CTA patterns so founders can launch and iterate quickly without touching the core structure.",
    foundationForGrowth:
      "As the product matures, Najm's component system scales with it—new features, integrations, and proof points slot in without breaking the visual language.",
    clarityScales:
      "The template stays legible at every size, keeping the product story clear whether a visitor skims for ten seconds or reads every section.",
  },
  {
    slug: "kavi",
    name: "Kavi",
    subtitle: "AI Framer Template",
    category: "Free Framer Template",
    year: "2024",
    liveLink: "#",
    Thumb: KaviThumb,
    intro:
      "Kavi is a vibrant AI product template built to launch fast without feeling generic. Bold gradients and confident type make first impressions count.",
    about: [
      "Kavi was designed for AI tools that want to feel approachable rather than intimidating. Soft gradients and rounded shapes soften the technical subject matter.",
      "The template balances playfulness with credibility, so new products can feel established from day one.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "Kavi's sections are built around fast comprehension—clear headlines, generous whitespace, and a single obvious next step on every screen.",
    visualLanguage: [
      "A pink-to-orange gradient system paired with soft blurred shapes gives Kavi its distinct, energetic identity.",
      "Rounded corners and friendly type choices keep the tone warm even as the content gets technical.",
    ],
    structuredStorytelling: [
      "The page moves quickly from promise to proof, using short sections that keep momentum instead of long-form explanation.",
      "Each block is self-contained, making it simple to reorder or swap sections during launch iterations.",
    ],
    builtForRealUse:
      "Kavi includes ready-made onboarding, pricing, and testimonial sections so teams can go from template to live product in minutes.",
    foundationForGrowth:
      "The component system is built to absorb new features and use cases as the product roadmap expands.",
    clarityScales:
      "Even as content grows, Kavi's generous spacing and consistent rhythm keep the page easy to scan.",
  },
  {
    slug: "postwing",
    name: "PostWing",
    subtitle: "Social Media Scheduler",
    category: "Free Framer Template",
    year: "2024",
    liveLink: "#",
    Thumb: PostWingThumb,
    intro:
      "PostWing is a clean, dashboard-driven template built for scheduling and publishing tools that need to show product screenshots front and center.",
    about: [
      "PostWing was designed around a single idea: show, don't tell. Dashboard previews take center stage across the page.",
      "The template keeps copy short and lets the product interface do the convincing.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "Every section pairs a short, benefit-led headline with a real interface screenshot, so visitors immediately understand the workflow.",
    visualLanguage: [
      "A calm blue palette on a light background keeps the focus on the product screenshots rather than decoration.",
      "Consistent card framing across sections makes the dashboard feel like one continuous product, not disconnected screens.",
    ],
    structuredStorytelling: [
      "The layout follows the user's actual workflow—write once, schedule everywhere, track results—mirroring the product itself.",
      "This mirrored structure makes the page double as an implicit product tour.",
    ],
    builtForRealUse:
      "PostWing includes flexible screenshot frames and platform-icon rows that are easy to swap as integrations change.",
    foundationForGrowth:
      "New platforms and workflow steps can be added as additional cards without restructuring the page.",
    clarityScales:
      "The consistent visual grammar keeps the product easy to understand as more features are added over time.",
  },
  {
    slug: "sham",
    name: "Sham",
    subtitle: "Studio Framer Template",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "#",
    Thumb: ShamThumb,
    intro:
      "Sham is a warm, expressive digital template inspired by culture, light, and storytelling. Rooted in a sense of familiarity and depth, it's designed for brands that want to feel human, grounded, and visually rich without losing clarity.",
    about: [
      "Whether used for creative studios, personal brands, or cultural projects, Sham creates an atmosphere that feels inviting and memorable—where content is not just presented, but experienced.",
      "The idea behind Sham was to move beyond purely minimal design and introduce emotion into the experience. It blends structure with softness, allowing visuals, typography, and spacing to work together in a way that feels natural and fluid.",
    ],
    impactHeading: "Where Warmth Meets Expression, Designed to Feel Alive",
    impactText:
      "Every section of Sham is built to slow the visitor down, inviting them to look closer rather than scroll past. Imagery and type share equal weight, so the brand's personality comes through in every block.",
    visualLanguage: [
      "Sham leans on tactile textures, muted tones, and editorial-style typography to create a sense of craft and intention.",
      "Full-bleed imagery paired with generous margins gives every section room to breathe.",
    ],
    structuredStorytelling: [
      "The page unfolds like a printed feature—introduction, story, proof—encouraging visitors to read rather than skim.",
      "Pull quotes and testimonial moments are woven throughout to keep the human voice present.",
    ],
    builtForRealUse:
      "Sham's flexible content blocks make it easy to feature new work, collaborators, or press mentions as the studio grows.",
    foundationForGrowth:
      "The template is built to hold more stories over time without losing its calm, considered feel.",
    clarityScales:
      "Even as the studio's portfolio expands, Sham's structure keeps every new addition feeling intentional.",
  },
  {
    slug: "abjad",
    name: "Abjad",
    subtitle: "AI Framer Template",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "#",
    Thumb: AbjadThumb,
    intro:
      "Abjad simplifies the way AI tools are created by handling everything from system design to policy control through natural conversation. Built for teams that want to plan, adapt, and grow with confidence.",
    about: [
      "Abjad was designed for AI infrastructure products that need to earn trust quickly. A warm, editorial palette softens a technical subject.",
      "The template favors plain language and clear proof points over jargon, so non-technical stakeholders can follow along too.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "Each section pairs a concrete capability with a simple visual, keeping abstract AI concepts grounded and easy to grasp.",
    visualLanguage: [
      "Soft amber and stone tones replace the typical cold, technical palette, giving Abjad an approachable, considered feel.",
      "Generous whitespace and a restrained color system keep dense technical content legible.",
    ],
    structuredStorytelling: [
      "The page builds trust in stages: capability, workflow, adoption proof—mirroring how enterprise buyers actually evaluate tools.",
      "Logo rows and trust markers are placed early to reduce hesitation before the deeper explanation begins.",
    ],
    builtForRealUse:
      "Abjad ships with reusable proof-point and logo-wall sections so teams can update social proof without touching layout.",
    foundationForGrowth:
      "As the product adds capabilities, new sections slot into the same rhythm without disrupting the page's trustworthy tone.",
    clarityScales:
      "The restrained visual system keeps even a growing feature set easy to navigate and understand.",
  },
  {
    slug: "faseelh",
    name: "Faseelh",
    subtitle: "Environmental Framer Template",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "#",
    Thumb: FaseelhThumb,
    intro:
      "Faseelh's platform unites people, organizations, and local governments to bring returns back to cities, offset emissions, and create spaces where both communities and ecosystems can thrive.",
    about: [
      "Faseelh was built for environmental and civic initiatives that need to communicate urgency without losing warmth. Natural tones and soft imagery keep the tone hopeful rather than alarmist.",
      "The template is designed to make complex sustainability work feel approachable to everyday visitors and partners alike.",
    ],
    impactHeading: "Designing for Impact, Built for Flexibility",
    impactText:
      "Sections are structured to move visitors from awareness to action, pairing every claim with a clear, achievable next step.",
    visualLanguage: [
      "Deep greens and foggy, atmospheric imagery evoke landscape and growth, grounding the mission in something visible and real.",
      "Typography stays confident and direct, keeping the call to action clear amid the emotive imagery.",
    ],
    structuredStorytelling: [
      "The page follows a mission-first structure—why it matters, what's being done, how to get involved—so every visitor leaves knowing their next step.",
      "Community stories are woven in to keep the mission personal rather than abstract.",
    ],
    builtForRealUse:
      "Faseelh includes flexible sections for partners, impact metrics, and community stories that can grow with the initiative.",
    foundationForGrowth:
      "As new regions or programs launch, the same structure scales to hold them without losing coherence.",
    clarityScales:
      "The calm, consistent system keeps the mission legible even as the initiative's scope expands.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string, count = 2) {
  const others = projects.filter((p) => p.slug !== slug);
  const startIndex = projects.findIndex((p) => p.slug === slug);
  const rotated = [
    ...others.slice(startIndex % others.length),
    ...others.slice(0, startIndex % others.length),
  ];
  return rotated.slice(0, count);
}
