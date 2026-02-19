import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";

interface VouchersProps {
  eshopUrl?: string;
  isSlovak?: boolean;
}

export function Vouchers({ eshopUrl, isSlovak }: VouchersProps) {
  return (
    <section className="py-12" id="vouchers">
      <div className="container flex items-center justify-between gap-6">
        <div>
          <h2 className="mb-2 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
            {isSlovak ? "Darčekové poukážky" : "Dárkové poukázky"}
          </h2>
          {eshopUrl ? (
            <>
              <p className="mb-2 text-sm text-gray">
                {isSlovak
                  ? "Potešte priateľa alebo niekoho blízkeho. Môžete zakúpiť u nás v salóne alebo "
                  : "Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás v salonu nebo "}
                <a
                  href={eshopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-2"
                >
                  online
                </a>
                .
              </p>
              <a
                href={eshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white"
              >
                {isSlovak ? "Kúpiť online" : "Koupit online"}
                <IconCircle />
              </a>
            </>
          ) : (
            <p className="mb-2 text-sm text-gray">
              {isSlovak
                ? "Potešte priateľa alebo niekoho blízkeho. Darčekové poukážky je možné zakúpiť v salóne alebo online — "
                : "Potěšte přítele nebo někoho blízkého. Dárkové poukázky je možné zakoupit v salonu nebo online — "}
              <span className="font-semibold text-white">
                {isSlovak
                  ? "vyberte si konkrétnu pobočku pre viac informácií."
                  : "vyberte si konkrétní pobočku pro více informací."}
              </span>
            </p>
          )}
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
