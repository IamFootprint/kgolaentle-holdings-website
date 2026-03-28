import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadataBase = new URL("https://www.kgolaentle.com");

export const metadata: Metadata = {
  title: {
    default: "Kgolaentle Holdings | Your Community Deserves World-Class Service",
    template: "%s | Kgolaentle Holdings",
  },
  description:
    "Kgolaentle Holdings is a diversified enterprise in the North West region offering event rentals, courier services, technology solutions, and premium beauty — all built around community.",
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
      "Kgolaentle Holdings is a diversified enterprise in the North West region offering event rentals, courier services, technology solutions, and premium beauty — all built around community.",
    url: "https://www.kgolaentle.com",
    siteName: "Kgolaentle Holdings",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://www.kgolaentle.com/images/hero-serving-lunch.jpg",
        width: 1200,
        height: 800,
        alt: "Kgolaentle Holdings team member delivering service",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="text-[#1a1a1a] bg-warm-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
