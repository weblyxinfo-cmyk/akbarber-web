"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Lang } from "@/lib/translations";

interface LanguageSwitcherProps {
  lang: Lang;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  // On mount, restore preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ak-lang");
    if (saved === "en" && lang !== "en") {
      router.replace(`${pathname}?lang=en`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function switchLang(newLang: Lang) {
    if (newLang === "en") {
      localStorage.setItem("ak-lang", "en");
      router.replace(`${pathname}?lang=en`);
    } else {
      localStorage.removeItem("ak-lang");
      router.replace(pathname);
    }
  }

  return (
    <div className="container flex justify-end pt-4 pb-0">
      <div className="flex gap-1 rounded-full bg-[#1a1a1a] p-1">
        <button
          onClick={() => switchLang("cs")}
          className={`rounded-full px-2 py-1 text-lg leading-none transition-opacity ${
            lang === "cs" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="Česky"
        >
          🇨🇿
        </button>
        <button
          onClick={() => switchLang("en")}
          className={`rounded-full px-2 py-1 text-lg leading-none transition-opacity ${
            lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
          }`}
          aria-label="English"
        >
          🇬🇧
        </button>
      </div>
    </div>
  );
}
