import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { GoogleReviewBadge } from "@/components/sections/GoogleReviewBadge";
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
  return {
    title: `AK BARBERS – ${location.city}`,
    description: `${location.name} – ${location.address}. ${
      location.type === "walk-in"
        ? "Přijďte bez objednání."
        : "Rezervujte si termín online."
    }`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { id } = await params;
  const location = locations.find((l) => l.id === id);
  if (!location) notFound();

  const displayName = `AK BARBERS – ${location.city}${location.id === "beroun-2" ? " 2" : ""}`;

  return (
    <>
      {/* Hero Image */}
      <section className="h-[320px] w-[100vw] overflow-hidden bg-bg leading-[0] md:relative md:left-1/2 md:ml-[-50vw]">
        <Image
          src={location.image}
          alt={location.name}
          width={1440}
          height={400}
          className="block h-full w-full object-cover"
          sizes="100vw"
          priority
        />
      </section>

      {/* Location Info */}
      <section className="pt-8">
        <div className="container">
          <h1 className="mb-6 font-[family-name:var(--font-playfair)] text-[28px] font-bold leading-tight">
            {displayName}
          </h1>

          {/* Google Review Badge */}
          <GoogleReviewBadge location={location} />

          {/* Meta info cards */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-bg-card px-5 py-4">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-light">
                Adresa
              </div>
              <div className="text-[13px] leading-[1.5] text-[#bbb]">{location.address}</div>
            </div>
            <div className="rounded-xl border border-border bg-bg-card px-5 py-4">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-light">
                Mobil
              </div>
              <a
                href={`tel:${location.phone}`}
                className="text-[13px] font-medium text-[#fff] underline underline-offset-2"
              >
                {location.phone}
              </a>
            </div>
            <div className="rounded-xl border border-border bg-bg-card px-5 py-4">
              <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-light">
                Otevírací doba
              </div>
              {location.openingHours.map((h) => (
                <div key={h.days} className="flex justify-between text-[13px] text-[#bbb]">
                  <span>{h.days}</span>
                  <span className="font-medium text-[#ddd]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-[24px] font-bold">
            Ceník
          </h2>
          {location.services.map((service) => (
            <div key={service.name} className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[20px] font-bold leading-tight">
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-gray-light">
                      {service.description}
                    </p>
                  )}
                </div>
                <p className="shrink-0 text-[22px] font-bold">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8">
        <div className="container">
          <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[24px] font-bold">
            Kde nás najdete
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              src={`https://www.google.com/maps?q=${location.mapQuery}&output=embed&z=15`}
              width="100%"
              height="300"
              style={{ border: 0, filter: "grayscale(1) invert(1) contrast(.85) brightness(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa – ${location.name}`}
            />
          </div>
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#999] transition-colors hover:text-[#fff]"
          >
            Otevřít v Google Maps
            <IconCircle />
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-playfair)] text-[32px] font-bold leading-[1.2]">
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
      <Vouchers />
      <Contact />
    </>
  );
}
