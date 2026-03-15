import type { Metadata } from "next";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqs = [
  {
    question: "What services does Kgolaentle Holdings offer?",
    answer:
      "Kgolaentle Holdings operates four service divisions: Kgolaentle Rentals (VIP mobile toilets and freezers for events), Opulent Homeware (an online homeware store), a Courier Franchise serving the Rustenburg region, and Kgolaentle Collections (our contemporary fashion line).",
  },
  {
    question: "Which areas do you service?",
    answer:
      "Our rental services are available across the North West province and surrounding areas. Our Courier Franchise operates specifically in the Rustenburg region, covering Sun City, Ledig, Mogwase, and surrounding communities. Opulent Homeware and Kgolaentle Collections ship nationwide within South Africa.",
  },
  {
    question: "How do I book VIP mobile toilets or freezers for my event?",
    answer:
      "You can book our rental units by contacting us via phone at +27 (0) 87 093 7316, emailing info@kgolaentle.com, or using the contact form on our website. Please provide your event date, location, expected number of guests, and the type and quantity of units you require. We recommend booking at least two weeks in advance to ensure availability.",
  },
  {
    question: "How long does courier delivery take in the Rustenburg region?",
    answer:
      "Standard courier deliveries within the Rustenburg region, including Sun City, Ledig, and Mogwase, are typically completed within 1 to 3 business days. Express delivery options may be available depending on the package size and destination. Contact us for specific delivery timelines for your area.",
  },
  {
    question: "What is the returns policy for Opulent Homeware products?",
    answer:
      "We offer a 14-day returns policy on Opulent Homeware products. Items must be returned in their original packaging and unused condition. To initiate a return, please email info@kgolaentle.com with your order number and reason for return. Refunds are processed within 7 to 10 business days after we receive and inspect the returned item.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept EFT (Electronic Funds Transfer), bank deposits, and major credit and debit cards. For rental bookings, a deposit may be required to secure your reservation, with the balance due before the event date. Payment details are provided upon confirmation of your order or booking.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our office operates Monday to Friday from 08:00 to 17:00, and Saturday from 08:00 to 13:00. We are closed on Sundays and public holidays. However, rental deliveries and collections for events may be arranged outside of standard hours by prior agreement.",
  },
  {
    question: "How do I get a quote for your services?",
    answer:
      "You can request a free, no-obligation quote by calling us at +27 (0) 87 093 7316, emailing info@kgolaentle.com, or filling out the contact form on our website. Please include as much detail as possible about your requirements so we can provide an accurate quote. We typically respond within 24 hours on business days.",
  },
  {
    question: "Are your VIP mobile toilets and freezers available for long-term hire?",
    answer:
      "Yes, we offer both short-term and long-term rental options. Whether you need units for a single-day event or a multi-week construction project, we can accommodate your needs. Long-term rentals may qualify for discounted rates. Contact us to discuss your specific requirements and receive a tailored quote.",
  },
  {
    question: "Where can I purchase items from the Kgolaentle Collections fashion line?",
    answer:
      "Kgolaentle Collections items are available through our website and selected retail partners. New collections are announced on our social media channels, including Facebook and Instagram. Follow us to stay updated on the latest releases, pop-up shops, and exclusive promotions.",
  },
  {
    question: "Do you deliver rental units to my location?",
    answer:
      "Yes, we handle the delivery, setup, and collection of all rental units. Delivery is available across the North West province and surrounding areas. Delivery fees may apply depending on your location and the number of units required. We will confirm all delivery details and costs when you receive your quote.",
  },
  {
    question: "How can I contact Kgolaentle Holdings?",
    answer:
      "You can reach us by phone at +27 (0) 87 093 7316, by email at info@kgolaentle.com, or by visiting our office at Blairgowrie Section, Chaneng, NW 0310, South Africa. You can also connect with us on WhatsApp, Facebook, and Instagram. We aim to respond to all enquiries within 24 hours.",
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
              We&apos;re here to help. Get in touch with our team and we&apos;ll get
              back to you as soon as possible.
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
