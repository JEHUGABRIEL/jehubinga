import type { ReactElement } from "react";

function Dot({ className = "" }: { className?: string }) {
  return <span className={`h-2 w-2 rounded-full ${className}`} />;
}

export function GcfiThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-sky-500 via-blue-700 to-slate-950">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.2),transparent_55%)]" />
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-lg bg-white sm:inset-6">
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-2.5 text-[9px] font-medium text-slate-500 sm:text-[11px]">
          <span className="font-black text-blue-700">GCFI</span>
          <span className="ml-auto hidden gap-3 sm:flex">
            <span>Télécom</span>
            <span>Formations</span>
            <span>Boutique</span>
          </span>
          <span className="rounded bg-blue-700 px-2 py-1 text-[8px] font-semibold text-white">
            Contact
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-6">
          <p className="font-display text-base font-black leading-tight text-slate-900 sm:text-xl">
            Télécom, formation
            <br />
            <span className="text-blue-700">&amp; solutions IT en RCA</span>
          </p>
          <p className="max-w-[210px] text-[9px] text-slate-500 sm:text-[10px]">
            Connectivité, formations certifiantes et équipements pour les
            entreprises de Bangui.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 pb-4 sm:px-6">
          {["Réseaux", "Formations", "Produits"].map((label) => (
            <div
              key={label}
              className="rounded-md bg-blue-50 p-2 text-[7px] font-medium text-slate-700 sm:text-[8px]"
            >
              <Dot className="mb-1 bg-blue-600" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LewaThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-amber-100 via-stone-200 to-emerald-900">
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-lg bg-[#fbf8f1] sm:inset-6">
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-2.5 text-[9px] font-medium text-slate-500 sm:text-[11px]">
          <span className="font-serif font-bold text-emerald-900">
            COSI Lewa-Consulting
          </span>
          <span className="ml-auto hidden gap-3 sm:flex">
            <span>Services</span>
            <span>Formations</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-6">
          <p className="font-serif text-lg font-semibold leading-tight text-slate-900 sm:text-2xl">
            Audit, conseil
            <br />
            <span className="italic text-emerald-800">&amp; formation</span>
          </p>
          <p className="max-w-[200px] text-[9px] text-slate-500 sm:text-[10px]">
            Assistance comptable et fiscale, gouvernance et renforcement des
            capacités à Bangui.
          </p>
          <span className="mt-1 w-fit rounded-full bg-emerald-900 px-3 py-1 text-[9px] font-semibold text-amber-50 sm:text-[10px]">
            Prendre rendez-vous &rarr;
          </span>
        </div>
        <div className="border-t border-black/5 px-4 py-2 font-mono text-[8px] text-slate-500 sm:px-6 sm:text-[9px]">
          6 domaines d&rsquo;expertise · FR / EN
        </div>
      </div>
    </div>
  );
}

export function EbiaThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-orange-500 via-rose-600 to-slate-950">
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-lg bg-slate-950 sm:inset-6">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-[9px] text-slate-300 sm:text-[11px]">
          <span className="font-black text-white">E-Bia</span>
          <span className="ml-auto rounded bg-orange-500 px-2 py-0.5 text-[8px] font-semibold text-white">
            Écouter
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-2">
            <p className="font-display text-base font-black leading-tight text-white sm:text-xl">
              La pulsation
              <br />
              <span className="text-orange-400">musicale de la RCA</span>
            </p>
            <p className="max-w-[170px] text-[9px] text-slate-400 sm:text-[10px]">
              Streaming, artistes locaux et reconnaissance audio.
            </p>
          </div>
          <div className="flex h-14 shrink-0 items-end gap-1 sm:h-20">
            {[40, 75, 55, 95, 65, 85, 45].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-orange-500 to-rose-400 sm:w-2"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5 sm:px-6">
          <span className="h-5 w-5 rounded bg-gradient-to-br from-orange-400 to-rose-500" />
          <span className="h-1 flex-1 rounded-full bg-white/10">
            <span className="block h-full w-2/5 rounded-full bg-orange-400" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function SeniBianiThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-700 to-slate-900">
      <div className="absolute inset-4 flex overflow-hidden rounded-lg bg-slate-50 sm:inset-6">
        <div className="hidden w-1/4 flex-col gap-2 bg-teal-800 p-3 text-[8px] text-teal-50 sm:flex">
          <span className="font-black text-white">Seni Biani</span>
          {["Patients", "Rendez-vous", "Pharmacie", "Labo", "Caisse"].map(
            (item) => (
              <span key={item} className="rounded bg-white/10 px-1.5 py-1">
                {item}
              </span>
            )
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
          <p className="font-display text-sm font-black text-slate-900 sm:text-lg">
            Tableau de bord
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["128", "Patients"],
              ["34", "RDV"],
              ["12", "Hospit."],
            ].map(([n, label]) => (
              <div key={label} className="rounded-md bg-white p-2 shadow-sm">
                <p className="font-display text-sm font-black text-teal-700 sm:text-base">
                  {n}
                </p>
                <p className="text-[7px] text-slate-500 sm:text-[8px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1.5 rounded-md bg-white p-2 shadow-sm">
            {[30, 55, 45, 70, 60, 85, 50, 75].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-teal-500/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StockThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-500 via-indigo-700 to-slate-950">
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-lg bg-white sm:inset-6">
        <div className="flex items-center gap-2 border-b border-black/5 px-4 py-2.5 text-[9px] text-slate-500 sm:text-[11px]">
          <span className="font-bold text-slate-900">Stock Manager Pro</span>
          <span className="ml-auto rounded bg-indigo-600 px-2 py-1 text-[8px] font-semibold text-white">
            + Produit
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 px-4 py-3 sm:px-6">
          {[
            ["Ciment 50kg", "320", "bg-emerald-500"],
            ["Tôle ondulée", "48", "bg-amber-400"],
            ["Peinture 20L", "6", "bg-rose-500"],
            ["Fer à béton", "210", "bg-emerald-500"],
          ].map(([name, qty, color]) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-md bg-slate-50 px-2.5 py-1.5 text-[8px] text-slate-700 sm:text-[10px]"
            >
              <Dot className={color} />
              <span className="font-medium">{name}</span>
              <span className="ml-auto font-mono font-semibold text-slate-900">
                {qty}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-black/5 px-4 py-2 text-[8px] text-slate-400 sm:px-6 sm:text-[9px]">
          Multi-entreprises · Alertes de stock · Rapports
        </div>
      </div>
    </div>
  );
}

export function LiamThumb() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-600 to-stone-900">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="absolute inset-4 flex flex-col overflow-hidden rounded-lg bg-white sm:inset-6">
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-2.5 text-[9px] font-medium text-slate-500 sm:text-[11px]">
          <span className="font-black uppercase tracking-wide text-stone-900">
            LIAM Groupe
          </span>
          <span className="ml-auto hidden gap-3 sm:flex">
            <span>Événements</span>
            <span>Partenaires</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-4 py-4 text-center sm:px-6">
          <p className="font-display text-lg font-black leading-tight text-stone-900 sm:text-2xl">
            Un réseau d&rsquo;excellence
            <br />
            <span className="text-amber-600">au service du développement</span>
          </p>
          <span className="mt-1 rounded-full bg-stone-900 px-3 py-1 text-[9px] font-semibold text-amber-300 sm:text-[10px]">
            Devenir partenaire
          </span>
        </div>
        <div className="bg-stone-900 px-4 py-2 text-[8px] font-medium text-amber-200 sm:px-6 sm:text-[9px]">
          Avenue des Martyrs, Bangui
        </div>
      </div>
    </div>
  );
}

/** Hand-drawn thumbnails for the seeded projects, keyed by slug. */
export const thumbsBySlug: Record<string, () => ReactElement> = {
  gcfi: GcfiThumb,
  "cosi-lewa": LewaThumb,
  ebia: EbiaThumb,
  "seni-biani": SeniBianiThumb,
  "stock-manager": StockThumb,
  "liam-groupe": LiamThumb,
};
