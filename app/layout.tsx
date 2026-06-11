import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    icon: "/assets/ahid_logo.png",
    apple: "/assets/ahid_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
