import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AK BARBERS - Vyberte si z našich provozoven",
    template: "%s | AK BARBERS",
  },
  description:
    "Síť prémiových barbershopů v České republice a na Slovensku. Kvalitní pánské stříhání, úprava vousů a skvělý zážitek. Najdete nás v Berouně, Praze, Plzni, Hořovicích, Slaném, Českých Budějovicích a Nitře.",
  metadataBase: new URL("https://www.akbarber.com"),
  openGraph: {
    title: "AK BARBERS - Vyberte si z našich provozoven",
    description:
      "Síť prémiových barbershopů v České republice a na Slovensku. Kvalitní pánské stříhání, úprava vousů a skvělý zážitek.",
    url: "https://www.akbarber.com",
    siteName: "AK BARBERS",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://www.akbarber.com/wp-content/uploads/2023/06/social-image-1.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK BARBERS - Vyberte si z našich provozoven",
    description:
      "Síť prémiových barbershopů v České republice a na Slovensku.",
    images: ["https://www.akbarber.com/wp-content/uploads/2023/06/social-image-1.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.akbarber.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["HealthAndBeautyBusiness", "Organization"],
                  "@id": "https://www.akbarber.com/#organization",
                  name: "AK BARBERS",
                  url: "https://www.akbarber.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.akbarber.com/wp-content/uploads/2023/06/social-image-1.jpg",
                  },
                  sameAs: [
                    "https://www.facebook.com/people/Akbarberscz/100079448784976/",
                    "https://www.instagram.com/ak.barbers.cz/",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+420775502831",
                    contactType: "customer service",
                    availableLanguage: ["Czech", "Slovak"],
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Saturday", "Sunday"],
                      opens: "09:00",
                      closes: "14:00",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.akbarber.com/#website",
                  url: "https://www.akbarber.com",
                  name: "AK BARBERS",
                  publisher: { "@id": "https://www.akbarber.com/#organization" },
                  inLanguage: "cs",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.akbarber.com/#webpage",
                  url: "https://www.akbarber.com",
                  name: "AK BARBERS - Vyberte si z našich provozoven",
                  isPartOf: { "@id": "https://www.akbarber.com/#website" },
                  about: { "@id": "https://www.akbarber.com/#organization" },
                  inLanguage: "cs",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
