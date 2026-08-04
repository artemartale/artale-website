"use client";

import type { Show } from "@/data/shows.en";
import ShowCard from "./ShowCard";

type Props = {
  shows: Show[];
};

export default function ShowsGrid({ shows }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-2">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {shows.map((show) => (
          <ShowCard
            key={show.slug}
            show={show}
          />
        ))}
      </div>
    </section>
  );
}