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

          {/* Meta info: Adresa | Mobil | Otevírací doba */}
          <div className="mb-12 flex flex-wrap gap-12 max-md:gap-6">
            <div>
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-light">
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
              <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                Mobil
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
                  {h.days}&ensp;{h.hours}
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
