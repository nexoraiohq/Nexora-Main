import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Barbershop Website Kenya | Barber Booking Websites | Nexora",
description: "Barbershop website design in Kenya. Fast, mobile-first websites with cut galleries, price lists, WhatsApp booking and click-to-call for Kenyan barbers.",
keywords: "barbershop website Kenya, barber booking website, barbershop web design, barber website Kisii, barbershop site Nairobi",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/barbershop-website-kenya",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/barbershop-website-kenya",
    "x-default": "https://nexoraio.vercel.app/barbershop-website-kenya",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/barbershop-website-kenya",
  title: "Barbershop Website Kenya | Barber Booking Websites | Nexora",
  description: "Barbershop websites for Kenyan barbers - cut galleries, price lists, WhatsApp booking and click-to-call, built mobile-first.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Barbershop website design for Kenyan barbers - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Barbershop Website Kenya | Barber Booking Websites | Nexora",
  description: "Barbershop website design in Kenya. Fast, mobile-first websites with cut galleries, price lists, WhatsApp booking and click-to-call for Kenyan barbers.",
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
      "name": "Barbershop Website Design",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/barbershop-website-kenya",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Barbershop Website Design",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Barbershop Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cut Galleries"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Booking"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Click-to-Call Links"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/barbershop-website-kenya#page",
      "url": "https://nexoraio.vercel.app/barbershop-website-kenya",
      "name": "Barbershop Website Kenya",
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
          "name": "Barbershop Website",
          "item": "https://nexoraio.vercel.app/barbershop-website-kenya"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a barbershop website cost in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on scope. A focused barbershop landing page starts lower, while a multi-page site with barber profiles, galleries and booking flows costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards."
          }
        },
        {
          "@type": "Question",
          "name": "Can customers book a chair through the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build WhatsApp enquiry buttons and booking request forms that send customers straight into a conversation with your shop. If you use an external booking tool, we can link out to it."
          }
        },
        {
          "@type": "Question",
          "name": "Will my barbershop show up when people search nearby?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build every site with clean structure, clear headings, descriptive titles and a sitemap - the technical foundations search engines need. Pair that with a Google Business Profile and reviews, and your shop has a real chance of appearing in local search."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build barbershop websites outside Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nexora is based in Kisii but builds barbershop websites across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - with the whole process handled remotely."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my current barbershop site?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We review what you have, identify what is holding it back, and either improve it or rebuild it as a faster, clearer website that is easier for customers to find and book through."
          }
        }
      ]
    }
  ]
};

export default function BarbershopWebsiteKenyaPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your barbershop website page and would like a website for my barbershop."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Barbershop Website Design
            </h3>
            <h1 className="heading">
              {"\n                Barbershop websites that turn searches into chair bookings.\n                "}
              <span>
                Mobile-first websites for barbers in Kenya - with cut galleries, clear price lists, WhatsApp booking and click-to-call, so customers find you and book fast.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#barber-services" className="btn-primary">
                See what your barbershop website needs 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20barbershop%20website%20page%20and%20would%20like%20a%20website%20for%20my%20barbershop." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main id="main-content">
          <Breadcrumbs items={[{ name: "Barbershop Website Kenya" }]} />
          <section className="problem capabilities" id="barber-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Barbershop Website Design
              </p>
              <h2 className="heading">
                {"\n                    What every barbershop website in Kenya needs to do.\n                "}
              </h2>
              <p className="descr">
                Most barbershop bookings start with a quick phone search. Your website needs to show your cuts, make your prices clear and give customers a one-tap way to call or message you.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Cut Galleries and Styles
                        </h3>
                        <p className="descr">
                          Show the fade, the shape-up and the style before they sit down.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Before-and-after galleries
                      </li>
                      <li className="serv-list">
                        Style catalogues
                      </li>
                      <li className="serv-list">
                        Barber profiles
                      </li>
                      <li className="serv-list">
                        Photo galleries by cut type
                      </li>
                      <li className="serv-list">
                        Video showreels
                      </li>
                      <li className="serv-list">
                        Instagram integration
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Customers arrive already knowing the cut they want - and confident you can deliver it.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Prices and Services
                        </h3>
                        <p className="descr">
                          Clear pricing kills the awkward first question.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Cut and beard price lists
                      </li>
                      <li className="serv-list">
                        Combo packages
                      </li>
                      <li className="serv-list">
                        Kids' cuts page
                      </li>
                      <li className="serv-list">
                        Duration guides
                      </li>
                      <li className="serv-list">
                        Product retail pages
                      </li>
                      <li className="serv-list">
                        Membership offers
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Fewer price conversations at the chair, more time actually cutting.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Booking, Call and WhatsApp
                        </h3>
                        <p className="descr">
                          One tap from the search result to your chair.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Click-to-call buttons
                      </li>
                      <li className="serv-list">
                        WhatsApp enquiry buttons
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Opening hours and wait times
                      </li>
                      <li className="serv-list">
                        Map and directions
                      </li>
                      <li className="serv-list">
                        Mobile-first pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A customer searching on the street can reach you in one tap.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Local Search Presence
                        </h3>
                        <p className="descr">
                          Show up when someone nearby searches for a haircut.
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
                        Consistent business info
                      </li>
                      <li className="serv-list">
                        Fast page speeds
                      </li>
                      <li className="serv-list">
                        Search-friendly structure
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A barbershop website that competes for the "barber near me" search in your area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="barber-who">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Who We Build For
              </p>
              <h2 className="heading">
                {"\n                    Websites shaped around how your barbershop actually works.\n                "}
              </h2>
              <p className="descr">
                A single-chair shop, a multi-barber studio and a grooming lounge do not run the same way. The website should follow how your customers find you, wait and come back.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Independent Barbers
                        </h3>
                        <p className="descr">
                          A simple, fast site that works as hard as you do.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service and price list
                      </li>
                      <li className="serv-list">
                        Cut gallery
                      </li>
                      <li className="serv-list">
                        Click-to-call and WhatsApp
                      </li>
                      <li className="serv-list">
                        Map and directions
                      </li>
                      <li className="serv-list">
                        Opening hours
                      </li>
                      <li className="serv-list">
                        Mobile-first pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A lean website that turns a nearby search into your next customer.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Multi-Barber Shops
                        </h3>
                        <p className="descr">
                          Give each barber a profile and the shop one clear booking path.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Barber profile pages
                      </li>
                      <li className="serv-list">
                        Shared booking flow
                      </li>
                      <li className="serv-list">
                        Style galleries per barber
                      </li>
                      <li className="serv-list">
                        Team page
                      </li>
                      <li className="serv-list">
                        Combo and package offers
                      </li>
                      <li className="serv-list">
                        Wait-time information
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Customers can choose a barber and book without a single phone call.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Grooming Lounges
                        </h3>
                        <p className="descr">
                          Present a premium experience before the first visit.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service menus with pricing tiers
                      </li>
                      <li className="serv-list">
                        Facial and grooming add-ons
                      </li>
                      <li className="serv-list">
                        Studio tour galleries
                      </li>
                      <li className="serv-list">
                        Membership pages
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        WhatsApp concierge
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A digital presence that matches the standard of the experience inside.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Home and Mobile Barbers
                        </h3>
                        <p className="descr">
                          Show where you work and how to book you there.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service area pages
                      </li>
                      <li className="serv-list">
                        Mobile service explanation
                      </li>
                      <li className="serv-list">
                        WhatsApp booking requests
                      </li>
                      <li className="serv-list">
                        Pricing for home visits
                      </li>
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Click-to-call buttons
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that explains the mobile model clearly and books the next call-out.
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
                {"\n                    Questions about barbershop websites in Kenya?\n                "}
              </h2>
              <p className="descr">
                A few answers for barbers considering a new website.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a barbershop website cost in Kenya?\n                            "}
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
                      {"\n\n                                It depends on scope. A focused barbershop landing page starts lower, while a multi-page site with barber profiles, galleries and booking flows costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can customers book a chair through the website?\n                            "}
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
                      {"\n\n                                Yes. We build WhatsApp enquiry buttons and booking request forms that send customers straight into a conversation with your shop. If you use an external booking tool, we can link out to it.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will my barbershop show up when people search nearby?\n                            "}
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
                      {"\n\n                                We build every site with clean structure, clear headings, descriptive titles and a sitemap - the technical foundations search engines need. Pair that with a Google Business Profile and reviews, and your shop has a real chance of appearing in local search.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build barbershop websites outside Kisii?\n                            "}
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
                      {"\n\n                                Yes. Nexora is based in Kisii but builds barbershop websites across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - with the whole process handled remotely.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you redesign my current barbershop site?\n                            "}
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
                      {"\n\n                                Yes. We review what you have, identify what is holding it back, and either improve it or rebuild it as a faster, clearer website that is easier for customers to find and book through.\n\n                            "}
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
