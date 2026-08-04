"use client";

import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type Props = {
  title: string;
};

export default function BookShow({ title }: Props) {
  const pathname = usePathname();
  const t = useTranslations("BookShow");

  const isHitsVoyage = pathname.endsWith("/shows/hits-voyage");

  const nextShow = isHitsVoyage
    ? {
        title: "Once & Always",
        href: "/shows/once-and-always",
      }
    : {
        title: "Hits Voyage",
        href: "/shows/hits-voyage",
      };

  return (
    <section >
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-red-500">
          {t("subtitle")}
        </p>

        <h2 className="text-3xl font-black leading-tight md:text-4xl">
          {t("title")} <span className="text-red-500">{title}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shows"
            className="inline-flex min-w-[200px] justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold transition hover:border-white hover:bg-white/10"
          >
            ← {t("allShows")}
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-[200px] justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold transition hover:bg-red-700"
          >
            {t("contactUs")}
          </Link>

          <Link
            href={nextShow.href}
            className="inline-flex min-w-[200px] justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold transition hover:border-white hover:bg-white/10"
          >
            {nextShow.title} →
          </Link>
        </div>
      </div>
    </section>
  );
}