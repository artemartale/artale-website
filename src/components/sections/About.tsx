import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="bg-zinc-950 py-22 text-white"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="ArtAle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div>

            {/* Statistics */}
            <div className="mb-8 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  15+
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  {t("experience")}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  30+
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  {t("countries")}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  500+
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  {t("performances")}
                </p>
              </div>

            </div>

            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-red-500">
              {t("section")}
            </p>

            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Duo{" "}
              <span className="text-white">Art</span>
              <span className="text-red-600">Ale</span>
            </h2>

            <p className="mb-6 max-w-xl text-base leading-7 text-gray-400">
              {t("intro")}
            </p>

            <div className="max-w-xl space-y-5 text-base leading-7 text-gray-300">

              <p>{t("paragraph1")}</p>

              <p>{t("paragraph2")}</p>

              <p>{t("paragraph3")}</p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}