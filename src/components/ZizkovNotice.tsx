"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Promo oznámení k otevření nové pobočky Praha 3 – Žižkov.
// Automaticky zmizí po tomto datu.
const STORAGE_KEY = "ak-promo-zizkov-dismissed";
const HIDE_AFTER = new Date("2026-07-31T23:59:59");

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
      className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-[10px] border border-[#4ade80]/30 bg-[#0f0f0f] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-300 max-md:bottom-3 max-md:right-3 max-md:left-3 max-md:w-auto"
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
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#4ade80]/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4ade80]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4ade80] animate-pulse" />
        Nově otevřeno
      </div>
      <p className="mb-3 pr-6 text-[13px] font-semibold leading-tight text-white">
        Nově na Žižkově! 🎉
      </p>
      <p className="mb-3 text-[12px] leading-[1.5] text-gray">
        Otevřeli jsme novou pobočku na adrese{" "}
        <span className="font-semibold text-white">Husitská 53, Praha 3 – Žižkov</span>.{" "}
        <span className="font-semibold text-white">14 křesel</span> znamená skoro žádné čekání – stavte se bez objednání i na rezervaci!
      </p>
      <Link
        href="/pobocky/praha-3"
        onClick={dismiss}
        className="inline-flex items-center gap-1.5 rounded-full bg-[#4ade80] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-black transition-opacity hover:opacity-90"
      >
        Přejít na pobočku
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
}
