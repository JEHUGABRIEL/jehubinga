This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Back-office (`/admin`)

Le portfolio a un back-office protégé par mot de passe pour gérer :

- **Projets** : créer, modifier (FR/EN), réordonner, publier/dépublier, supprimer.
- **Messages** : ceux envoyés par le formulaire de contact.
- **Textes du site** : tous les textes FR/EN (bio, services, témoignages…).
- **Statistiques** : visites par jour, pages et projets les plus vus, provenance.

Les données sont dans une base Postgres Neon. Les tables sont créées et les projets
initiaux (`src/lib/seed-projects.ts`) importés automatiquement au premier accès.
Sans base de données, le site public retombe sur ces projets et sur `messages/*.json`.

Variables d'environnement (déjà configurées sur Vercel) :

| Variable | Rôle |
|---|---|
| `DATABASE_URL` | Connexion Neon (ajoutée par l'intégration Vercel ↔ Neon) |
| `ADMIN_PASSWORD` | Mot de passe du back-office |
| `ADMIN_SESSION_SECRET` | Clé de signature du cookie de session (32 caractères minimum) |

En local : `vercel env pull .env.local` puis `npm run dev`.
