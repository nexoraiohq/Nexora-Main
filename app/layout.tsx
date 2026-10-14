import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/SiteFooter";

import "@/static/css/fontawesome.min.css";
import "@/static/css/style.css";
import "@/static/css/responsive/style.css";

const GTM_ID = "GTM-TT9M5PKZ";

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

/**
 * Per-route <body> classes are applied synchronously while the document is
 * still parsing, so the reveal animations start with the very first paint -
 * exactly like the original static site.
 */
const BODY_CLASSES: Record<string, string> = {
  "/": "reveal-on-load",
  "/about": "reveal-on-load",
  "/work": "reveal-on-load",
  "/services": "reveal-on-load dark-hero-page",
  "/contact": "reveal-on-load dark-hero-page",
  "/web-design-kisii": "reveal-on-load dark-hero-page",
  "/web-development-kisii": "reveal-on-load dark-hero-page",
  "/web-design-kenya": "reveal-on-load dark-hero-page",
  "/salon-website-design-kenya": "reveal-on-load dark-hero-page",
  "/barbershop-website-kenya": "reveal-on-load dark-hero-page",
  "/spa-website-design-kenya": "reveal-on-load dark-hero-page",
  "/beauty-wellness-web-design": "reveal-on-load dark-hero-page",
  "/booking-websites": "reveal-on-load dark-hero-page",
  "/seo-services-kenya": "reveal-on-load dark-hero-page",
};

const BODY_CLASS_SNIPPET = `(function(){var m=${JSON.stringify(BODY_CLASSES)};var p=location.pathname.replace(/\\/$/,'')||'/';document.body.className=m[p]||'';})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoraio.vercel.app"),
  applicationName: "Nexora Studio",
  authors: [{ name: "Nexora Studio" }],
  publisher: "Nexora Studio",
  category: "technology",
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      {
        url: "/assets/favicon/nexora-favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/assets/favicon/nexora-favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: ["/assets/favicon/nexora-favicon/favicon.ico"],
    apple: ["/assets/favicon/nexora-favicon/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Nexora",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Kisii, Kenya",
    "geo.position": "-0.6773;34.7796",
    ICBM: "-0.6773, 34.7796",
    coverage: "Kenya",
    distribution: "global",
    target: "Kenya",
    "google-site-verification":
      "uiMzSKUq7FWRWaEituM9isg5W3Hj8wfIv45UJ52i-fg",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <link
          rel="preload"
          href="/assets/fonts/SFPRODISPLAYREGULAR.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/SFPRODISPLAYMEDIUM.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/SFPRODISPLAYBOLD.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/nevera/Nevera-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <script dangerouslySetInnerHTML={{ __html: GTM_SNIPPET }} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: BODY_CLASS_SNIPPET }} />

        {children}

        <SiteFooter />

        <script defer src="/static/js/pwa.js" />
      </body>
    </html>
  );
}
