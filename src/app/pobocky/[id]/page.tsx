import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { locations, siteConfig } from "@/lib/data";
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
      <section className="w-full overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          width={1440}
          height={400}
          className="h-[400px] w-full object-cover grayscale"
          sizes="100vw"
          priority
        />
      </section>

      {/* Location Info */}
      <section className="border-b border-border py-12">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold">
            {location.name.replace("AK BARBERS ", "AK BARBERS – ").replace("AK BARBERS –  ", "AK BARBERS – ")}
          </h1>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-gray">
                Adresa
              </h4>
              <p className="text-sm">{location.address}</p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-gray">
                Mobil
              </h4>
              <p className="text-sm">
                <a href={`tel:${location.phone}`} className="hover:underline">
                  {location.phone}
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-gray">
                Otevírací doba
              </h4>
              {location.openingHours.map((h) => (
                <p key={h.days} className="text-sm leading-relaxed">
                  {h.days} &nbsp; {h.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="container">
          {location.services.map((service) => (
            <div key={service.name} className="border-b border-border py-10 first:pt-0">
              <h2 className="text-3xl font-bold">{service.name}</h2>
              {service.description && (
                <p className="mt-3 max-w-[600px] text-sm leading-relaxed text-gray">{service.description}</p>
              )}
              <p className="mt-4 text-3xl font-bold">{service.price}</p>
            </div>
          ))}
          {location.note && (
            <p className="mt-4 text-xs italic text-gray-light">* {location.note}</p>
          )}
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container">
          <h2 className="max-w-[600px] text-3xl font-bold leading-tight sm:text-[42px] sm:leading-[1.2]">
            Záleží nám na tom, abyste se u nás cítili dobře
          </h2>
          <p className="mt-6 max-w-[600px] text-[15px] leading-relaxed text-gray">
            Stačí k nám dorazit a svěřit se do rukou našich profesionálních
            barberů, pod vedením majitele sítě Adriana Křižana, který všechny
            nové příchozí nejprve zaučí, než je pustí do provozu a tím pro Vás
            zajišťujeme tu nejlepší možnou péči o Vaše vlasy a vousy.
          </p>
          <a
            href="#kontakt"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
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
