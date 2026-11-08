import type { NextConfig } from "next";

/**
 * Legacy `.html` URLs are 301-redirected to their new clean equivalents so
 * every existing backlink, citation and Google ranking keeps its full weight.
 */
const htmlRedirects: { source: string; destination: string; permanent: boolean }[] = [
  { source: "/index.html", destination: "/" },
  { source: "/about.html", destination: "/about" },
  { source: "/services.html", destination: "/services" },
  { source: "/work.html", destination: "/work" },
  { source: "/contact.html", destination: "/contact" },
  { source: "/web-design-kisii.html", destination: "/web-design-kisii" },
  { source: "/web-development-kisii.html", destination: "/web-development-kisii" },
  { source: "/web-design-kenya.html", destination: "/web-design-kenya" },
  { source: "/salon-website-design-kenya.html", destination: "/salon-website-design-kenya" },
  { source: "/barbershop-website-kenya.html", destination: "/barbershop-website-kenya" },
  { source: "/spa-website-design-kenya.html", destination: "/spa-website-design-kenya" },
  { source: "/beauty-wellness-web-design.html", destination: "/beauty-wellness-web-design" },
  { source: "/booking-websites.html", destination: "/booking-websites" },
  { source: "/seo-services-kenya.html", destination: "/seo-services-kenya" },
].map(({ source, destination }) => ({ source, destination, permanent: true }));

/**
 * ── Marketing domain ──
 * The marketing landing page has ONE public URL:
 *   https://marketing.nexoraio.vercel.app/
 *
 * - The subdomain's root ("/") is rewritten to the internal landing route.
 * - On the marketing subdomain the internal path 308s back to the clean "/".
 * - On the main production domain the internal path 301s straight to
 *   https://marketing.nexoraio.vercel.app/ so /marketing is never a public URL.
 *   (Localhost / preview hosts keep serving it so it can be developed.)
 */
const MARKETING_HOST = "marketing.nexoraio.vercel.app";
const MARKETING_HOST_RE = "^marketing\\.nexoraio\\.vercel\\.app$";
const MAIN_HOST_RE = "^nexoraio\\.vercel\\.app$";

const marketingRedirects = [
  // marketing.nexoraio.vercel.app/marketing → marketing.nexoraio.vercel.app/
  {
    source: "/marketing",
    destination: "/",
    permanent: true,
    has: [{ type: "host" as const, value: MARKETING_HOST_RE }],
  },
  // nexoraio.vercel.app/marketing → https://marketing.nexoraio.vercel.app/
  {
    source: "/marketing",
    destination: `https://${MARKETING_HOST}/`,
    permanent: true,
    has: [{ type: "host" as const, value: MAIN_HOST_RE }],
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    // Requested by the Next.js security upgrade agent (16.4.0 -> 16.4.3).
    agentUpgrade: "security",
  },
  images: {
    // All imagery is already pre-optimised (webp + png fallbacks) and served
    // from /public, so the Next.js image optimiser stays out of the way.
    unoptimized: true,
  },
  async redirects() {
    return [...marketingRedirects, ...htmlRedirects];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/marketing",
          has: [{ type: "host", value: MARKETING_HOST_RE }],
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/manifest.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
