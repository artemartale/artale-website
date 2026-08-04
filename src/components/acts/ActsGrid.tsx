import { getLocale } from "next-intl/server";

import ActCard from "./ActCard";

import { getActs } from "@/data/getActs";

export default async function ActsGrid() {
  const locale = await getLocale();
  const acts = getActs(locale);

  return (
    <section className="mx-auto max-w-7xl px-6 py-2">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {acts.map((act) => (
          <ActCard
            key={act.slug}
            {...act}
          />
        ))}
      </div>
    </section>
  );
}