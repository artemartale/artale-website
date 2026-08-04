import { Show, shows as en } from "./shows.en";
import { shows as uk } from "./shows.uk";
import { shows as sk } from "./shows.sk";

export function getShows(locale: string): Show[] {
  switch (locale) {
    case "uk":
      return uk;

    case "sk":
      return sk;

    default:
      return en;
  }
}