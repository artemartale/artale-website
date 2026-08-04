import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-2 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h4 className="text-2xl font-bold tracking-[0.2em]">
            Duo ArtAle s.r.o.
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            {t("tagline")}
          </p>
        </div>

        <nav className="flex gap-12 text-base text-gray-400">
          <Link
            href={{ pathname: "/", hash: "about" }}
            className="transition-colors duration-300 hover:text-red-600"
          >
            {t("about")}
          </Link>

          <Link
            href={{ pathname: "/", hash: "shows" }}
            className="transition-colors duration-300 hover:text-red-600"
          >
            {t("shows")}
          </Link>

          <Link
            href={{ pathname: "/", hash: "gallery" }}
            className="transition-colors duration-300 hover:text-red-600"
          >
            {t("gallery")}
          </Link>

          <Link
            href={{ pathname: "/", hash: "contact" }}
            className="transition-colors duration-300 hover:text-red-600"
          >
            {t("contact")}
          </Link>
        </nav>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Duo ArtAle s.r.o. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}