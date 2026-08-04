"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Show } from "@/data/shows.en";

type Props = {
  show: Show;
};

export default function ShowCard({ show }: Props) {
  const t = useTranslations("ShowCard");

  return (
    <Link
      href={`/shows/${show.slug}`}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-red-500/50"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={show.cardImage}
          alt={show.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-red-500">
          {t("category")}
        </p>

        <h3 className="mt-3 text-3xl font-black">
          {show.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {show.subtitle}
        </p>

        <span className="mt-8 inline-block font-semibold text-white">
          {t("learnMore")} →
        </span>
      </div>
    </Link>
  );
}