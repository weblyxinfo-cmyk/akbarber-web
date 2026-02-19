import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { seoServicePages } from "@/lib/seo-content";
import { SeoServicePage } from "@/components/seo/SeoServicePage";

const content = seoServicePages["pansky-strih-praha-6"];
const location = locations.find((l) => l.id === content.locationId)!;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  keywords: content.keywords,
  openGraph: {
    title: content.title,
    description: content.description,
    url: `https://www.akbarber.com/${content.slug}`,
    siteName: "AK BARBERS",
    locale: content.ogLocale,
    type: "website",
    images: [{ url: `/images/og/og-${content.locationId}.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.description,
    images: [`/images/og/og-${content.locationId}.png`],
  },
  alternates: {
    canonical: `https://www.akbarber.com/${content.slug}`,
    languages: {
      cs: `https://www.akbarber.com/${content.slug}`,
      en: `https://www.akbarber.com/${content.alternateSlug}`,
    },
  },
};

export default function Page() {
  return <SeoServicePage content={content} location={location} />;
}
