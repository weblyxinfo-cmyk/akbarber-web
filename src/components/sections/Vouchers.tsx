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
                className="btn-outline inline-block border border-white px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-colors"
              >
                Koupit online
              </a>
            </div>

            {/* Right: Barber pole image with fade */}
            <div className="relative hidden shrink-0 sm:block" style={{ width: 160, height: 240 }}>
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #151515 0%, transparent 40%), linear-gradient(to top, #151515 0%, transparent 30%), linear-gradient(to bottom, #151515 0%, transparent 30%)",
                }}
              />
              <Image
                src="/images/barber-pole.png"
                alt="Dárkové poukázky"
                width={160}
                height={320}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
