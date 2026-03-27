"use server";

import { Resend } from "resend";

export type ActionResult =
  | { success: true }
  | { success: false; error: string };

const serviceLabels: Record<string, string> = {
  rentals: "Kgolaentle Rentals",
  homeware: "Opulent Homeware",
  courier: "Courier Services",
  collections: "Kgolaentle Collections",
  other: "Other",
};

export async function submitContactForm(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const firstName = (formData.get("firstName") as string | null) ?? "";
  const lastName = (formData.get("lastName") as string | null) ?? "";
  const email = (formData.get("email") as string | null) ?? "";
  const phone = (formData.get("phone") as string | null) ?? "";
  const service = (formData.get("service") as string | null) ?? "";
  const message = (formData.get("message") as string | null) ?? "";

  if (!email.trim()) {
    return { success: false, error: "Email address is required." };
  }

  const name = [firstName, lastName].filter(Boolean).join(" ") || "Website visitor";
  const serviceLabel = serviceLabels[service] ?? service ?? "Not specified";

  // Dev fallback — no API key
  if (!process.env.RESEND_API_KEY) {
    console.log("[ContactForm] No RESEND_API_KEY — logging submission:", {
      name,
      email,
      phone,
      service: serviceLabel,
      message,
    });
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Kgolaentle Holdings <onboarding@resend.dev>",
      to: ["info@kgolaentle.com"],
      replyTo: email,
      subject: `Website Enquiry — ${serviceLabel}`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f0f1a">New Website Enquiry</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${serviceLabel}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Message</td><td style="padding:8px">${message || "No message provided"}</td></tr>
        </table>
        <p style="font-family:sans-serif;color:#9b1b30;margin-top:24px">Sent via kgolaentle.com contact form</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("[ContactForm] Resend error:", err);
    return {
      success: false,
      error:
        "Failed to send message. Please try again or contact us directly at info@kgolaentle.com.",
    };
  }
}
