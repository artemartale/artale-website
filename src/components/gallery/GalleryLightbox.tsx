"use client";


import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

type GalleryLightboxProps = {
  images: string[];
  selectedImage: string | null;
  setSelectedImage: Dispatch<
  SetStateAction<string | null>
>;
};

const swipeConfidenceThreshold = 10000;

const swipePower = (
  offset: number,
  velocity: number
) => {
  return Math.abs(offset) * velocity;
};

export default function GalleryLightbox({
  images,
  selectedImage,
  setSelectedImage,
}: GalleryLightboxProps) {
  const showNextImage = useCallback(() => {
    if (!selectedImage) return;

      const current = images.indexOf(selectedImage);
      if (current === -1) return;

    setSelectedImage(
      images[(current + 1) % images.length]
    );
  }, [
    images,
    selectedImage,
    setSelectedImage,
  ]);

  const showPreviousImage = useCallback(() => {
    if (!selectedImage) return;

      const current = images.indexOf(selectedImage);
      if (current === -1) return;

    setSelectedImage(
      images[
        (current - 1 + images.length) %
          images.length
      ]
    );
  }, [
    images,
    selectedImage,
    setSelectedImage,
  ]);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [setSelectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeys = (
      event: KeyboardEvent
    ) => {
      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeys
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeys
      );
  }, [
    selectedImage,
    showNextImage,
    showPreviousImage,
  ]);

  return (
    <AnimatePresence>

      {selectedImage && (

        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            onClick={() =>
              setSelectedImage(null)
            }
            className="
                        group
                        absolute
                        right-8
                        top-8
                        z-[120]
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-red-500/40
                        bg-black/55
                        backdrop-blur-md
                        shadow-[0_0_20px_rgba(239,68,68,0.10)]
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-red-500
                        hover:bg-black/75
                        hover:shadow-[0_0_30px_rgba(239,68,68,0.30)]
                        "
          >
            <X
                size={34}
                strokeWidth={2.5}
                className="
                  pointer-events-none
                  text-red-500
                  transition-all
                  duration-300
                  group-hover:rotate-90
                  group-hover:text-red-400
                "
              />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPreviousImage();
            }}
            className="
                        group
                        absolute
                        left-8
                        top-1/2
                        z-[120]
                        flex
                        h-20
                        w-20
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-red-500/40
                        bg-black/55
                        backdrop-blur-md
                        shadow-[0_0_25px_rgba(239,68,68,0.12)]
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-red-500
                        hover:bg-black/75
                        hover:shadow-[0_0_35px_rgba(239,68,68,0.30)]
                        "
          >
           <ChevronLeft
                        size={58}
                        strokeWidth={2.5}
                        className="
                          pointer-events-none
                          text-red-500
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-red-400
                        "
                      />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            className="
                        group
                        absolute
                        right-8
                        top-1/2
                        z-[120]
                        flex
                        h-20
                        w-20
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-red-500/40
                        bg-black/55
                        backdrop-blur-md
                        shadow-[0_0_25px_rgba(239,68,68,0.12)]
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-red-500
                        hover:bg-black/75
                        hover:shadow-[0_0_35px_rgba(239,68,68,0.30)]
                        "
          >
            <ChevronRight
                          size={58}
                          strokeWidth={2.5}
                          className="
                            pointer-events-none
                            text-red-500
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:text-red-400
                          "
                        />
          </button>

         <AnimatePresence
            initial={false}
            mode="wait"
          >

            <motion.div
              key={selectedImage}
              initial={{
                opacity: 0,
                scale: 0.96,
               
              }}
              animate={{
                opacity: 1,
                scale: 1,
                
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                
              }}
              transition={{
                duration: 0.3,
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
                 dragElastic={0.25}
                dragMomentum={false}
                 onDragEnd={(
                _,
                info: PanInfo
              ) => {
                const swipe = swipePower(
                  info.offset.x,
                  info.velocity.x
                );

                if (
                  swipe <
                  -swipeConfidenceThreshold
                ) {
                  showNextImage();
                }

                if (
                  swipe >
                  swipeConfidenceThreshold
                ) {
                  showPreviousImage();
                }
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="relative h-[90vh] w-[90vw]"
                      >
                                        <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                priority
                sizes="90vw"
                className="rounded-2xl object-contain"
              />

            </motion.div>

          </AnimatePresence>

          <div
  className="
    absolute
    bottom-10
    left-1/2
    -translate-x-1/2
    rounded-full
    border
    border-red-700
    bg-red-500
    px-5
    py-2
    text-sm
    font-bold
    tracking-[0.2em]
    text-black
    shadow-[0_0_20px_rgba(239,68,68,0.35)]
  "
>
  {images.indexOf(selectedImage) + 1}
  {" / "}
  {images.length}
</div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
          