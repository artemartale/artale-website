import { ReactNode } from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: ReactNode;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-6 max-w-3xl text-center">
      {subtitle && (
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.35em] text-gray-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}