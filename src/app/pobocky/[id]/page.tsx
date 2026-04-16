import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Vouchers } from "@/components/sections/Vouchers";
import { Contact } from "@/components/sections/Contact";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Lang } from "@/lib/translations";
import {
  locationPageTranslations,
  translateService,
  translateDays,
} from "@/lib/translations";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { id } = await params;
  const { lang: langParam } = await searchParams;
  const location = locations.find((l) => l.id === id);
  if (!location) return {};

  const isBilingual = id === "praha-1" || id === "praha-5" || id === "praha-6" || id === "jesenice";
  const isEnglish = isBilingual && langParam === "en";
  const isSlovak = location.id === "nitra";

  let title: string;
  let description: string;

  if (isEnglish) {
    const enTitles: Record<string, string> = {
      "praha-1": "AK BARBERS Prague 1 \u2014 Premium Barbershop in the City Centre",
      "praha-5": "AK BARBERS Prague 5 \u2014 Professional Barbershop Sm\u00edchov",
      "praha-6": "AK BARBERS Prague 6 \u2014 Professional Barbershop",
      "jesenice": "AK BARBERS Jesenice \u2014 Professional Barbershop near Prague",
    };
    title = enTitles[id] || `AK BARBERS ${location.city} \u2014 Professional Barbershop`;
    const minPrice = id === "praha-6" || id === "jesenice" ? "449" : "499";
    description = `${location.name} \u2013 ${location.address}. Walk-ins welcome, online booking available. Men\u2019s haircuts from ${minPrice} CZK, beard grooming, skin fade.`;
  } else if (isSlovak) {
    title = `AK BARBERS – ${location.city} | Barbershop ${location.city}`;
    description = `${location.name} – ${location.address}. ${
      location.type === "walk-in"
        ? "Príďte bez objednania."
        : "Rezervujte si termín online."
    } Pánske strihanie od 12 €, úprava brady, skin fade. Otvorené Po–Pi 9–18, So–Ne 9–14.`;
  } else if (location.type === "coming-soon") {
    title = `AK BARBERS – ${location.name} | Nová pobočka`;
    description = `${location.name} – ${location.address}. Nová pobočka AK Barbers se připravuje.${location.openingDate ? ` Otevíráme ${location.openingDate}.` : ""} ${location.transport?.publicTransport?.[0] || ""}`;
  } else {
    const transportHint = location.transport?.publicTransport?.[0]?.split("–")[0]?.trim() || "";
    const parkingHint = location.transport?.parking ? " Parkování k dispozici." : "";
    title = `AK BARBERS – ${location.city} | Barbershop ${location.city}`;
    description = `${location.name} – ${location.address}. ${
      location.type === "walk-in"
        ? "Přijďte bez objednání."
        : "Rezervujte si termín online."
    } Pánské stříhání od 449 Kč, úprava vousů, skin fade.${transportHint ? ` ${transportHint}.` : ""}${parkingHint}`;
  }

  const ogImage = `/images/og/og-${location.id}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.akbarber.com/pobocky/${location.id}`,
      siteName: "AK BARBERS",
      locale: isEnglish ? "en_US" : isSlovak ? "sk_SK" : "cs_CZ",
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

