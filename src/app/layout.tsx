import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
  description:
    "Kgolaentle Holdings is a diversified enterprise in the Rustenburg region offering premium rentals, homeware, courier services, and fashion. Built on trust, innovation, and community.",
  keywords: [
    "Kgolaentle Holdings",
    "Rustenburg",
    "mobile rentals",
    "courier services",
    "homeware",
    "fashion",
    "Sun City",
    "Mogwase",
    "South Africa",
  ],
  openGraph: {
    title: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
    description:
      "Innovation meets the needs of our people. Premium rentals, homeware, courier services, and fashion in the Rustenburg region.",
    url: "https://www.kgolaentle.com",
    siteName: "Kgolaentle Holdings",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body text-[#1a1a1a] bg-warm-white antialiased">
        {children}
      </body>
    </html>
  );
}
