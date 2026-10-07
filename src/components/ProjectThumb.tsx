import type { Project } from "@/lib/types";
import { thumbsBySlug } from "./ProjectThumbs";

/** Uploaded image if set, else the hand-drawn thumbnail, else a lettered card. */
export function ProjectThumb({ project }: { project: Pick<Project, "slug" | "name" | "imageUrl"> }) {
  if (project.imageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- arbitrary external URLs set from the back-office
      <img
        src={project.imageUrl}
        alt={project.name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }
  const Thumb = thumbsBySlug[project.slug];
  if (Thumb) return <Thumb />;
  return (
    // Sized in container units so the name fits from the 96px admin list to the full-width hero.
    <div className="@container flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-600 via-zinc-800 to-black">
      <span className="px-[8cqw] text-center font-display text-[11cqw] font-black leading-[0.95] tracking-tight text-paper/90">
        {project.name}
      </span>
    </div>
  );
}
