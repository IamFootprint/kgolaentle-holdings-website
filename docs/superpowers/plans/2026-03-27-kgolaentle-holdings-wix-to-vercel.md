# Kgolaentle Holdings — Wix-to-Vercel Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the production-ready Kgolaentle Holdings website — form backend, service detail pages, SEO, Vercel deployment, DNS cutover plan, OpenBrain project, and full documentation suite.

**Architecture:** The codebase (Next.js 16 + React 19 + Tailwind v4) is already built. This plan adds what's missing: a shared service data module extracted from existing pages, a Server Action form backend using Resend, dynamic route service detail pages, sitemap/robots, and all deployment + documentation deliverables.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, Resend (email), Vercel CLI, OpenBrain CLI

---

## Task 1: OpenBrain project registration + initial audit log

**Files:**
- No code files — OpenBrain CLI only

- [ ] **Step 1: Check OpenBrain CLI help**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- --help 2>&1 | head -40
```

Look for a `project` or `project add` subcommand. If present, use it. If not, the first `knowledge add` call below will either auto-create the project or error — adjust accordingly.

- [ ] **Step 2: Register initial audit knowledge entry**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- knowledge add \
  --project "KgolaentleHoldings" \
  --domain "engineering" \
  --title "site-audit — Wix-to-Vercel migration pre-flight (2026-03-27)" \
  --tags "migration,audit,website,next.js,vercel" \
  --content "## Current State

Repository: https://github.com/IamFootprint/kgolaentle-holdings-website
Stack: Next.js 16 + React 19 + Tailwind v4, App Router, TypeScript
Local path: /Users/shimane/Projects/MobileApps/kgolaentle-holdings

## Pages Already Built
- / (Home) — Hero, value strip, why section, services preview, CTA
- /services — All 4 services in alternating image/content layout
- /about — Story, values, founder spotlight, team grid
- /contact — Info column + static form (no backend yet)
- /faq — Accordion FAQ
- /privacy, /terms, /legal — Legal pages

## Assets (in /public/images/)
- logo.png, hero-serving-lunch.jpg, about-fertilizer.jpg
- service-rentals.jpg, service-homeware.jpg, service-courier.jpg, service-collections.jpg
- team-ceo.jpg, team-courier.png, team-kagiso-tsele.png, team-kagiso-modise.png
- Favicons: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png

## Brand
- Primary: #9B1B30 (deep red), Accent: #d4a843 (gold), Secondary: #0f0f1a (near black)
- Fonts: Playfair Display (heading) + DM Sans (body)

## Gaps to complete
1. Contact form has no submit backend
2. No individual service detail pages (/services/[slug])
3. No sitemap.ts or robots.ts
4. No OG image in metadata
5. Not connected to Vercel
6. No DNS cutover plan
7. No documentation suite"
```

Expected: `knowledge add` succeeds. If it prints 'Project not found', try `pnpm brain -- project add --name KgolaentleHoldings` first.

- [ ] **Step 3: Log architecture decision**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- decision add \
  --project "KgolaentleHoldings" \
  --title "Form backend: Server Action + Resend (not Formspree)" \
  --content "Using Next.js Server Action calling Resend SDK. Rationale: first-party (no third-party form service), server-rendered, compatible with static-first deployment. Resend domain verification required for kgolaentle.com before going live. Dev fallback: if RESEND_API_KEY is absent, log to console and return success."
```

---

## Task 2: Shared service data module

**Files:**
- Create: `src/data/services.ts`

This extracts the service data that is currently duplicated between `src/app/services/page.tsx` and `src/app/page.tsx` into a single source of truth.

- [ ] **Step 1: Create the data file**

Create `src/data/services.ts` with this exact content:

```typescript
export type Service = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  accent: string;
};

export const services: Service[] = [
  {
    slug: "rentals",
    name: "Kgolaentle Rentals",
    image: "/images/service-rentals.jpg",
    tagline: "Every celebration deserves to feel extraordinary",
    description:
      "Our premium rental solutions ensure a seamless and enjoyable experience for your events. From private functions to corporate gatherings, we bring comfort and convenience wherever your event takes you.",
    features: [
      "VIP mobile toilets for events",
      "Mobile freezer rentals",
      "Customizable packages for any budget",
      "Professional setup and maintenance",
    ],
    cta: "Book a Rental",
    href: "https://www.facebook.com/KgolalentleHoldings/",
    accent: "from-primary to-primary-dark",
  },
  {
    slug: "homeware",
    name: "Opulent Homeware",
    image: "/images/service-homeware.jpg",
    tagline: "Your home should reflect who you are",
    description:
      "A curated online store featuring exquisite homeware products designed to elevate the aesthetics and functionality of your living spaces. From elegant dinnerware to luxurious bedding and unique accessories.",
    features: [
      "Curated premium collections",
      "Elegant dinnerware & bedding",
      "Unique home accessories",
      "Convenient online shopping",
    ],
    cta: "Shop Now",
    href: "https://www.opulenthomeware.com",
    accent: "from-accent to-accent-light",
  },
  {
    slug: "courier",
    name: "Courier Franchise",
    image: "/images/service-courier.jpg",
    tagline: "Your community deserves deliveries you can count on",
    description:
      "Licensed to serve the Rustenburg Region, our courier franchise delivers reliable and efficient services across Sun City, Ledig, Mogwase, Hartebeesfontein, Moruleng and surrounding areas.",
    features: [
      "Reliable regional delivery network",
      "Online tracking system",
      "Professional trained drivers",
      "Timely communication & updates",
    ],
    cta: "Send a Package",
    href: "/contact",
    accent: "from-secondary to-gray-800",
  },
  {
    slug: "collections",
    name: "Kgolaentle Collections",
    image: "/images/service-collections.jpg",
    tagline: "Fashion that tells your story",
    description:
      "Our exclusive fashion line blends timeless elegance with contemporary African design. Collaborating with skilled artisans, we ensure exceptional craftsmanship in every piece.",
    features: [
      "Contemporary African design",
      "Skilled artisan craftsmanship",
      "Casual and formal collections",
      "Unique statement pieces",
    ],
    cta: "Explore Collection",
    href: "https://www.facebook.com/KgolaentleCollections/",
    accent: "from-purple-600 to-pink-500",
  },
];
```

- [ ] **Step 2: Verify TypeScript accepts the file**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1
```

