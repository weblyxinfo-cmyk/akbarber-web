"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/data";
import { IconCircle } from "@/components/IconCircle";
import type { Location } from "@/types";

function LocationCard({ location }: { location: Location }) {
  return (
    <Link href={`/pobocky/${location.id}`} className="group block min-w-[200px] max-w-[calc(50%-8px)] flex-1 max-md:max-w-full">
      <div className="mb-2 h-[120px] overflow-hidden rounded-[10px] bg-bg-card">
        <Image
          src={location.image}
          alt={location.name}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="text-sm font-bold">{location.name}</h3>
      <p className="mb-2 text-[11px] text-[#666]">{location.address}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {location.type === "walk-in" && (
            <span className="text-sm font-semibold text-[#888]">Bez objednání</span>
          )}
          {location.type === "reservation" && (
            <span className="text-sm font-semibold text-[#888]">Pouze rezervace VIP club</span>
          )}
          {location.type === "walk-in + reservation" && (
            <>
              <span className="text-sm font-semibold text-[#888]">Bez objednání</span>
              <span className="text-sm font-semibold text-white underline underline-offset-2">Rezervace online</span>
            </>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] text-white">
          Zobrazit
          <IconCircle />
        </span>
      </div>
    </Link>
  );
}

export function Accordion() {
  const [openCities, setOpenCities] = useState<Set<string>>(new Set());

  const citiesMap = useMemo(() => {
    const map = new Map<string, Location[]>();
    locations.forEach((loc) => {
      const list = map.get(loc.city) || [];
      list.push(loc);
      map.set(loc.city, list);
    });
    return map;
  }, []);

  function toggle(city: string) {
    setOpenCities((prev) => {
      const next = new Set(prev);
      if (next.has(city)) {
        next.delete(city);
      } else {
        next.add(city);
      }
      return next;
    });
  }

  return (
    <section className="pb-6">
      <div className="container">
        {Array.from(citiesMap.entries()).map(([city, locs]) => {
          const isOpen = openCities.has(city);

          return (
            <div key={city} className="border-b border-border">
              <button
                onClick={() => toggle(city)}
                className="flex w-full items-center justify-between py-4 text-left transition-opacity hover:opacity-70"
              >
                <h2 className="text-lg font-bold">{city}</h2>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
                    isOpen
                      ? "border-white bg-white text-black"
                      : "border-[#444] bg-transparent text-white"
                  }`}
                >
                  <span className="text-sm">{isOpen ? "▴" : "▾"}</span>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? "3000px" : "0",
                }}
              >
                <div className="pb-4">
                  <div className="flex flex-wrap gap-4 max-md:flex-col">
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
