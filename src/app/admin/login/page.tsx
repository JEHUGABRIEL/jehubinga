import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Connexion" };

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <p className="font-display text-sm font-bold tracking-tight text-ink/60">BINGA</p>
        <h1 className="mt-2 font-display text-4xl font-black tracking-tightest">Back-office</h1>
        <p className="mt-2 text-sm text-ink/60">Connectez-vous pour gérer votre portfolio.</p>
        <LoginForm />
      </div>
    </main>
  );
}
