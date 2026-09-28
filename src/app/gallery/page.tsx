import type { Metadata } from "next";
import { InfiniteGallery } from "@/components/gallery/InfiniteGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of Crimean Tatar community life and cultural events across Canada.",
};

export default function GalleryPage() {
  return <InfiniteGallery />;
}
