import type { Metadata } from "next";
import { GalleryHome } from "@/components/marketing/GalleryHome";

export const metadata: Metadata = { title: "03 / Gallery — Updated homepage" };

export default function GalleryDirection() {
  return <GalleryHome home="/directions/gallery" />;
}
