import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

const pages = [
  "/",
  "/about",
  "/about-crimean-tatars",
  "/our-activities",
  "/gallery",
  "/upcoming-events",
  "/donate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
