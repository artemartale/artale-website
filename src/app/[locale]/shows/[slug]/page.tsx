import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ShowHero from "@/components/shows/ShowHero";
import ShowGallery from "@/components/shows/ShowGallery";
import ShowTechnical from "@/components/shows/ShowTechnical";
import BookShow from "@/components/shows/BookShow";

import { getShows } from "@/data/getShows";

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

  const shows = getShows(locale);
  const show = shows.find((item) => item.slug === slug);

  if (!show) {
    return {};
  }

  return {
    title: show.title,

    description: show.description,

    alternates: {
      canonical: `https://duoartale.com/${locale}/shows/${show.slug}`,
      languages: {
        en: `https://duoartale.com/en/shows/${show.slug}`,
        uk: `https://duoartale.com/uk/shows/${show.slug}`,
        sk: `https://duoartale.com/sk/shows/${show.slug}`,
      },
    },

    openGraph: {
      title: `${show.title} | ArtAle`,
      description: show.description,
      url: `https://duoartale.com/${locale}/shows/${show.slug}`,
      siteName: "ArtAle",
      locale,
      type: "website",
      images: [
        {
          url: show.heroImage,
          alt: show.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${show.title} | ArtAle`,
      description: show.description,
      images: [show.heroImage],
    },
  };
}

export default async function ShowPage({ params }: Props) {
  const { slug } = await params;

  const locale = await getLocale();
  const shows = getShows(locale);

  const show = shows.find((item) => item.slug === slug);

  if (!show) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${show.heroImage}')`,
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <ShowHero
          title={show.title}
          subtitle={show.subtitle}
          description={show.description}
          promoVideoId={show.video}
        />

        <ShowGallery images={show.gallery} />

        <ShowTechnical
          duration={show.duration}
          performers={show.performers}
          technical={show.technical}
        />

        <BookShow title={show.title} />
      </main>

      <Footer />
    </>
  );
}