import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Web Design Kenya | Websites for Kenyan Businesses",
description: "Web design services across Kenya. Fast, mobile-first websites for businesses in Kisii, Nairobi, Kisumu, Eldoret, Nakuru and Mombasa, with SEO foundations built in.",
keywords: "web design Kenya, website design Kenya, website developer Kenya, web designer Nairobi, small business website Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/web-design-kenya",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/web-design-kenya",
    "x-default": "https://nexoraio.vercel.app/web-design-kenya",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/web-design-kenya",
  title: "Web Design Kenya | Websites for Kenyan Businesses",
  description: "Fast, mobile-first websites for businesses across Kenya, with SEO foundations and WhatsApp enquiries.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Web design services for businesses across Kenya - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Web Design Kenya | Websites for Kenyan Businesses",
  description: "Web design services across Kenya. Fast, mobile-first websites for businesses in Kisii, Nairobi, Kisumu, Eldoret, Nakuru and Mombasa, with SEO foundations built in.",
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
      "serviceType": "Web Design",
      "name": "Web Design Services in Kenya",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/web-design-kenya",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design Services in Kenya",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Foundations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Maintenance"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/web-design-kenya#page",
      "url": "https://nexoraio.vercel.app/web-design-kenya",
      "name": "Web Design Services in Kenya",
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
          "name": "Web Design Kenya",
          "item": "https://nexoraio.vercel.app/web-design-kenya"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you work with businesses outside Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We are based in Kisii and work with businesses across Kenya. Most of the process runs remotely over WhatsApp, email and calls, so location is rarely a barrier."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Projects are typically scoped between KES 15,000 and KES 250,000, depending on the number of pages, the features you need and the content involved. You get a clear price before any work starts."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build online stores or payment systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nexora Studio focuses on the front end of the web - design, layout, speed and search foundations. Online stores, payment systems and custom web applications are outside our current scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also handle local SEO and Google Business Profiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build websites with clean structure, clear headings and a sitemap, and we offer Google Business Profile setup as part of our services. Ongoing local SEO support is also available - see our SEO services page for details."
          }
        },
        {
          "@type": "Question",
          "name": "What do you need from me to get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clear idea of what your business does, the services you want to feature, any photos or logo you already have, and a way for customers to reach you. We can help with the rest of the structure and wording."
          }
        }
      ]
    }
  ]
};

