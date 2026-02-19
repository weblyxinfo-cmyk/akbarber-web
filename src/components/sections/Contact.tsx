"use client";

import { useState, FormEvent } from "react";
import { IconCircle } from "@/components/IconCircle";
import type { Lang } from "@/lib/translations";
import { contactTranslations } from "@/lib/translations";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactProps {
  lang?: Lang;
}

export function Contact({ lang = "cs" }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const t = contactTranslations[lang];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          consent: !!form.get("consent"),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-10" id="kontakt">
      <div className="container">
        <div className="grid gap-12 rounded-2xl bg-bg-card p-8 sm:p-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-roboto-slab)] text-[28px] font-bold leading-[1.2]">
              {t.heading1}
              <br />
              {t.heading2}
            </h2>
            <p className="mb-5 text-[13px] leading-[1.7] text-gray">
              {t.description}
            </p>
            <p className="text-[13px] font-semibold italic text-white">
              {t.tagline1}
              <br />
              {t.tagline2}
            </p>
          </div>

          {status === "success" ? (
            <div className="flex items-center justify-center">
              <p className="text-center text-lg font-semibold text-white">
                {t.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                required
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t.phonePlaceholder}
                className="w-full border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                required
                rows={2}
                className="min-h-[60px] w-full resize-y border-b border-[#2a2a2a] bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-light transition-colors focus:border-white"
              />
              <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-light">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-[3px] accent-white"
                />
                <span>
                  {t.consentPrefix}{" "}
                  <a
                    href="/ochrana-osobnich-udaju"
                    className="text-white underline"
                  >
                    {t.consentLink}
                  </a>
                  .
                </span>
              </label>

              {status === "error" && (
                <p className="text-xs text-red-400">{t.error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white disabled:opacity-50"
              >
                {status === "loading" ? t.submitting : t.submit}
                <IconCircle />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
