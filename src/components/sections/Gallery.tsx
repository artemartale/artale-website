"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

const ALL_IMAGES = Array.from(
  { length: 45 },
  (_, index) =>
    `/images/gallery/gallery${String(index + 1).padStart(2, "0")}.jpg`
);

const PAGE_SIZE = 9;

export default function Gallery() {
  const t = useTranslations("Gallery");

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(
    ALL_IMAGES.length / PAGE_SIZE
  );

  const visibleImages = ALL_IMAGES.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const nextImages = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const previousImages = () => {
    setDirection(-1);
    setPage(
      (prev) => (prev - 1 + totalPages) % totalPages
    );
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-22"
    >
      <Container>

        <SectionTitle
          subtitle={t("subtitle")}
          title={
            <>
              {t("title")}{" "}
              <span className="text-red-600">
                {t("titleAccent")}
              </span>
            </>
          }
        />

        <div className="relative mx-auto mt-6 max-w-5xl">

          <button
            onClick={previousImages}
            className="
              group
              absolute
              left-2 md:left-[-40px]
              top-1/2
              z-20
              flex
              h-11
w-11
md:h-16
md:w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-red-500/40
              bg-black/60
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-red-500
              hover:bg-black/80
            "
          >
            <ChevronLeft
  strokeWidth={2.8}
  className="h-7 w-7 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400 md:h-[42px] md:w-[42px]"
/>
          </button>

          <button
            onClick={nextImages}
            className="
              group
              absolute
              right-2 md:right-[-40px]
              top-1/2
              z-20
              flex
              h-11
w-11
md:h-16
md:w-16
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-red-500/40
              bg-black/60
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-red-500
              hover:bg-black/80
            "
          >
            <ChevronRight
  strokeWidth={2.8}
  className="h-7 w-7 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400 md:h-[42px] md:w-[42px]"
/>
          </button>

          <div className="relative min-h-[650px]">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <motion.div
                key={page}
                custom={direction}
                style={{
                  position: "absolute",
                  width: "100%",
                }}
                initial={{
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: direction > 0 ? -300 : 300,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visibleImages.map((image) => (
                  <motion.button
                    key={image}
                    layoutId={image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900"
                  >
                    <Image
                      src={image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width:768px) 100vw,
                             (max-width:1200px) 50vw,
                             33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileHover={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute bottom-5 left-5 text-left"
                    >
                      
                    </motion.div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        <GalleryLightbox
          images={ALL_IMAGES}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

      </Container>
    </section>
  );
}