export default function WebDesignKenyaPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your web design page for Kenya and would like to discuss a website project."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Web Design in Kenya
            </h3>
            <h1 className="heading">
              {"\n                Web design for businesses across Kenya.\n                "}
              <span>
                Nexora Studio builds fast, mobile-first websites for businesses in Kisii and nationwide - with the search foundations, speed and clarity that turn visitors into customers.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#kenya-services" className="btn-primary">
                Explore web design services 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20web%20design%20page%20for%20Kenya%20and%20would%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main id="main-content">
          <Breadcrumbs items={[{ name: "Web Design Kenya" }]} />
          <section className="problem capabilities" id="kenya-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Web Design in Kenya
              </p>
              <h2 className="heading">
                {"\n                    What we deliver to businesses in Nairobi, Kisumu, Eldoret, Nakuru, Mombasa and across Kenya.\n                "}
              </h2>
              <p className="descr">
                Whether you are in Kisii, Nairobi, Kisumu, Eldoret, Nakuru, Mombasa or anywhere else in the country, you get the same standard of work: a fast, mobile-first website with the foundations search engines expect.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Business Websites
                        </h3>
                        <p className="descr">
                          A professional home for your business online.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Company websites
                      </li>
                      <li className="serv-list">
                        Service and product pages
                      </li>
                      <li className="serv-list">
                        Landing pages
                      </li>
                      <li className="serv-list">
                        Mobile-first layouts
                      </li>
                      <li className="serv-list">
                        Fast loading pages
                      </li>
                      <li className="serv-list">
                        Clear calls to action
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A credible presence that works for you around the clock.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Search Foundations
                        </h3>
                        <p className="descr">
                          The technical groundwork that helps people find you.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        SEO-friendly website structure
                      </li>
                      <li className="serv-list">
                        On-page SEO
                      </li>
                      <li className="serv-list">
                        Descriptive page titles
                      </li>
                      <li className="serv-list">
                        Heading hierarchy
                      </li>
                      <li className="serv-list">
                        Image alt text
                      </li>
                      <li className="serv-list">
                        Sitemap and robots setup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website search engines can read, index and understand.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Enquiry and Booking Flows
                        </h3>
                        <p className="descr">
                          Turn attention into real conversations.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        WhatsApp enquiry buttons
                      </li>
                      <li className="serv-list">
                        Contact and enquiry forms
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Click-to-call links
                      </li>
                      <li className="serv-list">
                        Service menus
                      </li>
                      <li className="serv-list">
                        Conversion-focused experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear route from a first visit to a real enquiry.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Care After Launch
                        </h3>
                        <p className="descr">
                          Keep the website working as your business changes.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Website maintenance
                      </li>
                      <li className="serv-list">
                        Content updates
                      </li>
                      <li className="serv-list">
                        Page additions
                      </li>
                      <li className="serv-list">
                        Performance optimization
                      </li>
                      <li className="serv-list">
                        Broken link fixes
                      </li>
                      <li className="serv-list">
                        Structure reviews
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that stays accurate and fast over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="kenya-approach">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Working Across Kenya
              </p>
              <h2 className="heading">
                {"\n                    A remote-friendly process built for clarity.\n                "}
              </h2>
              <p className="descr">
                You do not need to be in the same town to get a well-built website. The process is designed so decisions are easy to make and progress is always visible.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Kisii-Based Studio
                        </h3>
                        <p className="descr">
                          Our work starts in Kisii, where the studio is based.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        In-person meetings available
                      </li>
                      <li className="serv-list">
                        Local business knowledge
                      </li>
                      <li className="serv-list">
                        Understanding of the Kisii market
                      </li>
                      <li className="serv-list">
                        Kenyan customer behaviour
                      </li>
                      <li className="serv-list">
                        Local payment realities
                      </li>
                      <li className="serv-list">
                        Kisii County roots
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A design partner who understands the market you are selling into.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Nationwide Delivery
                        </h3>
                        <p className="descr">
                          We work with businesses across the country.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Remote onboarding
                      </li>
                      <li className="serv-list">
                        WhatsApp and email communication
                      </li>
                      <li className="serv-list">
                        Video walkthroughs
                      </li>
                      <li className="serv-list">
                        Feedback rounds
                      </li>
                      <li className="serv-list">
                        Written scopes
                      </li>
                      <li className="serv-list">
                        Nationwide coverage
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      The same quality of work, wherever your business is located.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          A Clear Process
                        </h3>
                        <p className="descr">
                          Know exactly what is happening at every stage.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Written scope before work begins
                      </li>
                      <li className="serv-list">
                        Agreed page structure
                      </li>
                      <li className="serv-list">
                        Scheduled reviews
                      </li>
                      <li className="serv-list">
                        Transparent pricing
                      </li>
                      <li className="serv-list">
                        Defined revision rounds
                      </li>
                      <li className="serv-list">
                        Documented handover
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      No uncertainty about what is being built or what it will cost.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Built for Kenyan Visitors
                        </h3>
                        <p className="descr">
                          Websites shaped for how people actually browse here.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Mobile-first design
                      </li>
                      <li className="serv-list">
                        Fast loading pages
                      </li>
                      <li className="serv-list">
                        Lightweight assets
                      </li>
                      <li className="serv-list">
                        WhatsApp-first contact
                      </li>
                      <li className="serv-list">
                        Readable service pages
                      </li>
                      <li className="serv-list">
                        Accessible markup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A site that works well on the devices and connections your customers use.
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
                {"\n                    Questions about web design in Kenya?\n                "}
              </h2>
              <p className="descr">
                A few answers for Kenyan businesses considering a new website.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you work with businesses outside Kisii?\n                            "}
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
                      {"\n\n                                Yes. We are based in Kisii and work with businesses across Kenya. Most of the process runs remotely over WhatsApp, email and calls, so location is rarely a barrier.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a website cost in Kenya?\n                            "}
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
                      {"\n\n                                Projects are typically scoped between KES 15,000 and KES 250,000, depending on the number of pages, the features you need and the content involved. You get a clear price before any work starts.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build online stores or payment systems?\n                            "}
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
                      {"\n\n                                No. Nexora Studio focuses on the front end of the web - design, layout, speed and search foundations. Online stores, payment systems and custom web applications are outside our current scope.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you also handle local SEO and Google Business Profiles?\n                            "}
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
                      {"\n\n                                We build websites with clean structure, clear headings and a sitemap, and we offer Google Business Profile setup as part of our services. Ongoing local SEO support is also available - see our "}
                      <a href="/seo-services-kenya">
                        SEO services page
                      </a>
                      {" for details.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What do you need from me to get started?\n                            "}
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
                      {"\n\n                                A clear idea of what your business does, the services you want to feature, any photos or logo you already have, and a way for customers to reach you. We can help with the rest of the structure and wording.\n\n                            "}
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
