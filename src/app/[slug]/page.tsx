import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkspaceShell } from "@/components/ide/WorkspaceShell";
import { contentPageRoutes, contentRouteForSlug } from "@/features/workspace/contentRoutes";
import { siteDescription, siteName, socialImage } from "../site";

interface ContentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return contentPageRoutes
    .filter((route) => route.slug)
    .map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = contentRouteForSlug(slug);

  if (!route) {
    return {};
  }

  return {
    title: route.title,
    alternates: {
      canonical: route.route,
    },
    openGraph: {
      title: route.title,
      description: siteDescription,
      url: route.route,
      siteName,
      images: [socialImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: siteDescription,
      images: [socialImage.url],
    },
  };
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug } = await params;
  const route = contentRouteForSlug(slug);

  if (!route) {
    notFound();
  }

  return <WorkspaceShell initialFileId={route.fileId} />;
}
