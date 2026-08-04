import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ActsHero from "@/components/acts/ActsHero";
import ActsGrid from "@/components/acts/ActsGrid";

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
      title: "Circus Acts",
      description:
        "Discover ArtAle's professional circus acts including hand-to-hand acrobatics, aerial silk, aerial hoop, straps, cube, stilts and more for theatres, cruise ships and exclusive events.",
    },
    uk: {
      title: "Циркові номери",
      description:
        "Познайомтеся з професійними цирковими номерами ArtAle: парна акробатика, повітряне полотно, кільце, ремені, куб, ходулі та інші виступи для театрів, круїзних лайнерів і спеціальних подій.",
    },
    sk: {
      title: "Cirkusové vystúpenia",
      description:
        "Objavte profesionálne cirkusové čísla ArtAle vrátane párovej akrobacie, aerial silk, aerial hoop, straps, cube, chodúľov a ďalších vystúpení pre divadlá, výletné lode a exkluzívne podujatia.",
    },
  };

  const current = seo[locale as keyof typeof seo];

  return {
    title: current.title,
    description: current.description,

    alternates: {
      canonical: `https://duoartale.com/${locale}/acts`,
      languages: {
        en: "https://duoartale.com/en/acts",
        uk: "https://duoartale.com/uk/acts",
        sk: "https://duoartale.com/sk/acts",
      },
    },

    openGraph: {
      title: `${current.title} | ArtAle`,
      description: current.description,
      url: `https://duoartale.com/${locale}/acts`,
      siteName: "ArtAle",
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${current.title} | ArtAle`,
      description: current.description,
    },
  };
}

export default function ActsPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden pt-20 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/acts/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <ActsHero />

        <section className="mx-auto max-w-7xl px-6 py-6">
          <ActsGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}