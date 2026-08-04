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
    subtitle: "45 Minute Emotional Circus Show",

    cardImage: "/images/shows/cards/once-and-always.jpg",
    heroImage: "/images/shows/hero/once-and-always.jpg",

    gallery: [
      "/images/shows/gallery/once-and-always1.jpg",
      "/images/shows/gallery/once-and-always2.jpg",
      "/images/shows/gallery/once-and-always3.jpg",
    ],

    video: "https://youtu.be/ADtHA4Ci3WI",

    description:
      "An emotional contemporary circus production telling a love story through aerial arts, hand-to-hand acrobatics and dance.",

    duration: "35 - 45 min",
    performers: "2 Artists",

    technical: [
      "Stage minimum 8 × 8 m",
      "Rigging point min 4 m. (if aerial version)",
      "Professional lighting and LED screen",
      "Professional sound system",
    ],
  },

  {
    slug: "hits-voyage",
    title: "Hits Voyage",
    subtitle: "45 Minute Musical Circus Show",

    cardImage: "/images/shows/cards/hits-voyage.jpg",
    heroImage: "/images/shows/hero/hits-voyage.jpg",

    gallery: [
      "/images/shows/gallery/hits-voyage1.jpg",
      "/images/shows/gallery/hits-voyage2.jpg",
      "/images/shows/gallery/hits-voyage3.jpg",
    ],

    video: "https://youtu.be/Yy2vXkQynks",

    description:
      "A high-energy circus production inspired by legendary international hits, combining choreography, aerial performances and acrobatics.",

    duration: "35 - 45 min",
    performers: "2 Artists",

    technical: [
      "Stage minimum 8 × 8 m",
      "Rigging point min 4 m. (if aerial version)",
      "Professional lighting and LED screen",
      "Professional sound system",
    ],
  },
];