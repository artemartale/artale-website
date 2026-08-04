"use client";

import { useTranslations } from "next-intl";

type Props = {
  duration: string;
  performers: string;
  technical: string[];
};

export default function ShowTechnical({
  duration,
  performers,
  technical,
}: Props) {
  const t = useTranslations("ShowTechnical");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-red-500">
          {t("subtitle")}
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            {t("duration")}
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            {duration}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            {t("performers")}
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            {performers}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h3 className="mb-5 text-xl font-bold">
          {t("technicalRequirements")}
        </h3>

        <ul className="grid gap-3 md:grid-cols-2">
          {technical.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-gray-300"
            >
              <span className="mt-0.5 text-red-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}