"use client";

import { useTranslations } from "next-intl";

import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  key: string;
};

const firstRow = testimonials.slice(0, 20);
const secondRow = testimonials.slice(20);

function TestimonialCard({
  item,
}: {
  item: Testimonial;
}) {
  const t = useTranslations("Testimonials");

  return (
    <div className="group relative mx-2 w-[240px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/10">
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
      </div>

      {/* Quote */}
      <div className="relative mb-6 flex h-8 w-8 items-center justify-center rounded-2xl bg-red-600/15 text-red-500 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Quote size={16} />
      </div>

      {/* Stars */}
      <div className="relative mb-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="relative mb-6 text-sm leading-6 text-zinc-300">
        {t(`items.${item.key}.text`)}
      </p>

      <div className="relative mb-6 h-px bg-gradient-to-r from-red-500/40 via-red-500/10 to-transparent" />

      <div className="relative">
        <h3 className="text-base font-semibold text-white">
          {t(`items.${item.key}.name`)}
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
          {t(`items.${item.key}.role`)}
        </p>
      </div>
    </div>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {duplicated.map((item, index) => (
          <TestimonialCard
            key={`${item.key}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default function InfiniteTestimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-12 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1700px]">
        <SectionTitle
          subtitle={t("header.subtitle")}
          title={
            <>
              {t("header.title")}{" "}
              <span className="text-red-600">
                {t("header.titleAccent")}
              </span>
            </>
          }
          description={t("header.description")}
        />

        <div className="relative mt-2 space-y-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-40 bg-gradient-to-r from-black to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-40 bg-gradient-to-l from-black to-transparent" />

          <Row items={firstRow} />
          <Row items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}