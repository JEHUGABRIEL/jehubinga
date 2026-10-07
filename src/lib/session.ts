import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Stateless admin session: "<expiry>.<hmac>" signed with ADMIN_SESSION_SECRET.
 * Kept free of next/headers so the proxy can use it too.
 */
export const SESSION_COOKIE = "bo_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SESSION_SECRET must be at least 32 characters");
  return s;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function createSessionToken() {
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS);
  return `${expires}.${sign(expires)}`;
}

export function isValidSessionToken(token: string | undefined) {
  if (!token) return false;
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  try {
    if (!safeEqual(signature, sign(expires))) return false;
  } catch {
    return false;
  }
  return Number(expires) > Date.now() / 1000;
}
