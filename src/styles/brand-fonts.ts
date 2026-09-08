import localFont from "next/font/local";

const generalSans = localFont({
  src: [
    {
      path: "../../generated/brand-fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../generated/brand-fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-white-room-sans",
  display: "swap",
  adjustFontFallback: false,
});

const meslo = localFont({
  src: "../../generated/brand-fonts/MesloLGS-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-white-room-mono",
  display: "swap",
  adjustFontFallback: false,
});

// Apply to both the guide root and portals mounted outside it.
export const whiteRoomFonts = `${generalSans.variable} ${meslo.variable}`;
