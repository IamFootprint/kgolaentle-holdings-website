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
    cta: "Book a Rental",
    href: "https://www.facebook.com/KgolaentleHoldings/",
    accent: "from-primary to-primary-dark",
  },
  {
    slug: "homeware",
    name: "Opulent Homeware",
    image: "/images/service-homeware.jpg",
    tagline: "Your home should reflect who you are",
    description:
      "A curated online store featuring exquisite homeware products designed to elevate the aesthetics and functionality of your living spaces. From elegant dinnerware to luxurious bedding and unique accessories.",
    features: [
      "Curated premium collections",
      "Elegant dinnerware & bedding",
      "Unique home accessories",
      "Convenient online shopping",
    ],
    cta: "Shop Now",
    href: "https://www.opulenthomeware.com",
    accent: "from-accent to-accent-light",
  },
  {
    slug: "courier",
    name: "Courier Franchise",
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
    cta: "Send a Package",
    href: "/contact",
    accent: "from-secondary to-gray-800",
  },
  {
    slug: "collections",
    name: "Kgolaentle Collections",
    image: "/images/service-collections.jpg",
    tagline: "Fashion that tells your story",
    description:
      "Our exclusive fashion line blends timeless elegance with contemporary African design. Collaborating with skilled artisans, we ensure exceptional craftsmanship in every piece.",
    features: [
      "Contemporary African design",
      "Skilled artisan craftsmanship",
      "Casual and formal collections",
      "Unique statement pieces",
    ],
    cta: "Explore Collection",
    href: "https://www.facebook.com/KgolaentleCollections/",
    accent: "from-purple-600 to-pink-500",
  },
];
