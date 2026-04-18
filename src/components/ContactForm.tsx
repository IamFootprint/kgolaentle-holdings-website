"use client";

import Link from "next/link";
import { Suspense, useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type ActionResult } from "@/app/contact/actions";

const initialState: ActionResult | null = null;

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? "";

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state?.success) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
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
        </div>
        <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
          Message Sent!
        </h3>
        <p className="text-gray-500 mb-8">
          We&apos;ll get back to you within 24 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all text-sm"
        >
          Send another message
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
      <h2 className="text-2xl font-heading font-bold text-secondary mb-2">
        Get a Free Quote
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Fill in the form and we&apos;ll get back to you within 24 hours.
      </p>

      {state && !state.success && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
          {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-5">
        {/* Honeypot — hidden from real users, filled by bots */}
        <div className="absolute opacity-0 pointer-events-none -z-10 w-0 h-0 overflow-hidden" aria-hidden="true">
          <input type="text" name="website" autoComplete="off" tabIndex={-1} />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              First Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              autoComplete="given-name"
              className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px]"
            placeholder="+27..."
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] text-gray-600"
          >
            <option value="">Select a service</option>
            <option value="rentals">Kgolaentle Rentals</option>
            <option value="courier">Courier Services</option>
            <option value="technology">Technology Solutions</option>
            <option value="beauty">Opulent Beauty</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            autoComplete="off"
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] resize-none"
            placeholder="Tell us about your needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 min-h-[500px] animate-pulse" />
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
