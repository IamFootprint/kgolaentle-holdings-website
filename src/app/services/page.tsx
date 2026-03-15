import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
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
    href: "https://www.facebook.com/KgolalentleHoldings/",
    accent: "from-primary to-primary-dark",
  },
  {
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four distinct portfolios united by one promise — delivering quality,
            innovation, and care to our community.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-32">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-20`} />
                </div>
                {/* Decorative */}
                <div className={`absolute -bottom-4 ${i % 2 === 1 ? "-right-4" : "-left-4"} w-full h-full border-2 border-accent/20 rounded-3xl -z-10`} />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                  0{i + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-3">
                  {service.name}
                </h2>
                <p className="text-lg text-primary font-medium italic font-heading mb-6">
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center px-7 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 text-[15px]"
                >
                  {service.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Get in touch and we&apos;ll help you find the perfect solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
