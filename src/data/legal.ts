import { services, type Service } from "@/data/services";

// Set this to the adoption date of the Privacy Notice before deployment.
export const LEGAL_EFFECTIVE_DATE = "To be confirmed";
export const LEGAL_VERSION = "1.0";

export const LEGAL_NAME = "Kgolaentle Holdings (Pty) Ltd";
export const REGISTRATION_NUMBER = "2015/297306/07";

export const ADDRESS = {
  street: "1107 Blairgowrie Section",
  area: "Chaneng",
  city: "Rustenburg",
  postalCode: "0310",
  province: "North West",
  country: "South Africa",
} as const;

export const ADDRESS_LINES = [
  `${ADDRESS.street}, ${ADDRESS.area}`,
  `${ADDRESS.city}, ${ADDRESS.postalCode}`,
  `${ADDRESS.province}, ${ADDRESS.country}`,
] as const;

export const REGISTERED_ADDRESS = ADDRESS_LINES.join(", ");

export const INFORMATION_OFFICER_NAME = "Masego Mafoko";
export const INFORMATION_OFFICER_FULL_NAME = "Emma Masego Mafoko";
export const INFORMATION_OFFICER_EMAIL = "masego@kgolaentle.com";

export const CONTACT_EMAIL = "info@kgolaentle.com";
export const CONTACT_PHONE = "+27 (0) 87 093 7316";
export const CONTACT_PHONE_HREF = "tel:+27870937316";
export const WEBSITE_LABEL = "www.kgolaentle.com";
export const WEBSITE_URL = "https://www.kgolaentle.com";

// One plain phrase per portfolio, in the wording of the Privacy Notice.
// Keyed by serviceType so a portfolio added to services.ts fails the build
// until it is described here.
const portfolioSummaries: Record<Service["serviceType"], string> = {
  rentals: "VIP mobile toilet trailers, mobile freezers and event trailers",
  courier: "a licensed Fastway Couriers franchise",
  technology: "web, mobile, WhatsApp and AI-enabled platforms",
  beauty: "a nail and beauty salon",
};

export type Portfolio = {
  slug: string;
  name: string;
  summary: string;
  sentence: string;
};

// Names and order come from services.ts so the legal pages follow the
// services pages.
export const portfolios: Portfolio[] = services.map((service) => {
  const summary = portfolioSummaries[service.serviceType];
  return {
    slug: service.slug,
    name: service.name,
    summary,
    sentence: `${summary.charAt(0).toUpperCase()}${summary.slice(1)}.`,
  };
});

// "A (x), B (y), C (z) and D (w)"
export const portfoliosInline = portfolios
  .map((portfolio) => `${portfolio.name} (${portfolio.summary})`)
  .reduce((text, item, index, items) => {
    if (index === 0) return item;
    return `${text}${index === items.length - 1 ? " and " : ", "}${item}`;
  }, "");
