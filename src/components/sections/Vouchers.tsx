import Link from "next/link";
import { IconCircle } from "@/components/IconCircle";
import type { Lang } from "@/lib/translations";
import { vouchersTranslations } from "@/lib/translations";

interface VouchersProps {
  eshopUrl?: string;
  isSlovak?: boolean;
  lang?: Lang;
}

export function Vouchers({ eshopUrl, isSlovak, lang }: VouchersProps) {
  const t = lang === "en" ? vouchersTranslations.en : vouchersTranslations.cs;

  // Slovak-specific overrides (only when not English)
  const heading =
    lang === "en"
      ? t.heading
      : isSlovak
        ? "Darčekové poukážky"
        : t.heading;

  return (
    <section className="py-12" id="vouchers">
      <div className="container">
        <h2 className="mb-2 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold">
          {heading}
        </h2>
        {eshopUrl ? (
          <>
            <p className="mb-2 text-sm text-gray">
              {lang === "en"
                ? t.descriptionWithUrl
                : isSlovak
                  ? "Potešte priateľa alebo niekoho blízkeho. Môžete zakúpiť u nás v salóne alebo "
                  : t.descriptionWithUrl}
              <a
                href={eshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2"
              >
                {t.online}
              </a>
              .
            </p>
            <a
              href={eshopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-white"
            >
              {lang === "en"
                ? "Buy voucher – click HERE"
                : isSlovak
                  ? "Kúpiť voucher – kliknite SEM"
                  : "Koupit voucher – klikněte ZDE"}
              <IconCircle />
            </a>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm text-gray">
              {lang === "en"
                ? t.descriptionWithoutUrl
                : isSlovak
                  ? "Potešte priateľa alebo niekoho blízkeho. Darčekové poukážky je možné zakúpiť v salóne alebo online."
                  : t.descriptionWithoutUrl}
            </p>
            <Link
              href="/vouchery"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-white"
            >
              {lang === "en"
                ? "Buy voucher – click HERE"
                : isSlovak
                  ? "Kúpiť voucher – kliknite SEM"
                  : "Koupit voucher – klikněte ZDE"}
              <IconCircle />
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
