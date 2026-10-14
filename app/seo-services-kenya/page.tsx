import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "SEO Services Kenya | Local SEO for Small Businesses | Nexora",
description: "SEO services in Kenya for small businesses. Local SEO, on-page optimization, Google Business Profile setup and search foundations for salons and SMEs.",
keywords: "SEO services Kenya, local SEO Kisii, small business SEO Nairobi, Google Business Profile setup Kenya, SEO agency Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/seo-services-kenya",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/seo-services-kenya",
    "x-default": "https://nexoraio.vercel.app/seo-services-kenya",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/seo-services-kenya",
  title: "SEO Services Kenya | Local SEO for Small Businesses | Nexora",
  description: "SEO services for Kenyan small businesses - local SEO, on-page optimization, Google Business Profile setup and technical search foundations.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "SEO services for Kenyan small businesses - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "SEO Services Kenya | Local SEO for Small Businesses | Nexora",
  description: "SEO services in Kenya for small businesses. Local SEO, on-page optimization, Google Business Profile setup and search foundations for salons and SMEs.",
  images: ["https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png"],
}
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nexoraio.vercel.app/#business",
      "name": "Nexora Studio",
      "url": "https://nexoraio.vercel.app/",
      "telephone": "+254713324672",
      "priceRange": "KES 15,000 - KES 250,000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kisii",
        "addressRegion": "Kisii County",
        "addressCountry": "KE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -0.6773,
        "longitude": 34.7796
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Kisii"
        },
        {
          "@type": "Country",
          "name": "Kenya"
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Search Engine Optimization",
      "name": "SEO Services Kenya",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/seo-services-kenya",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services Kenya",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Business Profile Setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Foundations"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/seo-services-kenya#page",
      "url": "https://nexoraio.vercel.app/seo-services-kenya",
      "name": "SEO Services Kenya",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://nexoraio.vercel.app/",
        "name": "Nexora Studio"
      },
      "inLanguage": "en-KE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nexoraio.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO Services",
          "item": "https://nexoraio.vercel.app/seo-services-kenya"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do SEO services cost in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the scope - a one-time technical SEO setup costs less than an ongoing monthly retainer. Nexora quotes clearly after understanding your business, your current site and the competition for your target searches. Typical projects start from KES 15,000."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see SEO results in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical fixes and Google Business Profile improvements can show effects within weeks. Competitive keyword rankings typically take three to six months of consistent work. Anyone promising page one in days is not being honest with you."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer ongoing monthly SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nexora offers ongoing SEO support including content structure, performance checks, Google Business Profile maintenance and iterative improvements. We agree the scope and frequency with you before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Will you guarantee first page rankings on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No legitimate SEO provider can guarantee a specific position - Google's results depend on competition, algorithm changes and factors outside any one website. What we do guarantee is clean technical foundations, honest reporting and work that follows Google's published guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Can you do SEO for my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can audit your current site, identify what is holding it back, and implement improvements - or, if a rebuild makes more sense, build a new site with SEO foundations from day one."
          }
        }
      ]
    }
  ]
};

