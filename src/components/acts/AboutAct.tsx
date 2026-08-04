"use client";

import { useTranslations } from "next-intl";

type Props = {
  paragraphs: string[];
};

export default function AboutAct({ paragraphs }: Props) {
  const t = useTranslations("Act");

  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <h2 className="mb-8 text-4xl font-bold">
        {t("about")}{" "}
        <span className="font-black text-red-600">
          {t("act")}
        </span>
      </h2>

      <div className="space-y-6 text-lg leading-8 text-gray-300">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}