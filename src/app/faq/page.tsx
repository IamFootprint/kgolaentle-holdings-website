import type { Metadata } from "next";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqs = [
  {
    question: "What services does Kgolaentle Holdings offer?",
    answer:
      "Kgolaentle Holdings operates four service divisions: Kgolaentle Rentals (VIP mobile toilets and mobile freezers for events), Courier Services (last-mile delivery across the Rustenburg region), Technology Solutions (digital platform design, development, and AI-enabled workflows for businesses), and Opulent Beauty (premium beauty services and products).",
  },
  {
    question: "Which areas do you service?",
    answer:
      "Our rental services are available across the North West province and surrounding areas. Our Courier Franchise operates specifically in the Rustenburg region, covering Sun City, Ledig, Mogwase, Hartebeesfontein, Moruleng, and surrounding communities. Technology Solutions and Opulent Beauty serve clients across South Africa.",
  },
  {
    question: "How do I book VIP mobile toilets or freezers for my event?",
    answer:
      "You can book our rental units by contacting us via phone at +27 (0) 87 093 7316, emailing info@kgolaentle.com, or using the contact form on our website. Please provide your event date, location, expected number of guests, and the type and quantity of units you require. We recommend booking at least two weeks in advance to ensure availability.",
  },
  {
    question: "Can I customise my rental package?",
    answer:
      "Yes. All rental packages are tailored to your event's specific requirements. Whether it's a small private function or a large corporate gathering, we can configure the right combination of units, delivery schedules, and maintenance to fit your needs and budget. Contact us for a no-obligation quote.",
  },
  {
    question: "How long does courier delivery take in the Rustenburg region?",
    answer:
      "Standard courier deliveries within the Rustenburg region, including Sun City, Ledig, Mogwase, and Hartebeesfontein, are typically completed within 1 to 3 business days. Express delivery options may be available depending on the package size and destination. Contact us for specific delivery timelines for your area.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept EFT (Electronic Funds Transfer), bank deposits, and major credit and debit cards. For rental bookings, a deposit may be required to secure your reservation, with the balance due before the event date. Payment details are provided upon confirmation of your booking.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We aim to respond to all enquiries within 24 hours. Rental deliveries and collections for events may be arranged outside of standard business hours by prior agreement. Contact us at info@kgolaentle.com or +27 (0) 87 093 7316 to discuss your requirements.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Request a free, no-obligation quote by calling us at +27 (0) 87 093 7316, emailing info@kgolaentle.com, or filling out the contact form on our website. Please include as much detail as possible about your requirements. We typically respond within 24 hours on business days.",
  },
  {
    question: "Are your VIP mobile toilets and freezers available for long-term hire?",
    answer:
      "Yes, we offer both short-term and long-term rental options. Whether you need units for a single-day event or a multi-week project, we can accommodate your needs. Long-term rentals may qualify for discounted rates. Contact us to discuss your specific requirements and receive a tailored quote.",
  },
  {
    question: "What does the Technology Solutions service cover?",
    answer:
      "Our Technology Solutions division works with founders, operators, and enterprise teams to design, build, and deploy digital platforms. This includes product strategy, web and mobile application development, AI-enabled workflows, automation, and enterprise architecture. We bring both strategic clarity and hands-on execution to complex technology challenges.",
  },
  {
    question: "Do you deliver and collect rental units?",
    answer:
      "Yes, we handle the delivery, setup, and collection of all rental units. Delivery is available across the North West province and surrounding areas. Delivery fees may apply depending on your location and the number of units required. All delivery details and costs are confirmed when you receive your quote.",
  },
  {
    question: "How can I contact Kgolaentle Holdings?",
    answer:
      "You can reach us by phone at +27 (0) 87 093 7316, by email at info@kgolaentle.com, or by using the contact form on our website. You can also connect with us on WhatsApp, Facebook, and Instagram. We aim to respond to all enquiries within 24 hours.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services, delivery,
            payments, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
            <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help. Get in touch and we&apos;ll get back to
              you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-secondary font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+27870937316"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors"
              >
                Call +27 (0) 87 093 7316
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
