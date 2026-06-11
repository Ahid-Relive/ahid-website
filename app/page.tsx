import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ahid — Discover Trusted Local Brands",
  description:
    "Ahid helps you find nearby products and services from verified businesses, making discovery faster and safer. Join 10k+ users today.",
  openGraph: {
    title: "Ahid — Discover Trusted Local Brands",
    description:
      "Find nearby products and services from verified businesses. Download Ahid today.",
    url: "https://ahid.app",
  },
  alternates: {
    canonical: "https://ahid.app",
  },
};

export default function Page() {
  redirect("/index.html");
}
