import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export const metadata: Metadata = {
  title: "Dárkové poukázky – Darujte zážitek | AK BARBERS",
  description:
    "Kupte dárkový voucher na profesionální pánské stříhání, skin fade nebo úpravu vousů v AK BARBERS. Online nákup pro pobočky v Berouně, Praze, Plzni, Hořovicích, Slaném, Králově Dvoře a Nitře.",
  keywords: [
    "dárkový poukaz barbershop",
    "voucher pánské stříhání",
    "dárkový voucher barber",
    "AK BARBERS poukázka",
    "dárek pro muže stříhání",
    "gift card barber Praha",
    "gift card barber Plzeň",
    "gift card barber Beroun",
  ],
  openGraph: {
    title: "Dárkové poukázky – Darujte zážitek | AK BARBERS",
    description:
      "Kupte dárkový voucher na profesionální pánské stříhání v AK BARBERS. Vyberte pobočku a objednejte online.",
    url: "https://www.akbarber.com/vouchery",
    siteName: "AK BARBERS",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/og/og-index.png",
        width: 1200,
        height: 630,
        alt: "AK BARBERS – Dárkové poukázky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dárkové poukázky | AK BARBERS",
    description:
      "Darujte zážitek z prémiového barbershopu. Voucher online pro všechny pobočky AK BARBERS.",
    images: ["/images/og/og-index.png"],
  },
  alternates: {
    canonical: "https://www.akbarber.com/vouchery",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// ISR — revalidate every 24 hours
export const revalidate = 86400;

const voucherLocations = locations.filter(
  (loc) => loc.eshopUrl && loc.type !== "coming-soon"
);

// JSON-LD: Product list + BreadcrumbList + FAQPage
function buildJsonLd() {
  const offers = voucherLocations.flatMap((loc) =>
    loc.services.map((service) => {
      const priceMatch = service.price.match(/\d+/);
      const price = priceMatch ? priceMatch[0] : "0";
      const currency = loc.id === "nitra" ? "EUR" : "CZK";
      return {
        "@type": "Offer",
        name: `Voucher – ${service.name} (${loc.name})`,
        price,
        priceCurrency: currency,
        url: loc.eshopUrl,
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "BarberShop",
          name: loc.name,
          address: loc.address,
          ...(loc.geo && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: loc.geo.lat,
              longitude: loc.geo.lng,
            },
          }),
        },
      };
    })
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dárkový voucher AK BARBERS",
    description:
      "Dárkový poukaz na profesionální barbershop služby v síti AK BARBERS – pánské stříhání, skin fade, úprava vousů.",
    brand: {
      "@type": "Brand",
      name: "AK BARBERS",
    },
    image: "https://www.akbarber.com/images/og/og-index.png",
    offers,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: "https://www.akbarber.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dárkové poukázky",
        item: "https://www.akbarber.com/vouchery",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jak koupit dárkový voucher AK BARBERS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vyberte pobočku na stránce vouchery, klikněte na 'Koupit voucher' a budete přesměrováni do e-shopu dané pobočky. Voucher obdržíte e-mailem.",
        },
      },
      {
        "@type": "Question",
        name: "Lze voucher koupit i osobně na pobočce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ano, dárkové vouchery je možné zakoupit i přímo v kterékoli pobočce AK BARBERS.",
        },
      },
      {
        "@type": "Question",
        name: "Na kterých pobočkách AK BARBERS lze uplatnit voucher?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Vouchery jsou k dispozici pro pobočky: ${voucherLocations.map((l) => l.name).join(", ")}.`,
        },
      },
    ],
  };

  return [productSchema, breadcrumbSchema, faqSchema];
}

export default function VoucheryPage() {
  const jsonLdItems = buildJsonLd();

  return (
    <>
      {/* Structured Data */}
      {jsonLdItems.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="pb-8 pt-14">
        <div className="container">
          <h1 className="mb-4 font-[family-name:var(--font-roboto-slab)] text-4xl font-bold leading-tight">
            Dárkové<br />poukázky
          </h1>
          <p className="mb-10 max-w-[480px] text-sm leading-[1.7] text-gray">
            Potěšte přítele, partnera nebo někoho blízkého dárkovým voucherem
            na profesionální barbershop služby. Vyberte pobočku a zakupte
            voucher přímo v&nbsp;e-shopu.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[16px] font-bold text-black">
                1
              </span>
              <p className="text-[14px] font-medium leading-snug text-white">
                Vyberte pobočku
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[16px] font-bold text-black">
                2
              </span>
              <p className="text-[14px] font-medium leading-snug text-white">
                Zvolte službu v&nbsp;e-shopu
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[16px] font-bold text-black">
                3
              </span>
              <p className="text-[14px] font-medium leading-snug text-white">
                Voucher obdržíte e-mailem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subheading */}
      <section>
        <div className="container">
          <p className="mb-4 text-[13px] font-medium text-gray-light">
            Vyberte si pobočku:
          </p>
        </div>
      </section>

      {/* Branch cards */}
      <section className="pb-16">
        <div className="container flex flex-col gap-3">
          {voucherLocations.map((loc) => {
            const isSlovak = loc.id === "nitra";

            return (
              <div
                key={loc.id}
                className="overflow-hidden rounded-xl bg-bg-card"
              >
                {/* Branch header + CTA */}
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={loc.image}
                          alt={loc.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-[15px] font-bold">{loc.name}</h2>
                        <p className="text-[12px] text-[#666]">{loc.address}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={loc.eshopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-black transition-opacity hover:opacity-90"
                  >
                    {isSlovak ? "Kúpiť voucher" : "Koupit voucher"}
                    <IconCircle className="bg-black [&_svg]:stroke-white" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </>
  );
}
