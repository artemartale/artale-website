import ImageGallery from "@/components/shared/ImageGallery";

type Props = {
  images: string[];
};

export default function EventGallery({ images }: Props) {
  return (
    <ImageGallery
      title=""
      subtitle=""
      images={images}
    />
  );
}