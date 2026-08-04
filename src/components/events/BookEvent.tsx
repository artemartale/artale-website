"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
};

export default function BookEvent({
  title,
}: Props) {
  const t = useTranslations("BookEvent");

  return (
    <section >
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-red-500">
          {t("subtitle")}
        </p>

        <h2 className="text-3xl font-black leading-tight md:text-4xl">
          {t("title")}
          <br />
          <span className="text-red-500">{title}?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/events"
            className="inline-flex min-w-[200px] justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold transition hover:border-white hover:bg-white/10"
          >
            ← {t("allEvents")}
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-[200px] justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold transition hover:bg-red-700"
          >
            {t("bookEvent")}
          </Link>
        </div>
      </div>
    </section>
  );
}