import type { Metadata, Viewport } from "next";
import Script from "next/script";

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

        <Script id="gtm" strategy="afterInteractive">
          {GTM_SNIPPET}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script src="/static/js/bodyclass.js" strategy="beforeInteractive" />

        {children}

        <SiteFooter />

        <Script src="/static/js/pwa.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
