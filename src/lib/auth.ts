import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSessionToken,
  isValidSessionToken,
  safeEqual,
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
} from "./session";

export function checkPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(password, expected);
}

export async function startSession() {
  (await cookies()).set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function endSession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function isAdmin() {
  return isValidSessionToken((await cookies()).get(SESSION_COOKIE)?.value);
}

/** Call at the top of every admin page and Server Action. */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}
