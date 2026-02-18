import Image from "next/image";
import { IconCircle } from "@/components/IconCircle";

interface VouchersProps {
  eshopUrl?: string;
}

export function Vouchers({ eshopUrl }: VouchersProps) {
  return (
    <section className="py-12" id="vouchers">
      <div className="container flex items-center justify-between gap-6">
        <div>
          <h2 className="mb-2 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
            Dárkové poukázky
          </h2>
          {eshopUrl ? (
            <>
              <p className="mb-2 text-sm text-gray">
                Potěšte přítele nebo někoho blízkého. Můžete zakoupit u nás v salonu
                nebo{" "}
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
                Koupit online
                <IconCircle />
              </a>
            </>
          ) : (
            <p className="mb-2 text-sm text-gray">
              Potěšte přítele nebo někoho blízkého. Dárkové poukázky je možné
              zakoupit v salonu nebo online — vyberte si konkrétní pobočku
              pro více informací.
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
