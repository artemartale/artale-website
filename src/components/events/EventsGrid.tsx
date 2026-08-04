import EventCard from "./EventCard";
import type { Event } from "@/data/events.en";

type Props = {
  events: Event[];
};

export default function EventsGrid({
  events,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-2">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event) => (
          <EventCard
            key={event.slug}
            {...event}
          />
        ))}
      </div>
    </section>
  );
}