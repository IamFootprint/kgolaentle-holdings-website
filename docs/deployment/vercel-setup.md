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
