import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://ahid.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahid — Discover Trusted Local Brands",
    template: "%s | Ahid",
  },
  description:
    "Ahid helps you find nearby products and services from verified businesses, making discovery faster and safer.",
  keywords: [
    "local brands",
    "trusted businesses",
    "verified products",
    "discover local",
    "nearby services",
    "Ahid",
    "brand discovery",
  ],
  authors: [{ name: "Ahid" }],
  creator: "Ahid",
  publisher: "Ahid",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ahid",
    title: "Ahid — Discover Trusted Local Brands",
    description:
      "Find nearby products and services from verified businesses. Download Ahid today.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahid — Discover Trusted Local Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahid — Discover Trusted Local Brands",
    description:
      "Find nearby products and services from verified businesses. Download Ahid today.",
    images: ["/assets/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/ahid_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
