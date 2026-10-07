import type { Metadata } from "next";
import { getMessages } from "@/lib/content";
import { deleteMessage, setMessageRead } from "../../actions";
import { ConfirmButton } from "../ConfirmButton";
import { buttonGhost, Card, PageHeader } from "../ui";

export const metadata: Metadata = { title: "Messages" };

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Bangui",
});

export default async function MessagesPage() {
  const messages = await getMessages();
  const unread = messages.filter((m) => !m.read).length;

  return (
    <>
      <PageHeader
        title="Messages"
        description={
          messages.length
            ? `${messages.length} message${messages.length > 1 ? "s" : ""}, dont ${unread} non lu${unread > 1 ? "s" : ""}.`
            : "Les messages envoyés depuis le formulaire de contact arrivent ici."
        }
      />

      {messages.length === 0 ? (
        <Card>
          <p className="text-sm text-ink/60">Aucun message pour l&apos;instant.</p>
        </Card>
      ) : (
        <ul className="flex flex-col gap-3">
          {messages.map((m) => (
            <li key={m.id}>
              <Card className={m.read ? "opacity-75" : "border-ink/30"}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-semibold">
                      {!m.read && (
                        <span className="rounded-full bg-accent-red px-2 py-0.5 text-[11px] font-semibold text-white">
                          Nouveau
                        </span>
                      )}
                      {m.name}
                    </p>
                    <p className="break-all text-sm text-ink/60">{m.email}</p>
                  </div>
                  <time dateTime={m.createdAt} className="text-xs text-ink/55">
                    {dateFormat.format(new Date(m.createdAt))}
                  </time>
                </div>
                <p className="mt-4 whitespace-pre-line break-words text-sm leading-relaxed">{m.body}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <a
                    href={`mailto:${m.email}?subject=${encodeURIComponent("Re: votre message sur mon portfolio")}`}
                    className={buttonGhost}
                  >
                    Répondre par email
                  </a>
                  <form action={setMessageRead}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="read" value={String(!m.read)} />
                    <button className={buttonGhost}>{m.read ? "Marquer non lu" : "Marquer comme lu"}</button>
                  </form>
                  <form action={deleteMessage}>
                    <input type="hidden" name="id" value={m.id} />
                    <ConfirmButton label="Supprimer" confirmLabel="Confirmer" />
                  </form>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
