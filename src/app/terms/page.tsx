import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Terms &amp; Conditions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our website and
            services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Effective Date:</strong> 1 January 2025
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the
            website{" "}
            <a
              href="https://www.kgolaentle.com"
              className="text-accent hover:underline"
            >
              www.kgolaentle.com
            </a>{" "}
            and all services provided by Kgolaentle Holdings (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). By accessing or using our website and services, you agree to
            be bound by these Terms.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing our website or using any of our services, you
            acknowledge that you have read, understood, and agree to be bound
            by these Terms. If you do not agree with any part of these Terms,
            you must discontinue use of our website and services immediately.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            2. Description of Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kgolaentle Holdings operates multiple service divisions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Kgolaentle Rentals:</strong> VIP mobile toilet and
              freezer rental services for events, functions, and construction
              sites.
            </li>
            <li>
              <strong>Opulent Homeware:</strong> An online homeware store
              offering curated home products.
            </li>
            <li>
              <strong>Courier Franchise:</strong> Courier and delivery services
              operating in the Rustenburg region, including Sun City, Ledig,
              Mogwase, and surrounding areas.
            </li>
            <li>
              <strong>Kgolaentle Collections:</strong> A fashion line offering
              contemporary clothing and accessories.
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            3. User Obligations
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When using our website and services, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Provide accurate, current, and complete information when making enquiries, placing orders, or creating accounts.</li>
            <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
            <li>Not engage in any activity that disrupts or interferes with the functioning of our website or services.</li>
            <li>Not attempt to gain unauthorised access to any part of our website, servers, or systems.</li>
            <li>Not reproduce, duplicate, copy, or exploit any part of our website for commercial purposes without our prior written consent.</li>
            <li>Treat our staff and service providers with respect and courtesy.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            4. Orders and Payments
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All orders placed through our platforms are subject to availability
            and confirmation. We reserve the right to refuse or cancel any
            order at our discretion. Prices are quoted in South African Rand
            (ZAR) and may be subject to change without prior notice.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Payment must be made through our approved payment methods. Full
            payment or a deposit may be required before services are rendered
            or goods are dispatched.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            5. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All content on this website, including but not limited to text,
            graphics, logos, images, photographs, videos, and software, is the
            property of Kgolaentle Holdings or its licensors and is protected
            by South African and international intellectual property laws.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may not use, reproduce, modify, distribute, or display any of
            our content without our prior written permission. The Kgolaentle
            Holdings name, logo, and all related trademarks are proprietary
            marks of Kgolaentle Holdings.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To the maximum extent permitted by South African law, Kgolaentle
            Holdings shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or in connection
            with your use of our website or services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not warrant that our website will be uninterrupted,
            error-free, or free of viruses or other harmful components. Our
            total liability for any claim arising from the use of our services
            shall not exceed the amount paid by you for the specific service
            giving rise to the claim.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            7. Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website and services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. We make no representations or warranties of any
            kind, express or implied, regarding the accuracy, reliability, or
            completeness of any content on our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            8. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website may contain links to third-party websites or services.
            We are not responsible for the content, privacy practices, or
            availability of these external sites. Accessing third-party links
            is at your own risk.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            9. Termination
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We reserve the right to suspend or terminate your access to our
            website and services at any time, without notice, for any reason,
            including but not limited to a breach of these Terms. Upon
            termination, your right to use our services ceases immediately.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the Republic of South Africa. Any disputes arising from
            these Terms or your use of our website and services shall be
            subject to the exclusive jurisdiction of the courts of South
            Africa.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            11. Changes to These Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We reserve the right to modify these Terms at any time. Changes
            will be effective immediately upon posting on this page. Your
            continued use of our website and services after any changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            12. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@kgolaentle.com"
                className="text-accent hover:underline"
              >
                info@kgolaentle.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+27870937316"
                className="text-accent hover:underline"
              >
                +27 (0) 87 093 7316
              </a>
            </li>
            <li>
              <strong>Address:</strong> Blairgowrie Section, Chaneng, NW 0310,
              South Africa
            </li>
          </ul>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              These Terms of Use are governed by the laws of the Republic of
              South Africa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
