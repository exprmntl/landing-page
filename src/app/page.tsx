import { GalleryHome } from "@/components/marketing/GalleryHome";
import { whiteRoomFonts } from "@/styles/brand-fonts";
import "./directions/directions.css";

export default function Home() {
  return (
    <div className={`${whiteRoomFonts} brand-theme directions`} id="top">
      <a className="direction-skip" href="#main">
        Skip to content
      </a>
      <GalleryHome />
    </div>
  );
}
