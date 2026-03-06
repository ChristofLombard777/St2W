import type { Metadata } from "next";
import { BRAND } from "./constants";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = opts.path ? `${BRAND.websiteFullUrl}${opts.path}` : BRAND.websiteFullUrl;
  return {
    title: `${opts.title} | ${BRAND.name}`,
    description: opts.description,
    metadataBase: new URL(BRAND.websiteFullUrl),
    openGraph: {
      title: `${opts.title} | ${BRAND.name}`,
      description: opts.description,
      url,
      siteName: BRAND.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${BRAND.name}`,
      description: opts.description,
    },
  };
}
