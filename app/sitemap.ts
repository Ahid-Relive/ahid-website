import type { MetadataRoute } from "next";

import { absoluteUrl, pages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
