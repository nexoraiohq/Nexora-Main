import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Web Design Kisii | Websites for Kisii Businesses | Nexora",
description: "Professional web design in Kisii, Kenya. Mobile-first websites for salons, barbershops, spas and small businesses, with WhatsApp enquiries and SEO.",
keywords: "web design Kisii, website designer Kisii, Kisii web design company, business website Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/web-design-kisii",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/web-design-kisii",
    "x-default": "https://nexoraio.vercel.app/web-design-kisii",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/web-design-kisii",
  title: "Web Design Kisii | Websites for Kisii Businesses | Nexora",
  description: "Professional web design in Kisii, Kenya. Mobile-first websites for salons, barbershops, spas and small businesses.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Web design services for businesses in Kisii, Kenya - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Web Design Kisii | Websites for Kisii Businesses | Nexora",
  description: "Professional web design in Kisii, Kenya. Mobile-first websites for salons, barbershops, spas and small businesses, with WhatsApp enquiries and SEO.",
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
      "name": "Web Design in Kisii, Kenya",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/web-design-kisii",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design in Kisii, Kenya",
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
              "name": "Service Pages"
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
      "@id": "https://nexoraio.vercel.app/web-design-kisii#page",
      "url": "https://nexoraio.vercel.app/web-design-kisii",
      "name": "Web Design in Kisii, Kenya",
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
          "name": "Web Design Kisii",
          "item": "https://nexoraio.vercel.app/web-design-kisii"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a website cost in Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website projects are typically scoped between KES 15,000 and KES 250,000, depending on the number of pages, the features you need and how much content we prepare together. The full price is confirmed before work begins."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a website take to build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the size of the site and how quickly content, feedback and approvals come through. A focused small business website moves faster than a larger site with many pages."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build online stores or take payments online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nexora Studio focuses on the front end of the web - design, layout, speed and search foundations. We do not currently build online stores, payment systems or custom web applications."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website work on a phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website we build is responsive and tested across screen sizes, because most visitors will arrive on a mobile phone first."
          }
        },
        {
          "@type": "Question",
          "name": "Can you improve a website I already have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you already have a site, we can review it and improve its structure, speed, content and search foundations, or rebuild it if that is the better option."
          }
        }
      ]
    }
  ]
};

export default function WebDesignKisiiPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I found you through your web design page for Kisii and would like to discuss a website for my business."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Web Design in Kisii
            </h3>
            <h1 className="heading">
              {"\n                Web design in Kisii that makes local businesses easier to find.\n                "}
              <span>
                Nexora Studio designs and builds mobile-first websites for salons, barbershops, spas and small businesses across Kisii - built to load fast, read clearly and turn visitors into enquiries.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#kisii-services" className="btn-primary">
                Explore web design services 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20found%20you%20through%20your%20web%20design%20page%20for%20Kisii%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="kisii-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Web Design in Kisii
              </p>
              <h2 className="heading">
                {"\n                    What your business gets from a well-built website.\n                "}
              </h2>
              <p className="descr">
                From the first impression to the final enquiry, every part of the site is designed to help a customer in Kisii understand what you offer and take the next step.
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
                          Build a credible online presence that customers can find and trust.
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
                        About and contact pages
                      </li>
                      <li className="serv-list">
                        Landing pages
                      </li>
                      <li className="serv-list">
                        Mobile-first layouts
                      </li>
                      <li className="serv-list">
                        Clear calls to action
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A professional website that gives customers the information they need to choose you.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Local Visibility
                        </h3>
                        <p className="descr">
                          Make it easier for search engines and customers in Kisii to understand your site.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Search-friendly page structure
                      </li>
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
                        Meaningful image alt text
                      </li>
                      <li className="serv-list">
                        Sitemap and robots setup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that is easier to discover when someone searches for what you offer.
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
                          Turn a visitor into a message, a call or a booking request.
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
                        Click-to-call links
                      </li>
                      <li className="serv-list">
                        Service menus
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Conversion-focused experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear path from a visitor's first look to a real conversation with your business.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Care and Improvements
                        </h3>
                        <p className="descr">
                          Keep the website current as your business changes.
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
                      A website that stays accurate, fast and useful after launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="kisii-approach">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                How We Work
              </p>
              <h2 className="heading">
                {"\n                    A clear process, from first conversation to launch.\n                "}
              </h2>
              <p className="descr">
                We keep the work straightforward: understand the business, agree on the structure, design the pages, build them and hand over a site you can actually use.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          1. Discover
                        </h3>
                        <p className="descr">
                          Understand what the business does and who it needs to reach.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Business goals
                      </li>
                      <li className="serv-list">
                        Target customers
                      </li>
                      <li className="serv-list">
                        Services and pricing
                      </li>
                      <li className="serv-list">
                        Existing online presence
                      </li>
                      <li className="serv-list">
                        Content you already have
                      </li>
                      <li className="serv-list">
                        Sites you like
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A shared picture of what the website needs to achieve.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          2. Structure
                        </h3>
                        <p className="descr">
                          Agree on the pages, sections and message before design starts.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Page hierarchy
                      </li>
                      <li className="serv-list">
                        Navigation
                      </li>
                      <li className="serv-list">
                        Section order
                      </li>
                      <li className="serv-list">
                        Key messages
                      </li>
                      <li className="serv-list">
                        Calls to action
                      </li>
                      <li className="serv-list">
                        Content plan
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear blueprint, so nothing is decided halfway through the build.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          3. Design and Build
                        </h3>
                        <p className="descr">
                          Create the design and build it into a fast, responsive website.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Responsive layout
                      </li>
                      <li className="serv-list">
                        Typography and colour
                      </li>
                      <li className="serv-list">
                        Mobile-first implementation
                      </li>
                      <li className="serv-list">
                        Cross-browser compatibility
                      </li>
                      <li className="serv-list">
                        Performance optimization
                      </li>
                      <li className="serv-list">
                        Accessibility basics
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A finished website that looks right and works on every screen.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          4. Launch and Support
                        </h3>
                        <p className="descr">
                          Put the site live and keep it healthy afterwards.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Website deployment
                      </li>
                      <li className="serv-list">
                        Domain configuration
                      </li>
                      <li className="serv-list">
                        Analytics setup
                      </li>
                      <li className="serv-list">
                        Guidance on updates
                      </li>
                      <li className="serv-list">
                        Website maintenance
                      </li>
                      <li className="serv-list">
                        Ongoing improvements
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A live website you own, with support when you need it.
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
                {"\n                    Questions about web design in Kisii?\n                "}
              </h2>
              <p className="descr">
                A few answers about how we work, what we build and what to expect when you hire Nexora Studio.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a website cost in Kisii?\n                            "}
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
                      {"\n\n                                Website projects are typically scoped between KES 15,000 and KES 250,000, depending on the number of pages, the features you need and how much content we prepare together. The full price is confirmed before work begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How long does a website take to build?\n                            "}
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
                      {"\n\n                                It depends on the size of the site and how quickly content, feedback and approvals come through. A focused small business website moves faster than a larger site with many pages.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build online stores or take payments online?\n                            "}
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
                      {"\n\n                                No. Nexora Studio focuses on the front end of the web - design, layout, speed and search foundations. We do not currently build online stores, payment systems or custom web applications.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will my website work on a phone?\n                            "}
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
                      {"\n\n                                Yes. Every website we build is responsive and tested across screen sizes, because most visitors will arrive on a mobile phone first.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you improve a website I already have?\n                            "}
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
                      {"\n\n                                Yes. If you already have a site, we can review it and improve its structure, speed, content and search foundations, or rebuild it if that is the better option.\n\n                            "}
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
