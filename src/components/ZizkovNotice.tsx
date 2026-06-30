"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Promo oznámení: nová pobočka Praha 3 – Žižkov + znovuotevření Prahy 6.
// Automaticky zmizí po tomto datu.
const STORAGE_KEY = "ak-promo-news4-dismissed";
const HIDE_AFTER = new Date("2026-07-31T23:59:59");

const NEWS = [
  {
    href: "/pobocky/praha-3",
    badge: "Nově na Žižkově",
    detail: "Husitská 55 · 14 křesel",
  },
  {
    href: "/pobocky/praha-6",
    badge: "Zpět na Praze 6",
    detail: "Radimova 2522/4, Břevnov",
  },
];

export function ZizkovNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (new Date() > HIDE_AFTER) return;
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 w-[330px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[14px] border border-[#2dd4bf]/40 bg-[#0b0b0b] shadow-[0_0_50px_rgba(45,212,191,0.25),0_18px_50px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 slide-in-from-bottom-5 duration-500 max-md:bottom-3 max-md:right-3 max-md:left-3 max-md:w-auto"
    >
      <button
        onClick={dismiss}
        aria-label="Zavřít"
        className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Grafická hlavička – brand gradient, bez fotky */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0d4f47] via-[#11151a] to-[#0b0b0b] px-4 pb-4 pt-4">
        {/* glow akcent */}
        <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-[#2dd4bf]/30 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2dd4bf]/60 bg-black/30 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
            Novinky
          </span>
          <p className="mt-2 font-[family-name:var(--font-roboto-slab)] text-[19px] font-bold leading-tight text-white">
            Rosteme! Otevřeli jsme <span className="text-[#2dd4bf]">2 pobočky</span> 🎉
          </p>
        </div>
      </div>

      {/* Novinky */}
      <div className="flex flex-col px-4 pb-3">
        {NEWS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={dismiss}
            className={`group flex items-center gap-3 py-3 ${i > 0 ? "border-t border-white/10" : ""}`}
          >
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,0.9)]" />
            <span className="min-w-0 flex-1">
              <span className="block text-[14px] font-bold leading-tight text-white">
                {item.badge}
              </span>
              <span className="block text-[12px] leading-tight text-gray">
                {item.detail}
              </span>
            </span>
            <svg
              className="shrink-0 text-gray transition-all group-hover:translate-x-0.5 group-hover:text-[#2dd4bf]"
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
