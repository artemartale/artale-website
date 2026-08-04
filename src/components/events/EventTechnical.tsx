import {
  CheckCircle2,
  Clock3,
 MapPin,
} from "lucide-react";

type Props = {
  duration: string;
  venue: string;
  technical: string[];
};

export default function EventTechnical({
  duration,
  venue,
  technical,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-4xl font-black md:text-5xl">
          <>
            Technical <span className="text-red-600">Information</span>
          </>
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
          Below are the standard technical requirements for this event.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <div className="flex flex-col gap-2.5">
          <InfoCard
            title="Duration"
            value={duration}
            icon={<Clock3 size={14} />}
          />

          <InfoCard
            title="Venue"
            value={venue}
            icon={<MapPin size={14} />}
          />
        </div>

        <div className="lg:col-span-2">
          <div className="h-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40 hover:bg-white/10">
            <h3 className="text-center text-3xl font-black md:text-4xl">
              Technical Requirements
            </h3>

            <ul className="mt-8 space-y-5">
              {technical.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-lg leading-8 text-gray-200"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-red-500"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

function InfoCard({
  title,
  value,
  icon,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40 hover:bg-white/10">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-red-500">
          {icon}
        </div>

        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-gray-500">
          {title}
        </p>
      </div>

      <h3 className="mt-2 text-lg font-bold leading-none text-white">
        {value}
      </h3>
    </div>
  );
}