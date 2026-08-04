import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

export default function Shows() {
  const t = useTranslations("Shows");

  const shows = [
    {
      title: t("acts.title"),
      image: "/images/home/acts.jpg",
      href: "/acts",
      description: t("acts.description"),
    },
    {
      title: t("fullShows.title"),
      image: "/images/home/shows.jpg",
      href: "/shows",
      description: t("fullShows.description"),
    },
    {
      title: t("events.title"),
      image: "/images/home/events.jpg",
      href: "/events",
      description: t("events.description"),
    },
  ];

  return (
    <section
      id="shows"
      className="bg-black py-20 text-white"
    >
      <Container>
        <SectionTitle
          subtitle=""
          title={
            <>
              {t("title")}{" "}
              <span className="text-red-600">
                {t("titleAccent")}
              </span>
            </>
          }
          description={t("description")}
        />

        <div className="mx-auto max-w-6xl">
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {shows.map((show) => (
              <Link
                key={show.title}
                href={show.href}
                className="group flex h-[650px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800"
              >
                <div className="h-80 overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    width={700}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-bold">
                    {show.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-7">
                    {show.description}
                  </p>

                  <div className="mt-6">
                    <Button className="pointer-events-none w-full">
                      <span className="flex items-center justify-center gap-2">
                        {t("learnMore")}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}