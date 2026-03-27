# Launch Checklist

**Project:** Kgolaentle Holdings
**Target:** https://www.kgolaentle.com

## Build
- [ ] `next build` exits 0 with no errors
- [ ] `npx tsc --noEmit` shows 0 TypeScript errors

## Pages
- [ ] / (Home) loads with hero image
- [ ] /services loads, all 4 service cards visible
- [ ] /services/rentals loads correctly
- [ ] /services/courier loads correctly
- [ ] /services/technology loads correctly
- [ ] /services/beauty loads correctly
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
- [ ] Submit with malformed email shows validation error
- [ ] Submit with valid data shows "Sending…" then success
- [ ] Email received at info@kgolaentle.com
- [ ] Reply-to set to submitter email

## External Links
- [ ] WhatsApp link (wa.me/27870937316) opens correctly
- [ ] Facebook link opens in new tab
- [ ] Instagram link opens in new tab
- [ ] opulentbeauty.co.za link opens in new tab

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
