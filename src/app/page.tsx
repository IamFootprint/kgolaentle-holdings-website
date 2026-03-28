import Image from "next/image";
import Link from "next/link";
import { services as allServices } from "@/data/services";

const services = allServices.map((s) => ({
  name: s.name,
  image: s.image,
  description: s.description,
  href: `/services/${s.slug}`,
}));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-serving-lunch.jpg"
          alt="Kgolaentle Holdings team member delivering service"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
          <div className="max-w-2xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-6">
                Kgolaentle Holdings
              </span>
            </div>
            <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Your community
              <br />
              deserves{" "}
              <span className="text-gradient">world-class</span>
              <br />
              service
            </h1>
            <p className="animate-fade-in-up animate-delay-200 text-lg md:text-xl text-gray-300 max-w-lg mb-10 leading-relaxed">
              From rentals to technology, courier to beauty — excellence and
              innovation, right where you are.
            </p>
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
              >
                Explore Our Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all text-[15px]"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="bg-secondary py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "4", label: "Business Portfolios" },
              { num: "6+", label: "Regions Served" },
              { num: "100%", label: "Client Commitment" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-accent font-heading font-bold text-2xl">{stat.num}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-28 bg-warm-white relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Why We Exist
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight mb-8">
                Built from <em className="not-italic text-primary">belief</em>,
                <br />not just business
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong className="text-secondary">Kgolaentle</strong> was founded
                on the belief that our country deserves services that reflect its
                spirit — vibrant, resilient, and world-class.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                For over a decade, we have gone beyond service delivery by bringing
                care, professionalism, and dignity to every interaction, every
                delivery, and every event we touch.
              </p>

              {/* Values */}
              <div className="flex gap-8">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Trust" },
                  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Collaboration" },
                  { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Growth" },
                ].map((v) => (
                  <div key={v.label} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-secondary">{v.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image composition */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/about-fertilizer.jpg"
                  alt="Kgolaentle Holdings operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-heading font-bold">10+</p>
                <p className="text-sm text-white/80 mt-1">Years of industry<br />experience</p>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-28 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-secondary mb-5">
              Services built around you
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Four distinct portfolios, one shared promise: quality, innovation,
              and care in everything we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.name}
                href={service.href}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all text-[15px]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
        <div className="absolute inset-0 noise-overlay opacity-30" />
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to experience the
            <br />
            <em className="not-italic text-accent">Kgolaentle</em> difference?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Whether it&apos;s an event, a delivery, a tech solution, or a beauty
            experience — we&apos;re here to serve you with excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-accent hover:text-secondary transition-all text-[15px] shadow-xl"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/27870937316"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-[15px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