Expected: no errors from `src/data/services.ts`.

- [ ] **Step 3: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/data/services.ts && git commit -m "feat: extract shared service data module"
```

---

## Task 3: Individual service detail pages

**Files:**
- Create: `src/app/services/[slug]/page.tsx`

Uses `generateStaticParams` to pre-render all 4 service pages at build time. Uses the shared `services` array from Task 2.

Note: In Next.js 16, `params` is a `Promise` — must be awaited.

- [ ] **Step 1: Create the directory**

```bash
mkdir -p /Users/shimane/Projects/MobileApps/kgolaentle-holdings/src/app/services/\[slug\]
```

- [ ] **Step 2: Create the page file**

Create `src/app/services/[slug]/page.tsx`:

```typescript
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | Kgolaentle Holdings`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 900 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const idx = services.indexOf(service);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            0{idx + 1}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            {service.name}
          </h1>
          <p className="text-xl text-accent font-heading italic">
            &ldquo;{service.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                About This Service
              </span>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                What we offer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              <h3 className="text-xl font-heading font-bold text-secondary mb-5">
                What&apos;s included
              </h3>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    service.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/27870937316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-secondary font-semibold rounded-full hover:border-primary hover:text-primary transition-all text-[15px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-warm-gray rounded-2xl p-6">
                <h3 className="font-heading font-bold text-secondary text-lg mb-3">
                  Need a quote?
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>

              <div className="bg-warm-gray rounded-2xl p-6">
                <h3 className="font-heading font-bold text-secondary text-lg mb-4">
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-gray-500 text-sm hover:text-primary transition-colors"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us today and experience the Kgolaentle difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify TypeScript (no errors)**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 4: Verify the page builds**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm run build 2>&1 | tail -30
```

Expected: pages `/services/rentals`, `/services/homeware`, `/services/courier`, `/services/collections` appear in the build output as static pages.

- [ ] **Step 5: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/app/services/\[slug\]/page.tsx && git commit -m "feat: add individual service detail pages"
```

---

## Task 4: Update service card links and footer

**Files:**
- Modify: `src/app/services/page.tsx` — update `href` in service data array
- Modify: `src/app/page.tsx` — update `href` in services array on homepage
- Modify: `src/components/Footer.tsx` — update service list links

- [ ] **Step 1: Update services/page.tsx**

Open `src/app/services/page.tsx`. Replace the top-of-file `services` array definition entirely with an import from the shared data module, and update each `href` field:

Replace the block `const services = [ ... ];` (lines 9–74) with:

```typescript
import { services } from "@/data/services";
```

Note: The `services` array in `src/app/services/page.tsx` currently uses `href: "/contact"` for courier and external URLs for others. The shared data in `src/data/services.ts` already has these same values. The CTA buttons in the detail page use `service.href` for the external action (book, shop, etc.). No change needed to `href` — they are correct as-is.

Also remove the now-redundant local type definition if present.

- [ ] **Step 2: Update homepage services array**

Open `src/app/page.tsx`. The local `services` array at the top of the file (lines 4–33) maps 4 services with `href: "/services"`. Replace this with imports from the shared module and update the hrefs to point to detail pages:

Replace:
```typescript
const services = [
  {
    name: "Kgolaentle Rentals",
    image: "/images/service-rentals.jpg",
    description:
      "Premium VIP mobile toilets and freezers for events that deserve the extraordinary.",
    href: "/services",
  },
  {
    name: "Opulent Homeware",
    image: "/images/service-homeware.jpg",
    description:
      "Curated homeware that transforms living spaces into reflections of who you are.",
    href: "/services",
  },
  {
    name: "Courier Franchise",
    image: "/images/service-courier.jpg",
    description:
      "Reliable deliveries across the Rustenburg region — Sun City, Mogwase, Ledig and beyond.",
    href: "/services",
  },
  {
    name: "Kgolaentle Collections",
    image: "/images/service-collections.jpg",
    description:
      "Fashion that blends timeless elegance with contemporary African design.",
    href: "/services",
  },
];
```

With:
```typescript
import { services as allServices } from "@/data/services";

