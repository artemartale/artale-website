import type { Metadata } from "next";

import { getLocale } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import EventsHero from "@/components/events/EventsHero";
import EventsGrid from "@/components/events/EventsGrid";

import { getEvents } from "@/data/getEvents";

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
      title: "Corporate & Special Events",
      description:
        "Premium circus entertainment for corporate events, gala dinners, luxury weddings, festivals, hotels, resorts and exclusive private celebrations.",
    },
    uk: {
      title: "Корпоративні та спеціальні події",
      description:
        "Преміальні циркові виступи для корпоративних заходів, гала-вечерь, розкішних весіль, фестивалів, готелів, курортів та приватних святкувань.",
    },
    sk: {
      title: "Firemné a špeciálne podujatia",
      description:
        "Prémiová cirkusová zábava pre firemné podujatia, galavečery, luxusné svadby, festivaly, hotely, rezorty a súkromné oslavy.",
    },
  };

  const current = seo[locale as keyof typeof seo];

  return {
    title: current.title,

    description: current.description,

    alternates: {
      canonical: `https://duoartale.com/${locale}/events`,
      languages: {
        en: "https://duoartale.com/en/events",
        uk: "https://duoartale.com/uk/events",
        sk: "https://duoartale.com/sk/events",
      },
    },

    openGraph: {
      title: `${current.title} | ArtAle`,
      description: current.description,
      url: `https://duoartale.com/${locale}/events`,
      siteName: "ArtAle",
      locale,
      type: "website",
      images: [
        {
          url: "/images/events/hero.jpg",
          alt: "ArtAle Events",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${current.title} | ArtAle`,
      description: current.description,
      images: ["/images/events/hero.jpg"],
    },
  };
}

export default async function EventsPage() {
  const locale = await getLocale();
  const events = getEvents(locale);

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden pt-20 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/events/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <EventsHero />

        <section className="mx-auto max-w-7xl px-6 py-6">
          <EventsGrid events={events} />
        </section>
      </main>

      <Footer />
    </>
  );
}