"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/videos/VideoModal";

export default function Videos() {
  const t = useTranslations("Videos");

  const videos = [
    {
      title: t("showreel"),
      videoId: "psVMsjxxb5M",
    },
    {
      title: t("onceAlways"),
      videoId: "NMqQaXeEKrg",
    },
    {
      title: t("welcoming"),
      videoId: "DxVRMmTKUTo",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="bg-black py-22 text-white">
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
          description={t("description")}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              onClick={() => setSelectedVideo(video.videoId)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-red-500/40"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                   sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button
                    size="icon"
                    className="pointer-events-none rounded-full"
                  >
                    <Play className="h-6 w-6 fill-current" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mt-3 text-xl font-semibold">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <VideoModal
  videoUrl={
    selectedVideo
      ? `https://youtu.be/${selectedVideo}`
      : null
  }
  onClose={() => setSelectedVideo(null)}
/>
    </section>
  );
}