const services = allServices.map((s) => ({
  name: s.name,
  image: s.image,
  description: s.description,
  href: `/services/${s.slug}`,
}));
```

- [ ] **Step 3: Update Footer service links**

Open `src/components/Footer.tsx`. Find the services list (around line 57–73):

Replace:
```typescript
{[
  "Kgolaentle Rentals",
  "Opulent Homeware",
  "Courier Franchise",
  "Kgolaentle Collections",
].map((service) => (
  <li key={service}>
    <Link
      href="/services"
      className="text-gray-400 text-sm hover:text-accent transition-colors"
    >
      {service}
    </Link>
  </li>
))}
```

With:
```typescript
{[
  { name: "Kgolaentle Rentals", slug: "rentals" },
  { name: "Opulent Homeware", slug: "homeware" },
  { name: "Courier Franchise", slug: "courier" },
  { name: "Kgolaentle Collections", slug: "collections" },
].map((service) => (
  <li key={service.slug}>
    <Link
      href={`/services/${service.slug}`}
      className="text-gray-400 text-sm hover:text-accent transition-colors"
    >
      {service.name}
    </Link>
  </li>
))}
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1 && npm run build 2>&1 | tail -20
```

Expected: clean build, no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/app/services/page.tsx src/app/page.tsx src/components/Footer.tsx && git commit -m "feat: link service cards to individual detail pages"
```

---

## Task 5: Install Resend + create Server Action

