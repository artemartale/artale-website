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
    title: "Corporate Events",
    category: "Business Entertainment",

    cardImage: "/images/events/cards/corporate.jpg",
    heroImage: "/images/events/hero/corporate.jpg",

    gallery: [
      "/images/events/gallery/corporate1.jpg",
      "/images/events/gallery/corporate2.jpg",
      "/images/events/gallery/corporate3.jpg",
    ],

    video: "",
    description:
      "Elegant circus performances designed for conferences, company celebrations, product launches and award ceremonies.",
    duration: "5–45 min",
    venue: "Indoor / Outdoor",
    technical: [
      "Adaptable to any venue",
      "Professional sound system",
      "Lighting upon request",
    ],
  },

  {
    slug: "gala-dinners",
    title: "Gala Dinners",
    category: "Luxury Entertainment",

    cardImage: "/images/events/cards/gala.jpg",
    heroImage: "/images/events/hero/gala.jpg",

    gallery: [
      "/images/events/gallery/gala1.jpg",
      "/images/events/gallery/gala2.jpg",
      "/images/events/gallery/gala3.jpg",
    ],

    video: "",
    description:
      "Sophisticated performances created to enhance luxury gala dinners and exclusive receptions.",
    duration: "5–30 min",
    venue: "Indoor",
    technical: [
      "Flat performance area",
      "Custom music",
      "Optional aerial rigging",
    ],
  },

  {
    slug: "weddings",
    title: "Luxury Weddings",
    category: "Private Events",

    cardImage: "/images/events/cards/wedding.jpg",
    heroImage: "/images/events/hero/wedding.jpg",

    gallery: [
      "/images/events/gallery/wedding1.jpg",
      "/images/events/gallery/wedding2.jpg",
      "/images/events/gallery/wedding3.jpg",
    ],

    video: "",
    description:
      "Romantic aerial and acrobatic performances that create unforgettable moments for wedding celebrations.",
    duration: "5–20 min",
    venue: "Indoor / Outdoor",
    technical: [
      "Adaptable choreography",
      "Optional aerial setup",
      "Custom soundtrack",
    ],
  },

  {
    slug: "hotel-shows",
    title: "Luxury Hotels & Resorts",
    category: "Hospitality",

    cardImage: "/images/events/cards/hotel.jpg",
    heroImage: "/images/events/hero/hotel.jpg",

    gallery: [
      "/images/events/gallery/hotel1.jpg",
      "/images/events/gallery/hotel2.jpg",
      "/images/events/gallery/hotel3.jpg",
    ],

    video: "",
    description:
      "Premium entertainment for five-star hotels, resorts and exclusive guest experiences.",
    duration: "10–45 min",
    venue: "Indoor / Outdoor",
    technical: [
      "Flexible setup",
      "Aerial or floor acts",
      "Custom production",
    ],
  },

  {
    slug: "private-parties",
    title: "Private Celebrations",
    category: "Exclusive Events",

    cardImage: "/images/events/cards/private.jpg",
    heroImage: "/images/events/hero/private.jpg",

    gallery: [
      "/images/events/gallery/private1.jpg",
      "/images/events/gallery/private2.jpg",
      "/images/events/gallery/private3.jpg",
    ],

    video: "",
    description:
      "Exclusive performances for birthdays, anniversaries and VIP celebrations.",
    duration: "5–20 min",
    venue: "Indoor / Outdoor",
    technical: [
      "Minimal setup",
      "Portable equipment",
      "Tailored performance",
    ],
  },

  {
    slug: "festivals",
    title: "Festivals & Public Events",
    category: "Live Entertainment",

    cardImage: "/images/events/cards/festival.jpg",
    heroImage: "/images/events/hero/festival.jpg",

    gallery: [
      "/images/events/gallery/festival1.jpg",
      "/images/events/gallery/festival2.jpg",
      "/images/events/gallery/festival3.jpg",
    ],

    video: "",
    description:
      "High-energy circus entertainment for festivals, cultural events and city celebrations.",
    duration: "10–45 min",
    venue: "Outdoor / Indoor",
    technical: [
      "Large performance area",
      "Professional sound",
      "Optional aerial rigging",
    ],
  },
];