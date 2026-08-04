import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Shows from "@/components/sections/Shows";
import Gallery from "@/components/sections/Gallery";
import Videos from "@/components/sections/Videos";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import SocialLinks from "@/components/contact/SocialLinks";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const descriptions = {
    en: "Professional international circus duo offering hand-to-hand acrobatics, aerial performances, full-length productions and premium entertainment for theatres, cruise ships, corporate events and luxury venues.",
    uk: "Міжнародний цирковий дует ArtAle. Парна акробатика, повітряна акробатика, циркові шоу та преміальні виступи для театрів, круїзних лайнерів, корпоративних і приватних заходів.",
    sk: "Medzinárodné cirkusové duo ArtAle ponúkajúce párovú akrobaciu, vzdušné vystúpenia, celovečerné cirkusové predstavenia a prémiovú zábavu pre divadlá, výletné lode a firemné podujatia.",
  };

  return {
    title: "ArtAle | International Circus Duo",

    description: descriptions[locale as keyof typeof descriptions],

    alternates: {
      canonical: `https://duoartale.com/${locale}`,
      languages: {
        en: "https://duoartale.com/en",
        uk: "https://duoartale.com/uk",
        sk: "https://duoartale.com/sk",
      },
    },

    openGraph: {
      title: "ArtAle | International Circus Duo",
      description: descriptions[locale as keyof typeof descriptions],
      url: `https://duoartale.com/${locale}`,
      siteName: "ArtAle",
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "ArtAle | International Circus Duo",
      description: descriptions[locale as keyof typeof descriptions],
    },
  };
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Shows />
        <Gallery />
        <Videos />
        <Clients />
        <Testimonials />
        <FAQ />
        <Contact />
        <SocialLinks />
      </main>

      <Footer />
    </>
  );
}