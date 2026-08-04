"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { contacts } from "@/data/contacts";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ContactDropdown() {
  const t = useTranslations("Contacts");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:text-red-500">
        <Mail className="h-5 w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border-white/10 bg-black text-white"
      >
        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <DropdownMenuItem key={contact.key}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3"
              >
                <Icon className="h-4 w-4" />

                <span>{t(contact.key)}</span>
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}