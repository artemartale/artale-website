export type Show = {
  slug: string;
  title: string;
  subtitle: string;
  cardImage: string;
  heroImage: string;
  gallery: string[];
  video: string;
  description: string;
  duration: string;
  performers: string;
  technical: string[];
};

export const shows: Show[] = [
  {
    slug: "once-and-always",
    title: "Once & Always",
    subtitle: "45-хвилинне емоційне циркове шоу",

    cardImage: "/images/shows/cards/once-and-always.jpg",
    heroImage: "/images/shows/hero/once-and-always.jpg",

    gallery: [
      "/images/shows/gallery/once-and-always1.jpg",
      "/images/shows/gallery/once-and-always2.jpg",
      "/images/shows/gallery/once-and-always3.jpg",
    ],

    video: "https://youtu.be/ADtHA4Ci3WI",

    description:
      "Емоційна сучасна циркова постановка, що розповідає історію кохання через повітряну акробатику, парну акробатику та танець.",

    duration: "35–45 хв",
    performers: "2 артисти",

    technical: [
      "Сцена мінімум 8 × 8 м",
      "Точка підвісу мінімум 4 м (для повітряної версії)",
      "Професійне освітлення та LED-екран",
      "Професійна звукова система",
    ],
  },

  {
    slug: "hits-voyage",
    title: "Hits Voyage",
    subtitle: "45-хвилинне музичне циркове шоу",

    cardImage: "/images/shows/cards/hits-voyage.jpg",
    heroImage: "/images/shows/hero/hits-voyage.jpg",

    gallery: [
      "/images/shows/gallery/hits-voyage1.jpg",
      "/images/shows/gallery/hits-voyage2.jpg",
      "/images/shows/gallery/hits-voyage3.jpg",
    ],

    video: "https://youtu.be/Yy2vXkQynks",

    description:
      "Динамічне циркове шоу, натхненне легендарними світовими хітами, що поєднує хореографію, повітряну акробатику та акробатичні номери.",

    duration: "35–45 хв",
    performers: "2 артисти",

    technical: [
      "Сцена мінімум 8 × 8 м",
      "Точка підвісу мінімум 4 м (для повітряної версії)",
      "Професійне освітлення та LED-екран",
      "Професійна звукова система",
    ],
  },
];