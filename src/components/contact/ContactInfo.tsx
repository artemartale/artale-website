"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactInfo() {
  const t = useTranslations("ContactInfo");

  return (
    <section className="mx-auto max-w-6xl px-6 py-3">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
        <ContactCard
          icon={<FiMail size={22} />}
          title={t("email")}
          value="artem.benefis@gmail.com"
          href="mailto:artem.benefis@gmail.com"
        />

        <ContactCard
          icon={<FiPhone size={22} />}
          title={t("phone")}
          value="+421 944 230 778"
          href="tel:+421 944 230 778"
        />

        <ContactCard
          icon={<FaFacebookF size={20} />}
          title={t("facebook")}
          value=""
          href="https://facebook.com/duoartale"
        />

        <ContactCard
          icon={<FaInstagram size={22} />}
          title={t("instagram")}
          value=""
          href="https://instagram.com/artem_artale"
        />

        <ContactCard
          icon={<FiMapPin size={22} />}
          title={t("location")}
          value={t("locationValue")}
        />
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div className="group flex min-h-[110px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-white/10">
      <div className="mb-3 text-red-500 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-sm font-bold text-white transition-colors duration-300 group-hover:text-red-400">
        {value}
      </h3>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {content}
    </Link>
  );
}