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
    title: "Корпоративні заходи",
    category: "Бізнес-розваги",

    cardImage: "/images/events/cards/corporate.jpg",
    heroImage: "/images/events/hero/corporate.jpg",

    gallery: [
      "/images/events/gallery/corporate1.jpg",
      "/images/events/gallery/corporate2.jpg",
      "/images/events/gallery/corporate3.jpg",
    ],

    video: "",
    description:
      "Елегантні циркові виступи для конференцій, корпоративних свят, презентацій продуктів та церемоній нагородження.",
    duration: "5–45 хв",
    venue: "У приміщенні / На відкритому повітрі",
    technical: [
      "Адаптується до будь-якого майданчика",
      "Професійна звукова система",
      "Освітлення за запитом",
    ],
  },

  {
    slug: "gala-dinners",
    title: "Гала-вечері",
    category: "Преміальні розваги",

    cardImage: "/images/events/cards/gala.jpg",
    heroImage: "/images/events/hero/gala.jpg",

    gallery: [
      "/images/events/gallery/gala1.jpg",
      "/images/events/gallery/gala2.jpg",
      "/images/events/gallery/gala3.jpg",
    ],

    video: "",
    description:
      "Вишукані циркові виступи, створені для розкішних гала-вечерь та ексклюзивних прийомів.",
    duration: "5–30 хв",
    venue: "У приміщенні",
    technical: [
      "Рівний майданчик для виступу",
      "Індивідуальний музичний супровід",
      "Повітряне обладнання за потреби",
    ],
  },

  {
    slug: "weddings",
    title: "Розкішні весілля",
    category: "Приватні заходи",

    cardImage: "/images/events/cards/wedding.jpg",
    heroImage: "/images/events/hero/wedding.jpg",

    gallery: [
      "/images/events/gallery/wedding1.jpg",
      "/images/events/gallery/wedding2.jpg",
      "/images/events/gallery/wedding3.jpg",
    ],

    video: "",
    description:
      "Романтичні повітряні та акробатичні номери, які створюють незабутні моменти для весільних святкувань.",
    duration: "5–20 хв",
    venue: "У приміщенні / На відкритому повітрі",
    technical: [
      "Адаптована хореографія",
      "Повітряне обладнання за потреби",
      "Індивідуальний музичний супровід",
    ],
  },

  {
    slug: "hotel-shows",
    title: "Розкішні готелі та курорти",
    category: "Готельний бізнес",

    cardImage: "/images/events/cards/hotel.jpg",
    heroImage: "/images/events/hero/hotel.jpg",

    gallery: [
      "/images/events/gallery/hotel1.jpg",
      "/images/events/gallery/hotel2.jpg",
      "/images/events/gallery/hotel3.jpg",
    ],

    video: "",
    description:
      "Преміальні циркові шоу для п'ятизіркових готелів, курортів та ексклюзивних заходів для гостей.",
    duration: "10–45 хв",
    venue: "У приміщенні / На відкритому повітрі",
    technical: [
      "Гнучке налаштування майданчика",
      "Повітряні або наземні номери",
      "Індивідуальна постановка",
    ],
  },

  {
    slug: "private-parties",
    title: "Приватні святкування",
    category: "Ексклюзивні події",

    cardImage: "/images/events/cards/private.jpg",
    heroImage: "/images/events/hero/private.jpg",

    gallery: [
      "/images/events/gallery/private1.jpg",
      "/images/events/gallery/private2.jpg",
      "/images/events/gallery/private3.jpg",
    ],

    video: "",
    description:
      "Ексклюзивні циркові виступи для днів народження, ювілеїв та VIP-заходів.",
    duration: "5–20 хв",
    venue: "У приміщенні / На відкритому повітрі",
    technical: [
      "Мінімальна підготовка",
      "Портативне обладнання",
      "Індивідуальна програма",
    ],
  },

  {
    slug: "festivals",
    title: "Фестивалі та публічні заходи",
    category: "Живі шоу",

    cardImage: "/images/events/cards/festival.jpg",
    heroImage: "/images/events/hero/festival.jpg",

    gallery: [
      "/images/events/gallery/festival1.jpg",
      "/images/events/gallery/festival2.jpg",
      "/images/events/gallery/festival3.jpg",
    ],

    video: "",
    description:
      "Енергійні циркові шоу для фестивалів, культурних подій та міських свят.",
    duration: "10–45 хв",
    venue: "На відкритому повітрі / У приміщенні",
    technical: [
      "Велика сцена або майданчик",
      "Професійний звук",
      "Повітряне обладнання за потреби",
    ],
  },
];