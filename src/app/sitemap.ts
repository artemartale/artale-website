import type { MetadataRoute } from "next";

import { getActs } from "@/data/getActs";
import { getShows } from "@/data/getShows";
import { getEvents } from "@/data/getEvents";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://duoartale.com";
  const locales = ["en", "uk", "sk"] as const;

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Static pages
    [
      "",
      "/acts",
      "/shows",
      "/events",
      "/contact",
    ].forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    });

    // Acts
    getActs(locale).forEach((act) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/acts/${act.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    // Shows
    getShows(locale).forEach((show) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/shows/${show.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

    // Events
    getEvents(locale).forEach((event) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/events/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return sitemap;
}