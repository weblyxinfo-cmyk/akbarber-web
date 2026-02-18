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
