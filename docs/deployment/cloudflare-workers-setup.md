# Cloudflare Workers Setup

## Project Details
- **Worker name:** `kgolaentle-holdings-website`
- **Cloudflare account:** `lebogang`
- **Workers.dev URL:** https://kgolaentle-holdings-website.lebogang.workers.dev
- **Custom domain:** https://kgolaentle.com
- **GitHub repo:** https://github.com/IamFootprint/kgolaentle-holdings-website
- **Framework:** Next.js via `@opennextjs/cloudflare` v1.19.1
- **Runtime:** `nodejs_compat` flag (Cloudflare Workers)

## Key Files
| File | Purpose |
|------|---------|
| `wrangler.jsonc` | Worker configuration (bindings, name, compatibility) |
| `open-next.config.ts` | OpenNext Cloudflare adapter config |
| `next.config.ts` | Next.js config (no `output: "standalone"`) |

`wrangler.jsonc` summary:
```jsonc
{
  "main": ".open-next/worker.js",
  "name": "kgolaentle-holdings-website",
  "compatibility_date": "2026-04-18",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "services": [{ "binding": "WORKER_SELF_REFERENCE", "service": "kgolaentle-holdings-website" }],
  "images": { "binding": "IMAGES" }
}
```

## Environment Variables / Secrets

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend email API key (contact form) |

Add or rotate via Wrangler:
```bash
wrangler secret put RESEND_API_KEY
```

List configured secrets:
```bash
wrangler secret list
```

## Deployment Commands

```bash
# Local dev (Next.js dev server, not Worker runtime)
npm run dev

# Local preview in actual Worker runtime
npm run preview

# Build + deploy to Cloudflare Workers
npm run deploy

# Build only (produces .open-next/)
opennextjs-cloudflare build

# Deploy pre-built artefact
opennextjs-cloudflare deploy

# View live logs (tail)
wrangler tail kgolaentle-holdings-website

# View worker info
wrangler deployments list
```

## Domain Configuration
DNS is managed in the Cloudflare dashboard (zone: `kgolaentle.com`).

Current live records:
| Type | Name | Value |
|------|------|-------|
| CNAME | `kgolaentle.com` | `kgolaentle-holdings-website.lebogang.workers.dev` (proxied) |
| CNAME | `www` | `kgolaentle-holdings-website.lebogang.workers.dev` (proxied) |

The worker is also accessible directly at the workers.dev URL without a custom domain.

## Browser Integrity Check Note
Cloudflare's **Browser Integrity Check** is enabled on the zone. Requests with non-browser User-Agents (e.g. `curl`, monitoring probes) will receive `403 error code: 1010`. This is expected. Use a real browser or configure an appropriate UA allowlist rule in the Cloudflare WAF if needed for uptime monitoring.

## Post-Resend Domain Verification
Once `kgolaentle.com` is verified in Resend:
1. Change `from` in `src/app/contact/actions.ts` to `"Kgolaentle Holdings <noreply@kgolaentle.com>"`
2. Redeploy: `npm run deploy`

## Rollback
```bash
# List recent deployments
wrangler deployments list

# Roll back to a specific version ID
wrangler rollback <version-id>
```
