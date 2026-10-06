"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Lang } from "@/lib/translations";

// Věrnostní karta "každý 5. / 10. střih zdarma" — zobrazuje se na detailu poboček
// s `loyaltyCard: 5 | 10` v data.ts. Zavření se pamatuje pro každou pobočku zvlášť
// (pobočky sdílí variantu karty, takže klíč podle varianty by pop-up schoval i jinde).
const STORAGE_KEY = "ak-loyalty-card-dismissed";

const ORDINAL_CS = { 5: "pátý", 10: "desátý" } as const;
const ORDINAL_SK = { 5: "piaty", 10: "desiaty" } as const;
const ORDINAL_EN = { 5: "fifth", 10: "tenth" } as const;

interface LoyaltyPopupProps {
  every: 5 | 10;
  locationId: string;
  locationName: string;
  bookingUrl?: string;
  lang: Lang;
  isSlovak?: boolean;
}

export function LoyaltyPopup({ every, locationId, locationName, bookingUrl, lang, isSlovak }: LoyaltyPopupProps) {
  const [visible, setVisible] = useState(false);
  const en = lang === "en";
  const sk = !en && !!isSlovak;
  const storageKey = `${STORAGE_KEY}-${locationId}`;
  const stamps = Array.from({ length: every }, (_, i) => i + 1);

  useEffect(() => {
    if (localStorage.getItem(storageKey)) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  function dismiss() {
    localStorage.setItem(storageKey, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="loyalty-popup-title"
            className="relative w-full max-w-[460px] overflow-hidden rounded-[18px] border border-white/15 bg-[#0b0b0b] shadow-[0_0_80px_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={dismiss}
              aria-label={en ? "Close" : sk ? "Zavrieť" : "Zavřít"}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-white hover:text-black"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Karta je černá jako pop-up — leží proto na nasvícené ploše, má světlou hranu a stín */}
            <div className="bg-[radial-gradient(ellipse_at_50%_30%,#5c5c5c_0%,#262626_55%,#0b0b0b_100%)] px-7 pb-9 pt-12 max-md:px-5 max-md:pb-8 max-md:pt-11">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 14, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Podsvícení pod kartou v petrolejové barvě křesel z fotek poboček; držet těsně u karty, ať nezasahuje do textu pod ní */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-2 -bottom-3 top-1/3 rounded-[40%] bg-[#2a9aa0] blur-[20px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.9 }}
                />
                <div className="relative overflow-hidden rounded-[7px] shadow-[0_14px_30px_rgba(0,0,0,0.7),0_0_0_1px_rgba(63,184,190,0.5)]">
                <Image
                  src={`/images/vernostni-karta-${every}-card.jpg`}
                  alt={en ? `AK BARBERS loyalty card – every ${every}th haircut free` : sk ? `Vernostná karta AK BARBERS – každý ${every}. strih zdarma` : `Věrnostní karta AK BARBERS – každý ${every}. střih zdarma`}
                  width={1612}
                  height={every === 10 ? 700 : 690}
                  className="block h-auto w-full brightness-[1.45] contrast-[1.08]"
                  priority
                />
                {/* Jednorázový odlesk přes kartu */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ left: "-40%" }}
                  animate={{ left: "120%" }}
                  transition={{ delay: 0.7, duration: 1.1, ease: "easeInOut" }}
                />
                </div>
              </motion.div>
            </div>

            <div className="px-6 pb-6 pt-5 text-center max-md:px-5">
              <span className="inline-block rounded-full border border-white/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
                {en ? "Loyalty card" : sk ? "Vernostná karta" : "Věrnostní karta"}
              </span>
              <h2
                id="loyalty-popup-title"
                className="mt-3 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold leading-[1.1] text-white max-md:text-[24px]"
              >
                {en ? `Every ${every}th haircut is on us` : sk ? `Každý ${every}. strih zdarma` : `Každý ${every}. střih zdarma`}
              </h2>

              {/* Razítka: poslední je zdarma (u 10 ve dvou řadách po pěti) */}
              <div className="mx-auto mt-5 grid w-fit grid-cols-5 gap-2.5 max-md:gap-2">
                {stamps.map((n, i) => (
                  <motion.span
                    key={n}
                    className={
                      n === every
                        ? "flex h-11 w-11 items-center justify-center rounded-full bg-white text-[9px] font-black uppercase tracking-[0.04em] text-black shadow-[0_0_18px_rgba(255,255,255,0.45)] max-md:h-10 max-md:w-10"
                        : "flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-[14px] font-bold text-white max-md:h-10 max-md:w-10"
                    }
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * (every === 10 ? 0.07 : 0.12), type: "spring", stiffness: 420, damping: 18 }}
                  >
                    {n === every ? (en ? "Free" : "Zdarma") : n}
                  </motion.span>
                ))}
              </div>

              <p className="mx-auto mt-5 max-w-[340px] text-[14px] leading-[1.55] text-gray">
                {en
                  ? `Ask for your loyalty card at ${locationName}. Collect a stamp with every haircut – the ${ORDINAL_EN[every]} one is free.`
                  : sk
                  ? `Vypýtajte si vernostnú kartu na prevádzke ${locationName}. Za každý strih dostanete pečiatku – ${ORDINAL_SK[every]} máte zdarma.`
                  : `Řekněte si o věrnostní kartu na pobočce ${locationName}. Za každý střih dostanete razítko – ${ORDINAL_CS[every]} máte zdarma.`}
              </p>

              <div className="mt-6 flex flex-col items-center gap-3">
                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-bold text-black transition-opacity hover:opacity-90"
                  >
                    {en ? "Book online" : sk ? "Rezervovať termín" : "Rezervovat termín"}
                  </a>
                )}
                <button
                  onClick={dismiss}
                  className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gray transition-colors hover:text-white"
                >
                  {en ? "Got it, thanks" : sk ? "Rozumiem, vďaka" : "Rozumím, díky"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
