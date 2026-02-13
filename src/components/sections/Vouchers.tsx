import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";

export function Vouchers() {
  return (
    <section className="py-20" id="vouchers">
      <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-4xl font-bold">Dárkové poukázky</h2>
          <p className="mt-3 text-sm text-gray">
            Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás v salonu
            nebo{" "}
            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              online
            </a>
            .
          </p>
          <a
            href={siteConfig.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Koupit online
            <IconCircle />
          </a>
        </div>
        <div className="h-40 w-40 shrink-0">
          <Image
            src="/images/barber-pole.png"
            alt="Barber pole"
            width={160}
            height={160}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
