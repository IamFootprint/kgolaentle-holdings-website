# Form Handling

## Architecture
Contact form at /contact uses a Next.js Server Action (`'use server'`) that calls the Resend API to send email notifications to info@kgolaentle.com.

## Files
- `src/app/contact/actions.ts` — Server Action: validates fields, sanitizes inputs, calls Resend
- `src/components/ContactForm.tsx` — Client component: `useActionState`, pending/success/error states

## Flow
1. User fills form → clicks Submit
2. React 19 `useActionState` sets `isPending = true` (button shows "Sending…")
3. Server Action called with `FormData`
4. Validation: email is required and must match basic format; other fields optional
5. If `RESEND_API_KEY` absent: console.log + return `{ success: true }` (dev mode)
6. Otherwise: `resend.emails.send()` to info@kgolaentle.com with reply-to set to submitter email
7. On success: form replaced with thank-you message
8. On error: inline error banner shown, form remains

## Input Sanitization
All user-supplied values are HTML-escaped before interpolation into the email body via an `escapeHtml()` helper in `actions.ts`. This prevents HTML injection in the notification email.

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

## Service Pre-population

The contact form accepts a `service` query param (e.g. `/contact?service=rentals`) that pre-selects the correct dropdown option. The `serviceLabels` map used by the form:

```
rentals: "Kgolaentle Rentals"
courier: "Courier Services"
technology: "Technology Solutions"
beauty: "Opulent Beauty"
other: "General Inquiry"
```

## Testing
Manually: fill out the form at /contact. Check that:
- Submit button shows "Sending…" while pending
- Success state shows green checkmark + "Message Sent!"
- Email arrives at info@kgolaentle.com with correct fields
- Reply-to is set to submitter's email
- Empty email shows inline error
- Malformed email (missing @) shows validation error
