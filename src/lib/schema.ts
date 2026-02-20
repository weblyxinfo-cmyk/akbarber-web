import { siteConfig, locations } from "./data";
import type { Location } from "@/types";
import type { SeoFaqItem } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-ak-barbers.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

export function generateLocalBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#${location.id}`,
    name: location.name,
    description: `${location.name} – prémiový barbershop. ${location.type === "walk-in" ? "Přijďte bez objednání." : "Rezervujte si termín online."}`,
    telephone: location.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
    },
    image: location.image,
    priceRange: location.currency === "CZK" ? "$$" : "€€",
  };
}

export function generateAllLocalBusinessSchemas() {
  return locations.map(generateLocalBusinessSchema);
}

// ---------------------------------------------------------------------------
// Day / time parsing helpers (shared with SEO pages)
// ---------------------------------------------------------------------------

const dayMap: Record<string, string[]> = {
  Po: ["Monday"],
  Út: ["Tuesday"],
  St: ["Wednesday"],
  Čt: ["Thursday"],
  Pá: ["Friday"],
  Pia: ["Friday"],
  So: ["Saturday"],
  Ne: ["Sunday"],
};

export function parseDays(daysStr: string): string[] {
  const rangeMatch = daysStr.match(/^(\S+)\s*–\s*(\S+)$/);
  if (rangeMatch) {
    const allDays = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
    const start = rangeMatch[1] === "Pia" ? "Pá" : rangeMatch[1];
    const end = rangeMatch[2];
    const startIdx = allDays.indexOf(start);
    const endIdx = allDays.indexOf(end);
    if (startIdx >= 0 && endIdx >= 0) {
      return allDays
        .slice(startIdx, endIdx + 1)
        .flatMap((d) => dayMap[d] || []);
    }
  }
  return dayMap[daysStr.trim()] || [];
}

export function parseTime(hoursStr: string): {
  opens: string;
  closes: string;
} {
  const parts = hoursStr.split("–").map((s) => s.trim());
  return { opens: parts[0] || "09:00", closes: parts[1] || "18:00" };
}

// ---------------------------------------------------------------------------
// BarberShop schema for SEO landing pages
// ---------------------------------------------------------------------------

export function generateSeoBarberShopSchema(
  location: Location,
  pageUrl: string,
) {
  const openingHoursSpec = location.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: parseDays(h.days),
    ...parseTime(h.hours),
  }));

  const prices = location.services
    .map((s) => {
      const match = s.price.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    })
    .filter((p) => p > 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = `${minPrice} Kč – ${maxPrice} Kč`;

  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${pageUrl}#business`,
    name: location.name,
    image: `https://www.akbarber.com${location.image}`,
    url: pageUrl,
    telephone: location.phone,
    email: "info@akbarber.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.city,
      postalCode: location.address.match(/\d{3}\s?\d{2}/)?.[0] || "",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.id === "praha-1" ? "50.0808" : "50.0833",
      longitude: location.id === "praha-1" ? "14.4179" : "14.3818",
    },
    openingHoursSpecification: openingHoursSpec,
    priceRange,
    currenciesAccepted: "CZK",
    paymentAccepted: "Cash, Credit Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: location.reviewRating,
      reviewCount: location.reviewCount.replace("+", ""),
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Služby",
      itemListElement: location.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description || service.name,
        },
        price: service.price.replace(/[^0-9]/g, "").slice(0, 3),
        priceCurrency: "CZK",
      })),
    },
    parentOrganization: {
      "@id": "https://www.akbarber.com/#organization",
    },
    sameAs: [
      "https://www.facebook.com/akbarber.cz/",
      "https://www.instagram.com/ak.barbers.cz/",
    ],
    ...(location.bookingUrl && {
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: location.bookingUrl,
          actionPlatform: "https://schema.org/DesktopWebPlatform",
        },
        result: {
          "@type": "Reservation",
          name: "Rezervace střihu",
        },
      },
    }),
  };
}

// ---------------------------------------------------------------------------
// FAQ schema
// ---------------------------------------------------------------------------

export function generateFaqSchema(faq: SeoFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb schema
// ---------------------------------------------------------------------------

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.akbarber.com${item.href}`,
    })),
  };
}

// ---------------------------------------------------------------------------
// Service schema (for service landing pages)
// ---------------------------------------------------------------------------

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  price: string,
  locationName: string,
  pageUrl: string,
) {
  const priceNum = price.replace(/[^0-9]/g, "").slice(0, 3);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "BarberShop",
      name: locationName,
    },
    areaServed: {
      "@type": "City",
      name: "Praha",
    },
    offers: {
      "@type": "Offer",
      price: priceNum,
      priceCurrency: "CZK",
      availability: "https://schema.org/InStock",
    },
  };
}
