import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Primitives";
import { ProvisionalNote } from "@/components/ui/ProvisionalNotice";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { culturalMedia } from "@/content/data/media";

export const metadata: Metadata = {
  title: "Classic Gallery",
  description:
    "A gallery of Crimean Tatar community life and cultural events across Canada.",
  robots: { index: false, follow: false },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from our community"
        intro="Photographs from Crimean Tatar community life and cultural events across Canada."
        bgImage={culturalMedia.galleryEvent}
        objectPosition="center 45%"
      />

      <Section tone="ivory" aria-label="Community gallery">
        <GalleryGrid />
        <ProvisionalNote>
          Community photographs shown provisionally — pending permission, captions, dates, and
          consent for people shown. No social-media content is fetched.
        </ProvisionalNote>
      </Section>
    </>
  );
}
