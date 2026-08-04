"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/images/Logo_ArtAle.jpg"
        alt="ArtAle Logo"
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg"
      />

      <span className="text-2xl font-bold text-white">
        Duo ArtAle
      </span>
    </Link>
  );
}