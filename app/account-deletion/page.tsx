import type { Metadata } from "next";

import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to permanently delete your Ahid account and all associated personal data. Step-by-step instructions and support contact.",
  openGraph: {
    title: "Delete Your Account | Ahid",
    description:
      "Permanently delete your Ahid account and personal data. Full instructions and support info.",
    url: "https://ahid.app/account-deletion",
  },
  alternates: {
    canonical: "https://ahid.app/account-deletion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccountDeletionPage() {
  redirect("/account-deletion.html");
}