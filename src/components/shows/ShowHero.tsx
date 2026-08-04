"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import VideoModal from "@/components/videos/VideoModal";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  promoVideoId: string;
};

export default function ShowHero({
  title,
  subtitle,
  description,
  promoVideoId,
}: Props) {
  const pathname = usePathname();
  const [openVideo, setOpenVideo] = useState(false);
  const t = useTranslations("ShowHero");

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
    <>
      <section className="relative flex min-h-[65vh] items-center justify-center py-20">
        <motion.div
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-black md:text-6xl">
            {title}
          </h1>

          <p className="mt-4 text-xl text-red-500 md:text-2xl">
            {subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/shows"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              ← {t("backToShows")}
            </Link>

            <button
              onClick={() => setOpenVideo(true)}
              className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              ▶ {t("promoVideo")}
            </button>

            <Link
              href={nextShow.href}
              className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              {nextShow.title} →
            </Link>
          </div>
        </motion.div>
      </section>

      {openVideo && (
        <VideoModal
          videoUrl={promoVideoId}
          onClose={() => setOpenVideo(false)}
        />
      )}
    </>
  );
}