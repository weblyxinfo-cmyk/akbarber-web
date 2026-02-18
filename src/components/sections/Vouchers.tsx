import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function Vouchers() {
  return (
    <section className="py-12" id="vouchers">
      <div className="container flex items-center justify-between gap-6">
        <div>
          <h2 className="mb-2 font-[family-name:var(--font-playfair)] text-[28px] font-bold">
            Dárkové poukázky
          </h2>
          <p className="mb-2 text-sm text-gray">
            Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás v salonu
            nebo{" "}
            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              online
            </a>
            .
          </p>
          <a
            href={siteConfig.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
          >
            Koupit online
            <IconCircle />
          </a>
        </div>
        <div className="hidden shrink-0 sm:block">
          <Image
            src="/images/barber-pole.png"
            alt="Barber pole"
            width={140}
            height={280}
            className="h-auto w-[120px]"
          />
        </div>
      </div>
    </section>
  );
}
