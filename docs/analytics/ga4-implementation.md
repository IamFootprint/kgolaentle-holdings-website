# GA4 Implementation

## Architecture
Analytics injected via `src/components/Analytics.tsx` (Server Component) added to `src/app/layout.tsx`.

## Environment Variable
| Variable | Scope | Value |
|----------|-------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production, Preview | G-XXXXXXXXXX (get from GA4 dashboard) |

## Adding the Real Measurement ID
```bash
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
vercel --prod
```

## Disabling Analytics
Remove or unset `NEXT_PUBLIC_GA_MEASUREMENT_ID` — component returns null and no scripts are injected.
