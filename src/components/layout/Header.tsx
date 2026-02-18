"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Provozovny", href: "/" },
  { label: "Dárkové poukazy", href: "/#vouchers" },
  { label: "Kariéra", href: "/kariera" },
  { label: "Akademie", href: "https://www.barber-kurzy.com" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-7">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="AK Barbers"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((item) =>
                item.href.startsWith("http") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-[#999] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[13px] font-medium text-[#999] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-[13px] font-bold text-white transition-opacity hover:opacity-80 md:inline-flex"
            >
              Rezervace
              <IconCircle />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden text-[13px] font-bold text-white underline underline-offset-2 md:block"
            >
              {siteConfig.phone}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-white md:hidden"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
