import { BRAND } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.websiteFullUrl;
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/our-services`, lastModified: new Date() },
    { url: `${base}/st2w`, lastModified: new Date() },
  ];
}
