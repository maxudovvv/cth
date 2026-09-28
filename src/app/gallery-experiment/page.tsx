import type { Metadata } from "next";
import { InfiniteGallery } from "@/components/gallery/InfiniteGallery";

export const metadata: Metadata = {
  title: "Gallery experiment",
  robots: { index: false, follow: false },
};

export default function GalleryExperimentPage() {
  return <InfiniteGallery />;
}
