"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "@/components/ui/Container";

export default function Hero() {
  const t = useTranslations("Hero");

  
  const [playVideo, setPlayVideo] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setPlayVideo(true);
  }, 400);

  return () => clearTimeout(timer);
}, []);

  const Content = (
    <div className="max-w-3xl">
      <div className="mb-6 ml-10 mt-10 w-fit">
        <h2 className="text-3xl font-semibold uppercase leading-none text-white md:text-4xl">
          {t("international")}
        </h2>

        <h2 className="mt-2 text-center text-3xl font-semibold uppercase leading-none text-white md:text-4xl">
          {t("circusDuo")}
        </h2>
      </div>

      <h1 className="text-8xl font-black leading-none md:text-9xl">
        <span className="text-white">Art</span>
        <span className="text-red-600">Ale</span>
      </h1>

      <p className="mt-8 max-w-[500px] text-xl leading-8 text-gray-300">
        {t("description")}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={{ pathname: "/", hash: "contact" }}
          className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
        >
          {t("book")}
        </Link>

        <Link
          href={{ pathname: "/", hash: "shows" }}
          className="rounded-xl border border-white/20 px-8 py-4 transition hover:bg-white/10"
        >
          {t("explore")}
        </Link>
      </div>
    </div>
  );

  return (
    <section
      id="hero"
      className="relative z-0 flex min-h-screen items-center overflow-hidden bg-black pt-20 text-white scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {playVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.png"
            className="h-full w-full scale-105 object-cover"
          >
            <source src="/videos/Showreel_2025_26.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
  src="/images/hero-poster.png"
  alt="ArtAle"
  fill
  priority
  sizes="100vw"
  className="h-full w-full scale-105 object-cover"
/>
        )}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />
      </div>

      <Container>
        <motion.div
  className="max-w-3xl"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
>
  {Content}
</motion.div>
      </Container>
    </section>
  );
}