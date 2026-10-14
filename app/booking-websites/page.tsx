import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Booking Websites | Appointment Websites by Nexora",
description: "Booking websites for salons, spas and service businesses in Kenya. Turn visitors into confirmed appointments with clear services and WhatsApp enquiries.",
keywords: "booking website, appointment website, salon booking website, website for bookings Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/booking-websites",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/booking-websites",
    "x-default": "https://nexoraio.vercel.app/booking-websites",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/booking-websites",
  title: "Booking Websites | Appointment Websites by Nexora",
  description: "Websites built to turn visitors into confirmed appointments for salons and service businesses.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Booking websites that turn visitors into appointments - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Booking Websites | Appointment Websites by Nexora",
  description: "Booking websites for salons, spas and service businesses in Kenya. Turn visitors into confirmed appointments with clear services and WhatsApp enquiries.",
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
      "serviceType": "Booking Website Development",
      "name": "Booking Websites",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/booking-websites",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Booking Websites",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Booking Request Forms"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Enquiry Flows"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Service and Price Pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Optimization"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/booking-websites#page",
      "url": "https://nexoraio.vercel.app/booking-websites",
      "name": "Booking Websites",
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
          "name": "Booking Websites",
          "item": "https://nexoraio.vercel.app/booking-websites"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a booking website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A booking website is a site designed around one goal: turning a visitor into an appointment. It shows your services, pricing and availability clearly, and gives people a direct way to request a slot by form, WhatsApp or phone."
          }
        },
        {
          "@type": "Question",
          "name": "Can I take payments or deposits online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not through the websites we build. Nexora Studio focuses on the front end of the web, so we do not build payment systems or deposit handling. If you already use a payment or booking tool, we can link to it from your site."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a calendar or booking system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Many businesses start with enquiry forms and WhatsApp, then move to a dedicated booking tool later. We can build the site so that adding one later is straightforward."
          }
        },
        {
          "@type": "Question",
          "name": "How do people find my booking website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build each site with clear structure, descriptive titles, headings, image alt text and a sitemap so search engines can read it. Local search results also depend on your Google Business Profile, reviews and competition."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage bookings myself after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We hand over a site that is easy to update, and we can guide you on changing services, prices, photos and opening hours so you are not dependent on us for every edit."
          }
        }
      ]
    }
  ]
};

