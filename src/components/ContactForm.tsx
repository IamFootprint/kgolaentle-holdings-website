"use client";

import { useActionState } from "react";
import { submitContactForm, type ActionResult } from "@/app/contact/actions";

const initialState: ActionResult | null = null;

export default function ContactForm() {
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
        <p className="text-gray-500">
          We&apos;ll get back to you within 24 hours.
        </p>
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
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-secondary mb-1.5"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
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
            className="w-full px-4 py-3 bg-warm-gray border-0 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] text-gray-600"
          >
            <option value="">Select a service</option>
            <option value="rentals">Kgolaentle Rentals</option>
            <option value="homeware">Opulent Homeware</option>
            <option value="courier">Courier Services</option>
            <option value="collections">Kgolaentle Collections</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
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
