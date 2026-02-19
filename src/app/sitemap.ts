import type { MetadataRoute } from "next";
import { locations } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.akbarber.com";

  const locationPages = locations.map((loc) => ({
    url: `${baseUrl}/pobocky/${loc.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // SEO landing pages — location pages (priority 0.9)
  const seoLocationSlugs = [
    "barber-praha-1",
    "barber-praha-6",
    "en/barber-prague-1",
    "en/barber-prague-6",
  ];
  const seoLocationPages = seoLocationSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // SEO landing pages — service pages (priority 0.85)
  const seoServiceSlugs = [
    "pansky-strih-praha-1",
    "pansky-strih-praha-6",
    "skin-fade-praha-1",
    "skin-fade-praha-6",
    "en/mens-haircut-prague-1",
    "en/mens-haircut-prague-6",
    "en/skin-fade-prague-1",
    "en/skin-fade-prague-6",
  ];
  const seoServicePages = seoServiceSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locationPages,
    ...seoLocationPages,
    ...seoServicePages,
    {
      url: `${baseUrl}/kariera`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ochrana-osobnich-udaju`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
