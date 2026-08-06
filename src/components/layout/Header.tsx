"use client";

import { useState } from "react";
import { SiInstagram } from "react-icons/si";
import Logo from "@/components/header/Logo";
import DesktopNavigation from "@/components/header/DesktopNavigation";
import PhoneDropdown from "@/components/header/PhoneDropdown";
import ContactDropdown from "@/components/header/ContactDropdown";
import { Link } from "@/i18n/navigation";
import { Menu, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageDropdown from "@/components/header/LanguageDropdown";
import { useTranslations } from "next-intl";



const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Shows", href: "/#shows" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Videos", href: "/#videos" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);
 

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
       <Logo />

        {/* Desktop navigation */}
        <DesktopNavigation />

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-2">
          <a
  href="https://instagram.com/artem_artale"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:text-pink-500"
  aria-label="Instagram"
>
  <SiInstagram className="h-5 w-5" />
</a>

              <ContactDropdown />

              <PhoneDropdown />

              <Link href="/contact">
  <Button className="mx-2 rounded-xl bg-red-600 px-6 text-white transition hover:bg-red-700">
    {t("book")}
  </Button>
</Link>

              <LanguageDropdown />

            </div>
        {/* Mobile */}
        <div className="lg:hidden">

          <Sheet
  open={open}
  onOpenChange={(nextOpen) => setOpen(nextOpen)}
>

            <SheetTrigger
  render={
    <Button
      variant="ghost"
      size="icon"
    />
  }
>
  <Menu className="h-6 w-6 text-white" />
</SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black text-white"
            >

              <div className="mt-10 flex flex-col gap-6 px-6">

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className="text-left text-xl font-medium hover:text-red-500"
                   >
  {item.label}
</Link>
                ))}
                <div className="mt-2 border-t border-white/10 pt-6">
  <div className="flex items-center justify-center gap-8">
    <a
      href="https://instagram.com/artem_artale"
      onClick={() => setOpen(false)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="transition hover:text-pink-500"
    >
      <SiInstagram className="h-7 w-7" />
    </a>

    <a
      href="mailto:artem.benefis@gmail.com"
      onClick={() => setOpen(false)}
      aria-label="Email"
      className="transition hover:text-red-500"
    >
      <Mail className="h-7 w-7" />
    </a>

    <a
      href="tel:+421944230778"
      onClick={() => setOpen(false)}
      aria-label="Phone"
      className="transition hover:text-red-500"
    >
      <Phone className="h-7 w-7" />
    </a>
  </div>
</div>

        <Link href="/contact"
        onClick={() => setOpen(false)}>

  <Button className="mt-6 rounded-xl bg-red-600 hover:bg-red-700">
    {t("book")}
  </Button>
</Link>

<div className="mt-2 border-t border-white/10 pt-6">
  <LanguageDropdown />
</div>
               
             </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  );
}