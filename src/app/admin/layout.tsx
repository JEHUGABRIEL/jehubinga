import type { Metadata } from "next";
import "../globals.css";
import { inter, interTight } from "../fonts";

export const metadata: Metadata = {
  title: { default: "Back-office — BINGA", template: "%s — Back-office BINGA" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${interTight.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-body text-ink">{children}</body>
    </html>
  );
}