export default function BookingWebsitesPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your booking websites page and would like to discuss a website for my business."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Booking Websites
            </h3>
            <h1 className="heading">
              {"\n                Booking websites that turn visitors into appointments.\n                "}
              <span>
                We design websites around one outcome: a visitor arrives, understands what you offer, and takes a clear step towards booking - by form, WhatsApp or phone.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#booking-basics" className="btn-primary">
                See how a booking website works 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20booking%20websites%20page%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="booking-basics">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Booking Websites
              </p>
              <h2 className="heading">
                {"\n                    What makes a booking website actually work.\n                "}
              </h2>
              <p className="descr">
                A booking website is not a brochure with a form bolted on. Every section should move the visitor one step closer to a confirmed appointment.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Clear Services and Prices
                        </h3>
                        <p className="descr">
                          Remove the uncertainty that stops people from enquiring.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service menus
                      </li>
                      <li className="serv-list">
                        Price lists
                      </li>
                      <li className="serv-list">
                        Duration and session details
                      </li>
                      <li className="serv-list">
                        Package options
                      </li>
                      <li className="serv-list">
                        What to expect
                      </li>
                      <li className="serv-list">
                        Service and product pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Visitors know what they are booking before they reach out.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          A Fast Mobile Experience
                        </h3>
                        <p className="descr">
                          Most bookings start on a phone, so the phone comes first.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Mobile-first implementation
                      </li>
                      <li className="serv-list">
                        Responsive development
                      </li>
                      <li className="serv-list">
                        Fast loading pages
                      </li>
                      <li className="serv-list">
                        Thumb-friendly calls to action
                      </li>
                      <li className="serv-list">
                        Click-to-call links
                      </li>
                      <li className="serv-list">
                        Readable service lists
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      No one abandons the page because it is slow or awkward to use.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          More Than One Way to Enquire
                        </h3>
                        <p className="descr">
                          Let people contact you the way they already prefer.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Booking request forms
                      </li>
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
                        Opening hours
                      </li>
                      <li className="serv-list">
                        Location details
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Fewer missed enquiries because the next step feels easy.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Trust Before the First Visit
                        </h3>
                        <p className="descr">
                          Answer the questions that hold people back.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Team profiles
                      </li>
                      <li className="serv-list">
                        Gallery of work
                      </li>
                      <li className="serv-list">
                        Frequently asked questions
                      </li>
                      <li className="serv-list">
                        Clear business information
                      </li>
                      <li className="serv-list">
                        Transparent pricing
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A visitor arrives already reassured about what to expect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="booking-process">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                How It Works
              </p>
              <h2 className="heading">
                {"\n                    From first conversation to a site that books.\n                "}
              </h2>
              <p className="descr">
                The process stays simple and transparent, with a clear decision point before anything is built.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          1. Understand the Business
                        </h3>
                        <p className="descr">
                          Map out how customers currently book and where they drop off.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Current booking flow
                      </li>
                      <li className="serv-list">
                        Services and prices
                      </li>
                      <li className="serv-list">
                        Peak and quiet periods
                      </li>
                      <li className="serv-list">
                        Customer questions
                      </li>
                      <li className="serv-list">
                        Existing tools
                      </li>
                      <li className="serv-list">
                        Main goal
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear view of what the website needs to fix.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          2. Design the Flow
                        </h3>
                        <p className="descr">
                          Plan the pages that lead from interest to enquiry.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Page hierarchy
                      </li>
                      <li className="serv-list">
                        Service structure
                      </li>
                      <li className="serv-list">
                        Calls to action
                      </li>
                      <li className="serv-list">
                        Form fields
                      </li>
                      <li className="serv-list">
                        WhatsApp paths
                      </li>
                      <li className="serv-list">
                        Trust content
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A simple journey the visitor can follow without thinking.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          3. Build and Test
                        </h3>
                        <p className="descr">
                          Create the website and check it works on real devices.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Responsive layout
                      </li>
                      <li className="serv-list">
                        Form behaviour
                      </li>
                      <li className="serv-list">
                        Link and button testing
                      </li>
                      <li className="serv-list">
                        Loading speed review
                      </li>
                      <li className="serv-list">
                        Cross-browser testing
                      </li>
                      <li className="serv-list">
                        Content proofreading
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A site that behaves exactly as intended before it goes live.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          4. Launch and Improve
                        </h3>
                        <p className="descr">
                          Publish the site and refine it using real enquiry data.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Website deployment
                      </li>
                      <li className="serv-list">
                        Analytics setup
                      </li>
                      <li className="serv-list">
                        Review of enquiries
                      </li>
                      <li className="serv-list">
                        Content updates
                      </li>
                      <li className="serv-list">
                        Conversion optimization
                      </li>
                      <li className="serv-list">
                        Website maintenance
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A booking website that improves steadily after launch.
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
                {"\n                    Questions about booking websites?\n                "}
              </h2>
              <p className="descr">
                A few answers about how booking websites work and what ours can and cannot do.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What is a booking website?\n                            "}
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
                      {"\n\n                                A booking website is a site designed around one goal: turning a visitor into an appointment. It shows your services, pricing and availability clearly, and gives people a direct way to request a slot by form, WhatsApp or phone.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can I take payments or deposits online?\n                            "}
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
                      {"\n\n                                Not through the websites we build. Nexora Studio focuses on the front end of the web, so we do not build payment systems or deposit handling. If you already use a payment or booking tool, we can link to it from your site.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do I need a calendar or booking system?\n                            "}
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
                      {"\n\n                                Not necessarily. Many businesses start with enquiry forms and WhatsApp, then move to a dedicated booking tool later. We can build the site so that adding one later is straightforward.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How do people find my booking website?\n                            "}
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
                      {"\n\n                                We build each site with clear structure, descriptive titles, headings, image alt text and a sitemap so search engines can read it. Local search results also depend on your Google Business Profile, reviews and competition.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can I manage bookings myself after launch?\n                            "}
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
                      {"\n\n                                Yes. We hand over a site that is easy to update, and we can guide you on changing services, prices, photos and opening hours so you are not dependent on us for every edit.\n\n                            "}
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

      <script defer src="/static/js/app.js" />
    </>
  );
}
