"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function SocialLinks() {
  const t = useTranslations("SocialLinks");

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
          {t("subtitle")}
        </p>

        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
          {t("title")} <span className="text-red-600">{t("titleHighlight")}</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
          {t("description")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SocialCard
          href="https://instagram.com/artem_artale"
          icon={<FaInstagram size={22} />}
          title="Instagram"
          subtitle=""
        />

        <SocialCard
          href="https://youtube.com/@acroduoartale"
          icon={<FaYoutube size={22} />}
          title="YouTube"
          subtitle=""
        />

        <SocialCard
          href="https://facebook.com/duoartale"
          icon={<FaFacebookF size={20} />}
          title="Facebook"
          subtitle=""
        />
      </div>
    </section>
  );
}

type SocialCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

function SocialCard({
  href,
  icon,
  title,
  subtitle,
}: SocialCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-20 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-white/10"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-base font-bold text-white">
          {title}
        </h3>

        <p className="truncate text-xs text-gray-400">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}