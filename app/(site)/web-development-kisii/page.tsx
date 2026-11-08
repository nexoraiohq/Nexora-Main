import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Web Development Kisii | Website Developers in Kisii",
description: "Website development in Kisii, Kenya. Fast, mobile-first websites built with HTML, CSS and JavaScript for salons, service providers and small businesses.",
keywords: "web development Kisii, website developer Kisii, website development Kenya, frontend developer Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/web-development-kisii",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/web-development-kisii",
    "x-default": "https://nexoraio.vercel.app/web-development-kisii",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/web-development-kisii",
  title: "Web Development Kisii | Website Developers in Kisii",
  description: "Fast, mobile-first websites built in HTML, CSS and JavaScript for small businesses in Kisii, Kenya.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Website development services for businesses in Kisii, Kenya - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Web Development Kisii | Website Developers in Kisii",
  description: "Website development in Kisii, Kenya. Fast, mobile-first websites built with HTML, CSS and JavaScript for salons, service providers and small businesses.",
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
      "serviceType": "Website Development",
      "name": "Website Development in Kisii, Kenya",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/web-development-kisii",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development in Kisii, Kenya",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Frontend Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Responsive Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Optimization"
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
      "@id": "https://nexoraio.vercel.app/web-development-kisii#page",
      "url": "https://nexoraio.vercel.app/web-development-kisii",
      "name": "Website Development in Kisii, Kenya",
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
          "name": "Web Development Kisii",
          "item": "https://nexoraio.vercel.app/web-development-kisii"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you build custom websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website is built with HTML, CSS and JavaScript and structured so that search engines, screen readers and browsers can all read it properly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with WordPress, Shopify or website builders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at the moment. Nexora Studio builds websites directly with HTML, CSS and JavaScript rather than through WordPress, Shopify or similar platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build online stores or payment systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We build the front end of the website - the part people see and interact with. Online stores, payment systems and custom web applications are outside our current scope."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with domains, hosting and launching the site?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Website deployment and domain configuration are part of how we work, so the site is set up properly and ready for visitors when it goes live."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after the website is live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website maintenance and updates are available afterwards, covering content changes, new pages, performance checks and fixes as your business evolves."
          }
        }
      ]
    }
  ]
};

export default function WebDevelopmentKisiiPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I found you through your web development page for Kisii and would like to discuss a website project."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Web Development in Kisii
            </h3>
            <h1 className="heading">
              {"\n                Website development in Kisii, built for speed and reliability.\n                "}
              <span>
                We build fast, mobile-first websites in clean HTML, CSS and JavaScript - structured for search engines, accessible to everyone and ready to grow with your business.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#development-services" className="btn-primary">
                Explore development services 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20found%20you%20through%20your%20web%20development%20page%20for%20Kisii%20and%20would%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main id="main-content">
          <Breadcrumbs items={[{ name: "Web Development Kisii" }]} />
          <section className="problem capabilities" id="development-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Website Development in Kisii
              </p>
              <h2 className="heading">
                {"\n                    Development work that keeps your website fast and dependable.\n                "}
              </h2>
              <p className="descr">
                Good development is what makes a website load quickly, behave correctly on every device and stay easy to update as your business grows.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Frontend Development
                        </h3>
                        <p className="descr">
                          Build the parts of the website your customers actually see and use.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Responsive development
                      </li>
                      <li className="serv-list">
                        Mobile-first implementation
                      </li>
                      <li className="serv-list">
                        Interactive components
                      </li>
                      <li className="serv-list">
                        Contact forms
                      </li>
                      <li className="serv-list">
                        WhatsApp and click-to-call links
                      </li>
                      <li className="serv-list">
                        Conversion-focused experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that behaves correctly on phones, tablets and desktops.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Performance
                        </h3>
                        <p className="descr">
                          Keep pages light so visitors are not left waiting.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Optimised images
                      </li>
                      <li className="serv-list">
                        Lean HTML and CSS
                      </li>
                      <li className="serv-list">
                        Performance optimization
                      </li>
                      <li className="serv-list">
                        Cross-browser compatibility
                      </li>
                      <li className="serv-list">
                        Accessible markup
                      </li>
                      <li className="serv-list">
                        Fast loading pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that opens quickly, even on a slow mobile connection.
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
                          Give search engines a clean, readable structure to work with.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Semantic HTML
                      </li>
                      <li className="serv-list">
                        Heading structure
                      </li>
                      <li className="serv-list">
                        SEO-friendly website structure
                      </li>
                      <li className="serv-list">
                        Image alt text
                      </li>
                      <li className="serv-list">
                        Internal linking
                      </li>
                      <li className="serv-list">
                        Sitemap and robots setup
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that search engines can understand and index properly.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Launch and Handover
                        </h3>
                        <p className="descr">
                          Get the site live and make sure you can manage it.
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
                        Handover documentation
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
                      A live website you can update with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="development-process">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                How We Build
              </p>
              <h2 className="heading">
                {"\n                    A straightforward build process, with no surprises.\n                "}
              </h2>
              <p className="descr">
                The work is planned before it starts, so you always know what is being built, when it is ready and what happens next.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          1. Scope
                        </h3>
                        <p className="descr">
                          Agree on exactly what needs to be built.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Page list
                      </li>
                      <li className="serv-list">
                        Required features
                      </li>
                      <li className="serv-list">
                        Content availability
                      </li>
                      <li className="serv-list">
                        Third-party tools
                      </li>
                      <li className="serv-list">
                        Timeline
                      </li>
                      <li className="serv-list">
                        Budget
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A written scope everyone agrees on before development begins.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          2. Build
                        </h3>
                        <p className="descr">
                          Develop the pages, components and interactions.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        HTML structure
                      </li>
                      <li className="serv-list">
                        Styles and layout
                      </li>
                      <li className="serv-list">
                        Scripts and interactions
                      </li>
                      <li className="serv-list">
                        Form behaviour
                      </li>
                      <li className="serv-list">
                        Responsive testing
                      </li>
                      <li className="serv-list">
                        Browser testing
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Working pages you can review as they are completed.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          3. Test
                        </h3>
                        <p className="descr">
                          Check the site across devices, screens and browsers.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Mobile and tablet checks
                      </li>
                      <li className="serv-list">
                        Cross-browser compatibility
                      </li>
                      <li className="serv-list">
                        Form and link testing
                      </li>
                      <li className="serv-list">
                        Loading speed review
                      </li>
                      <li className="serv-list">
                        Accessibility review
                      </li>
                      <li className="serv-list">
                        Content proofreading
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A site that works properly before it is announced.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          4. Launch and Maintain
                        </h3>
                        <p className="descr">
                          Publish the site and keep it healthy over time.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Deployment
                      </li>
                      <li className="serv-list">
                        Domain connection
                      </li>
                      <li className="serv-list">
                        Post-launch checks
                      </li>
                      <li className="serv-list">
                        Content updates
                      </li>
                      <li className="serv-list">
                        Website maintenance
                      </li>
                      <li className="serv-list">
                        Performance monitoring
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that keeps working long after launch day.
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
                {"\n                    Questions about website development in Kisii?\n                "}
              </h2>
              <p className="descr">
                A few answers about how Nexora Studio builds websites and what we do and do not offer.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build custom websites?\n                            "}
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
                      {"\n\n                                Yes. Every website is built with HTML, CSS and JavaScript and structured so that search engines, screen readers and browsers can all read it properly.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you work with WordPress, Shopify or website builders?\n                            "}
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
                      {"\n\n                                Not at the moment. Nexora Studio builds websites directly with HTML, CSS and JavaScript rather than through WordPress, Shopify or similar platforms.\n\n                            "}
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
                      {"\n\n                                No. We build the front end of the website - the part people see and interact with. Online stores, payment systems and custom web applications are outside our current scope.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you help with domains, hosting and launching the site?\n                            "}
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
                      {"\n\n                                Yes. Website deployment and domain configuration are part of how we work, so the site is set up properly and ready for visitors when it goes live.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What happens after the website is live?\n                            "}
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
                      {"\n\n                                Website maintenance and updates are available afterwards, covering content changes, new pages, performance checks and fixes as your business evolves.\n\n                            "}
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
