import { Project } from "@/lib/projects";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {projects.map(({ slug, name, subtitle, Thumb }, i) => (
        <Reveal key={slug} delay={(i % 2) * 0.08}>
          <a href={`/work/${slug}`} className="group block">
            <TiltCard className="aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <Thumb />
            </TiltCard>
            <h3 className="mt-5 inline-flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {name}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </h3>
            <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
