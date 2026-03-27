# Kgolaentle Holdings — Wix-to-Vercel Migration Design Spec
**Date:** 2026-03-27
**Project:** Kgolaentle Holdings website (`kgolaentle-holdings`)
**Approach:** Minimal-gap completion — build on existing high-quality codebase

---

## 1. Context

The repository already has a production-ready Next.js 16 + React 19 + Tailwind v4 website with:
- All main pages: Home, Services, About, Contact, FAQ, Privacy, Terms, Legal
- Premium brand design (Playfair Display + DM Sans, deep red #9B1B30 + gold #d4a843 + near-black)
- All owned image assets: logo, hero, about, 4 service images, 4 team photos, favicons
- GitHub remote: `https://github.com/IamFootprint/kgolaentle-holdings-website.git`
- 4 commits, clean working tree

**What is NOT done:** form backend, individual service pages, sitemap/robots, Vercel deployment, DNS cutover plan, OpenBrain project, documentation suite.

---

## 2. Information Architecture

### Routes (final)
```
/                          Home
/services                  Services overview (all 4)
/services/rentals          Kgolaentle Rentals detail
/services/homeware         Opulent Homeware detail
/services/courier          Courier Franchise detail
/services/collections      Kgolaentle Collections detail
/about                     About / Team
/contact                   Contact + Quote form
/faq                       FAQ (AccordionItem component)
/privacy                   Privacy Policy
/terms                     Terms of Use
/legal                     Legal Notice
```

### Service detail page content
Each `/services/[slug]` page reuses the content already in `services/page.tsx` (name, tagline, description, features array) but adds:
- Full-width hero with service image
- Expanded description block
- Feature list
- Primary CTA (service-specific action)
- Secondary CTA (WhatsApp / contact)
- Back link to `/services`

Service card links on `/services` updated from `href: "/services"` to `href: "/services/rentals"` etc.

### Navigation
No changes to Navbar or Footer needed. Footer service list links updated to point to detail pages.

---

## 3. Form Backend

### Mechanism
Next.js Server Action (`'use server'`) calling Resend SDK.

**File:** `src/app/contact/actions.ts`
```
export async function submitContactForm(formData: FormData): Promise<ActionResult>
```

**Flow:**
1. Client submits form → Server Action called
2. Server Action validates required fields (email, firstName or lastName)
3. Calls `resend.emails.send()` with `to: 'info@kgolaentle.com'`, reply-to from submitter
4. Returns `{ success: true }` or `{ success: false, error: string }`

**Dev fallback:** If `RESEND_API_KEY` env var is absent, log to console and return success (prevents blocking local development).

**Client form component:** Convert `contact/page.tsx` form to a `'use client'` component (or keep Server Component and extract form to `ContactForm.tsx`). Use `useActionState` (React 19) for pending/success/error UI states.

**Environment variable:**
- Local: `.env.local` → `RESEND_API_KEY=re_...`
- Vercel: added via `vercel env add RESEND_API_KEY`

**Success state:** Replace form with a thank-you message. Error state: show inline error, keep form data.

---

## 4. SEO Completion

### Files to add
| File | Purpose |
|------|---------|
| `src/app/sitemap.ts` | Next.js sitemap generator, all 12 routes |
| `src/app/robots.ts` | Allow all crawlers, reference sitemap |

### OG image
Add `images: [{ url: '/images/hero-serving-lunch.jpg', width: 1200, height: 800 }]` to the `openGraph` block in `src/app/layout.tsx`. No separate OG image file needed — the existing hero image is suitable and already optimized.

### Sitemap routes
Home, Services, each of 4 service detail pages, About, Contact, FAQ, Privacy, Terms, Legal.

### Per-page metadata
Already handled via `metadata` export in each `page.tsx`. Service detail pages add their own metadata with service-specific title/description.

---

## 5. Vercel Deployment

### Steps
1. `vercel link` in project root — connect to Vercel account, create project `kgolaentle-holdings`
2. Add `RESEND_API_KEY` to Vercel env vars (Production + Preview)
3. `vercel` — create preview deployment, verify at preview URL
4. Add custom domain `kgolaentle.com` and `www.kgolaentle.com` in Vercel project settings
5. `vercel --prod` — production deployment (pending DNS cutover)
6. Document Vercel-assigned DNS records required for domain

### Vercel config
No `vercel.json` required — Next.js 16 is auto-detected. Image optimization, server actions, and static pages all handled natively.

### Environment variables on Vercel
```
RESEND_API_KEY      (Production, Preview, Development)
```

---

## 6. DNS Cutover Plan

### Pre-cutover (before touching DNS)
1. Document all current DNS records at Wix (A, CNAME, MX, TXT, SPF, DKIM, DMARC, SRV)
2. Reduce TTL on A and CNAME records to 300s — do this 48h before planned cutover
3. Verify production Vercel deployment is live and healthy at preview URL

### DNS changes required
| Record | Type | Value | Purpose |
|--------|------|-------|---------|
| `kgolaentle.com` | A | `76.76.21.21` | Apex domain → Vercel |
| `www.kgolaentle.com` | CNAME | `cname.vercel-dns.com` | www → Vercel |

### Records to preserve (do NOT change)
- All `MX` records (email routing — Wix or Google Workspace)
- All `TXT` records (SPF, DKIM, DMARC, domain verification)
- Any `SRV` or other service records

### Rollback
Wix stays live throughout. If cutover fails: restore previous A/CNAME values. TTL of 300s means recovery within 5 minutes.

### Post-cutover checklist
- [ ] Verify `https://www.kgolaentle.com` loads from Vercel
- [ ] Verify HTTPS/SSL active (Vercel auto-provisions via Let's Encrypt)
- [ ] Verify contact form works end-to-end
- [ ] Verify email still works (send test email to `info@kgolaentle.com`)
- [ ] Only then: consider removing Wix subscription

---

## 7. OpenBrain Integration

### Project registration
Register project `KgolaentleHoldings` in OpenBrain before implementation starts.

### Log entries (one per milestone)
| Milestone | Domain | Entry type |
|-----------|--------|------------|
| Session start / audit findings | engineering | knowledge |
| IA and architecture decisions | engineering | decision |
| Form backend implementation | engineering | knowledge |
| Vercel deployment complete | engineering | knowledge |
| DNS cutover plan finalized | engineering | knowledge |
| QA checklist complete | engineering | knowledge |
| Session end / handover | engineering | knowledge |

---

## 8. Documentation Suite

All documentation lives in `/docs/` in the repo root.

```
docs/
  migration/
    site-audit.md           Current site inventory (pages, content, assets)
    asset-inventory.md      All images: old source → new path
    content-export-notes.md Notes on content sourcing
  architecture/
    site-map.md             Final route hierarchy
    content-model.md        Content structure per page
  deployment/
    vercel-setup.md         Vercel project config and env vars
    dns-cutover.md          Current DNS → required changes → rollback plan
  ops/
    form-handling.md        Form backend architecture and Resend setup
  qa/
    launch-checklist.md     Pre-launch verification checklist
  handover/
    website-handover.md     What was built, what was improved, how to maintain
```

---

## 9. QA Checklist (pre-launch)

- [ ] `next build` exits cleanly (0 errors, 0 TS errors)
- [ ] `next lint` passes
- [ ] All pages load on mobile (320px), tablet (768px), desktop (1280px)
- [ ] Hero image renders correctly with priority loading
- [ ] All nav links work, active state highlights correctly
- [ ] Service detail pages each render with correct content
- [ ] Contact form: valid submission shows success state
- [ ] Contact form: empty email shows validation error
- [ ] Email arrives at `info@kgolaentle.com` on form submit
- [ ] WhatsApp link opens correctly on mobile
- [ ] Facebook, Instagram links open in new tab
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots accessible at `/robots.txt`
- [ ] Vercel preview deployment loads at preview URL
- [ ] OG tags render correctly (use opengraph.xyz or similar)
- [ ] SSL certificate active on production domain

---

## 10. What Is NOT in Scope

- Wix content/CMS export (the content is already in the codebase; no CMS was used)
- Product CSV export (no e-commerce in this site)
- Team photos from Wix (already imported as `team-*.jpg/png`)
- Re-designing any existing page (design is production quality)
- Analytics integration (can be added post-launch)
- Blog or CMS integration (not in current site)

---

## 11. Implementation Order

1. Register OpenBrain project + initial log
2. Individual service detail pages (`/services/[slug]`)
3. Form backend (Server Action + Resend)
4. Sitemap + robots
5. Documentation suite
6. QA pass + build verification
7. Vercel deployment (preview → production)
8. DNS cutover plan documented
9. Final OpenBrain logs + handover doc
10. Git commit + push

---

## 12. Key Contacts / Config
- **Email:** `info@kgolaentle.com`
- **Phone:** `+27 (0) 87 093 7316`
- **WhatsApp:** `https://wa.me/27870937316`
- **Facebook:** `https://www.facebook.com/KgolalentleHoldings/`
- **Instagram:** `https://www.instagram.com/kgolaentleholdings/`
- **Homeware store:** `https://www.opulenthomeware.com`
- **Address:** Blairgowrie Section, Chaneng, North West, 0310, South Africa
- **GitHub:** `https://github.com/IamFootprint/kgolaentle-holdings-website`
- **Target domain:** `https://www.kgolaentle.com`
