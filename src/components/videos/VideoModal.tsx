"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  videoUrl: string | null;
  onClose: () => void;
};

export default function VideoModal({
  videoUrl,
  onClose,
}: Props) {
  useEffect(() => {
    if (!videoUrl) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoUrl, onClose]);

  if (!videoUrl) return null;

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          onClick={(e) => e.stopPropagation()}
        >
         <button
  onClick={onClose}
  aria-label="Close video"
  className="
    absolute
    -right-14
    top-0
    z-50
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-white/20
    bg-black/80
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:rotate-90
    hover:border-red-500
    hover:bg-red-600
  "
>
  <X size={24} />
</button>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title="Video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function getEmbedUrl(url: string) {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  if (url.includes("/embed/")) {
    return url.includes("?")
      ? `${url}&autoplay=1`
      : `${url}?autoplay=1`;
  }

  return url;
}