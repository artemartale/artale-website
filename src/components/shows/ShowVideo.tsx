"use client";

import { useTranslations } from "next-intl";

type Props = {
  video: string;
};

export default function ShowVideo({ video }: Props) {
  const t = useTranslations("ShowVideo");

  if (!video) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-black md:text-5xl">
          {t("title")}
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          {t("description")}
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="aspect-video">
          <iframe
            src={video}
            title={t("iframeTitle")}
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}