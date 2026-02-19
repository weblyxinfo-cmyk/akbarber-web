import { IconCircle } from "@/components/IconCircle";
import type { Lang } from "@/lib/translations";
import { careerAcademyTranslations } from "@/lib/translations";

interface CareerAcademyProps {
  lang?: Lang;
}

export function CareerAcademy({ lang = "cs" }: CareerAcademyProps) {
  const t = careerAcademyTranslations[lang];

  return (
    <section className="py-10" id="kariera">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[14px] bg-bg-card p-8">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.2]">
              {t.careerHeading1}
              <br />
              {t.careerHeading2}
            </h3>
            <p className="mb-5 text-[13px] leading-[1.6] text-gray">
              <a href="/#kontakt" className="text-white underline underline-offset-2">{t.careerJoinLink}</a>{" "}
              {t.careerDescription}
            </p>
            <a
              href="/kariera"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium"
            >
              {t.careerCta}
              <IconCircle />
            </a>
          </div>

          <div className="rounded-[14px] bg-bg-card p-8" id="akademie">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.2]">
              {t.academyHeading1}
              <br />
              {t.academyHeading2}
            </h3>
            <p className="mb-5 text-[13px] leading-[1.6] text-gray">
              <a href="https://www.barber-kurzy.com" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2">{t.academyLink}</a>{" "}
              {t.academyDescription}
            </p>
            <a
              href="https://www.barber-kurzy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium"
            >
              {t.academyCta}
              <IconCircle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
