import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
};

const team = [
  {
    name: "Masego Mafoko",
    role: "CEO & Founder",
    image: "/images/team-ceo.jpg",
    bio: "With over 10 years in Communications, PR, and Marketing, Masego built Kgolaentle Holdings on a simple belief: her community deserves the same quality of service found anywhere in the world. She also brings extensive experience in running e-commerce businesses. A passionate cross-training athlete and long-distance runner, she channels the same relentless dedication into every venture.",
    featured: true,
  },
  {
    name: "Thabang Moreo",
    role: "Courier Services",
    image: "/images/team-courier.png",
    bio: "Renowned for exceptional service, Thabang has become a trusted figure among our clientele. His professionalism and punctuality make him a linchpin of our delivery operations.",
    motto: "Every package is a promise, and it's my job to fulfill it.",
    featured: false,
  },
  {
    name: "Kagiso Tsele",
    role: "Mobile Units Caretaker",
    image: "/images/team-kagiso-tsele.png",
    bio: "Known as Majozi to the team, Kagiso is the guardian of our mobile units. His meticulous attention to detail ensures every unit is in impeccable condition and ready for service.",
    motto: "Every unit is an extension of our service.",
    featured: false,
  },
  {
    name: "Kagiso Modise",
    role: "Mobile Units Caretaker",
    image: "/images/team-kagiso-modise.png",
    bio: "Known as KG, his keen eye for detail and steadfast commitment to maintaining the highest standards ensure all mobile units are pristine and fully functional.",
    motto: "Clean units, clear conscience — that's the standard I hold myself to.",
    featured: false,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built from belief, driven by purpose, powered by people who care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/about-fertilizer.jpg"
                  alt="Kgolaentle Holdings community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-3xl -z-10" />
            </div>

            <div>
              <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Get to Know Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-8 leading-tight">
                A diversified enterprise
                <br />rooted in <em className="not-italic text-primary">community</em>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Kgolaentle was born from a simple observation: the communities of
                  the Rustenburg region deserved the same standard of service as
                  anywhere else in the country — professional, reliable, and dignified.
                  Masego Mafoko built the company to close that gap, portfolio by portfolio.
                </p>
                <p>
                  Our portfolios include <strong className="text-secondary">Kgolaentle Rentals</strong>,
                  offering top-of-the-line equipment rentals for events;{" "}
                  <strong className="text-secondary">Courier Services</strong> serving the
                  Rustenburg Region;{" "}
                  <strong className="text-secondary">Technology Solutions</strong>, delivering
                  innovative tech services to businesses and individuals; and{" "}
                  <strong className="text-secondary">Opulent Beauty</strong>, our premium beauty
                  brand.
                </p>
                <p>
                  We take pride in consistently exceeding customer expectations and
                  setting the benchmark for excellence across every business we touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm-gray relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trust",
                description: "We build lasting relationships through transparency, reliability, and consistent delivery on our promises.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Collaboration",
                description: "We foster a supportive work environment where innovation thrives, enabling us to adapt to the ever-changing needs of our clients.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Continuous Improvement",
                description: "We never settle. Every day is an opportunity to raise the bar and deliver an even better experience for our clients.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              Our People
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-4">
              The heart behind the holdings
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every member of our team shares one belief: your experience matters
              more than our bottom line.
            </p>
          </div>

          {/* Founder spotlight */}
          <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="absolute inset-0 noise-overlay opacity-10" />
            <div className="relative grid md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 aspect-square md:aspect-auto min-h-[300px]">
                <Image
                  src="/images/team-ceo.jpg"
                  alt="Masego Mafoko, CEO & Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-secondary/50 to-transparent" />
              </div>
              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
                  Founder & CEO
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                  Masego Mafoko
                </h3>
                <div className="w-16 h-0.5 bg-accent mb-6" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over 10 years in Communications, PR, and Marketing, Masego
                  built Kgolaentle Holdings on a simple belief: her community
                  deserves the same quality of service found anywhere in the world.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Her vision is to become a provider of exceptional services across
                  diverse industries, setting the benchmark for quality, innovation,
                  and customer satisfaction. A passionate cross-training athlete and
                  long-distance runner, she brings the same relentless dedication to
                  every venture.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <a href="mailto:info@kgolaentle.com" className="hover:text-accent transition-colors">
                    info@kgolaentle.com
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="tel:+27870937316" className="hover:text-accent transition-colors">
                    +27 (0) 87 093 7316
                  </a>
                </div>
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-secondary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {member.bio}
                    </p>
                    {member.motto && (
                      <p className="text-sm text-accent italic font-heading">
                        &ldquo;{member.motto}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary mb-4">
            Want to work with us?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Ready to work with us? Tell us about your event, delivery, or project.
            We&apos;ll respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
