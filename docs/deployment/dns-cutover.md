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
