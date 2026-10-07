"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../actions";

const links = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/projects", label: "Projets" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/content", label: "Textes du site" },
];

export function AdminNav({ unread }: { unread: number }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <aside className="sticky top-0 z-40 bg-near-black text-paper lg:h-screen lg:w-60 lg:shrink-0">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:block lg:px-5 lg:py-7">
        <Link href="/admin" className="font-display text-lg font-black tracking-tight">
          BINGA <span className="font-medium text-paper/50">· BO</span>
        </Link>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-paper/60 underline-offset-4 hover:text-paper hover:underline lg:mt-1 lg:block"
        >
          Voir le site ↗
        </a>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-3 pb-3 sm:px-7 lg:flex-col lg:px-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={`flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive(link.href) ? "bg-paper text-near-black" : "text-paper/70 hover:bg-paper/10 hover:text-paper"
            }`}
          >
            {link.label}
            {link.href === "/admin/messages" && unread > 0 && (
              <span className="rounded-full bg-accent-red px-2 py-0.5 text-[11px] font-semibold text-white">
                {unread}
              </span>
            )}
          </Link>
        ))}
        <form action={logout} className="shrink-0 lg:mt-6">
          <button
            type="submit"
            className="rounded-lg px-3 py-2 text-left text-sm text-paper/60 transition-colors hover:bg-paper/10 hover:text-paper lg:w-full"
          >
            Déconnexion
          </button>
        </form>
      </nav>
    </aside>
  );
}
