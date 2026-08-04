"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import VideoModal from "@/components/videos/VideoModal";

import type { Event } from "@/data/events.en";

type Props = {
  event: Event;
  previousEvent: Event;
  nextEvent: Event;
};

export default function EventHero({
  event,
  previousEvent,
  nextEvent,
}: Props) {
  const [showVideo, setShowVideo] = useState(false);
  const t = useTranslations("EventHero");

  return (
    <section className="relative">
      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-end px-6 pb-12 md:min-h-[70vh] md:px-8 md:pb-16">
        <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
          {event.title}
        </h1>

        <p className="mt-4 text-xl font-medium text-red-500">
          {event.category}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {event.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/events"
            className="rounded-full border border-white/20 px-5 py-2.5 font-medium transition hover:bg-white/10"
          >
           ← {t("back")}
          </Link>

          <Link
            href={`/events/${previousEvent.slug}`}
            className="min-w-[170px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
          >
            ← {previousEvent.title}
          </Link>

          {event.video && (
            <button
              onClick={() => setShowVideo(true)}
              className="min-w-[170px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
            >
             ▶ {t("watchVideo")}
            </button>
          )}

          <Link
            href={`/events/${nextEvent.slug}`}
            className="min-w-[170px] rounded-full bg-red-600 px-5 py-2.5 text-center font-semibold transition hover:bg-red-700"
          >
            {nextEvent.title} →
          </Link>
        </div>
      </div>

      <VideoModal
        videoUrl={showVideo ? event.video : null}
        onClose={() => setShowVideo(false)}
      />
    </section>
  );
}