export interface OpeningHours {
  days: string;
  hours: string;
}

export interface Service {
  name: string;
  price: string;
  description?: string;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  openingHours: OpeningHours[];
  type: "walk-in" | "reservation" | "walk-in + reservation";
  bookingUrl?: string;
  eshopUrl?: string;
  services: Service[];
  image: string;
  rating?: string;
  note?: string;
  currency: "CZK" | "EUR";
  googleMapsUrl: string;
  reviewRating: number;
  reviewCount: string;
  rankText: string;
  mapQuery: string;
}

export interface VoucherBranch {
  name: string;
  address: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface JobPosition {
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
}

// ---------------------------------------------------------------------------
// SEO Landing Pages
// ---------------------------------------------------------------------------

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoServiceItem {
  name: string;
  price: string;
  description?: string;
  link?: string; // link to service landing page
}

export interface SeoInternalLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SeoLocationContent {
  lang: "cs" | "en";
  slug: string;
  locationId: "praha-1" | "praha-6";
  alternateSlug: string; // the other language version
  crossLocationSlug: string; // the other Praha location
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
  heroHeading: string;
  localityDescription: string[];
  services: SeoServiceItem[];
  aboutText: string;
  faq: SeoFaqItem[];
  internalLinks: SeoInternalLink[];
  breadcrumbs: { name: string; href: string }[];
}

export interface SeoServiceContent {
  lang: "cs" | "en";
  slug: string;
  locationId: "praha-1" | "praha-6";
  serviceType: "haircut" | "skin-fade";
  alternateSlug: string;
  crossLocationSlug: string; // same service, other location
  crossServiceSlug: string; // other service, same location
  locationSlug: string; // parent location page
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
  heroHeading: string;
  heroSubheading: string;
  serviceDetail: string[];
  servicePrice: string;
  whyUs: string[];
  otherServices: SeoServiceItem[];
  faq: SeoFaqItem[];
  internalLinks: SeoInternalLink[];
  breadcrumbs: { name: string; href: string }[];
}
