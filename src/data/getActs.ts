import { acts as actsEn } from "./acts.en";
import { acts as actsUk } from "./acts.uk";
import { acts as actsSk } from "./acts.sk";

export function getActs(locale: string) {
  switch (locale) {
    case "uk":
      return actsUk;

    case "sk":
      return actsSk;

    default:
      return actsEn;
  }
}