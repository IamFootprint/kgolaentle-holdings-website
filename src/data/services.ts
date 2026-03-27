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
  serviceType: "rentals" | "courier" | "technology" | "beauty";
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
    cta: "Get a Quote",
    href: "/contact?service=rentals",
    accent: "from-primary to-primary-dark",
    serviceType: "rentals",
  },
  {
    slug: "courier",
    name: "Courier Services",
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
    cta: "Contact Us",
    href: "/contact?service=courier",
    accent: "from-secondary to-gray-800",
    serviceType: "courier",
  },
  {
    slug: "technology",
    name: "Technology Solutions",
    image: "/images/service-technology.jpg",
    tagline: "Strategy, systems, and execution — built for the real world",
    description:
      "We help founders, operators, and enterprise teams design, build, and deploy digital platforms that work. From product strategy and architecture to AI-enabled workflows and full-stack delivery, we bring clarity and execution to complex technology problems.",
    features: [
      "Digital platform design and product strategy",
      "Web and mobile application delivery",
      "AI-enabled workflows and automation",
      "Enterprise architecture and technology leadership",
    ],
    cta: "Book a Consultation",
    href: "/contact?service=technology",
    accent: "from-blue-700 to-blue-900",
    serviceType: "technology",
  },
  {
    slug: "beauty",
    name: "Opulent Beauty",
    image: "/images/service-beauty.jpg",
    tagline: "Curated beauty experiences, crafted with care",
    description:
      "Opulent Beauty brings together premium beauty services and products in an environment designed for those who appreciate quality. Whether you are treating yourself or someone special, we deliver an elevated beauty experience.",
    features: [
      "Premium beauty services and treatments",
      "Curated beauty products",
      "Professional and welcoming environment",
      "Visit us at Opulent Beauty",
    ],
    cta: "Visit Opulent Beauty",
    href: "https://opulentbeauty.co.za",
    accent: "from-rose-600 to-pink-700",
    serviceType: "beauty",
  },
];
