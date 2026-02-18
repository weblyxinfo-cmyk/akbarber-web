"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function acceptNecessary() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-[#111] px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex max-w-[800px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-[13px] leading-[1.6] text-[#aaa]">
            Tento web používá cookies pro zajištění správného fungování a analýzu
            návštěvnosti. Více informací najdete v{" "}
            <Link href="/cookies" className="text-[#fff] underline underline-offset-2">
              zásadách cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={acceptNecessary}
            className="rounded-full border border-[#333] px-4 py-2 text-[12px] font-medium text-[#999] transition-colors hover:border-[#555] hover:text-[#fff]"
          >
            Pouze nezbytné
          </button>
          <button
            onClick={accept}
            className="rounded-full px-5 py-2 text-[12px] font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
