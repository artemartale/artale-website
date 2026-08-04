import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  images: string[];
};

export default function ImageGallery({
  title,
  subtitle,
  images,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-10 pt-0 pb-8">
      {(title || subtitle) && (
        <div className="mb-16">
          {title && (
            <h2 className="text-4xl font-black md:text-5xl">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-4 text-lg text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[1/1] overflow-hidden rounded-3xl"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}