"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackButton() {
  const router = useRouter();
  const t = useTranslations("BackButton");

  return (
    <button
      onClick={() => router.back()}
      className="
        fixed
        top-24
        left-6
        z-50
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/20
        bg-black/80
        px-5
        py-3
        text-sm
        font-medium
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-red-500
        hover:bg-red-600
        hover:shadow-lg
        hover:shadow-red-600/30
      "
    >
      <ArrowLeft className="h-4 w-4" />
      {t("back")}
    </button>
  );
}