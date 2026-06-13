import type { MetadataRoute } from "next";
import { site, verticals } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    "",
    "/technology",
    "/induit",
    "/archetypes",
    "/robot",
    "/culture",
    "/careers",
    "/contact",
  ];

  const staticPages = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-06-13"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const verticalPages = verticals.map((v) => ({
    url: `${base}/archetypes/${v.slug}`,
    lastModified: new Date("2026-06-13"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...verticalPages];
}
