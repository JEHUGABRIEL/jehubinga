"use client";

import { useActionState } from "react";
import { login, type FormState } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(login, {});
  return (
    <form action={action} className="mt-8 flex flex-col gap-4 rounded-2xl bg-near-black p-6 text-paper">
      <label className="flex flex-col gap-2 text-sm">
        Mot de passe
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-paper/60"
        />
      </label>
      {state.error && (
        <p role="alert" className="text-sm text-red-300">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-paper py-3 text-sm font-semibold text-near-black transition hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
