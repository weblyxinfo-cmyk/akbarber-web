"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Promo oznámení: znovuotevření Prahy 6 + nová pobočka Praha 3 – Žižkov.
// Automaticky zmizí po tomto datu.
const STORAGE_KEY = "ak-promo-news2-dismissed";
const HIDE_AFTER = new Date("2026-07-31T23:59:59");

const NEWS = [
  {
    href: "/pobocky/praha-6",
    badge: "Zpět na Praze 6",
    detail: "Radimova 2522/4, Břevnov",
  },
  {
    href: "/pobocky/praha-3",
    badge: "Nově na Žižkově",
    detail: "Husitská 53 · 14 křesel",
  },
];

export function ZizkovNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (new Date() > HIDE_AFTER) return;
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 1500);
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
      className="fixed bottom-5 right-5 z-50 w-[320px] max-w-[calc(100vw-2rem)] rounded-[10px] border border-[#4ade80]/30 bg-[#0f0f0f] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-300 max-md:bottom-3 max-md:right-3 max-md:left-3 max-md:w-auto"
    >
      <button
        onClick={dismiss}
        aria-label="Zavřít"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-gray transition-colors hover:bg-white/5 hover:text-white"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <p className="mb-3 pr-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4ade80]">
        Novinky z AK Barbers 🎉
      </p>

      <div className="flex flex-col">
        {NEWS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={dismiss}
            className={`group flex items-center gap-3 py-2.5 ${i > 0 ? "border-t border-white/10" : ""}`}
          >
            <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[#4ade80]" />
            <span className="min-w-0 flex-1">
              <span className="block text-[13px] font-semibold leading-tight text-white">
                {item.badge}
              </span>
              <span className="block text-[12px] leading-tight text-gray">
                {item.detail}
              </span>
            </span>
            <svg
              className="shrink-0 text-gray transition-colors group-hover:text-[#4ade80]"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
