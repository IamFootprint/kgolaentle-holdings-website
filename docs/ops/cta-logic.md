# CTA Logic — Service Pages

Each service has a different primary CTA on its detail page (`/services/[slug]`).

## CTA Matrix

| Service | serviceType | Primary CTA Label | Primary CTA Destination | WhatsApp Button |
|---------|-------------|-------------------|------------------------|-----------------|
| Kgolaentle Rentals | `rentals` | Get a Rental Quote | `/contact?service=rentals` | Yes |
| Courier Services | `courier` | Courier Enquiries | `/contact?service=courier` | Yes |
| Technology Solutions | `technology` | Book a Consultation | `/contact?service=technology` | No |
| Opulent Beauty | `beauty` | Visit Opulent Beauty | `https://opulentbeauty.co.za` (external) | No |

## Implementation

- `src/data/services.ts` — each service has `cta.label`, `cta.href`, and `serviceType` fields
- `src/app/services/[slug]/page.tsx` — `ServiceCTA` component reads `serviceType` to render the correct CTA variant
- WhatsApp button in the main body is conditionally rendered for `rentals` and `courier` only

## Contact Form Pre-population

When a user clicks a contact-form CTA (rentals, courier, technology), the destination is `/contact?service=<serviceType>`. The contact form reads the `service` query param and pre-selects the correct dropdown option.
