import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Kgolaentle Rentals",
    image: "/images/service-rentals.jpg",
    description:
      "Every celebration deserves to feel extraordinary. Our premium VIP mobile toilets and freezers bring comfort and convenience wherever your event takes you.",
    cta: "Book a Rental",
    href: "https://www.facebook.com/KgolalentleHoldings/",
  },
  {
    name: "Opulent Homeware",
    image: "/images/service-homeware.jpg",
    description:
      "Your home should reflect who you are. Our curated collection of elegant dinnerware, luxurious bedding, and unique accessories elevates every living space.",
    cta: "Shop Now",
    href: "https://www.opulenthomeware.com",
  },
  {
    name: "Courier Franchise",
    image: "/images/service-courier.jpg",
    description:
      "Your community deserves deliveries you can count on. We serve Sun City, Ledig, Mogwase, Hartebeesfontein, Moruleng and the greater Rustenburg region with care.",
    cta: "Send a Package",
    href: "#contact",
  },
  {
    name: "Kgolaentle Collections",
    image: "/images/service-collections.jpg",
    description:
      "Fashion that tells your story. Our exclusive line blends timeless elegance with contemporary African design, crafted by skilled artisans.",
    cta: "Explore Collection",
    href: "https://www.facebook.com/KgolaentleCollections/",
  },
];

const team = [
  {
    name: "Masego Mafoko",
    role: "CEO & Founder",
    image: "/images/team-ceo.jpg",
    bio: "With over 10 years in Communications, PR, and Marketing, Masego built Kgolaentle Holdings on a simple belief: her community deserves the same quality of service found anywhere in the world. A passionate cross-training athlete and long-distance runner, she brings the same relentless dedication to every venture.",
    featured: true,
  },
  {
    name: "Thabang Moreo",
    role: "Courier Services",
    image: "/images/team-courier.png",
    bio: '"Every package is a promise, and it\'s my job to fulfill it."',
    featured: false,
  },
  {
    name: "Kagiso Tsele",
    role: "Mobile Units Rentals",
    image: "/images/team-kagiso-tsele.png",
    bio: '"Every unit is an extension of our service."',
    featured: false,
  },
  {
    name: "Kagiso Modise",
    role: "Mobile Units Rentals",
    image: "/images/team-kagiso-modise.png",
    bio: '"Every unit is a reflection of our service."',
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Kgolaentle Holdings"
                width={48}
                height={48}
                className="h-10 w-auto"
              />
              <span className="text-lg font-heading font-bold text-secondary hidden sm:inline">
                Kgolaentle Holdings
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#why"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Our Story
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#team"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                Get a Quote
              </a>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              aria-label="Open menu"
              id="mobile-menu-btn"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-serving-lunch.jpg"
          alt="Kgolaentle Holdings team member delivering service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Kgolaentle Holdings
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Your community deserves{" "}
            <span className="text-accent">world-class</span> service
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Where innovation meets the needs of our people. From rentals to
            fashion, courier to homeware — excellence, right where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#why"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-lg"
            >
              Discover Our Story
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-colors text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* WHY Section — The Purpose */}
      <section id="why" className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                Our Why
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                Built from belief, not just business
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kgolaentle — meaning &ldquo;beautiful&rdquo; in Setswana — was
                born from a conviction that the Rustenburg region deserves
                services that match its spirit: vibrant, resilient, and
                world-class.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by Masego Mafoko, a Communications and Marketing
                professional with over a decade of experience, Kgolaentle
                Holdings doesn&apos;t just deliver services — we invest in the
                dignity of every interaction, every delivery, every event we
                touch.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-secondary">Trust</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-secondary">
                    Collaboration
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-secondary">
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-fertilizer.jpg"
                  alt="Kgolaentle Holdings community operations"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg max-w-[200px]">
                <p className="text-3xl font-heading font-bold">10+</p>
                <p className="text-sm text-white/80">
                  Years of industry experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — The WHAT */}
      <section id="services" className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Services built around you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four distinct portfolios, one shared promise: quality, innovation,
              and care in everything we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-secondary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      service.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    {service.cta}
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Our People
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              The heart behind the holdings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every member of our team shares one belief: your experience
              matters more than our bottom line.
            </p>
          </div>

          {/* Founder spotlight */}
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto">
                <Image
                  src="/images/team-ceo.jpg"
                  alt="Masego Mafoko, CEO & Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
                  Founder
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Masego Mafoko
                </h3>
                <p className="text-accent text-sm font-medium mb-4">
                  CEO & Founder
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With over 10 years in Communications, PR, and Marketing,
                  Masego built Kgolaentle Holdings on a simple belief: her
                  community deserves the same quality of service found anywhere
                  in the world. A passionate cross-training athlete and
                  long-distance runner, she brings the same relentless
                  dedication to every venture.
                </p>
              </div>
            </div>
          </div>

          {/* Team grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {team
              .filter((m) => !m.featured)
              .map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 italic">{member.bio}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Whether you need rental equipment for an event, reliable courier
                service, or just want to say hello — we&apos;re here for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Address</p>
                    <p className="text-gray-600">
                      Blairgowrie Section, Chaneng, NW 0310
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Phone</p>
                    <a
                      href="tel:+27870937316"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +27 (0) 87 093 7316
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Email</p>
                    <a
                      href="mailto:info@kgolaentle.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      info@kgolaentle.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Hours</p>
                    <p className="text-gray-600">Mon – Fri: 8:00 – 18:00</p>
                    <p className="text-gray-600">Saturday: 9:00 – 14:00</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://wa.me/27870937316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/KgolalentleHoldings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kgolaentleholdings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-secondary mb-6">
                Get a Free Quote
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="rentals">Kgolaentle Rentals</option>
                    <option value="homeware">Opulent Homeware</option>
                    <option value="courier">Courier Services</option>
                    <option value="collections">Kgolaentle Collections</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-xl font-heading font-bold text-white mb-2">
                Kgolaentle Holdings
              </p>
              <p className="text-gray-400 text-sm">
                Your community deserves world-class service.
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="#why"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Our Story
              </a>
              <a
                href="#services"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#team"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Kgolaentle Holdings. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
