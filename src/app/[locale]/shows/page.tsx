import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShowsHero from "@/components/shows/ShowsHero";
import ShowsGrid from "@/components/shows/ShowsGrid";

import { getLocale } from "next-intl/server";
import { getShows } from "@/data/getShows";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const seo = {
    en: {
      title: "Circus Shows",
      description:
        "Discover ArtAle's full-length circus productions featuring breathtaking aerial performances, hand-to-hand acrobatics and world-class entertainment for theatres, cruise ships and special events.",
    },
    uk: {
      title: "Циркові шоу",
      description:
        "Познайомтеся з повноформатними цирковими шоу ArtAle, що поєднують повітряну акробатику, парну акробатику та видовищні постановки для театрів, круїзних лайнерів і спеціальних заходів.",
    },
    sk: {
      title: "Cirkusové predstavenia",
      description:
        "Objavte celovečerné cirkusové predstavenia ArtAle spájajúce vzdušnú akrobaciu, párovú akrobaciu a svetovú zábavu pre divadlá, výletné lode a špeciálne podujatia.",
    },
  };

  const current = seo[locale as keyof typeof seo];

  return {
    title: current.title,

    description: current.description,

    alternates: {
      canonical: `https://duoartale.com/${locale}/shows`,
      languages: {
        en: "https://duoartale.com/en/shows",
        uk: "https://duoartale.com/uk/shows",
        sk: "https://duoartale.com/sk/shows",
      },
    },

    openGraph: {
      title: `${current.title} | ArtAle`,
      description: current.description,
      url: `https://duoartale.com/${locale}/shows`,
      siteName: "ArtAle",
      locale,
      type: "website",
      images: [
        {
          url: "/images/shows/hero.jpg",
          alt: "ArtAle Circus Shows",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${current.title} | ArtAle`,
      description: current.description,
      images: ["/images/shows/hero.jpg"],
    },
  };
}

export default async function ShowsPage() {
  const locale = await getLocale();
  const shows = getShows(locale);

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden pt-20 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/shows/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/70" />

        <ShowsHero />

        <section className="mx-auto max-w-7xl px-6 py-6">
          <ShowsGrid shows={shows} />
        </section>
      </main>

      <Footer />
    </>
  );
}