export default async function LocationPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { lang: langParam } = await searchParams;
  const location = locations.find((l) => l.id === id);
  if (!location) notFound();

  const isSlovak = location.id === "nitra";
  const isBilingual = id === "praha-1" || id === "praha-5" || id === "praha-6" || id === "jesenice";
  const lang: Lang = isBilingual && langParam === "en" ? "en" : "cs";
  const t = locationPageTranslations[lang];

  const displayNameSuffix: Record<string, string> = {
    "beroun-2": " 2",
    "praha-1": " Máj",
    "praha-3": " 3 Žižkov",
    "praha-5": " 5 Smíchov",
    "praha-6": " 6 Břevnov",
  };
  const displayName = `AK BARBERS – ${location.city}${displayNameSuffix[location.id] || ""}`;

  // Helper: map Czech/Slovak day abbreviations to schema.org days
  const dayMap: Record<string, string[]> = {
    "Po": ["Monday"], "Út": ["Tuesday"], "St": ["Wednesday"],
    "Čt": ["Thursday"], "Pá": ["Friday"], "Pia": ["Friday"],
    "So": ["Saturday"], "Ne": ["Sunday"],
  };
  function parseDays(daysStr: string): string[] {
    const rangeMatch = daysStr.match(/^(\S+)\s*–\s*(\S+)$/);
    if (rangeMatch) {
      const allDays = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
      const start = rangeMatch[1] === "Pia" ? "Pá" : rangeMatch[1];
      const end = rangeMatch[2];
      const startIdx = allDays.indexOf(start);
      const endIdx = allDays.indexOf(end);
      if (startIdx >= 0 && endIdx >= 0) {
        return allDays.slice(startIdx, endIdx + 1).flatMap((d) => dayMap[d] || []);
      }
    }
    return dayMap[daysStr.trim()] || [];
  }
  function parseTime(hoursStr: string): { opens: string; closes: string } {
    const parts = hoursStr.split("–").map((s) => s.trim());
    return { opens: parts[0] || "09:00", closes: parts[1] || "18:00" };
  }

  const openingHoursSpec = location.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: parseDays(h.days),
    ...parseTime(h.hours),
  }));

  // Calculate price range from actual services
  const prices = location.services.map((s) => {
    const match = s.price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }).filter((p) => p > 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const currency = isSlovak ? "€" : "Kč";
  const priceRange = `${minPrice} ${currency} – ${maxPrice} ${currency}`;

  // JSON-LD: BarberShop (LocalBusiness) schema
  const postalCode = location.address.match(/\d{3}\s?\d{2}/)?.[0] || "";
  const currencyCode = location.id === "nitra" ? "EUR" : "CZK";
  const countryCode = location.id === "nitra" ? "SK" : "CZ";

  const barberShopSchema = {
    "@context": "https://schema.org",
    "@type": ["BarberShop", "LocalBusiness"],
    "@id": `https://www.akbarber.com/pobocky/${location.id}#business`,
    name: location.name,
    image: `https://www.akbarber.com${location.image}`,
    url: `https://www.akbarber.com/pobocky/${location.id}`,
    telephone: location.phone,
    email: "info@akbarber.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.city,
      ...(postalCode && { postalCode }),
      addressCountry: countryCode,
    },
    ...(location.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.geo.lat,
        longitude: location.geo.lng,
      },
    }),
    ...(location.openingHours.length > 0 && {
      openingHoursSpecification: openingHoursSpec,
    }),
    ...(prices.length > 0 && { priceRange }),
    currenciesAccepted: currencyCode,
    paymentAccepted: "Cash, Credit Card",
    publicAccess: true,
    ...(location.transport?.parking && {
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
      ],
    }),
    ...(location.reviewRating > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: location.reviewRating,
        reviewCount: location.reviewCount.replace("+", ""),
        bestRating: "5",
      },
    }),
    ...(location.services.length > 0 && {
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
          priceCurrency: currencyCode,
        })),
      },
    }),
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

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isSlovak ? "Prevádzky" : "Provozovny",
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
              className="block h-full w-full object-cover object-[center_60%]"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="pt-8">
        <div className="container">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-[28px] font-bold">{displayName}</h1>
            {isBilingual && <LanguageSwitcher lang={lang} />}
          </div>

          {location.type === "coming-soon" ? (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#444] px-5 py-2 text-[20px] font-bold text-[#ccc]">
              {location.openingDate ? `Otevíráme ${location.openingDate}` : "Připravuje se"}
            </div>
          ) : location.type === "reservation" ? (
            <div className="mb-8 flex flex-col gap-3">
              <p className="text-[15px] font-medium text-white">
                {lang === "en" ? t.byAppointment : "Pouze na rezervaci"}
              </p>
              <a
                href={location.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-black transition-opacity hover:opacity-90"
              >
                {lang === "en"
                  ? "Book online"
                  : isSlovak
                    ? "Rezervácia online – kliknite sem"
                    : "Rezervace online – klikněte zde"}
                <IconCircle className="bg-black [&_svg]:stroke-white" />
              </a>
            </div>
          ) : location.type === "walk-in + reservation" ? (
            <div className="mb-8 flex flex-col gap-3">
              <p className="text-[15px] font-medium text-gray">
                {lang === "en"
                  ? t.walkIn
                  : isSlovak
                    ? "Bez objednania – Walk ins"
                    : "Bez objednání – Walk ins"}
              </p>
              <a
                href={location.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-black transition-opacity hover:opacity-90"
              >
                {lang === "en"
                  ? "Book online"
                  : isSlovak
                    ? "Rezervácia online – kliknite sem"
                    : "Rezervace online – klikněte zde"}
                <IconCircle className="bg-black [&_svg]:stroke-white" />
              </a>
            </div>
          ) : (
            <p className="mb-8 text-[20px] font-bold text-white">
              {lang === "en"
                ? t.walkIn
                : isSlovak
                  ? "Iba bez objednania – Walk ins"
                  : "Bez objednání – Walk ins"}
            </p>
          )}

          {/* Meta info: Address | Phone | Opening Hours */}
          <div className="mb-12 flex flex-wrap gap-12 max-md:gap-6">
            <div>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                {lang === "en" ? t.address : "Adresa"}
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
                {lang === "en" ? t.phone : "Mobil"}
              </div>
              <a
                href={`tel:${location.phone}`}
                className="text-[13px] text-white underline underline-offset-2"
              >
                {location.phone}
              </a>
            </div>
            {location.openingHours.length > 0 && (
              <div>
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                  {lang === "en"
                    ? t.openingHours
                    : isSlovak
                      ? "Otváracie hodiny"
                      : "Otevírací doba"}
                </div>
                {location.openingHours.map((h) => (
                  <div key={h.days} className="text-[13px]">
                    <span className="font-semibold">
                      {translateDays(h.days, lang)}
                    </span>
                    <span className="ml-3 text-[#999]">{h.hours}</span>
                  </div>
                ))}
                <Link
                  href="/"
                  className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#999] transition-colors hover:text-white"
                >
                  {lang === "en" ? "View all locations" : isSlovak ? "Všetky prevádzky" : "Všechny pobočky"}
                  <IconCircle />
                </Link>
              </div>
            )}
          </div>

          {/* Transport */}
          {location.transport && (
            <div className="mt-10 rounded-lg border border-border p-6">
              <h2 className="mb-4 text-[15px] font-bold">
                {lang === "en" ? "How to get here" : isSlovak ? "Ako sa k nám dostanete" : "Jak se k nám dostanete"}
              </h2>
              <div className="flex flex-wrap gap-8 max-md:gap-6">
                {location.transport.publicTransport && location.transport.publicTransport.length > 0 && (
                  <div className="flex-1 min-w-[200px]">
                    <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                      {lang === "en" ? "Public transport" : isSlovak ? "MHD" : "MHD"}
                    </div>
                    <ul className="space-y-1.5">
                      {location.transport.publicTransport.map((line) => (
                        <li key={line} className="text-[13px] text-[#999]">{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {location.transport.parking && (
                  <div className="flex-1 min-w-[200px]">
                    <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                      {lang === "en" ? "Parking" : isSlovak ? "Parkovanie" : "Parkování"}
                    </div>
                    <p className="text-[13px] text-[#999]">{location.transport.parking}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Price List */}
      {location.services.length > 0 ? (
        <section className="py-5">
          <div className="container">
            {location.services.map((service, i) => {
              const s = translateService(service, lang);
              return (
                <div
                  key={service.name}
                  className={`pb-8 pt-8 ${i < location.services.length - 1 ? "border-b border-border" : ""} ${i === 0 ? "pt-0" : ""}`}
                >
                  <h3 className="mb-1.5 font-[family-name:var(--font-roboto-slab)] text-2xl font-bold">
                    {s.name}
                  </h3>
                  {s.description && (
                    <p className="mb-2.5 text-[13px] leading-[1.6] text-gray-light">
                      {s.description}
                    </p>
                  )}
                  <p className="text-[26px] font-bold">{service.price}</p>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="container">
            <div className="rounded-lg border border-[#333] p-8 text-center">
              <h2 className="mb-2 font-[family-name:var(--font-roboto-slab)] text-2xl font-bold">
                Nová pobočka se připravuje
              </h2>
              <p className="text-sm text-gray">
                Brzy vám představíme kompletní nabídku služeb a otevírací dobu. Sledujte nás!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* About */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
            {lang === "en"
              ? t.aboutHeading
              : isSlovak
                ? "Záleží nám na\u00a0tom, aby ste sa u\u00a0nás cítili dobre"
                : t.aboutHeading}
          </h2>
          <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
            {lang === "en"
              ? t.aboutText
              : isSlovak
                ? "Príďte bez objednania a doprajte si starostlivosť, ktorú spoznáte na prvý pohľad. V AK Barbers pracujeme podľa prísnych štandardov kvality, vďaka ktorým udržiavame špičkový výsledok na každej pobočke. Každý nový barber prechádza profesionálnym zaškolením a až potom nastupuje do prevádzky. Precíznosť, čistota a detail sú pre nás samozrejmosťou."
                : t.aboutText}
          </p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
          >
            {lang === "en" ? t.contact : "Kontakt"}
            <IconCircle />
          </a>
        </div>
      </section>

      <CareerAcademy lang={lang} />
      <Vouchers eshopUrl={location.eshopUrl} isSlovak={isSlovak} lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
