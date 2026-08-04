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
    subtitle: "45-minútové emotívne cirkusové predstavenie",

    cardImage: "/images/shows/cards/once-and-always.jpg",
    heroImage: "/images/shows/hero/once-and-always.jpg",

    gallery: [
      "/images/shows/gallery/once-and-always1.jpg",
      "/images/shows/gallery/once-and-always2.jpg",
      "/images/shows/gallery/once-and-always3.jpg",
    ],

    video: "https://youtu.be/ADtHA4Ci3WI",

    description:
      "Emotívne moderné cirkusové predstavenie rozprávajúce príbeh lásky prostredníctvom vzdušnej akrobacie, párovej akrobacie a tanca.",

    duration: "35 – 45 min",
    performers: "2 umelci",

    technical: [
      "Pódium minimálne 8 × 8 m",
      "Závesný bod minimálne 4 m (pre vzdušnú verziu)",
      "Profesionálne osvetlenie a LED obrazovka",
      "Profesionálny zvukový systém",
    ],
  },

  {
    slug: "hits-voyage",
    title: "Hits Voyage",
    subtitle: "45-minútové hudobné cirkusové predstavenie",

    cardImage: "/images/shows/cards/hits-voyage.jpg",
    heroImage: "/images/shows/hero/hits-voyage.jpg",

    gallery: [
      "/images/shows/gallery/hits-voyage1.jpg",
      "/images/shows/gallery/hits-voyage2.jpg",
      "/images/shows/gallery/hits-voyage3.jpg",
    ],

    video: "https://youtu.be/Yy2vXkQynks",

    description:
      "Dynamické cirkusové predstavenie inšpirované legendárnymi svetovými hitmi, ktoré spája choreografiu, vzdušnú akrobaciu a akrobatické vystúpenia.",

    duration: "35 – 45 min",
    performers: "2 umelci",

    technical: [
      "Pódium minimálne 8 × 8 m",
      "Závesný bod minimálne 4 m (pre vzdušnú verziu)",
      "Profesionálne osvetlenie a LED obrazovka",
      "Profesionálny zvukový systém",
    ],
  },
];