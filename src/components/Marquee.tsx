import { SparkleIcon } from "./icons";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {skills.map((skill) => (
        <span key={skill} className="flex items-center gap-10">
          <span className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
            {skill}
          </span>
          <SparkleIcon className="h-5 w-5 text-accent-red sm:h-7 sm:w-7" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="marquee -rotate-1 overflow-hidden border-y border-ink/15 bg-near-black py-5 text-paper sm:py-7"
      aria-label={skills.join(", ")}
    >
      <div className="marquee-track flex w-max" aria-hidden="true">
        <Row />
        <Row />
      </div>
    </div>
  );
}
