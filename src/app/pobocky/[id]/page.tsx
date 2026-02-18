import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { locations, siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { GoogleReviewBadge } from "@/components/sections/GoogleReviewBadge";
import { GentlemanBanner } from "@/components/sections/GentlemanBanner";
import { About } from "@/components/sections/About";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Vouchers } from "@/components/sections/Vouchers";
import { BarberPole } from "@/components/sections/BarberPole";

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
    title: `${location.name}`,
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
          <h1 className="mb-5 text-[28px] font-bold">{location.name}</h1>

          <GoogleReviewBadge location={location} />

          {/* Meta info: Address | Contact | Hours */}
          <div className="mb-12 flex flex-wrap gap-12 max-md:gap-6">
            <div>
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Adresa
              </div>
              <div className="text-[13px] text-[#999]">{location.address}</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Kontakt
              </div>
              <div className="text-[13px]">
                <a href={`tel:${location.phone}`} className="text-white underline underline-offset-2">
                  {location.phone}
                </a>
              </div>
            </div>
            <div>
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Otevírací doba
              </div>
              {location.openingHours.map((h) => (
                <div key={h.days} className="text-[13px] text-[#999]">
                  {h.days} {h.hours}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-5">
        <div className="container">
          {location.services.map((service) => (
            <div key={service.name} className="mb-10">
              <h3 className="mb-1.5 font-[family-name:var(--font-playfair)] text-2xl font-bold">
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

      {/* Google Map */}
      <section className="py-10">
        <div className="container">
          <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-2xl font-bold">
            Kde nás najdete
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "YOUR_API_KEY"}&q=${location.mapQuery}&zoom=16`}
              width="100%"
              height="300"
              style={{
                border: 0,
                filter: "grayscale(1) invert(1) contrast(.85) brightness(1.1)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${location.name}`}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
            >
              Otevřít v Google Maps
              <IconCircle />
            </a>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
            >
              Recenze na Google
              <IconCircle />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-16">
        <div className="container flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-playfair)] text-[32px] font-bold leading-[1.2]">
              Přijďte bez objednání nebo se objednejte online
            </h2>
          </div>
          <div className="flex-1 text-sm leading-[1.7] text-gray">
            <p>
              Všechny naše pobočky fungují jako walk-in barbershopy, takže se
              nemusíte objednávat dopředu. Stačí k nám dorazit a svěřit se do
              rukou našich profesionálních barberů.
            </p>
            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
            >
              Rezervace
              <IconCircle />
            </a>
          </div>
        </div>
      </section>

      <GentlemanBanner />
      <About />
      <CareerAcademy />
      <Vouchers />
      <BarberPole />
    </>
  );
}
