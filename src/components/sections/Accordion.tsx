"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/data";
import type { Location } from "@/types";

function LocationCard({ location }: { location: Location }) {
  return (
    <div className="min-w-[250px] flex-1">
      <div className="mb-3 h-[180px] overflow-hidden rounded-[10px] bg-bg-card">
        <Image
          src={location.image}
          alt={location.name}
          width={600}
          height={300}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="text-base font-bold">{location.name}</h3>
      <p className="mb-3 text-xs text-[#666]">{location.address}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {location.type === "walk-in" && (
            <span className="text-xs text-[#888]">Walk-ins</span>
          )}
          {location.type === "reservation" && (
            <span className="text-xs text-[#888]">Rezervace</span>
          )}
          {location.type === "walk-in + reservation" && (
            <>
              <span className="text-xs text-[#888]">Walk-ins</span>
              <span className="text-xs text-[#888]">Rezervace</span>
            </>
          )}
        </div>
        <Link
          href={`/pobocky/${location.id}`}
          className="text-xs text-white underline underline-offset-2"
        >
          Zobrazit
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
    <section className="pb-6">
      <div className="container">
        {Array.from(citiesMap.entries()).map(([city, locs]) => {
          const isOpen = openCity === city;

          return (
            <div key={city} className="border-b border-border">
              <button
                onClick={() => setOpenCity(isOpen ? null : city)}
                className="flex w-full items-center justify-between py-[22px] text-left transition-opacity hover:opacity-70"
              >
                <h2 className="text-[22px] font-bold">{city}</h2>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
                    isOpen
                      ? "border-white bg-white text-black"
                      : "border-[#444] bg-transparent text-white"
                  }`}
                >
                  <span className="text-lg">{isOpen ? "▴" : "▾"}</span>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? "3000px" : "0",
                }}
              >
                <div className="pb-6">
                  <div className="mt-4 flex flex-wrap gap-5 max-md:flex-col">
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
