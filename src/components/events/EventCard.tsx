"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = {
  slug: string;
  title: string;
  cardImage: string;
};

export default function EventCard({
  slug,
  title,
  cardImage,
}: Props) {
  const t = useTranslations("EventCard");

  return (
    <Link
      href={`/events/${slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 hover:border-red-600"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={cardImage}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8">
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500 transition-transform duration-300 group-hover:translate-x-1">
            {t("learnMore")} →
          </span>
        </div>
      </div>
    </Link>
  );
}