export default function SeoServicesKenyaPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your SEO services page and would like help getting my business found on Google."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              SEO Services Kenya
            </h3>
            <h1 className="heading">
              {"\n                SEO services that help Kenyan businesses get found.\n                "}
              <span>
                Local SEO, on-page optimization and Google Business Profile setup for salons, barbershops, spas and small businesses across Kenya - built on clean technical foundations.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#seo-services" className="btn-primary">
                See what SEO services include 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20SEO%20services%20page%20and%20would%20like%20help%20getting%20my%20business%20found%20on%20Google." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="seo-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                SEO Services Kenya
              </p>
              <h2 className="heading">
                {"\n                    What our SEO services for Kenyan businesses include.\n                "}
              </h2>
              <p className="descr">
                Most people find local businesses through Google. SEO is the work of making sure your website and your Google Business Profile are set up so search engines can understand you - and so customers nearby can find you.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Local SEO
                        </h3>
                        <p className="descr">
                          Show up when someone nearby searches for what you offer.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Google Business Profile setup
                      </li>
                      <li className="serv-list">
                        Local citation cleanup
                      </li>
                      <li className="serv-list">
                        NAP consistency checks
                      </li>
                      <li className="serv-list">
                        Review generation strategy
                      </li>
                      <li className="serv-list">
                        Location-specific page structure
                      </li>
                      <li className="serv-list">
                        Local keyword targeting
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A real chance of appearing in the local pack and "near me" searches in your area.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          On-Page Optimization
                        </h3>
                        <p className="descr">
                          Make every page clear to search engines and to people.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Title and meta optimization
                      </li>
                      <li className="serv-list">
                        Heading structure (H1-H3)
                      </li>
                      <li className="serv-list">
                        Image alt text
                      </li>
                      <li className="serv-list">
                        Internal linking
                      </li>
                      <li className="serv-list">
                        Content structure advice
                      </li>
                      <li className="serv-list">
                        Schema/structured data
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Pages that search engines can index properly and users can understand quickly.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Technical SEO Foundations
                        </h3>
                        <p className="descr">
                          The infrastructure that determines whether SEO work can succeed at all.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Sitemap and robots.txt
                      </li>
                      <li className="serv-list">
                        Page speed optimization
                      </li>
                      <li className="serv-list">
                        Mobile-first performance
                      </li>
                      <li className="serv-list">
                        Canonical and hreflang tags
                      </li>
                      <li className="serv-list">
                        Core Web Vitals improvements
                      </li>
                      <li className="serv-list">
                        Search Console setup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A technically sound website that gives every other SEO effort a fair chance.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Ongoing SEO Support
                        </h3>
                        <p className="descr">
                          SEO is not a one-time fix - it compounds with consistent work.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Monthly performance reports
                      </li>
                      <li className="serv-list">
                        Content structure reviews
                      </li>
                      <li className="serv-list">
                        Google Business Profile maintenance
                      </li>
                      <li className="serv-list">
                        New page recommendations
                      </li>
                      <li className="serv-list">
                        Competitor observation
                      </li>
                      <li className="serv-list">
                        Iterative improvements
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Steady improvement in visibility instead of a one-off spike that fades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="seo-who">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Who This Is For
              </p>
              <h2 className="heading">
                {"\n                    SEO services shaped around how Kenyan customers actually search.\n                "}
              </h2>
              <p className="descr">
                A salon in Kisii, a barbershop in Nairobi and a spa in Mombasa face different competition, but the same principle applies - you need to appear when the right person searches at the right time.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Salons and Spas
                        </h3>
                        <p className="descr">
                          Capture "beauty salon near me" and treatment-specific searches.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service-specific landing pages
                      </li>
                      <li className="serv-list">
                        Google Business Profile optimization
                      </li>
                      <li className="serv-list">
                        Review generation
                      </li>
                      <li className="serv-list">
                        Photo and gallery alt text
                      </li>
                      <li className="serv-list">
                        Local citation setup
                      </li>
                      <li className="serv-list">
                        Price page structure
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Your salon appears when someone in your area searches for the services you actually offer.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Barbershops
                        </h3>
                        <p className="descr">
                          Compete for the high-intent "barber near me" search.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Local pack optimization
                      </li>
                      <li className="serv-list">
                        Cut-specific service pages
                      </li>
                      <li className="serv-list">
                        Review strategy
                      </li>
                      <li className="serv-list">
                        Consistent NAP across directories
                      </li>
                      <li className="serv-list">
                        Mobile speed optimization
                      </li>
                      <li className="serv-list">
                        Click-to-call tracking setup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A real shot at the top of local search when someone nearby needs a cut.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          General Small Businesses
                        </h3>
                        <p className="descr">
                          Any Kenyan SME that relies on being found online.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Website SEO audit
                      </li>
                      <li className="serv-list">
                        Keyword research for your industry
                      </li>
                      <li className="serv-list">
                        On-page optimization
                      </li>
                      <li className="serv-list">
                        Google Business Profile setup
                      </li>
                      <li className="serv-list">
                        Search Console configuration
                      </li>
                      <li className="serv-list">
                        Monthly reporting
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Solid technical foundations and a clear plan for ongoing visibility.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Businesses with Existing Websites
                        </h3>
                        <p className="descr">
                          You have a site - now make sure people can actually find it.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Full site SEO audit
                      </li>
                      <li className="serv-list">
                        Technical issue identification
                      </li>
                      <li className="serv-list">
                        Content gap analysis
                      </li>
                      <li className="serv-list">
                        Competitor comparison
                      </li>
                      <li className="serv-list">
                        Prioritized improvement plan
                      </li>
                      <li className="serv-list">
                        Implementation support
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear picture of what is holding your current site back - and a plan to fix it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value faq" id="faq">
            <div className="prob-cont value-cont faq-cont">
              <p className="eyebrow">
                Frequently Asked Questions
              </p>
              <h2 className="heading">
                {"\n                    Questions about SEO services in Kenya?\n                "}
              </h2>
              <p className="descr">
                A few answers for Kenyan businesses considering SEO support.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much do SEO services cost in Kenya?\n                            "}
                    </span>
                    {"\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                It depends on the scope - a one-time technical SEO setup costs less than an ongoing monthly retainer. Nexora quotes clearly after understanding your business, your current site and the competition for your target searches. Typical projects start from KES 15,000.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How long does it take to see SEO results in Kenya?\n                            "}
                    </span>
                    {"\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                Technical fixes and Google Business Profile improvements can show effects within weeks. Competitive keyword rankings typically take three to six months of consistent work. Anyone promising page one in days is not being honest with you.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you offer ongoing monthly SEO?\n                            "}
                    </span>
                    {"\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                Yes. Nexora offers ongoing SEO support including content structure, performance checks, Google Business Profile maintenance and iterative improvements. We agree the scope and frequency with you before any work begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will you guarantee first page rankings on Google?\n                            "}
                    </span>
                    {"\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                No legitimate SEO provider can guarantee a specific position - Google's results depend on competition, algorithm changes and factors outside any one website. What we do guarantee is clean technical foundations, honest reporting and work that follows Google's published guidelines.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you do SEO for my existing website?\n                            "}
                    </span>
                    {"\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                Yes. We can audit your current site, identify what is holding it back, and implement improvements - or, if a rebuild makes more sense, build a new site with SEO foundations from day one.\n\n                            "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value final-cta">
            <div className="prob-cont value-cont final-cta-cont">
              <div className="top-header">
                <p className="eyebrow">
                  Have A Project In Mind?
                </p>
              </div>
              <h2 className="heading">
                {"\n                    Let's build something that moves your business forward.\n                "}
              </h2>
              <p className="descr">
                Tell us what you're trying to achieve, where you're stuck, or what you want to build. We'll help you identify the right digital direction and the next step.
              </p>
              <div className="hero-cta final">
                {"\n                    "}
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary btn-secondary" style={{ "border": "1.2px solid rgba(254, 254, 254, 0.218)" }}>
                  Start a Conversation 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n\n                    "}
                <a href="/work" className="btn-primary work-primary">
                  View our work 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n                "}
              </div>
            </div>
          </section>
          {"\n        "}
          <button id="installAppBtnFloating" className="floating-install-btn" type="button" aria-label="Install App" hidden>
            {"\n            "}
            <i className="fas fa-download" aria-hidden="true"></i>
            {"\n            "}
            <span>
              Install App
            </span>
            {"\n        "}
          </button>
          {"\n\n\n    "}
        </main>
      <JsonLd data={structuredData} />

      <Script src="/static/js/app.js" strategy="afterInteractive" />
    </>
  );
}
