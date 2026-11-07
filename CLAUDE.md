# Kgolaentle Holdings website

Public marketing site for Kgolaentle Holdings at https://kgolaentle.com. Company matters (registrations, finances, supplier packs) live in the Documents home `/Users/shimane/Documents/Kgolaentle Holdings`; read its `BRIEF.md` for current state before company-related work. This file covers only the site.

- OpenBrain project: `KgolaentleHoldings`. Log every meaningful session there.
- GitHub: IamFootprint/kgolaentle-holdings-website. Main tool: Claude.
- Hosting: Cloudflare Worker `kgolaentle-holdings-website` (account `lebogang`) via `@opennextjs/cloudflare`; config in `wrangler.jsonc` and `open-next.config.ts`. `docs/deployment/cloudflare-workers-setup.md` and `dns-cutover.md` describe the setup; `vercel-setup.md` and the `.vercel/` folder are from the earlier Vercel hosting.

## Layout
- Next.js App Router with Tailwind 4. Pages under `src/app`: home, `about`, `services` and `services/[slug]`, `faq`, `contact`, `legal`, `privacy`, `terms`, plus `sitemap.ts`, `robots.ts`, `error.tsx`, `not-found.tsx`.
- Content as data: `src/data/services.ts` and `src/data/legal.ts`. Components in `src/components` (Navbar, Footer, AccordionItem, ContactForm, Analytics).
- Contact form: server action `src/app/contact/actions.ts` sends through Resend (`RESEND_API_KEY`). Analytics uses `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Both come from the git-ignored `.env.local` locally and from Worker secrets in production.
- `docs/`: analytics, architecture, content, deployment, handover, migration, ops (`cta-logic.md`, `form-handling.md`), qa.

## Commands
- `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`.
- `npm run preview` builds with OpenNext and previews locally. `npm run deploy` publishes to production: confirm with Shimane first.

## Rules
- Plain English on every page, no em dashes. Legal pages carry an effective date; update it when their text changes.
- Commit messages follow the repository style: `area: what changed` in lowercase (for example `legal: set the effective date to 8 October 2026`).
- Secrets live in 1Password; never commit `.env.local` or print its values.
- Every code task runs in its own git worktree and branch. Start with `/start`, end with `/wrap` and an OpenBrain log.
