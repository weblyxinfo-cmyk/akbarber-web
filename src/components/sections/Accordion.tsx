"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import type { Location } from "@/types";

function LocationCard({ location }: { location: Location }) {
  return (
    <div>
      <Image
        src={location.image}
        alt={location.name}
        width={600}
        height={300}
        className="mb-4 aspect-video w-full rounded-xl object-cover grayscale"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="text-sm font-bold">{location.name}</div>
      <div className="mt-1 text-xs text-gray">{location.address}</div>
      <div className="mt-3 text-xs text-gray-light">
        {location.type === "walk-in" && "Přijďte bez objednání"}
        {location.type === "reservation" && "Pouze rezervace online"}
        {location.type === "walk-in + reservation" && (
          <>
            Přijďte bez objednání
            {location.bookingUrl && (
              <>
                {" "}&bull;{" "}
                <a href={location.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Rezervace online
                </a>
              </>
            )}
          </>
        )}
      </div>
      <div className="mt-3 flex items-center gap-4">
        {location.type === "reservation" && location.bookingUrl && (
          <a href={location.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-gray transition-colors hover:text-white">
            Rezervace online
          </a>
        )}
        <Link
          href={`/pobocky/${location.id}`}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-white"
        >
          Zobrazit
          <IconCircle />
        </Link>
      </div>
    </div>
  );
}

export function Accordion() {
  const [openCity, setOpenCity] = useState<string | null>(null);

  const citiesMap = useMemo(() => {
    const map = new Map<string, Location[]>();
    locations.forEach((loc) => {
      const list = map.get(loc.city) || [];
      list.push(loc);
      map.set(loc.city, list);
    });
    return map;
  }, []);

  return (
    <section className="pb-16">
      <div className="container">
        {Array.from(citiesMap.entries()).map(([city, locs]) => {
          const isOpen = openCity === city;

          return (
            <div key={city} className="border-b border-border">
              <button
                onClick={() => setOpenCity(isOpen ? null : city)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-xl font-semibold">{city}</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-dark transition-all duration-300 ${
                    isOpen ? "bg-white" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? "black" : "white"}
                    strokeWidth="2"
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                className="grid transition-all duration-400 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 pb-8 sm:grid-cols-2">
                    {locs.map((loc) => (
                      <LocationCard key={loc.id} location={loc} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
