"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function DesktopNavigation() {
  const t = useTranslations("Header");

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/#about" },
    { label: t("shows"), href: "/#shows" },
    { label: t("gallery"), href: "/#gallery" },
    { label: t("videos"), href: "/#videos" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-lg font-medium text-gray-300 transition duration-300 hover:text-red-500"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}