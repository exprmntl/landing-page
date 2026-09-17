import { brandCopy } from "@/lib/brand-copy";

export const siteName = "Experimental Software";
export const siteTitle = `${siteName} — A Software Lab`;
export const siteDescription = brandCopy.description;
export const siteUrl = new URL("https://experimental.software");

export const socialImage = {
  url: "/brand/downloads/social/experimental-software.png",
  width: 1200,
  height: 630,
  alt: siteName,
} as const;
