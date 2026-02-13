import { siteConfig, locations } from "./data";
import type { Location } from "@/types";

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
