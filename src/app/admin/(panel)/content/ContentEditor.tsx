"use client";

import { useActionState, useState } from "react";
import type { Locale, SiteContent } from "@/lib/types";
import { resetContent, saveContent, type FormState } from "../../actions";
import { ConfirmButton } from "../ConfirmButton";
import { buttonGhost, buttonPrimary, Card, inputClass } from "../ui";

type Json = string | Json[] | { [key: string]: Json };

const sectionLabels: Record<string, string> = {
  metadata: "Référencement (titre & description Google)",
  nav: "Menu",
  hero: "Bannière d'accueil",
  about: "À propos",
  scrollReveal: "Phrase révélée au défilement",
  services: "Services",
  projects: "Section projets",
  testimonials: "Témoignages",
  thoughts: "Articles",
  contact: "Contact",
  footer: "Pied de page",
  work: "Pages projets",
};

/** "projectPlaceholder" -> "Project placeholder" */
function humanize(key: string) {
  const words = key.replace(/([a-z])([A-Z0-9])/g, "$1 $2").toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function emptyLike(value: Json): Json {
  if (typeof value === "string") return "";
  if (Array.isArray(value)) return [];
  return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, emptyLike(v)]));
}

function setAt(root: Json, path: (string | number)[], value: Json): Json {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  if (Array.isArray(root)) {
    const copy = [...root];
    copy[head as number] = setAt(copy[head as number], rest, value);
    return copy;
  }
  const obj = root as Record<string, Json>;
  return { ...obj, [head]: setAt(obj[head as string], rest, value) };
}

function Field({
  value,
  path,
  label,
  onChange,
}: {
  value: Json;
  path: (string | number)[];
  label: string;
  onChange: (path: (string | number)[], value: Json) => void;
}) {
  if (typeof value === "string") {
    const multiline = value.length > 70 || value.includes("\n");
    return (
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        {label}
        {multiline ? (
          <textarea
            value={value}
            rows={Math.min(8, Math.max(3, Math.ceil(value.length / 90)))}
            onChange={(e) => onChange(path, e.target.value)}
            className={`${inputClass} resize-y font-normal`}
          />
        ) : (
          <input value={value} onChange={(e) => onChange(path, e.target.value)} className={`${inputClass} font-normal`} />
        )}
      </label>
    );
  }

  if (Array.isArray(value)) {
    const template = value[0];
    return (
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-2 text-sm font-semibold">{label}</legend>
        {value.map((item, i) => (
          <div key={i} className="flex gap-2 rounded-xl border border-ink/10 bg-paper/60 p-3">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <Field value={item} path={[...path, i]} label={`#${i + 1}`} onChange={onChange} />
            </div>
            <button
              type="button"
              aria-label={`Retirer l'élément ${i + 1}`}
              onClick={() => onChange(path, value.filter((_, j) => j !== i))}
              className="self-start rounded-md px-2 py-1 text-sm text-ink/50 hover:bg-accent-red/10 hover:text-accent-red"
            >
              ✕
            </button>
          </div>
        ))}
        {template !== undefined && (
          <button
            type="button"
            onClick={() => onChange(path, [...value, emptyLike(template)])}
            className={`${buttonGhost} self-start`}
          >
            + Ajouter
          </button>
        )}
      </fieldset>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(value).map(([k, v]) => (
        <Field key={k} value={v} path={[...path, k]} label={humanize(k)} onChange={onChange} />
      ))}
    </div>
  );
}

export function ContentEditor({
  initial,
  defaults,
}: {
  initial: Record<Locale, SiteContent>;
  defaults: Record<Locale, SiteContent>;
}) {
  const [locale, setLocale] = useState<Locale>("fr");
  const [data, setData] = useState<Record<Locale, Json>>(initial as unknown as Record<Locale, Json>);
  const [dirty, setDirty] = useState<Record<Locale, boolean>>({ fr: false, en: false });
  const [state, action, pending] = useActionState<FormState, FormData>(async (prev, formData) => {
    const result = await saveContent(prev, formData);
    if (result.saved) setDirty((d) => ({ ...d, [locale]: false }));
    return result;
  }, {});

  function handleChange(path: (string | number)[], value: Json) {
    setData((d) => ({ ...d, [locale]: setAt(d[locale], path, value) }));
    setDirty((d) => ({ ...d, [locale]: true }));
  }

  const sections = Object.entries(data[locale] as Record<string, Json>);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Langue" className="inline-flex rounded-lg bg-ink/5 p-1">
          {(["fr", "en"] as Locale[]).map((l) => (
            <button
              key={l}
              type="button"
              role="tab"
              aria-selected={locale === l}
              onClick={() => setLocale(l)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
                locale === l ? "bg-white shadow-sm" : "text-ink/60 hover:text-ink"
              }`}
            >
              {l === "fr" ? "Français" : "English"}
              {dirty[l] && <span className="ml-1 text-accent-red">•</span>}
            </button>
          ))}
        </div>
        <form
          action={async (formData) => {
            await resetContent(formData);
            setData((d) => ({ ...d, [locale]: defaults[locale] as unknown as Json }));
            setDirty((d) => ({ ...d, [locale]: false }));
          }}
        >
          <input type="hidden" name="locale" value={locale} />
          <ConfirmButton
            label="Revenir aux textes par défaut"
            confirmLabel={`Confirmer (${locale === "fr" ? "français" : "anglais"})`}
          />
        </form>
      </div>

      {sections.map(([key, value]) => (
        <details key={`${locale}-${key}`} className="group" open={key === "about" || key === "hero"}>
          <summary className="cursor-pointer list-none rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 font-display text-lg font-bold transition-colors hover:border-ink/25 group-open:rounded-b-none">
            <span className="mr-2 inline-block transition-transform group-open:rotate-90">›</span>
            {sectionLabels[key] ?? humanize(key)}
          </summary>
          <Card className="rounded-t-none border-t-0">
            <Field value={value} path={[key]} label={sectionLabels[key] ?? humanize(key)} onChange={handleChange} />
          </Card>
        </details>
      ))}

      <form
        action={action}
        className="sticky bottom-4 z-10 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-paper/95 p-3 shadow-lg backdrop-blur"
      >
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="data" value={JSON.stringify(data[locale])} />
        <button type="submit" disabled={pending || !dirty[locale]} className={buttonPrimary}>
          {pending ? "Enregistrement…" : `Enregistrer (${locale === "fr" ? "français" : "anglais"})`}
        </button>
        {state.saved && !pending && !dirty[locale] && (
          <p className="text-sm text-emerald-700">✓ Enregistré, le site est à jour.</p>
        )}
        {dirty[locale] && !pending && <p className="text-sm text-ink/60">Modifications non enregistrées</p>}
        {state.error && (
          <p role="alert" className="text-sm text-accent-red">
            {state.error}
          </p>
        )}
      </form>
    </div>
  );
}
