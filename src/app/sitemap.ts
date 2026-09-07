import type { MetadataRoute } from "next";
import { contentPageRoutes } from "@/features/workspace/contentRoutes";
import { siteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...contentPageRoutes.map((route) => ({
      url: new URL(route.route, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.route === "/" ? 1 : 0.8,
    })),
    {
      url: new URL("/brand", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
