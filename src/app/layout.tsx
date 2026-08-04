import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duoartale.com"),

  title: {
    default: "ArtAle | International Circus Duo",
    template: "%s | ArtAle",
  },

  description:
    "Professional international circus duo performing hand-to-hand acrobatics, aerial acts, full production shows and exclusive event entertainment worldwide.",

  applicationName: "ArtAle",

  authors: [
    {
      name: "ArtAle",
      url: "https://duoartale.com",
    },
  ],

  creator: "ArtAle",
  publisher: "ArtAle",

  keywords: [
    "ArtAle",
    "circus duo",
    "international circus artists",
    "hand to hand acrobatics",
    "aerial silk",
    "aerial hoop",
    "aerial straps",
    "circus show",
    "corporate entertainment",
    "cruise ship entertainment",
    "festival entertainment",
    "wedding entertainment",
    "circus acts",
    "acrobatic duo",
    "circus performers",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://duoartale.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "ArtAle | International Circus Duo",

    description:
      "Professional international circus duo performing hand-to-hand acrobatics, aerial acts, full production shows and exclusive event entertainment worldwide.",

    url: "https://duoartale.com",

    siteName: "ArtAle",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ArtAle International Circus Duo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ArtAle | International Circus Duo",

    description:
      "Professional international circus duo performing hand-to-hand acrobatics, aerial acts and premium entertainment worldwide.",

    images: ["/og-image.jpg"],
  },

  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}