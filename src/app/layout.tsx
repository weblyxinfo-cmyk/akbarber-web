import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
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
        url: "/images/og/og-index.png",
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
    images: ["/images/og/og-index.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.akbarber.com",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.svg",
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MH92BBLF');`,
          }}
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MH92BBLF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
