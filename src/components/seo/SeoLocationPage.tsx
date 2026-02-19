import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/types";
import type { SeoLocationContent } from "@/types";
import { IconCircle } from "@/components/IconCircle";
import { GoogleReviewBadge } from "@/components/sections/GoogleReviewBadge";
import { CareerAcademy } from "@/components/sections/CareerAcademy";
import { Contact } from "@/components/sections/Contact";
import { translateDays } from "@/lib/translations";
import {
  generateSeoBarberShopSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

interface Props {
  content: SeoLocationContent;
  location: Location;
}

export function SeoLocationPage({ content, location }: Props) {
  const lang = content.lang;
  const baseUrl = "https://www.akbarber.com";
  const pageUrl = `${baseUrl}/${content.slug}`;

  const barberShopSchema = generateSeoBarberShopSchema(location, pageUrl);
  const faqSchema = generateFaqSchema(content.faq);
  const breadcrumbSchema = generateBreadcrumbSchema(content.breadcrumbs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barberShopSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-8">
        <div className="container">
          <div className="h-[200px] overflow-hidden rounded-[10px]">
            <Image
              src={location.image}
              alt={content.heroHeading}
              width={800}
              height={200}
              className="block h-full w-full object-cover object-[center_60%]"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Heading + Review Badge + CTA */}
      <section className="pt-8">
        <div className="container">
          <h1 className="mb-4 font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
            {content.heroHeading}
          </h1>

          <GoogleReviewBadge location={location} lang={lang} />

          {location.type === "walk-in + reservation" && (
            <div className="mb-8 flex flex-col gap-2">
              <p className="text-[20px] font-bold text-white">
                {lang === "en" ? "Walk-ins Welcome" : "Bez objednání – Walk ins"}
              </p>
              {location.bookingUrl && (
                <a
                  href={location.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[20px] font-bold text-white"
                >
                  {lang === "en" ? "Book Online" : "Rezervovat online"}
                  <IconCircle />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Info Box */}
      <section className="py-5">
        <div className="container">
          <div className="mb-12 flex flex-wrap gap-12 max-md:gap-6">
            <div>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-gray-light">
                {lang === "en" ? "Address" : "Adresa"}
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
                {lang === "en" ? "Phone" : "Mobil"}
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
                {lang === "en" ? "Opening Hours" : "Otevírací doba"}
              </div>
              {location.openingHours.map((h) => (
                <div key={h.days} className="text-[13px]">
                  <span className="font-semibold">
                    {translateDays(h.days, lang)}
                  </span>
                  <span className="ml-3 text-[#999]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locality Description */}
      <section className="py-8">
        <div className="container">
          {content.localityDescription.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 max-w-[640px] text-sm leading-[1.7] text-gray"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Price List */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-6 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
            {lang === "en" ? "Services & Prices" : "Ceník služeb"}
          </h2>
          {content.services.map((service, i) => (
            <div
              key={service.name}
              className={`pb-8 pt-8 ${i < content.services.length - 1 ? "border-b border-border" : ""} ${i === 0 ? "pt-0" : ""}`}
            >
              <h3 className="mb-1.5 font-[family-name:var(--font-roboto-slab)] text-2xl font-bold">
                {service.link ? (
                  <Link
                    href={service.link}
                    className="transition-colors hover:text-[#ccc]"
                  >
                    {service.name}
                  </Link>
                ) : (
                  service.name
                )}
              </h3>
              <p className="text-[26px] font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-4 max-w-[480px] font-[family-name:var(--font-roboto-slab)] text-[32px] font-bold leading-[1.2]">
            {lang === "en"
              ? "Your comfort is our priority"
              : "Záleží nám na\u00a0tom, abyste se u\u00a0nás cítili dobře"}
          </h2>
          <p className="mb-4 max-w-[480px] text-sm leading-[1.7] text-gray">
            {content.aboutText}
          </p>
        </div>
      </section>

      {/* CTA Booking */}
      <section className="py-10">
        <div className="container">
          <div className="rounded-2xl bg-bg-card p-8 text-center sm:p-12">
            <h2 className="mb-4 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
              {lang === "en" ? "Ready for a fresh cut?" : "Připraveni na nový střih?"}
            </h2>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {location.bookingUrl && (
                <a
                  href={location.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                >
                  {lang === "en" ? "Book Online" : "Rezervovat online"}
                </a>
              )}
              <span className="text-sm text-gray">
                {lang === "en"
                  ? "or just walk in — no appointment needed"
                  : "nebo přijďte bez objednání"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8">
        <div className="container">
          <h2 className="mb-6 font-[family-name:var(--font-roboto-slab)] text-xl font-bold">
            {lang === "en" ? "Explore More" : "Další informace"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.internalLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-white/20 hover:text-white"
                >
                  {link.label}
                  <IconCircle />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-white/20 hover:text-white"
                >
                  {link.label}
                  <IconCircle />
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="container">
          <h2 className="mb-8 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
            {lang === "en" ? "Frequently Asked Questions" : "Často kladené otázky"}
          </h2>
          <div className="space-y-6">
            {content.faq.map((item, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="mb-2 text-[15px] font-bold">{item.question}</h3>
                <p className="text-[13px] leading-[1.7] text-gray">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CareerAcademy lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
