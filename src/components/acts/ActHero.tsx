"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

import VideoModal from "@/components/videos/VideoModal";
import type { Act } from "@/data/act";

type Props = {
  act: Act;
  previousAct: Act;
  nextAct: Act;
};

export default function ActHero({
  act,
  previousAct,
  nextAct,
}: Props) {
  const t = useTranslations("ActHero");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[55vh] overflow-hidden">
      <Image
        src={act.heroImage}
        alt={act.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-end px-6 pb-12 md:min-h-[70vh] md:px-8 md:pb-16">
        <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
          {act.title}
        </h1>

        <p className="mt-4 max-w-2xl whitespace-pre-line text-lg leading-6 text-gray-300">
          {act.shortDescription}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/acts"
            className="rounded-full border border-white/20 px-5 py-2.5 font-medium transition hover:bg-white/10"
          >
            ← {t("back")}
          </Link>

          <Link
              href={`/acts/${previousAct.slug}`}
              className="min-w-[160px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
            >
              ← {previousAct.title}
            </Link>

            {act.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="min-w-[160px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
              >
                ▶ {t("watchVideo")}
              </button>
            )}

            <Link
              href={`/acts/${nextAct.slug}`}
              className="min-w-[160px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
            >
              {nextAct.title} →
            </Link>
        </div>
      </div>

      <VideoModal
        videoUrl={showVideo ? act.video : null}
        onClose={() => setShowVideo(false)}
      />
    </section>
  );
}