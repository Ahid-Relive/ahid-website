import type { Metadata } from "next";

import { SITE_URL } from "./constants";

export const SITE_NAME = "Ahid";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Ahid — find trusted local brands and businesses near you",
};

// Search intents we want to rank for. Google ignores the keywords meta tag, so
// these phrases are also worked into titles, descriptions, headings and the FAQ.
export const KEYWORDS = [
  "Ahid",
  "brand discovery app",
  "find brands near me",
  "find local businesses near me",
  "where can I buy near me",
  "where to buy products near me",
  "verified local businesses",
  "trusted local brands",
  "local business directory",
  "shop local app",
  "nearby products and services",
  "compare local brands",
  "local vendors near me",
  "business discovery app",
];

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  lastModified: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const pages = {
  home: {
    title: "Ahid — Find Trusted Local Brands & Businesses Near You",
    description:
      "Ahid is a free app to discover verified local brands near you. Find where to buy products and services nearby, browse real posts, and message businesses directly.",
    path: "/",
    keywords: ["brand discovery app", "find brands near me", "where can I buy near me"],
    lastModified: "2026-11-03",
    priority: 1,
    changeFrequency: "weekly",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How Ahid collects, uses and protects your personal data. Read the full Ahid privacy policy.",
    path: "/privacy-policy",
    lastModified: "2026-06-11",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  childSafety: {
    title: "Child Safety Standards",
    description:
      "Ahid has zero tolerance for child sexual abuse and exploitation (CSAE). Read our child safety standards, reporting options and enforcement process.",
    path: "/child-safety",
    lastModified: "2026-06-01",
    priority: 0.4,
    changeFrequency: "yearly",
  },
  accountDeletion: {
    title: "Delete Your Account",
    description:
      "Step-by-step instructions to permanently delete your Ahid account and personal data, plus how to contact support.",
    path: "/account-deletion",
    lastModified: "2026-06-01",
    priority: 0.4,
    changeFrequency: "yearly",
  },
} satisfies Record<string, PageSeo>;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

/** Builds the per-page metadata so every route gets a canonical URL and matching social tags. */
export function buildMetadata(page: Pick<PageSeo, "title" | "description" | "path" | "keywords">): Metadata {
  const url = absoluteUrl(page.path);
  const isHome = page.path === "/";

  return {
    // The home title is already complete, so skip the "| Ahid" template.
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: [...new Set([...(page.keywords ?? []), ...KEYWORDS])],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      title: isHome ? page.title : `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? page.title : `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: [OG_IMAGE.url],
    },
  };
}
