import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadataBase = new URL("https://www.kgolaentle.com");

export const metadata: Metadata = {
  title: {
    default: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
    template: "%s | Kgolaentle Holdings",
  },
  description:
    "Kgolaentle Holdings is a diversified enterprise in the Rustenburg region offering premium rentals, homeware, courier services, and fashion.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      <body className="text-[#1a1a1a] bg-warm-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
