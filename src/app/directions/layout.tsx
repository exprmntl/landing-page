import type { Metadata } from "next";
import { whiteRoomFonts } from "@/styles/brand-fonts";
import { DirectionNav } from "./preview-nav";
import "./directions.css";

export const metadata: Metadata = {
  title: "Homepage directions",
  description: "Three layout and content studies for Experimental Software.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function DirectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${whiteRoomFonts} brand-theme directions`} id="top">
      <a className="direction-skip" href="#main">
        Skip to content
      </a>
      <DirectionNav />
      {children}
    </div>
  );
}
