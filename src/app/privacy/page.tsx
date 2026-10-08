import type { Metadata } from "next";
import {
  ADDRESS,
  CONTACT_EMAIL,
  INFORMATION_OFFICER_EMAIL,
  INFORMATION_OFFICER_FULL_NAME,
  INFORMATION_OFFICER_NAME,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_NAME,
  LEGAL_VERSION,
  POSTAL_ADDRESS,
  REGISTRATION_NUMBER,
  WEBSITE_LABEL,
  WEBSITE_URL,
  portfoliosInline,
} from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Notice",
};

export default function PrivacyNoticePage() {
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
            Privacy Notice
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What personal information we collect, why we collect it and what
            your rights are under South Africa&apos;s Protection of Personal
            Information Act (POPIA).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Effective date:</strong> {LEGAL_EFFECTIVE_DATE}. Version{" "}
            {LEGAL_VERSION}.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We respect your privacy. This notice tells you what personal information we collect, why we collect it and what your rights are under the Protection of Personal Information Act 4 of 2013 (&quot;POPIA&quot;). Please read it with care and ask us if anything is unclear.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            1. Who we are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are {LEGAL_NAME}, registration number {REGISTRATION_NUMBER}, a private company in South Africa. We run four portfolios:{" "}
            {portfoliosInline}. Our address is {ADDRESS.street}, {ADDRESS.area},{" "}
            {ADDRESS.city}, {ADDRESS.postalCode}, {ADDRESS.province}. Our postal address is {POSTAL_ADDRESS}.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            2. Our Information Officer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Information Officer is our director, {INFORMATION_OFFICER_NAME} ({INFORMATION_OFFICER_FULL_NAME}). She is the person to contact about this notice or about your personal information. Email{" "}
            <a href={`mailto:${INFORMATION_OFFICER_EMAIL}`} className="text-accent hover:underline">
              {INFORMATION_OFFICER_EMAIL}
            </a>{" "}
            or{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Phone{" "}
            <a href="tel:+27870937316" className="text-accent hover:underline">
              087 093 7316
            </a>{" "}
            or{" "}
            <a href="tel:+27824978565" className="text-accent hover:underline">
              082 497 8565
            </a>
            . You may also write to either address above.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            3. What we collect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            What we collect depends on how you deal with us.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Rentals customers:</strong> your name, phone number, email address, the event or delivery address and your booking and payment records.
            </li>
            <li>
              <strong>Courier senders and receivers:</strong> names, addresses, phone numbers, parcel tracking details and the signature given as proof of delivery.
            </li>
            <li>
              <strong>Technology clients:</strong> the names and contact details of the people we work with at your organisation and your project documents. Where we handle personal information of your own users or employees, we do so on your instructions under a written operator agreement.
            </li>
            <li>
              <strong>Salon clients:</strong> your name, phone number, booking history and retail purchases.
            </li>
            <li>
              <strong>Job applicants:</strong> your identity and contact details, your CV, qualifications and references.
            </li>
            <li>
              <strong>Suppliers and associates:</strong> contact persons, banking details, tax and B-BBEE documents. For associates we also keep CVs, qualifications, certificates and vetting results where a client requires vetting.
            </li>
            <li>
              <strong>Website visitors:</strong> what you type into our contact form (name, email address, phone number, the service you are interested in and your message) and basic technical data about your visit.
            </li>
          </ul>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            4. Why we use it and our legal grounds
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use your information to answer your enquiry, give you a quote, take your booking, deliver your parcel, supply the service you asked for, send invoices, receive payment and keep our accounts. We also use it to consider job applications, to work with suppliers and associates, to keep our business and systems secure and to meet our duties under tax, company and labour law. We rely on one or more of these grounds: we need the information to conclude or carry out a contract with you; the law requires us to process it; it protects your legitimate interest or serves our own or a third party&apos;s legitimate interest; or you have given consent. Where we rely on consent you may withdraw it at any time.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            5. Where we get it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We get most information from you directly, when you call, message, email, book, fill in our contact form or sign an agreement with us. Courier information comes from the sender and from the Fastway Couriers network. Technology clients give us information about their own users or employees. We may get information about a job applicant or associate from referees and from vetting providers, with that person&apos;s knowledge. If you give us information about someone else, please make sure they know.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            6. Who we share it with
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We never sell personal information. We share it only where there is a need:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              with service providers who host or carry our email, documents, website and messaging;
            </li>
            <li>
              with the Fastway Couriers network, so that a parcel can be collected, tracked and delivered;
            </li>
            <li>
              with our accountant and our bank;
            </li>
            <li>
              with authorities such as the South African Revenue Service and the Department of Employment and Labour, where the law requires it.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Service providers who process personal information for us may do so only on our instructions and must keep it confidential and secure.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            7. Information held outside South Africa
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Some of our service providers store information on servers outside South Africa. These include providers of email, document storage, website hosting and messaging. We send information outside South Africa only on a ground that section 72 of POPIA allows, for example where the provider is bound by law or by contract to protect the information to a standard similar to POPIA.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            8. How we protect it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We limit access to the people who need the information for their work. We use individual accounts and passwords on our business systems, keep paper records in a secure place and have a procedure for dealing with a security incident. No system is perfectly secure. If your personal information is compromised we will tell you and the Information Regulator as the law requires.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            9. How long we keep it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We keep personal information only for as long as we need it for the purpose it was collected for or for as long as the law requires us to keep the record. After that we delete or destroy it safely. The periods are set out in our Records Retention Schedule, which is available on request.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            10. Your rights and how to use them
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              ask whether we hold personal information about you and ask for a copy or description of it;
            </li>
            <li>
              ask us to correct or update it;
            </li>
            <li>
              ask us to delete information that we no longer have a reason to keep;
            </li>
            <li>
              object to our processing of it on reasonable grounds;
            </li>
            <li>
              withdraw consent you have given;
            </li>
            <li>
              complain to the Information Regulator.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            To use any of these rights, contact our Information Officer. We will ask for proof of identity so that we do not give your information to the wrong person. There is no cost for a reasonable request about your own information. We reply within 30 days. Our PAIA Manual explains how to ask for other records. It is available on request.
          </p>
          <h2
            id="data-deletion"
            className="scroll-mt-28 text-2xl font-heading font-bold text-secondary mt-12 mb-4"
          >
            11. How to ask us to delete your information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Email our Information Officer at{" "}
            <a href={`mailto:${INFORMATION_OFFICER_EMAIL}`} className="text-accent hover:underline">
              {INFORMATION_OFFICER_EMAIL}
            </a>{" "}
            or{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            with the subject line Delete my information. Tell us your name, the phone number or email address you used with us and which service you used. We will confirm who you are, delete the information we no longer have a lawful reason to keep and confirm in writing within 30 days. Some records must be kept for a period set by law, such as invoices and tax records. We will tell you if that applies. If you connected to one of our WhatsApp services you can also ask us to delete your message history in the same way.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            12. Marketing messages
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We send marketing messages by email, SMS or WhatsApp only to people who have agreed to receive them and to existing customers about services similar to those they have used. Every marketing message tells you how to opt out. You can also opt out at any time by telling our Information Officer. Opting out is free.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            13. WhatsApp and phone messages
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you contact us by WhatsApp, SMS or phone we reply on the channel you used. WhatsApp is provided by Meta under its own terms and privacy policy, which apply to your use of that service. Please do not send us sensitive information such as identity documents or bank cards by WhatsApp unless we have asked for it.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            14. The salon
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The beauty technicians at Opulent Beauty are independent professionals. They keep their own client records, including any notes about treatments. They answer for those records themselves. Please speak to your technician about the information they keep. We answer for the bookings and retail purchases you make through us.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            15. Children
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our services are meant for adults. We do not knowingly collect personal information from a child under 18 without the consent of a parent or guardian. If you believe a child has given us information without that consent, please tell us so that we can delete it.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            16. Cookies and website data
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our website is hosted by Cloudflare. Like any web host it processes basic technical data, such as your IP address, your browser type and the pages you request, in order to deliver the site and keep it secure. Our website does not use advertising or marketing trackers. At the date of this notice it does not use analytics cookies. If that changes we will update this notice first and ask for your consent where the law requires it. You can block or delete cookies in your browser settings and the site will still work. The contact form sends your message to our mailbox through an email delivery service (Resend).
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            17. Changes to this notice
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may update this notice when our services or the law change. The current version is always on{" "}
            <a href={WEBSITE_URL} className="text-accent hover:underline">
              {WEBSITE_LABEL}
            </a>{" "}
            with its effective date. If a change is significant we will tell the customers it affects.
          </p>
          <h2 className="text-2xl font-heading font-bold text-secondary mt-12 mb-4">
            18. Complaints
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Please talk to us first. We would like the chance to put things right. You may also complain to the Information Regulator at any time:
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Information Regulator (South Africa), Woodmead North Office Park, 54 Maxwell Drive, Woodmead, Johannesburg, 2191
            <br />
            Telephone 010 023 5200. Toll free 0800 017 160
            <br />
            General enquiries:{" "}
            <a href="mailto:enquiries@inforegulator.org.za" className="text-accent hover:underline">
              enquiries@inforegulator.org.za
            </a>
            <br />
            POPIA complaints:{" "}
            <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-accent hover:underline">
              POPIAComplaints@inforegulator.org.za
            </a>
            <br />
            Website:{" "}
            <a href="https://inforegulator.org.za" className="text-accent hover:underline">
              https://inforegulator.org.za
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
