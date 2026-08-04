import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ActHero from "@/components/acts/ActHero";
import ActGallery from "@/components/acts/ActGallery";
import AboutAct from "@/components/acts/AboutAct";
import TechnicalInfo from "@/components/acts/TechnicalInfo";
import BookAct from "@/components/acts/BookAct";

import { getActs } from "@/data/getActs";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const acts = getActs(locale);
  const act = acts.find((item) => item.slug === slug);

  if (!act) {
    return {};
  }

  return {
    title: act.title,

    description: act.shortDescription,

    alternates: {
      canonical: `https://duoartale.com/${locale}/acts/${act.slug}`,
      languages: {
        en: `https://duoartale.com/en/acts/${act.slug}`,
        uk: `https://duoartale.com/uk/acts/${act.slug}`,
        sk: `https://duoartale.com/sk/acts/${act.slug}`,
      },
    },

    openGraph: {
      title: `${act.title} | ArtAle`,
      description: act.shortDescription,
      url: `https://duoartale.com/${locale}/acts/${act.slug}`,
      siteName: "ArtAle",
      locale,
      type: "website",
      images: [
        {
          url: act.heroImage,
          alt: act.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${act.title} | ArtAle`,
      description: act.shortDescription,
      images: [act.heroImage],
    },
  };
}

export default async function ActPage({ params }: Props) {
  const { slug } = await params;

  const locale = await getLocale();
  const acts = getActs(locale);

  const act = acts.find((item) => item.slug === slug);

  if (!act) {
    notFound();
  }

  const currentIndex = acts.findIndex(
    (item) => item.slug === act.slug
  );

  const previousAct =
    acts[(currentIndex - 1 + acts.length) % acts.length];

  const nextAct =
    acts[(currentIndex + 1) % acts.length];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">
        <ActHero
          act={act}
          previousAct={previousAct}
          nextAct={nextAct}
        />

        <ActGallery images={act.gallery} />

        <AboutAct paragraphs={act.description} />

        <TechnicalInfo
          duration={act.duration}
          height={act.height}
          music={act.music}
          technicalRequirements={act.technicalRequirements}
        />

        <BookAct title={act.title} />
      </main>

      <Footer />
    </>
  );
}