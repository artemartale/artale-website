"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { phones } from "@/data/phones";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PhoneDropdown() {
  const t = useTranslations("Phones");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:text-red-500">
        <Phone className="h-5 w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border-white/10 bg-black text-white"
      >
        {phones.map((phone) => (
          <DropdownMenuItem key={phone.number}>
            <a
              href={`tel:${phone.number.replace(/\s/g, "")}`}
              className="flex w-full flex-col items-start"
            >
              <span className="text-xs text-gray-400">
                {t(phone.key)}
              </span>

              <span>{phone.number}</span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}