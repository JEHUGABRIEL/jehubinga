"use server";

import { ensureSchema, hasDatabase, sql } from "@/lib/db";

export type ContactState = { status: "idle" | "sent" | "error" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real visitors never fill the hidden "website" field.
  if (formData.get("website")) return { status: "sent" };

  const name = String(formData.get("name") ?? "").trim().slice(0, 120);
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const body = String(formData.get("body") ?? "").trim().slice(0, 5000);
  if (!name || !EMAIL.test(email) || !body || !hasDatabase()) {
    return { status: "error" };
  }

  try {
    await ensureSchema();
    await sql()`insert into messages (name, email, body) values (${name}, ${email}, ${body})`;
    return { status: "sent" };
  } catch (err) {
    console.error("sendContactMessage failed", err);
    return { status: "error" };
  }
}
