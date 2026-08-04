import { Event, events as en } from "./events.en";
import { events as uk } from "./events.uk";
import { events as sk } from "./events.sk";

export function getEvents(locale: string): Event[] {
  switch (locale) {
    case "uk":
      return uk;

    case "sk":
      return sk;

    default:
      return en;
  }
}