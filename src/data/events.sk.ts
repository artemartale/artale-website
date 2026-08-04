export type Event = {
  slug: string;
  title: string;
  category: string;
  cardImage: string;
  heroImage: string;
  gallery: string[];
  video: string;
  description: string;
  duration: string;
  venue: string;
  technical: string[];
};

export const events: Event[] = [
  {
    slug: "corporate-events",
    title: "Firemné podujatia",
    category: "Biznis zábava",

    cardImage: "/images/events/cards/corporate.jpg",
    heroImage: "/images/events/hero/corporate.jpg",

    gallery: [
      "/images/events/gallery/corporate1.jpg",
      "/images/events/gallery/corporate2.jpg",
      "/images/events/gallery/corporate3.jpg",
    ],

    video: "",
    description:
      "Elegantné cirkusové vystúpenia určené pre konferencie, firemné oslavy, uvedenia produktov na trh a odovzdávanie cien.",
    duration: "5–45 min",
    venue: "Interiér / Exteriér",
    technical: [
      "Prispôsobiteľné akémukoľvek priestoru",
      "Profesionálny zvukový systém",
      "Osvetlenie na požiadanie",
    ],
  },

  {
    slug: "gala-dinners",
    title: "Galavečery",
    category: "Luxusná zábava",

    cardImage: "/images/events/cards/gala.jpg",
    heroImage: "/images/events/hero/gala.jpg",

    gallery: [
      "/images/events/gallery/gala1.jpg",
      "/images/events/gallery/gala2.jpg",
      "/images/events/gallery/gala3.jpg",
    ],

    video: "",
    description:
      "Sofistikované vystúpenia vytvorené pre luxusné galavečere a exkluzívne recepcie.",
    duration: "5–30 min",
    venue: "Interiér",
    technical: [
      "Rovná plocha na vystúpenie",
      "Hudba na mieru",
      "Voliteľné závesné body pre aerial vystúpenia",
    ],
  },

  {
    slug: "weddings",
    title: "Luxusné svadby",
    category: "Súkromné podujatia",

    cardImage: "/images/events/cards/wedding.jpg",
    heroImage: "/images/events/hero/wedding.jpg",

    gallery: [
      "/images/events/gallery/wedding1.jpg",
      "/images/events/gallery/wedding2.jpg",
      "/images/events/gallery/wedding3.jpg",
    ],

    video: "",
    description:
      "Romantické vzdušné a akrobatické vystúpenia, ktoré vytvárajú nezabudnuteľné okamihy na svadobných oslavách.",
    duration: "5–20 min",
    venue: "Interiér / Exteriér",
    technical: [
      "Prispôsobená choreografia",
      "Voliteľná aerial konštrukcia",
      "Hudба na mieru",
    ],
  },

  {
    slug: "hotel-shows",
    title: "Luxusné hotely a rezorty",
    category: "Hotelierstvo",

    cardImage: "/images/events/cards/hotel.jpg",
    heroImage: "/images/events/hero/hotel.jpg",

    gallery: [
      "/images/events/gallery/hotel1.jpg",
      "/images/events/gallery/hotel2.jpg",
      "/images/events/gallery/hotel3.jpg",
    ],

    video: "",
    description:
      "Prémiová zábava pre päťhviezdičkové hotely, rezorty a exkluzívne zážitky pre hostí.",
    duration: "10–45 min",
    venue: "Interiér / Exteriér",
    technical: [
      "Flexibilné technické riešenie",
      "Aerial alebo pozemné vystúpenia",
      "Produkcia na mierу",
    ],
  },

  {
    slug: "private-parties",
    title: "Súkromné oslavy",
    category: "Exkluzívne podujatia",

    cardImage: "/images/events/cards/private.jpg",
    heroImage: "/images/events/hero/private.jpg",

    gallery: [
      "/images/events/gallery/private1.jpg",
      "/images/events/gallery/private2.jpg",
      "/images/events/gallery/private3.jpg",
    ],

    video: "",
    description:
      "Exkluzívne vystúpenia pre narodeniny, výročia a VIP oslavy.",
    duration: "5–20 min",
    venue: "Interiér / Exteriér",
    technical: [
      "Minimálna technická príprava",
      "Prenosné vybavenie",
      "Program prispôsobený na mierу",
    ],
  },

  {
    slug: "festivals",
    title: "Festivaly a verejné podujatia",
    category: "Živá zábava",

    cardImage: "/images/events/cards/festival.jpg",
    heroImage: "/images/events/hero/festival.jpg",

    gallery: [
      "/images/events/gallery/festival1.jpg",
      "/images/events/gallery/festival2.jpg",
      "/images/events/gallery/festival3.jpg",
    ],

    video: "",
    description:
      "Dynamická cirkusová zábava pre festivaly, kultúrne podujatia a mestské oslavy.",
    duration: "10–45 min",
    venue: "Exteriér / Interiér",
    technical: [
      "Veľká plocha na vystúpenie",
      "Profesionálny zvuk",
      "Voliteľné závesné body pre aerial vystúpenia",
    ],
  },
];