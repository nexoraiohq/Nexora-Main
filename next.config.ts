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

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // All imagery is already pre-optimised (webp + png fallbacks) and served
    // from /public, so the Next.js image optimiser stays out of the way.
    unoptimized: true,
  },
  async redirects() {
    return htmlRedirects;
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
