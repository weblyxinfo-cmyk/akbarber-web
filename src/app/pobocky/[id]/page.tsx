import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Vouchers } from "@/components/sections/Vouchers";
import { Contact } from "@/components/sections/Contact";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const location = locations.find((l) => l.id === id);
  if (!location) return {};

  const title = `AK BARBERS – ${location.city} | Barbershop ${location.city}`;
  const description = `${location.name} – ${location.address}. ${
    location.type === "walk-in"
      ? "Přijďte bez objednání."
      : "Rezervujte si termín online."
  } Pánské stříhání od 449 Kč, úprava vousů, skin fade. Otevřeno Po–Pá 9–18, So–Ne 9–14.`;

  const ogImage = `/images/og/og-${location.id}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.akbarber.com/pobocky/${location.id}`,
      siteName: "AK BARBERS",
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.akbarber.com/pobocky/${location.id}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { id } = await params;
  const location = locations.find((l) => l.id === id);
  if (!location) notFound();

  const displayName = `AK BARBERS – ${location.city}${location.id === "beroun-2" ? " 2" : ""}`;

  // JSON-LD: BarberShop (LocalBusiness) schema
  const barberShopSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `https://www.akbarber.com/pobocky/${location.id}#business`,
    name: location.name,
    image: location.image,
    url: `https://www.akbarber.com/pobocky/${location.id}`,
    telephone: location.phone,
    email: "info@akbarber.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.city,
      addressCountry: location.id === "nitra" ? "SK" : "CZ",
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
    priceRange: "299 Kč – 799 Kč",
    currenciesAccepted: location.id === "nitra" ? "EUR" : "CZK",
    paymentAccepted: "Cash, Credit Card",
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
        priceCurrency: location.id === "nitra" ? "EUR" : "CZK",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: service.price.replace(/[^0-9]/g, "").slice(0, 3),
          priceCurrency: location.id === "nitra" ? "EUR" : "CZK",
        },
      })),
    },
    parentOrganization: {
      "@id": "https://www.akbarber.com/#organization",
    },
    sameAs: [
      "https://www.facebook.com/people/Akbarberscz/100079448784976/",
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

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Provozovny",
        item: "https://www.akbarber.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: location.name,
        item: `https://www.akbarber.com/pobocky/${location.id}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barberShopSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Image */}
      <section className="pt-8">
        <div className="container">
          <div className="h-[200px] overflow-hidden rounded-[10px]">
            <Image
              src={location.image}
              alt={location.name}
              width={800}
              height={200}
              className="block h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="pt-8">
        <div className="container">
          <h1 className="mb-5 text-[28px] font-bold">{displayName}</h1>

          {location.bookingUrl ? (
            <a
              href={location.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
            >
              Rezervovat online
              <IconCircle />
            </a>
          ) : (
            <p className="mb-8 text-[13px] text-[#888]">Pouze bez objednání</p>
          )}

          {/* Meta info: Adresa | Mobil | Otevírací doba */}
          <div className="mb-12 flex flex-wrap gap-12 max-md:gap-6">
            <div>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Adresa
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#999] transition-colors hover:text-white"
              >
                {location.address}
              </a>
            </div>
            <div>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Mobil
              </div>
              <a
                href={`tel:${location.phone}`}
                className="text-[13px] text-white underline underline-offset-2"
              >
                {location.phone}
              </a>
            </div>
            <div>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Otevírací doba
              </div>
              {location.openingHours.map((h) => (
                <div key={h.days} className="text-[13px]">
                  <span className="font-semibold">{h.days}</span>
                  <span className="ml-3 text-[#999]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-5">
        <div className="container">
          {location.services.map((service, i) => (
            <div
              key={service.name}
              className={`pb-8 pt-8 ${i < location.services.length - 1 ? "border-b border-border" : ""} ${i === 0 ? "pt-0" : ""}`}
            >
              <h3 className="mb-1.5 font-[family-name:var(--font-roboto-slab)] text-2xl font-bold">
                {service.name}
              </h3>
              {service.description && (
                <p className="mb-2.5 text-[13px] leading-[1.6] text-gray-light">
                  {service.description}
                </p>
              )}
              <p className="text-[26px] font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
            Záleží nám na&nbsp;tom, abyste se u&nbsp;nás cítili dobře
          </h2>
          <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
            Stačí k nám dorazit a svěřit se do rukou našich profesionálních
            barberů, pod vedením majitele sítě Adriana Křižana, který všechny nové
            příchozí nejprve zaučí, než je pustí do provozu a tím pro Vás
            zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.
          </p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
          >
            Kontakt
            <IconCircle />
          </a>
        </div>
      </section>

      <CareerAcademy />
      <Vouchers eshopUrl={location.eshopUrl} />
      <Contact />
    </>
  );
}
