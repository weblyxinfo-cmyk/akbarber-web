import Image from "next/image";
import { siteConfig } from "@/lib/data";

export function Vouchers() {
  return (
    <section className="py-12" id="vouchers">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-bg-card">
          <div className="flex min-h-[280px] items-center">
            {/* Left: Text content */}
            <div className="relative z-10 flex-1 px-8 py-14 sm:px-12 sm:py-16">
              <h2 className="mb-3 font-[family-name:var(--font-playfair)] text-[28px] font-bold uppercase leading-[1.15] sm:text-[32px]">
                Dárkové
                <br />
                poukázky
              </h2>
              <p className="mb-6 max-w-[320px] text-[13px] leading-[1.7] text-gray">
                Potěšte přítele nebo někoho blízkého. Můžete zakoupit u&nbsp;nás
                v&nbsp;salonu nebo online.
              </p>
              <a
                href={siteConfig.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block border border-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-colors"
              >
                Koupit online
              </a>
            </div>

            {/* Right: Barber pole image with smooth fade */}
            <div className="absolute bottom-0 right-0 top-0 hidden w-[220px] sm:block">
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #151515 0%, rgba(21,21,21,0.6) 30%, transparent 60%)",
                }}
              />
              <Image
                src="/images/barber-pole.png"
                alt="Dárkové poukázky"
                width={220}
                height={400}
                className="h-full w-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
