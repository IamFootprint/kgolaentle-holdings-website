# DNS Cutover — Completed

> **Status: COMPLETE** (April 2026)
> The site is live at https://kgolaentle.com via Cloudflare Workers. DNS is managed entirely within Cloudflare.

---

## Current DNS (Cloudflare Zone: kgolaentle.com)

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| CNAME | `@` (apex) | `kgolaentle-holdings-website.lebogang.workers.dev` | Proxied |
| CNAME | `www` | `kgolaentle-holdings-website.lebogang.workers.dev` | Proxied |
| MX | `@` | (email routing — do not touch) | DNS only |
| TXT | `@` | SPF, DKIM, DMARC (email auth — do not touch) | DNS only |

## Deployment Target
Worker: `kgolaentle-holdings-website` (Cloudflare Workers)
See [cloudflare-workers-setup.md](./cloudflare-workers-setup.md) for deployment procedures.

---

## Historical: Pre-Migration DNS (Vercel, pre-April 2026)

| Type | Host | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

This is retained for reference only. These records are no longer in use.
