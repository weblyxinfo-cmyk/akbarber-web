import Image from "next/image";
import { siteConfig } from "@/lib/data";

export function Vouchers() {
  return (
    <section className="py-12" id="vouchers">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-bg-card">
          <div className="flex items-center">
            {/* Left: Text content */}
            <div className="flex-1 px-8 py-14 sm:px-12 sm:py-16">
              <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-[28px] font-bold uppercase leading-[1.2] sm:text-[32px]">
                Dárkové
                <br />
                poukázky
              </h2>
              <p className="mb-6 max-w-[320px] text-[13px] leading-[1.7] text-gray">
                Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás
                v&nbsp;salonu nebo online.
              </p>
              <a
                href={siteConfig.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                style={{ color: "#fff" }}
              >
                Koupit online
              </a>
            </div>

            {/* Right: Barber pole image */}
            <div className="hidden shrink-0 pr-8 sm:block">
              <Image
                src="/images/barber-pole.png"
                alt="Dárkové poukázky"
                width={160}
                height={320}
                className="h-auto w-[140px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
