import type { Metadata } from "next";
import { jobPositions, benefits } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kariéra | AK BARBERS",
  description:
    "Připoj se k týmu AK Barbers. Hledáme zkušené barbery i začátečníky.",
};

const benefitIcons: Record<string, React.ReactNode> = {
  Scissors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  GraduationCap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  TrendingUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Banknote: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  MapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function KarieraPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-16">
        <div className="container">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-light">
            Kariéra
          </p>
          <h1 className="max-w-[560px] font-[family-name:var(--font-playfair)] text-[36px] font-bold leading-[1.15] sm:text-[42px]">
            Připoj se k&nbsp;týmu AK&nbsp;BARBERS
          </h1>
          <p className="mt-5 max-w-[480px] text-[14px] leading-[1.7] text-gray">
            Hledáme nadšené a šikovné barbery, ať už zkušené profesionály nebo
            začátečníky, kteří se chtějí učit a&nbsp;rozvíjet. Staň se součástí
            naší rostoucí barberské komunity.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-16">
        <div className="container">
          <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-[26px] font-bold">
            Otevřené pozice
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobPositions.map((job) => (
              <div
                key={job.title}
                className="group flex flex-col rounded-2xl border border-border bg-bg-card p-7 transition-all duration-300 hover:border-[#333] hover:bg-[#1a1a1a]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/60" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-gray-light">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold leading-tight">{job.title}</h3>
                <p className="mt-1 text-[12px] text-gray-light">{job.location}</p>
                <p className="mt-4 flex-1 text-[13px] leading-[1.65] text-gray">
                  {job.description}
                </p>
                <a
                  href="/#kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-opacity group-hover:opacity-80"
                >
                  Mám zájem
                  <IconCircle />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16">
        <div className="container">
          <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-[26px] font-bold">
            Benefity
          </h2>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2a2a2a] text-white/70">
                  {benefitIcons[b.icon] || (
                    <span className="h-2 w-2 rounded-full bg-white/50" />
                  )}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">{b.title}</h4>
                  <p className="mt-1 text-[13px] leading-[1.6] text-gray">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <div className="container">
          <div className="rounded-2xl border border-border bg-bg-card px-8 py-10 text-center">
            <h3 className="font-[family-name:var(--font-playfair)] text-[24px] font-bold">
              Zaujala tě některá pozice?
            </h3>
            <p className="mx-auto mt-3 max-w-[400px] text-[13px] leading-[1.7] text-gray">
              Napiš nám a přidej se k rostoucí síti AK&nbsp;Barbers. Rádi tě
              poznáme.
            </p>
            <a
              href="/#kontakt"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-white"
            >
              Kontaktovat nás
              <IconCircle />
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
