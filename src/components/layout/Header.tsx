"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Provozovny", href: "/" },
  { label: "Dárkové poukazy", href: "#vouchers" },
  { label: "Kariéra", href: "#kariera" },
  { label: "Akademie", href: "#akademie" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg">
        <div className="container flex h-[72px] items-center justify-between">
          <Link href="/" className="relative h-12 w-auto shrink-0">
            <Image
              src="/images/logo.svg"
              alt="AK Barbers"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              Rezervace
              <IconCircle />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden text-sm font-medium text-gray transition-colors hover:text-white lg:block"
            >
              {siteConfig.phone}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
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
