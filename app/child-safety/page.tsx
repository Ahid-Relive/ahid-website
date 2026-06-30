import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Child Safety Standards",
  description:
    "Ahid's published standards against child sexual abuse and exploitation (CSAE). Learn how we protect children and report harmful content on our platform.",
  openGraph: {
    title: "Child Safety Standards | Ahid",
    description:
      "Ahid has zero tolerance for CSAE. Read our published child safety standards, reporting mechanisms, and enforcement procedures.",
    url: "https://ahid.app/child-safety",
  },
  alternates: {
    canonical: "https://ahid.app/child-safety",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChildSafetyPage() {
  redirect("/child-safety.html");
}
