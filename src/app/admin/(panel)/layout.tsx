import { requireAdmin } from "@/lib/auth";
import { ensureSchema, sql } from "@/lib/db";
import { AdminNav } from "./AdminNav";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  await ensureSchema();
  const [{ unread }] = await sql()`select count(*)::int as unread from messages where not read`;

  return (
    <div className="min-h-screen lg:flex">
      <AdminNav unread={unread} />
      <main className="min-w-0 flex-1 px-4 pb-16 pt-6 sm:px-8 lg:px-12 lg:pt-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
