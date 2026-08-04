"use client";

import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("ContactHero");

  return (
    <section className="mx-auto max-w-3xl px-6 py-3 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-red-500">
        {t("subtitle")}
      </p>

      <h1 className="mt-3 text-3xl font-black md:text-4xl">
        {t("title")}{" "}
        <span className="text-red-600">
          {t("titleHighlight")}
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
        {t("description")}
      </p>
    </section>
  );
}