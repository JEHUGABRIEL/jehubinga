"use client";

import { useState } from "react";

const dayFormat = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" });
const fmt = (day: string) => dayFormat.format(new Date(`${day}T00:00:00Z`));

/** Single-series daily bar chart: ink bars, recessive grid, hover tooltip, table for screen readers. */
export function ViewsChart({ data }: { data: { day: string; views: number }[] }) {
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.views));
  const top = max <= 4 ? 4 : Math.ceil(max / 4) * 4;
  const ticks = [top, top / 2, 0];
  const total = data.reduce((sum, d) => sum + d.views, 0);

  return (
    <div className="mt-5">
      {total === 0 && (
        <p className="mb-3 text-sm text-ink/55">
          Aucune visite enregistrée pour l&apos;instant. Les visites apparaîtront ici dès que le site sera consulté.
        </p>
      )}
      <div className="flex gap-2" aria-hidden="true">
        <div className="flex h-48 flex-col justify-between pb-0 text-right text-[11px] tabular-nums text-ink/45">
          {ticks.map((t) => (
            <span key={t} className="-translate-y-1/2 first:translate-y-0 last:translate-y-0">
              {t}
            </span>
          ))}
        </div>
        <div className="relative h-48 flex-1">
          {ticks.map((t) => (
            <div
              key={t}
              className="absolute inset-x-0 border-t border-ink/10"
              style={{ bottom: `${(t / top) * 100}%` }}
            />
          ))}
          <div className="absolute inset-0 flex items-end gap-[2px]" onMouseLeave={() => setActive(null)}>
            {data.map((d, i) => (
              <div
                key={d.day}
                className="relative flex h-full flex-1 items-end"
                onMouseEnter={() => setActive(i)}
              >
                <div
                  className={`w-full rounded-t-[4px] transition-colors ${
                    active === i ? "bg-accent-red" : "bg-near-black"
                  }`}
                  style={{ height: d.views ? `${Math.max((d.views / top) * 100, 1.5)}%` : 0 }}
                />
                {active === i && (
                  <div
                    className={`pointer-events-none absolute bottom-full z-10 mb-2 whitespace-nowrap rounded-lg bg-near-black px-2.5 py-1.5 text-xs text-paper shadow-lg ${
                      i < 4 ? "left-0" : i > data.length - 5 ? "right-0" : "left-1/2 -translate-x-1/2"
                    }`}
                  >
                    <span className="text-paper/60">{fmt(d.day)}</span>{" "}
                    <span className="font-semibold tabular-nums">
                      {d.views} visite{d.views > 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-8 mt-2 flex justify-between text-[11px] text-ink/45" aria-hidden="true">
        <span>{data.length ? fmt(data[0].day) : ""}</span>
        <span>{data.length ? fmt(data[data.length - 1].day) : ""}</span>
      </div>
      <table className="sr-only">
        <caption>Visites par jour, 30 derniers jours</caption>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Visites</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.day}>
              <td>{fmt(d.day)}</td>
              <td>{d.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
