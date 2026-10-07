"use client";

import { useActionState, useState } from "react";
import { ProjectThumb } from "@/components/ProjectThumb";
import type { Locale, ProjectRecord, ProjectText } from "@/lib/types";
import { saveProject, type FormState } from "../../actions";
import { buttonPrimary, Card, inputClass, labelClass } from "../ui";

type Field = { key: keyof ProjectText; label: string; kind: "line" | "text" | "paragraphs" };

const fields: Field[] = [
  { key: "name", label: "Nom", kind: "line" },
  { key: "subtitle", label: "Sous-titre", kind: "line" },
  { key: "category", label: "Catégorie", kind: "line" },
  { key: "intro", label: "Introduction", kind: "text" },
  { key: "about", label: "À propos", kind: "paragraphs" },
  { key: "impactHeading", label: "Titre « impact »", kind: "line" },
  { key: "impactText", label: "Texte « impact »", kind: "text" },
  { key: "visualLanguage", label: "Langage visuel", kind: "paragraphs" },
  { key: "structuredStorytelling", label: "Narration structurée", kind: "paragraphs" },
  { key: "builtForRealUse", label: "Conçu pour un usage réel (stack)", kind: "text" },
  { key: "foundationForGrowth", label: "Base pour la croissance", kind: "text" },
  { key: "clarityScales", label: "Clarté à l'échelle", kind: "text" },
];

const localeLabels: Record<Locale, string> = { fr: "Français", en: "English" };

function initialValue(content: ProjectText | undefined, field: Field) {
  const v = content?.[field.key];
  if (Array.isArray(v)) return v.join("\n\n");
  return v ?? "";
}

export function ProjectForm({ project }: { project?: ProjectRecord }) {
  const [state, action, pending] = useActionState<FormState, FormData>(saveProject, {});
  const [tab, setTab] = useState<Locale>("fr");
  const [slug, setSlug] = useState(project?.slug ?? "");
  const [imageUrl, setImageUrl] = useState(project?.imageUrl ?? "");
  const [name, setName] = useState(project?.content.fr.name ?? "");

  return (
    <form action={action} className="flex flex-col gap-6">
      {project && <input type="hidden" name="id" value={project.id} />}

      <Card className="grid gap-5 md:grid-cols-[1fr_220px]">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Slug (URL)
            <input
              name="slug"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
              placeholder="mon-projet"
              className={inputClass}
            />
            <span className="text-xs font-normal text-ink/55">/work/{slug || "…"}</span>
          </label>
          <label className={labelClass}>
            Année
            <input name="year" defaultValue={project?.year ?? new Date().getFullYear()} className={inputClass} />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            Lien (site en ligne ou dépôt)
            <input
              name="liveLink"
              type="url"
              defaultValue={project?.liveLink}
              placeholder="https://…"
              className={inputClass}
            />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            Image de couverture (URL, optionnelle)
            <input
              name="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://… (sinon la miniature dessinée est utilisée)"
              className={inputClass}
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              name="published"
              defaultChecked={project?.published ?? true}
              className="h-4 w-4 accent-[var(--near-black)]"
            />
            Publié sur le site
          </label>
        </div>
        <div>
          <p className="mb-1.5 text-sm font-medium">Aperçu</p>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-ink/10">
            <ProjectThumb project={{ slug, name: name || "Projet", imageUrl }} />
          </div>
        </div>
      </Card>

      <Card>
        <div role="tablist" aria-label="Langue" className="mb-5 inline-flex rounded-lg bg-ink/5 p-1">
          {(["fr", "en"] as Locale[]).map((l) => (
            <button
              key={l}
              type="button"
              role="tab"
              aria-selected={tab === l}
              onClick={() => setTab(l)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
                tab === l ? "bg-white shadow-sm" : "text-ink/60 hover:text-ink"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
        <p className="mb-5 text-xs text-ink/55">
          Pour les champs à plusieurs paragraphes, séparez les paragraphes par une ligne vide.
        </p>

        {(["fr", "en"] as Locale[]).map((l) => (
          // Both locales stay mounted so their values are submitted together.
          <div key={l} hidden={tab !== l} className="grid gap-4">
            {fields.map((f) => {
              const props = {
                name: `${l}.${f.key}`,
                defaultValue: initialValue(project?.content[l], f),
                required: f.key === "name",
                className: inputClass,
              };
              return (
                <label key={f.key} className={labelClass}>
                  {f.label}
                  {f.kind === "line" ? (
                    <input
                      {...props}
                      onChange={l === "fr" && f.key === "name" ? (e) => setName(e.target.value) : undefined}
                    />
                  ) : (
                    <textarea {...props} rows={f.kind === "paragraphs" ? 6 : 3} className={`${inputClass} resize-y`} />
                  )}
                </label>
              );
            })}
          </div>
        ))}
      </Card>

      <div className="sticky bottom-4 z-10 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-paper/95 p-3 shadow-lg backdrop-blur">
        <button type="submit" disabled={pending} className={buttonPrimary}>
          {pending ? "Enregistrement…" : project ? "Enregistrer" : "Créer le projet"}
        </button>
        {state.saved && !pending && <p className="text-sm text-emerald-700">✓ Enregistré, le site est à jour.</p>}
        {state.error && (
          <p role="alert" className="text-sm text-accent-red">
            {state.error}
          </p>
        )}
      </div>
    </form>
  );
}
