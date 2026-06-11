import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Ahid collects, uses, and protects your personal data. Read our full privacy policy.",
  openGraph: {
    title: "Privacy Policy | Ahid",
    description:
      "Learn how Ahid collects, uses, and protects your personal data.",
    url: "https://ahid.app/privacy-policy",
  },
  alternates: {
    canonical: "https://ahid.app/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  redirect("/privacy-policy.html");
}
