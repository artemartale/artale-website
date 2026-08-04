"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function EventsHero() {
  const t = useTranslations("EventsHero");

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-2 pb-2">
      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-black md:text-4xl">
          {t("title")}{" "}
          <span className="text-red-600">
            {t("titleHighlight")}
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-7">
          {t("description")}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/#shows"
            className="min-w-[180px] rounded-xl border border-white/20 px-6 py-3 text-center font-medium transition hover:bg-white/10"
          >
            ← {t("backToShows")}
          </Link>

          <Link
            href="/shows"
            className="min-w-[180px] rounded-xl bg-red-600 px-6 py-3 text-center font-semibold transition hover:bg-red-700"
          >
            {t("fullShows")}
          </Link>

          <Link
            href="/acts"
            className="min-w-[180px] rounded-xl bg-red-600 px-6 py-3 text-center font-semibold transition hover:bg-red-700"
          >
            {t("individualActs")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}