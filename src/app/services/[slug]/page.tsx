import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | Kgolaentle Holdings`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 900 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const idx = services.indexOf(service);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            0{idx + 1}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            {service.name}
          </h1>
          <p className="text-xl text-accent font-heading italic">
            &ldquo;{service.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                About This Service
              </span>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                What we offer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              <h3 className="text-xl font-heading font-bold text-secondary mb-5">
                What&apos;s included
              </h3>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    service.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 text-[15px]"
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4 ml-2"
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
                <a
                  href="https://wa.me/27870937316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-secondary font-semibold rounded-full hover:border-primary hover:text-primary transition-all text-[15px]"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-warm-gray rounded-2xl p-6">
                <h3 className="font-heading font-bold text-secondary text-lg mb-3">
                  Need a quote?
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>

              <div className="bg-warm-gray rounded-2xl p-6">
                <h3 className="font-heading font-bold text-secondary text-lg mb-4">
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-gray-500 text-sm hover:text-primary transition-colors"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us today and experience the Kgolaentle difference.
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
