# Website Handover Guide

**Project:** Kgolaentle Holdings
**URL:** https://www.kgolaentle.com
**Repository:** https://github.com/IamFootprint/kgolaentle-holdings-website
**Hosting:** Vercel
**Date:** 2026-03-27

## What Was Built

A complete holdings marketing website migrated from Wix to Next.js 16 + Vercel, with:
- 12 pages: Home, Services overview, 4 service detail pages (Rentals, Courier, Technology, Beauty), About, Contact, FAQ, Privacy, Terms, Legal
- Working contact form backed by Resend (email to info@kgolaentle.com)
- Mobile-first responsive design
- Premium brand identity (Playfair Display + DM Sans, deep red + gold palette)
- SEO-complete: sitemap, robots, OG tags, per-page metadata

## What Was Improved vs Wix
- Individual service detail pages (Wix had one flat page)
- Real contact form backend (Wix form was Wix-proprietary)
- Faster load times (static generation, Next.js image optimization)
- Better mobile UX
- Maintainable codebase (TypeScript, component-based)
- SEO infrastructure (sitemap, robots, structured metadata)

## Ongoing Manual Items
1. **Resend domain verification** — add Resend TXT/MX records to DNS for `kgolaentle.com` before going live with email
2. **DNS cutover** — follow `/docs/deployment/dns-cutover.md` when ready to go live
3. **Wix subscription** — cancel only after DNS cutover verified and stable (24h+)

## How to Deploy

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

## How to Update Content

All content is in TypeScript source files:
| What to change | File |
|----------------|------|
| Service names/descriptions/features | `src/data/services.ts` |
| Homepage hero text | `src/app/page.tsx` |
| About page / team | `src/app/about/page.tsx` |
| Contact info (address, phone, email) | `src/app/contact/page.tsx` + `src/components/Footer.tsx` |
| FAQ questions | `src/app/faq/page.tsx` |
| Legal pages | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/legal/page.tsx` |

## How to Add Images

1. Add image to `/public/images/`
2. Use `<Image src="/images/filename.jpg" ... />` in the component
3. Next.js handles resizing, format conversion, lazy loading automatically

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `RESEND_API_KEY` | Vercel env + `.env.local` | Contact form email delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Vercel env + `.env.local` | Google Analytics 4 tracking |

To add/update:
```bash
vercel env add RESEND_API_KEY
```

## Rollback

```bash
vercel rollback   # rolls back production to previous deployment
```

Or: promote any previous deployment from the Vercel dashboard.
