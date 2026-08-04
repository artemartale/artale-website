import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import EventHero from "@/components/events/EventHero";
import EventGallery from "@/components/events/EventGallery";
import BookEvent from "@/components/events/BookEvent";

import { getEvents } from "@/data/getEvents";

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

  const events = getEvents(locale);
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return {};
  }

  return {
    title: event.title,

    description: event.description,

    alternates: {
      canonical: `https://duoartale.com/${locale}/events/${event.slug}`,
      languages: {
        en: `https://duoartale.com/en/events/${event.slug}`,
        uk: `https://duoartale.com/uk/events/${event.slug}`,
        sk: `https://duoartale.com/sk/events/${event.slug}`,
      },
    },

    openGraph: {
      title: `${event.title} | ArtAle`,
      description: event.description,
      url: `https://duoartale.com/${locale}/events/${event.slug}`,
      siteName: "ArtAle",
      locale,
      type: "website",
      images: [
        {
          url: event.heroImage,
          alt: event.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${event.title} | ArtAle`,
      description: event.description,
      images: [event.heroImage],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;

  const locale = await getLocale();
  const events = getEvents(locale);

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const currentIndex = events.findIndex(
    (item) => item.slug === event.slug
  );

  const previousEvent =
    events[(currentIndex - 1 + events.length) % events.length];

  const nextEvent =
    events[(currentIndex + 1) % events.length];

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('${event.heroImage}')`,
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <EventHero
          event={event}
          previousEvent={previousEvent}
          nextEvent={nextEvent}
        />

        <EventGallery images={event.gallery} />

        <BookEvent title={event.title} />
      </main>

      <Footer />
    </>
  );
}