**Files:**
- Create: `src/app/contact/actions.ts`
- Create: `.env.local` (if it doesn't exist — gitignored)

- [ ] **Step 1: Install Resend**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm install resend 2>&1 | tail -5
```

Expected: `added 1 package` (or similar). No peer dependency errors.

- [ ] **Step 2: Create .env.local**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && [ -f .env.local ] || echo "RESEND_API_KEY=" > .env.local
```

Then open `.env.local` and set the value:
```
RESEND_API_KEY=re_your_key_here
```

To get a Resend API key: sign up at https://resend.com → Dashboard → API Keys → Create API Key. For testing before domain verification, Resend allows sending to any address in test mode, but the `from` must be `onboarding@resend.dev` if the sending domain isn't verified. Domain verification is required before production go-live (add DNS TXT record in Wix for `kgolaentle.com`).

- [ ] **Step 3: Verify .env.local is gitignored**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && cat .gitignore | grep env
```

Expected: `.env*.local` or `.env.local` appears. If not, add it:
```bash
echo ".env.local" >> .gitignore
```

- [ ] **Step 4: Create the Server Action**

Create `src/app/contact/actions.ts`:

```typescript
"use server";

import { Resend } from "resend";

export type ActionResult =
  | { success: true }
  | { success: false; error: string };

const serviceLabels: Record<string, string> = {
  rentals: "Kgolaentle Rentals",
  homeware: "Opulent Homeware",
  courier: "Courier Services",
  collections: "Kgolaentle Collections",
  other: "Other",
};

export async function submitContactForm(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const firstName = (formData.get("firstName") as string | null) ?? "";
  const lastName = (formData.get("lastName") as string | null) ?? "";
  const email = (formData.get("email") as string | null) ?? "";
  const phone = (formData.get("phone") as string | null) ?? "";
  const service = (formData.get("service") as string | null) ?? "";
  const message = (formData.get("message") as string | null) ?? "";

  if (!email.trim()) {
    return { success: false, error: "Email address is required." };
  }

  const name = [firstName, lastName].filter(Boolean).join(" ") || "Website visitor";
  const serviceLabel = serviceLabels[service] ?? service ?? "Not specified";

  // Dev fallback — no API key
  if (!process.env.RESEND_API_KEY) {
    console.log("[ContactForm] No RESEND_API_KEY — logging submission:", {
      name,
      email,
      phone,
      service: serviceLabel,
      message,
    });
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Kgolaentle Holdings <onboarding@resend.dev>",
      to: ["info@kgolaentle.com"],
      replyTo: email,
      subject: `Website Enquiry — ${serviceLabel}`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f0f1a">New Website Enquiry</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${serviceLabel}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Message</td><td style="padding:8px">${message || "No message provided"}</td></tr>
        </table>
        <p style="font-family:sans-serif;color:#9b1b30;margin-top:24px">Sent via kgolaentle.com contact form</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("[ContactForm] Resend error:", err);
    return {
      success: false,
      error:
        "Failed to send message. Please try again or contact us directly at info@kgolaentle.com.",
    };
  }
}
```

**Note on `from` address:** Once `kgolaentle.com` is verified in Resend (after DNS cutover), change this to:
```
from: "Kgolaentle Holdings <noreply@kgolaentle.com>",
```

- [ ] **Step 5: Verify TypeScript**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/app/contact/actions.ts package.json package-lock.json && git commit -m "feat: add contact form Server Action with Resend backend"
```

---

## Task 6: ContactForm client component

**Files:**
- Create: `src/components/ContactForm.tsx`

This is the `'use client'` form component that calls the Server Action and shows pending/success/error states using React 19's `useActionState`.

- [ ] **Step 1: Create the component**

Create `src/components/ContactForm.tsx`:

```typescript
"use client";

import { useActionState } from "react";
import { submitContactForm, type ActionResult } from "@/app/contact/actions";

const initialState: ActionResult | null = null;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state?.success) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
          Message Sent!
        </h3>
        <p className="text-gray-500">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
      <h2 className="text-2xl font-heading font-bold text-secondary mb-2">
        Get a Free Quote
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Fill in the form and we&apos;ll get back to you within 24 hours.
      </p>

      {state && !state.success && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
            placeholder="+27..."
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] text-gray-600"
          >
            <option value="">Select a service</option>
            <option value="rentals">Kgolaentle Rentals</option>
            <option value="homeware">Opulent Homeware</option>
            <option value="courier">Courier Services</option>
            <option value="collections">Kgolaentle Collections</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] resize-none"
            placeholder="Tell us about your needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/components/ContactForm.tsx && git commit -m "feat: add ContactForm client component with useActionState"
```

---

## Task 7: Wire contact page to ContactForm

**Files:**
- Modify: `src/app/contact/page.tsx` — replace static form with `<ContactForm />`

- [ ] **Step 1: Replace the form section**

Open `src/app/contact/page.tsx`. Add the import after the existing imports:

```typescript
import ContactForm from "@/components/ContactForm";
```

Then replace the `{/* Form Column */}` `<div>` block (the entire `lg:col-span-3` div from line ~152 to the end of the form div, around line 249) with:

```tsx
{/* Form Column */}
<div className="lg:col-span-3">
  <ContactForm />
</div>
```

The rest of the file (hero, info column, social links) stays unchanged.

- [ ] **Step 2: Verify build**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm run build 2>&1 | tail -20
```

Expected: `/contact` renders as a dynamic page (has Server Action). No errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/app/contact/page.tsx && git commit -m "feat: wire contact page to ContactForm with Server Action"
```

---

## Task 8: SEO — sitemap, robots, OG metadata

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/layout.tsx` — add `images` to `openGraph`

- [ ] **Step 1: Create sitemap.ts**

Create `src/app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

const baseUrl = "https://www.kgolaentle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    "rentals",
    "homeware",
    "courier",
    "collections",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
```

- [ ] **Step 2: Create robots.ts**

Create `src/app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.kgolaentle.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Add OG image to layout metadata**

Open `src/app/layout.tsx`. Find the `openGraph` block (around line 22–30):

```typescript
openGraph: {
  title: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
  description:
    "Innovation meets the needs of our people. Premium rentals, homeware, courier services, and fashion in the Rustenburg region.",
  url: "https://www.kgolaentle.com",
  siteName: "Kgolaentle Holdings",
  locale: "en_ZA",
  type: "website",
},
```

Replace with:

```typescript
openGraph: {
  title: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
  description:
    "Innovation meets the needs of our people. Premium rentals, homeware, courier services, and fashion in the Rustenburg region.",
  url: "https://www.kgolaentle.com",
  siteName: "Kgolaentle Holdings",
  locale: "en_ZA",
  type: "website",
  images: [
    {
      url: "https://www.kgolaentle.com/images/hero-serving-lunch.jpg",
      width: 1200,
      height: 800,
      alt: "Kgolaentle Holdings team member delivering service",
    },
  ],
},
```

- [ ] **Step 4: Verify build + check sitemap route exists**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm run build 2>&1 | grep -E "sitemap|robots|error" | head -20
```

Expected: `/sitemap.xml` and `/robots.txt` appear in the build output, no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx && git commit -m "feat: add sitemap, robots, and OG image metadata"
```

---

## Task 9: Full build + lint verification

**Files:**
- No new files — verification only

- [ ] **Step 1: Run TypeScript check**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npx tsc --noEmit 2>&1
```

Expected: `0 errors`.

- [ ] **Step 2: Run lint**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm run lint 2>&1
```

Expected: `✔ No ESLint warnings or errors`. If there are lint errors, fix them before continuing.

- [ ] **Step 3: Run production build**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && npm run build 2>&1
```

Expected:
- Exit code 0
- All 12 routes appear in the output (/, /services, /services/rentals, /services/homeware, /services/courier, /services/collections, /about, /contact, /faq, /privacy, /terms, /legal)
- No "build failed" or red error messages

- [ ] **Step 4: Log QA milestone to OpenBrain**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- knowledge add \
  --project "KgolaentleHoldings" \
  --domain "engineering" \
  --title "implementation — feature gaps completed (2026-03-27)" \
  --tags "migration,next.js,build,form,service-pages" \
  --content "## Completed

1. Shared service data module (src/data/services.ts)
2. Individual service detail pages (/services/[slug]) — 4 static pages
3. Service card links updated to point to detail pages
4. Footer service links updated to detail pages
5. ContactForm client component with useActionState (React 19)
6. Server Action with Resend backend (src/app/contact/actions.ts)
7. Contact page wired to ContactForm
8. sitemap.ts + robots.ts
9. OG image metadata in layout

## Build status
next build: PASS, npx tsc --noEmit: 0 errors, npm run lint: PASS"
```

---

## Task 10: Documentation suite

**Files:**
- Create: `docs/migration/site-audit.md`
- Create: `docs/migration/asset-inventory.md`
- Create: `docs/architecture/site-map.md`
- Create: `docs/deployment/vercel-setup.md`
- Create: `docs/deployment/dns-cutover.md`
- Create: `docs/ops/form-handling.md`
- Create: `docs/qa/launch-checklist.md`
- Create: `docs/handover/website-handover.md`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p /Users/shimane/Projects/MobileApps/kgolaentle-holdings/docs/{migration,architecture,deployment,ops,qa,handover}
```

- [ ] **Step 2: Create site-audit.md**

Create `docs/migration/site-audit.md`:

```markdown
# Site Audit — Kgolaentle Holdings

**Date:** 2026-03-27
**Source:** Wix site + local repository analysis
**Status:** Migration complete

## Page Inventory

| Page | URL | Status |
|------|-----|--------|
| Home | / | Migrated |
| Services Overview | /services | Migrated |
| Rentals Detail | /services/rentals | Added (new) |
| Homeware Detail | /services/homeware | Added (new) |
| Courier Detail | /services/courier | Added (new) |
| Collections Detail | /services/collections | Added (new) |
| About | /about | Migrated |
| Contact | /contact | Migrated + form backend added |
| FAQ | /faq | Migrated |
| Privacy Policy | /privacy | Migrated |
| Terms of Use | /terms | Migrated |
| Legal Notice | /legal | Migrated |

## Business Lines
1. **Kgolaentle Rentals** — VIP mobile toilets and freezers for events
2. **Opulent Homeware** — Premium homeware online store (opulenthomeware.com)
3. **Courier Franchise** — Regional delivery, Rustenburg area
4. **Kgolaentle Collections** — Contemporary African fashion

## Contact Details
- Email: info@kgolaentle.com
- Phone: +27 (0) 87 093 7316
- WhatsApp: https://wa.me/27870937316
- Address: Blairgowrie Section, Chaneng, North West, 0310, South Africa

## Social Profiles
- Facebook: https://www.facebook.com/KgolalentleHoldings/
- Instagram: https://www.instagram.com/kgolaentleholdings/

## Key People
- Masego Mafoko — CEO & Founder
- Thabang Moreo — Courier Services
- Kagiso Tsele (Majozi) — Mobile Units Caretaker
- Kagiso Modise (KG) — Mobile Units Caretaker

## Improvements vs Wix
- Holdings-first brand narrative
- Individual service detail pages (Wix had one flat services page)
- Working form backend with email delivery via Resend
- Faster (Next.js static generation vs Wix client-rendered)
- Better mobile UX
- SEO-complete (sitemap, robots, OG tags, per-page metadata)
- Maintainable TypeScript codebase
```

- [ ] **Step 3: Create asset-inventory.md**

Create `docs/migration/asset-inventory.md`:

```markdown
# Asset Inventory

**Date:** 2026-03-27

## Images (in /public/images/)

| Filename | Description | Source |
|----------|-------------|--------|
| logo.png | Kgolaentle Holdings logo | Wix Media Manager |
| hero-serving-lunch.jpg | Hero background — team member serving | Wix Media Manager |
| about-fertilizer.jpg | About section image | Wix Media Manager |
| service-rentals.jpg | Rentals service card image | Wix Media Manager |
| service-homeware.jpg | Homeware service card image | Wix Media Manager |
| service-courier.jpg | Courier service card image | Wix Media Manager |
| service-collections.jpg | Collections service card image | Wix Media Manager |
| team-ceo.jpg | Masego Mafoko — CEO & Founder | Wix Media Manager |
| team-courier.png | Thabang Moreo — Courier | Wix Media Manager |
| team-kagiso-tsele.png | Kagiso Tsele — Mobile Units | Wix Media Manager |
| team-kagiso-modise.png | Kagiso Modise — Mobile Units | Wix Media Manager |
| services-nav.jpg | Services navigation image | Wix Media Manager |
| team-nav.png | Team navigation image | Wix Media Manager |

## Favicons (in /public/)
- favicon.ico, favicon-16x16.png, favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png, android-chrome-512x512.png
- site.webmanifest

## Usage
All images served via Next.js `<Image>` component for automatic optimization.
Hero image is also used as the site-wide OG (Open Graph) image.
```

- [ ] **Step 4: Create site-map.md**

Create `docs/architecture/site-map.md`:

```markdown
# Site Map

**Version:** 1.0 (post-migration)

```
https://www.kgolaentle.com
├── /                           Home
│   ├── Hero section
│   ├── Value strip (stats)
│   ├── Why We Exist section
│   ├── Services preview grid → links to /services/[slug]
│   └── CTA banner (Quote / WhatsApp)
│
├── /services                   Services Overview
│   ├── Hero
│   ├── Service detail sections × 4 (alternating layout)
│   └── Quote CTA
│
├── /services/rentals           Kgolaentle Rentals Detail
├── /services/homeware          Opulent Homeware Detail
├── /services/courier           Courier Franchise Detail
├── /services/collections       Kgolaentle Collections Detail
│
├── /about                      About + Team
│   ├── Story section
│   ├── Core values (3 cards)
│   ├── Founder spotlight
│   ├── Team grid
│   └── CTA
│
├── /contact                    Contact + Quote Form
│   ├── Address, phone, email, hours
│   ├── Social links
│   └── ContactForm (Server Action → Resend)
│
├── /faq                        FAQ (accordion)
│
├── /privacy                    Privacy Policy
├── /terms                      Terms of Use
└── /legal                      Legal Notice
```

## External Destinations
- Rentals CTA → https://www.facebook.com/KgolalentleHoldings/
- Homeware CTA → https://www.opulenthomeware.com
- Courier CTA → /contact (internal)
- Collections CTA → https://www.facebook.com/KgolaentleCollections/
```

- [ ] **Step 5: Create vercel-setup.md**

Create `docs/deployment/vercel-setup.md`:

```markdown
# Vercel Setup

## Project Details
- **Vercel project name:** kgolaentle-holdings
- **GitHub repo:** https://github.com/IamFootprint/kgolaentle-holdings-website
- **Framework:** Next.js (auto-detected)
- **Node.js version:** 24 (Vercel default)

## Environment Variables

| Variable | Scope | Purpose |
|----------|-------|---------|
| `RESEND_API_KEY` | Production, Preview | Resend email API key |

To add via CLI:
```bash
vercel env add RESEND_API_KEY
```

## Deployment Commands

```bash
# Link to Vercel project (first time only)
vercel link

# Preview deployment
vercel

# Production deployment
vercel --prod

# View logs
vercel logs

# Rollback
vercel rollback
```

## Domain Configuration
1. In Vercel dashboard → Project → Settings → Domains
2. Add `kgolaentle.com` and `www.kgolaentle.com`
3. Vercel will show required DNS records
4. See dns-cutover.md for the cutover plan

## Post-Resend Domain Verification
Once `kgolaentle.com` is verified in Resend:
1. Change `from` in `src/app/contact/actions.ts` to `"Kgolaentle Holdings <noreply@kgolaentle.com>"`
2. Redeploy: `vercel --prod`
```

- [ ] **Step 6: Create dns-cutover.md**

Create `docs/deployment/dns-cutover.md`:

```markdown
# DNS Cutover Plan

## Pre-Cutover Checklist
- [ ] Production Vercel deployment is live and verified at preview URL
- [ ] Contact form works on preview URL
- [ ] All pages load correctly on preview URL
- [ ] Current DNS records documented below
- [ ] TTL reduced to 300s (done 48h before cutover)
- [ ] Email is confirmed working (send test to info@kgolaentle.com)

## Current DNS (document before touching anything)

Log into Wix DNS panel and record all current records here before making changes:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | (record current value) | (current TTL) |
| CNAME | www | (record current value) | (current TTL) |
| MX | @ | (record ALL MX records) | |
| TXT | @ | (record ALL TXT — SPF, DKIM, DMARC, verification) | |

## DNS Changes Required for Vercel

| Record | Type | Host | Value |
|--------|------|------|-------|
| Apex domain | A | @ | `76.76.21.21` |
| www subdomain | CNAME | www | `cname.vercel-dns.com` |

## Records to PRESERVE (do NOT change)
- All MX records (email routing)
- All TXT records (SPF: `v=spf1 ...`, DKIM: `v=DKIM1 ...`, DMARC: `v=DMARC1 ...`, any domain verification TXT)
- Any SRV records

## Cutover Steps
1. 48h before: reduce TTL on A and CNAME to 300 seconds
2. Cutover window: make changes in Wix DNS panel
   a. Update A record: `@ → 76.76.21.21`
   b. Update CNAME: `www → cname.vercel-dns.com`
3. Wait 5–10 minutes for propagation (TTL is 300s)
4. Verify `https://www.kgolaentle.com` loads from Vercel
5. Verify SSL certificate is active (Vercel auto-provisions Let's Encrypt)
6. Send a test contact form submission
7. Send a test email to info@kgolaentle.com to confirm email still works

## Rollback
If anything goes wrong within the first hour:
1. Restore original A and CNAME values in Wix DNS panel
2. Wix site is still live throughout — it takes effect within 5 minutes (300s TTL)

## Post-Cutover
- [ ] Confirm https://www.kgolaentle.com loads correctly
- [ ] Confirm https://kgolaentle.com redirects to www (Vercel handles this automatically)
- [ ] Confirm contact form email delivered to info@kgolaentle.com
- [ ] Confirm email still works (info@kgolaentle.com receives emails)
- [ ] Only after 24h stable: consider cancelling Wix subscription
```

- [ ] **Step 7: Create form-handling.md**

Create `docs/ops/form-handling.md`:

```markdown
# Form Handling

## Architecture
Contact form at /contact uses a Next.js Server Action (`'use server'`) that calls the Resend API to send email notifications to info@kgolaentle.com.

## Files
- `src/app/contact/actions.ts` — Server Action: validates fields, calls Resend
- `src/components/ContactForm.tsx` — Client component: `useActionState`, pending/success/error states

## Flow
1. User fills form → clicks Submit
2. React 19 `useActionState` sets `isPending = true` (button shows "Sending…")
3. Server Action called with `FormData`
4. Validation: email is required; others optional
5. If `RESEND_API_KEY` absent: console.log + return `{ success: true }` (dev mode)
6. Otherwise: `resend.emails.send()` to info@kgolaentle.com with reply-to set to submitter email
7. On success: form replaced with thank-you message
8. On error: inline error banner shown, form remains

## Environment Variable
```
RESEND_API_KEY=re_...
```
- Get from: https://resend.com → Dashboard → API Keys
- Add to Vercel: `vercel env add RESEND_API_KEY`
- For local dev: `.env.local` (gitignored)

## Resend Domain Verification (required for production)
Before go-live, verify `kgolaentle.com` in Resend:
1. Resend dashboard → Domains → Add Domain → `kgolaentle.com`
2. Add the TXT/MX records Resend provides to your DNS
3. Once verified, change `from` in `actions.ts`:
   ```
   from: "Kgolaentle Holdings <noreply@kgolaentle.com>"
   ```
4. Redeploy

## Testing
Manually: fill out the form at /contact. Check that:
- Submit button shows "Sending…" while pending
- Success state shows green checkmark + "Message Sent!"
- Email arrives at info@kgolaentle.com with correct fields
- Reply-to is set to submitter's email
- Empty email shows inline error
```

- [ ] **Step 8: Create launch-checklist.md**

Create `docs/qa/launch-checklist.md`:

```markdown
# Launch Checklist

**Project:** Kgolaentle Holdings
**Target:** https://www.kgolaentle.com

## Build
- [ ] `next build` exits 0 with no errors
- [ ] `npx tsc --noEmit` shows 0 TypeScript errors
- [ ] `npm run lint` shows no ESLint errors

## Pages
- [ ] / (Home) loads with hero image
- [ ] /services loads, all 4 service cards visible
- [ ] /services/rentals loads correctly
- [ ] /services/homeware loads correctly
- [ ] /services/courier loads correctly
- [ ] /services/collections loads correctly
- [ ] /about loads with team section
- [ ] /contact loads with form and contact info
- [ ] /faq loads with accordion
- [ ] /privacy, /terms, /legal all load

## Navigation
- [ ] All navbar links work (Home, Services, About, Contact)
- [ ] Active state highlights correct page
- [ ] Mobile hamburger menu opens and closes
- [ ] Mobile menu links work and close menu on click
- [ ] Footer links all resolve correctly (no dead links)

## Contact Form
- [ ] Form renders correctly
- [ ] Submit with empty email shows error state
- [ ] Submit with valid data shows "Sending…" then success
- [ ] Email received at info@kgolaentle.com
- [ ] Reply-to set to submitter email

## External Links
- [ ] WhatsApp link (wa.me/27870937316) opens correctly
- [ ] Facebook link opens in new tab
- [ ] Instagram link opens in new tab
- [ ] opulenthomeware.com link opens in new tab

## Responsive
- [ ] Mobile (375px) — homepage, services, contact
- [ ] Tablet (768px) — homepage, services, about
- [ ] Desktop (1280px) — all pages

## SEO
- [ ] /sitemap.xml is accessible and lists all 12 routes
- [ ] /robots.txt references sitemap
- [ ] OG tags render correctly (check via https://opengraph.xyz)
- [ ] Page titles are unique per page (check browser tab)

## Performance
- [ ] Hero image loads with `priority` (no LCP warning in DevTools)
- [ ] No console errors in browser DevTools

## Vercel
- [ ] Preview deployment URL loads correctly
- [ ] Production deployment URL loads correctly
- [ ] SSL certificate active (HTTPS green padlock)
- [ ] www.kgolaentle.com resolves to Vercel
```

- [ ] **Step 9: Create website-handover.md**

Create `docs/handover/website-handover.md`:

```markdown
# Website Handover Guide

**Project:** Kgolaentle Holdings
**URL:** https://www.kgolaentle.com
**Repository:** https://github.com/IamFootprint/kgolaentle-holdings-website
**Hosting:** Vercel
**Date:** 2026-03-27

## What Was Built

A complete holdings marketing website migrated from Wix to Next.js 16 + Vercel, with:
- 12 pages: Home, Services overview, 4 service detail pages, About, Contact, FAQ, Privacy, Terms, Legal
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

To add/update:
```bash
vercel env add RESEND_API_KEY
```

## Rollback

```bash
vercel rollback   # rolls back production to previous deployment
```

Or: promote any previous deployment from the Vercel dashboard.
```

- [ ] **Step 10: Commit all docs**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git add docs/ && git commit -m "docs: add migration audit, architecture, deployment, qa, and handover documentation"
```

---

## Task 11: Vercel deployment

**Prerequisites:** Vercel CLI installed (`npm i -g vercel`) and logged in (`vercel login`).

- [ ] **Step 1: Link project to Vercel**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && vercel link
```

When prompted:
- Set up and deploy: **Y**
- Which scope: select your Vercel account
- Link to existing project: **N** (create new)
- Project name: `kgolaentle-holdings`
- Directory: `./` (default)

Expected: `.vercel/project.json` created. Do NOT commit this file (it should be gitignored).

- [ ] **Step 2: Add RESEND_API_KEY to Vercel**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && vercel env add RESEND_API_KEY
```

When prompted:
- Value: paste your Resend API key
- Environments: select **Production**, **Preview**, **Development**

- [ ] **Step 3: Create preview deployment**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && vercel 2>&1
```

Expected: outputs a preview URL like `https://kgolaentle-holdings-xxx.vercel.app`.

Open the preview URL in a browser and verify:
- Homepage loads
- All 4 service detail pages load
- Contact form submits (check email)
- No console errors

- [ ] **Step 4: Add custom domain in Vercel dashboard**

1. Go to https://vercel.com/dashboard → select `kgolaentle-holdings` project
2. Settings → Domains
3. Add `www.kgolaentle.com`
4. Add `kgolaentle.com`
5. Note the DNS records Vercel requires (should be A `76.76.21.21` and CNAME `cname.vercel-dns.com`)
6. Do NOT change DNS yet — see Task 12 for the cutover plan

- [ ] **Step 5: Create production deployment**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && vercel --prod 2>&1
```

Expected: production deployment URL, pointing to the domains added in Step 4. DNS is not yet switched, so the custom domain shows "Invalid Configuration" — this is expected until DNS is updated.

- [ ] **Step 6: Log deployment to OpenBrain**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- knowledge add \
  --project "KgolaentleHoldings" \
  --domain "engineering" \
  --title "deployment — Vercel preview and production deployed (2026-03-27)" \
  --tags "vercel,deployment,hosting" \
  --content "## Status
Vercel project: kgolaentle-holdings
GitHub: https://github.com/IamFootprint/kgolaentle-holdings-website
Preview URL: (paste preview URL here)
Production deployment: ready (pending DNS cutover)
Custom domains added in Vercel dashboard: kgolaentle.com, www.kgolaentle.com

## Pending
- DNS cutover: follow docs/deployment/dns-cutover.md
- Resend domain verification: add TXT/MX records for kgolaentle.com in Resend dashboard
- After domain verification: update from address in src/app/contact/actions.ts"
```

---

## Task 12: Final push + session close

- [ ] **Step 1: Confirm git status is clean**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git status 2>&1
```

Expected: `nothing to commit, working tree clean`. If there are uncommitted changes, stage and commit them.

- [ ] **Step 2: Push all commits to GitHub**

```bash
cd /Users/shimane/Projects/MobileApps/kgolaentle-holdings && git push origin main 2>&1
```

Expected: all commits pushed, up to date.

- [ ] **Step 3: Final OpenBrain session log**

```bash
cd /Users/shimane/Projects/MobileApps/OpenBrain/backend && pnpm brain -- knowledge add \
  --project "KgolaentleHoldings" \
  --domain "engineering" \
  --title "session-close — Wix-to-Vercel migration complete (2026-03-27)" \
  --tags "migration,complete,handover,vercel,next.js" \
  --content "## Root Cause
Wix site had no maintainable codebase, no form backend, no individual service pages, and no developer control over deployment.

## The clues that pointed here
- Contact form was UI-only with no submit action
- Service cards all linked to /services (no detail pages)
- No sitemap or robots.txt
- No Vercel project or deployment
- OpenBrain had no KgolaentleHoldings project

## Fix Applied
1. Created shared service data module (src/data/services.ts)
2. Added individual service detail pages (/services/[slug])
3. Updated all service links to point to detail pages
4. Added Server Action form backend with Resend
5. Created ContactForm client component with useActionState
6. Added sitemap.ts, robots.ts, OG metadata
7. Deployed to Vercel (preview + production)
8. Created complete documentation suite
9. Added KgolaentleHoldings OpenBrain project

## Result
Full Next.js 16 website live on Vercel, all 12 pages, working contact form, SEO-complete, documented, and pushed to GitHub.

## Remaining Manual Steps
1. DNS cutover: reduce Wix TTL to 300s 48h before, then update A/CNAME
2. Resend domain verification: add TXT/MX for kgolaentle.com in Resend dashboard
3. Update from address in actions.ts after domain verified
4. Cancel Wix subscription after 24h stable on new hosting"
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ OpenBrain setup (Task 1, 9, 11, 12)
- ✅ Individual service pages (Tasks 2, 3, 4)
- ✅ Form backend (Tasks 5, 6, 7)
- ✅ SEO (Task 8)
- ✅ Build verification (Task 9)
- ✅ Documentation suite (Task 10)
- ✅ Vercel deployment (Task 11)
- ✅ DNS cutover plan (Task 10, Step 6)
- ✅ Git push (Task 12)
- ✅ Handover doc (Task 10, Step 9)

**Type consistency:**
- `ActionResult` defined in `actions.ts` (Task 5), imported in `ContactForm.tsx` (Task 6) — consistent
- `Service` type defined in `services.ts` (Task 2), used in `[slug]/page.tsx` (Task 3) — consistent
- `useActionState(submitContactForm, initialState)` — `submitContactForm` signature `(_prev: ActionResult | null, formData: FormData): Promise<ActionResult>` matches React 19 `useActionState` requirements
