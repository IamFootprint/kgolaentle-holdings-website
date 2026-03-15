import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Your Privacy Matters
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information in
            compliance with South Africa&apos;s Protection of Personal Information
            Act (POPIA).
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
            Kgolaentle Holdings (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your personal information in accordance with the
            Protection of Personal Information Act, 2013 (POPIA) of South
            Africa. This Privacy Policy explains how we collect, use, store, and
            share your information when you use our website{" "}
            <a
              href="https://www.kgolaentle.com"
              className="text-accent hover:underline"
            >
              www.kgolaentle.com
            </a>{" "}
            and our services.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may collect the following types of personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number, and physical address when you enquire about or use our
              services.
            </li>
            <li>
              <strong>Transaction Information:</strong> Details of orders,
              bookings, and payments made through our platforms including
              Opulent Homeware and Kgolaentle Rentals.
            </li>
            <li>
              <strong>Communication Data:</strong> Messages, enquiries, and
              correspondence sent to us via email, phone, or our website
              contact forms.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and browsing behaviour collected automatically when
              you visit our website.
            </li>
            <li>
              <strong>Delivery Information:</strong> Address details required
              for our Courier Franchise deliveries in the Rustenburg region.
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>To provide and manage our services, including rental bookings, homeware orders, courier deliveries, and fashion purchases.</li>
            <li>To communicate with you regarding your orders, bookings, and enquiries.</li>
            <li>To process payments and manage transactions.</li>
            <li>To improve our website, products, and services.</li>
            <li>To send marketing communications where you have given consent.</li>
            <li>To comply with legal and regulatory obligations under South African law.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website uses cookies and similar tracking technologies to
            enhance your browsing experience. Cookies are small text files
            stored on your device that help us understand how you interact with
            our site.
          </p>
          <h3 className="text-lg font-heading font-bold text-secondary mt-8 mb-3">
            Types of Cookies We Use
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand visitor
              behaviour and improve our site.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant
              advertisements (only with your consent).
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can manage your cookie preferences through your browser
            settings. Please note that disabling certain cookies may affect
            your experience on our website.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            4. Sharing with Third Parties
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell your personal information. We may share your data
            with trusted third parties only in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Service Providers:</strong> Payment processors, delivery
              partners, and hosting providers who assist us in operating our
              business.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required to comply with
              applicable law, regulation, or legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            All third parties are required to handle your information in
            accordance with POPIA and our data protection standards.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access,
            alteration, disclosure, or destruction. These measures include
            encrypted data transmission, secure server infrastructure, and
            access controls.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            While we take every reasonable precaution, no method of
            transmission over the internet or electronic storage is completely
            secure. We cannot guarantee absolute security of your data.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            6. Your Rights Under POPIA
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under the Protection of Personal Information Act, you have the
            right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information, subject to legal retention requirements.</li>
            <li>Object to the processing of your personal information.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Lodge a complaint with the Information Regulator of South Africa.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our services are not directed at children under the age of 18. We
            do not knowingly collect personal information from children. If we
            become aware that we have inadvertently collected information from a
            child, we will take steps to delete it promptly. If you believe a
            child has provided us with personal information, please contact us
            immediately.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            8. Data Retention
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary
            to fulfil the purposes for which it was collected, or as required
            by applicable law. When your information is no longer needed, we
            will securely delete or anonymise it.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on this page with a revised effective date. We encourage you
            to review this policy periodically.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, wish to
            exercise your rights under POPIA, or have concerns about how we
            handle your personal information, please contact us:
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
              This policy is governed by the laws of the Republic of South
              Africa, including the Protection of Personal Information Act, 2013
              (POPIA).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
