export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://duoartale.com/#organization",

        name: "ArtAle",

        url: "https://duoartale.com",

        logo: {
          "@type": "ImageObject",
          url: "https://duoartale.com/images/Logo_ArtAle.jpg",
        },

        image:
          "https://duoartale.com/images/acts/gallery/hand-to-hand3.jpg",

        email: "artem.benefis@gmail.com",

        telephone: [
          "+380662459065",
          "+421944230778",
        ],

        sameAs: [
          "https://instagram.com/artem_artale",
          "https://www.facebook.com/duoartale",
          "https://youtube.com/@acroduoartale",
          "https://www.tiktok.com/@circustraininghub",
        ],
      },

      {
        "@type": "PerformingGroup",
        "@id": "https://duoartale.com/#performinggroup",

        name: "ArtAle",

        alternateName: "ArtAle International Circus Duo",

        description:
          "International circus duo specializing in hand-to-hand acrobatics, aerial performances, full-length circus productions and premium entertainment worldwide.",

        url: "https://duoartale.com",

        image:
          "https://duoartale.com/images/acts/gallery/hand-to-hand3.jpg",

        slogan: "International Circus Duo",

        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },

        member: [
          {
            "@type": "Person",
            name: "Artem Kaidalov",
          },
          {
            "@type": "Person",
            name: "Olesia Samsonova",
          },
        ],

        knowsAbout: [
          "Hand to Hand Acrobatics",
          "Aerial Silk",
          "Aerial Hoop",
          "Aerial Straps",
          "Cube Acrobatics",
          "Stilt Walking",
          "Circus Shows",
          "Corporate Entertainment",
          "Cruise Ship Entertainment",
          "Luxury Weddings",
          "Festivals",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://duoartale.com/#website",

        url: "https://duoartale.com",

        name: "ArtAle",

        publisher: {
          "@id": "https://duoartale.com/#organization",
        },

        inLanguage: [
          "en",
          "uk",
          "sk",
        ],
      },

      {
        "@type": "OfferCatalog",

        name: "ArtAle Performances",

        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Circus Acts",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Circus Shows",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Events",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cruise Ship Entertainment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Luxury Weddings",
            },
          },
        ],
      },

      {
        "@type": "ContactPoint",

        contactType: "Booking",

        telephone: "+421944230778",

        email: "artem.benefis@gmail.com",

        availableLanguage: [
          "English",
          "Ukrainian",
          "Slovak",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}