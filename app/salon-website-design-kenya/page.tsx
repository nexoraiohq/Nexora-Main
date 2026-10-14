import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Salon Website Design Kenya | Booking Websites for Salons | Nexora",
description: "Salon website design in Kenya. Fast, mobile-first websites for hair salons with service menus, stylist portfolios, WhatsApp booking and SEO built in.",
keywords: "salon website Kenya, salon website design, hair salon booking website, beauty salon website Kisii, salon web design Nairobi",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/salon-website-design-kenya",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/salon-website-design-kenya",
    "x-default": "https://nexoraio.vercel.app/salon-website-design-kenya",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/salon-website-design-kenya",
  title: "Salon Website Design Kenya | Booking Websites for Salons | Nexora",
  description: "Salon websites for Kenyan hair salons - service menus, stylist portfolios, WhatsApp booking and SEO foundations built in.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Salon website design for Kenyan hair salons - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Salon Website Design Kenya | Booking Websites for Salons | Nexora",
  description: "Salon website design in Kenya. Fast, mobile-first websites for hair salons with service menus, stylist portfolios, WhatsApp booking and SEO built in.",
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
      "name": "Salon Website Design",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/salon-website-design-kenya",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Salon Website Design",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Salon Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stylist Portfolios"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Booking Flows"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Service and Price Menus"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/salon-website-design-kenya#page",
      "url": "https://nexoraio.vercel.app/salon-website-design-kenya",
      "name": "Salon Website Design Kenya",
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
          "name": "Salon Website Design",
          "item": "https://nexoraio.vercel.app/salon-website-design-kenya"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a salon website cost in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on scope. A focused salon landing page starts lower, while a multi-page site with galleries, stylist profiles and booking flows costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards."
          }
        },
        {
          "@type": "Question",
          "name": "Can salon customers book through the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build booking request forms and WhatsApp enquiry buttons that send customers straight into a conversation with your salon. If you already use a booking tool, we can link out to it."
          }
        },
        {
          "@type": "Question",
          "name": "Will my salon appear in Google search in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build every salon website with clean structure, clear headings, descriptive titles, image alt text and a sitemap - the technical foundations search engines need. Your final position also depends on competition, reviews and your Google Business Profile."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build salon websites outside Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nexora is based in Kisii but builds salon websites for businesses across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - and the whole process can be handled remotely."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing salon website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We review your current site, identify what is holding it back, and either improve it or rebuild it as a faster, clearer website that is easier for clients to find and book through."
          }
        }
      ]
    }
  ]
};

export default function SalonWebsiteDesignKenyaPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your salon website design page and would like a website for my salon."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Salon Website Design
            </h3>
            <h1 className="heading">
              {"\n                Salon website design that fills your chairs.\n                "}
              <span>
                Mobile-first websites for hair salons in Kenya - with service menus, stylist portfolios, WhatsApp booking and the search foundations that help new clients find you.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#salon-services" className="btn-primary">
                See what your salon website needs 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20salon%20website%20design%20page%20and%20would%20like%20a%20website%20for%20my%20salon." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="salon-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Salon Website Design
              </p>
              <h2 className="heading">
                {"\n                    What every salon website in Kenya needs to do.\n                "}
              </h2>
              <p className="descr">
                Most salon bookings start with a search or a WhatsApp message. Your website needs to show your work, make your prices clear and give people a fast way to book - especially on a phone.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Service Menus and Pricing
                        </h3>
                        <p className="descr">
                          Show clients what you offer and what it costs before they call.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Haircut and styling price lists
                      </li>
                      <li className="serv-list">
                        Treatment descriptions
                      </li>
                      <li className="serv-list">
                        Package offers
                      </li>
                      <li className="serv-list">
                        Duration and session details
                      </li>
                      <li className="serv-list">
                        Product and retail pages
                      </li>
                      <li className="serv-list">
                        Online catalogues
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Clients arrive already knowing what they want, so the chair time goes to serving them - not explaining prices.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Stylist Portfolios and Gallery
                        </h3>
                        <p className="descr">
                          Let your work sell the appointment.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Before-and-after galleries
                      </li>
                      <li className="serv-list">
                        Stylist profiles
                      </li>
                      <li className="serv-list">
                        Style and trend showcases
                      </li>
                      <li className="serv-list">
                        Photo galleries by service
                      </li>
                      <li className="serv-list">
                        Studio tour
                      </li>
                      <li className="serv-list">
                        Instagram integration
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A visual portfolio that builds confidence and books appointments while you are busy with clients.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Booking and WhatsApp
                        </h3>
                        <p className="descr">
                          Turn a visitor into a confirmed booking in as few steps as possible.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        WhatsApp enquiry buttons
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Click-to-call links
                      </li>
                      <li className="serv-list">
                        Opening hours
                      </li>
                      <li className="serv-list">
                        Location and directions
                      </li>
                      <li className="serv-list">
                        Mobile-first booking flow
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Fewer steps between a client deciding on you and actually getting in touch.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Local Search and Trust
                        </h3>
                        <p className="descr">
                          Help new clients in your area find you on Google.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Google Business Profile setup
                      </li>
                      <li className="serv-list">
                        Local SEO foundations
                      </li>
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Clear business information
                      </li>
                      <li className="serv-list">
                        Fast page load speeds
                      </li>
                      <li className="serv-list">
                        Search-friendly structure
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A salon website that shows up when someone nearby searches for a haircut, braids or a beauty treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="salon-who">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Who We Build For
              </p>
              <h2 className="heading">
                {"\n                    Websites shaped around how your salon actually works.\n                "}
              </h2>
              <p className="descr">
                A braiding studio, a unisex salon and a high-end hair studio do not sell the same way. The structure of the website should follow how your clients book, return and recommend you.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Hair Salons
                        </h3>
                        <p className="descr">
                          Show your styles, your team and your prices in one place.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service menus
                      </li>
                      <li className="serv-list">
                        Stylist portfolios
                      </li>
                      <li className="serv-list">
                        Booking requests
                      </li>
                      <li className="serv-list">
                        Location and hours
                      </li>
                      <li className="serv-list">
                        WhatsApp enquiries
                      </li>
                      <li className="serv-list">
                        Mobile-first design
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A salon website that brings in enquiries while you are busy with clients.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Braiding and Natural Hair Studios
                        </h3>
                        <p className="descr">
                          Make long-service bookings simple and transparent.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Style catalogues with prices
                      </li>
                      <li className="serv-list">
                        Duration guides per style
                      </li>
                      <li className="serv-list">
                        Photo galleries
                      </li>
                      <li className="serv-list">
                        WhatsApp booking requests
                      </li>
                      <li className="serv-list">
                        Deposit information pages
                      </li>
                      <li className="serv-list">
                        Aftercare instructions
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Clients arrive knowing the style, the price and the time - so booking conversations are short and serious.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Unisex Salons
                        </h3>
                        <p className="descr">
                          Serve two audiences clearly without cluttering the experience.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Men's and women's service sections
                      </li>
                      <li className="serv-list">
                        Barber and stylist profiles
                      </li>
                      <li className="serv-list">
                        Shared booking flow
                      </li>
                      <li className="serv-list">
                        Package and combo offers
                      </li>
                      <li className="serv-list">
                        Opening hours and wait times
                      </li>
                      <li className="serv-list">
                        Click-to-call links
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      One website that speaks clearly to both sides of your business.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Nail and Beauty Add-ons
                        </h3>
                        <p className="descr">
                          Present additional services without overwhelming the main menu.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Nail art galleries
                      </li>
                      <li className="serv-list">
                        Lash and brow service pages
                      </li>
                      <li className="serv-list">
                        Price guides
                      </li>
                      <li className="serv-list">
                        Enquiry forms
                      </li>
                      <li className="serv-list">
                        WhatsApp support
                      </li>
                      <li className="serv-list">
                        Opening hours
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A wider service range that still feels easy to navigate and book.
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
                {"\n                    Questions about salon website design in Kenya?\n                "}
              </h2>
              <p className="descr">
                A few answers for salon owners considering a new website.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a salon website cost in Kenya?\n                            "}
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
                      {"\n\n                                It depends on scope. A focused salon landing page starts lower, while a multi-page site with galleries, stylist profiles and booking flows costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can salon customers book through the website?\n                            "}
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
                      {"\n\n                                Yes. We build booking request forms and WhatsApp enquiry buttons that send customers straight into a conversation with your salon. If you already use a booking tool, we can link out to it.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will my salon appear in Google search in Kenya?\n                            "}
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
                      {"\n\n                                We build every salon website with clean structure, clear headings, descriptive titles, image alt text and a sitemap - the technical foundations search engines need. Your final position also depends on competition, reviews and your Google Business Profile.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build salon websites outside Kisii?\n                            "}
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
                      {"\n\n                                Yes. Nexora is based in Kisii but builds salon websites for businesses across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - and the whole process can be handled remotely.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you redesign my existing salon website?\n                            "}
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
                      {"\n\n                                Yes. We review your current site, identify what is holding it back, and either improve it or rebuild it as a faster, clearer website that is easier for clients to find and book through.\n\n                            "}
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
