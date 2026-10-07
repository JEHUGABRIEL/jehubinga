import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-ink/60">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-ink/10 bg-white/70 p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-near-black px-4 py-2.5 text-sm font-semibold text-paper transition hover:opacity-85 disabled:opacity-50";
export const buttonGhost =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-ink/15 px-3 py-2 text-sm font-medium transition hover:bg-ink/5 disabled:opacity-40";
export const buttonDanger =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-accent-red/30 px-3 py-2 text-sm font-medium text-accent-red transition hover:bg-accent-red hover:text-white";
export const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-ink/50";
export const labelClass = "flex flex-col gap-1.5 text-sm font-medium";
