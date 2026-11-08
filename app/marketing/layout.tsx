import type { Metadata } from "next";
import { headers } from "next/headers";

import "./marketing.css";

/**
 * The marketing landing page has ONE public URL:
 *   https://marketing.nexoraio.vercel.app/
 *
 * It is served from the /marketing route file, and next.config.ts rewrites
 * the subdomain's root ("/") to it. When someone opens the raw /marketing
 * path on the main site it is noindexed so only the subdomain is indexed.
 */
const MARKETING_HOST = "marketing.nexoraio.vercel.app";
const MARKETING_URL = `https://${MARKETING_HOST}/`;

const TITLE = "Nexora Studio | Websites That Win Customers in Kenya";
const DESCRIPTION =
  "Nexora Studio designs and builds fast, mobile-first websites for salons, barbershops, spas and SMEs across Kenya — with WhatsApp booking, SEO foundations and ongoing support.";

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") ?? "";
  const onMarketingHost = host === MARKETING_HOST || host.startsWith("marketing.");
  const ogImage = `https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png`;

  return {
    title: TITLE,
    description: DESCRIPTION,
    keywords:
      "web design Kenya, website design Kenya, web design Kisii, salon website Kenya, barbershop website, booking website, small business website Kenya",
    robots: onMarketingHost
      ? { index: true, follow: true }
      : { index: false, follow: true },
    alternates: { canonical: MARKETING_URL },
    openGraph: {
      type: "website",
      siteName: "Nexora Studio",
      locale: "en_KE",
      url: MARKETING_URL,
      title: TITLE,
      description: DESCRIPTION,
      images: [{ url: ogImage, width: 512, height: 512, alt: "Nexora Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [ogImage],
    },
  };
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
