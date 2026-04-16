import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
}

const serviceLabels: Record<string, string> = {
  rentals: "Kgolaentle Rentals",
  courier: "Courier Services",
  technology: "Technology Solutions",
  beauty: "Opulent Beauty",
  other: "General Inquiry",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const json = {
    headers: { "Content-Type": "application/json" },
  };

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid request body." }),
      { status: 400, ...json }
    );
  }

  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    service = "",
    message = "",
    website = "",
  } = body;

  // Honeypot — bots fill this, humans don't
  if (website.trim()) {
    return new Response(JSON.stringify({ success: true }), json);
  }

  if (!firstName.trim() && !lastName.trim()) {
    return new Response(
      JSON.stringify({ success: false, error: "Please enter your name." }),
      { status: 400, ...json }
    );
  }

  if (!email.trim()) {
    return new Response(
      JSON.stringify({ success: false, error: "Email address is required." }),
      { status: 400, ...json }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ success: false, error: "Please enter a valid email address." }),
      { status: 400, ...json }
    );
  }

  if (!message.trim()) {
    return new Response(
      JSON.stringify({ success: false, error: "Please include a message." }),
      { status: 400, ...json }
    );
  }

  const name = [firstName, lastName].filter(Boolean).join(" ");
  const serviceLabel = serviceLabels[service] ?? "Not specified";

  if (!env.RESEND_API_KEY) {
    console.log("[ContactForm] No RESEND_API_KEY", { name, email });
    return new Response(JSON.stringify({ success: true }), json);
  }

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Kgolaentle Holdings <noreply@kgolaentle.com>",
      to: ["info@kgolaentle.com"],
      replyTo: email,
      subject: `Website Enquiry \u2014 ${serviceLabel}`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f0f1a">New Website Enquiry</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px">${escapeHtml(phone) || "Not provided"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${escapeHtml(serviceLabel)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555">Message</td><td style="padding:8px">${escapeHtml(message)}</td></tr>
        </table>
        <p style="font-family:sans-serif;color:#9b1b30;margin-top:24px">Sent via kgolaentle.com contact form</p>
      `,
    });
    return new Response(JSON.stringify({ success: true }), json);
  } catch (err) {
    console.error("[ContactForm] Resend error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message. Please try again or contact us directly at info@kgolaentle.com.",
      }),
      { status: 500, ...json }
    );
  }
};
