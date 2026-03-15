import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function LegalNoticePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
            Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Legal Notice
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Important legal information regarding Kgolaentle Holdings and the
            use of this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            1. Company Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This website is owned and operated by:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>Company Name:</strong> Kgolaentle Holdings
              </li>
              <li>
                <strong>Registration Number:</strong> [Registration number to
                be confirmed]
              </li>
              <li>
                <strong>Registered Address:</strong> Blairgowrie Section,
                Chaneng, NW 0310, South Africa
              </li>
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
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.kgolaentle.com"
                  className="text-accent hover:underline"
                >
                  www.kgolaentle.com
                </a>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            2. Business Activities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kgolaentle Holdings is a multi-service enterprise operating the
            following divisions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Kgolaentle Rentals</strong> &mdash; VIP mobile toilet and
              freezer rental services for events and functions.
            </li>
            <li>
              <strong>Opulent Homeware</strong> &mdash; Online retail of
              curated homeware products.
            </li>
            <li>
              <strong>Courier Franchise</strong> &mdash; Courier and delivery
              services in the Rustenburg region, including Sun City, Ledig,
              Mogwase, and surrounding areas.
            </li>
            <li>
              <strong>Kgolaentle Collections</strong> &mdash; Contemporary
              fashion line offering clothing and accessories.
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All intellectual property rights in relation to this website and
            its content belong to Kgolaentle Holdings unless otherwise stated.
            This includes, but is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>The Kgolaentle Holdings name, logo, and brand identity.</li>
            <li>All text, graphics, photographs, images, and visual elements.</li>
            <li>Website design, layout, and source code.</li>
            <li>Product names, service marks, and trade names associated with our divisions.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unauthorised use, reproduction, modification, or distribution of
            any content from this website is strictly prohibited and may result
            in legal action.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            4. Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The information provided on this website is for general
            informational purposes only. While we strive to ensure the accuracy
            and completeness of all information, Kgolaentle Holdings makes no
            warranties or representations, express or implied, regarding:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>The accuracy, reliability, or completeness of any information on this website.</li>
            <li>The availability or uninterrupted operation of this website.</li>
            <li>The suitability of our services for any particular purpose.</li>
            <li>The results that may be obtained from the use of this website or our services.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Use of this website and reliance on any information provided is at
            your own risk.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            To the fullest extent permitted by South African law, Kgolaentle
            Holdings, its directors, employees, agents, and affiliates shall
            not be liable for any direct, indirect, incidental, consequential,
            or special damages arising from or in connection with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Your access to or use of this website.</li>
            <li>Any errors or omissions in the content of this website.</li>
            <li>Any interruption or cessation of services.</li>
            <li>Any viruses or malicious code transmitted through this website.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            6. External Links
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This website may contain links to external websites. These links
            are provided for convenience and informational purposes only.
            Kgolaentle Holdings does not endorse, control, or assume
            responsibility for the content, privacy policies, or practices of
            any third-party websites.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            7. Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your use of this website is also governed by our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal
            information in accordance with the Protection of Personal
            Information Act (POPIA) of South Africa.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            8. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Legal Notice and any disputes arising from the use of this
            website shall be governed by and construed in accordance with the
            laws of the Republic of South Africa. You agree to submit to the
            exclusive jurisdiction of the South African courts for the
            resolution of any disputes.
          </p>

          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            9. Contact
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For any legal enquiries or concerns regarding this website, please
            contact us:
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
              This Legal Notice is governed by the laws of the Republic of
              South Africa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
