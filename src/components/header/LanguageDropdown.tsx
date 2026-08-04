"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { languages } from "@/data/languages";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageDropdown() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((l) => l.locale === locale) ?? languages[0];

  const otherLanguages = languages.filter(
    (l) => l.locale !== currentLanguage.locale
  );

  function changeLanguage(locale: string) {
  router.replace(pathname, {
    locale,
    scroll: false,
  });
}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-white transition hover:text-red-500">
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          width={20}
          height={20}
        />

        {currentLanguage.label}

        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        alignOffset={25}
        className="w-auto min-w-0 border-white/10 bg-black p-1 text-white"
      >
        {otherLanguages.map((language) => (
          <DropdownMenuItem
            key={language.locale}
            onClick={() => changeLanguage(language.locale)}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5"
          >
            <Image
              src={language.flag}
              alt={language.alt}
              width={20}
              height={20}
            />

            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}