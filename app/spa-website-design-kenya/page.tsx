import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Spa Website Design Kenya | Spa Booking Websites | Nexora",
description: "Spa website design in Kenya. Calm, fast websites for spas and wellness businesses with treatment menus, package pages, therapist profiles and WhatsApp booking.",
keywords: "spa website Kenya, spa website design, spa booking website, wellness website Kisii, massage spa web design Nairobi",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/spa-website-design-kenya",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/spa-website-design-kenya",
    "x-default": "https://nexoraio.vercel.app/spa-website-design-kenya",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/spa-website-design-kenya",
  title: "Spa Website Design Kenya | Spa Booking Websites | Nexora",
  description: "Spa websites for Kenyan wellness businesses - treatment menus, package pages, therapist profiles and WhatsApp booking, built mobile-first.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Spa website design for Kenyan wellness businesses - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Spa Website Design Kenya | Spa Booking Websites | Nexora",
  description: "Spa website design in Kenya. Calm, fast websites for spas and wellness businesses with treatment menus, package pages, therapist profiles and WhatsApp booking.",
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
      "name": "Spa Website Design",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/spa-website-design-kenya",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Spa Website Design",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spa Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Treatment Menus"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Package Pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Booking Request Forms"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/spa-website-design-kenya#page",
      "url": "https://nexoraio.vercel.app/spa-website-design-kenya",
      "name": "Spa Website Design Kenya",
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
          "name": "Spa Website Design",
          "item": "https://nexoraio.vercel.app/spa-website-design-kenya"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a spa website cost in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on scope. A focused spa landing page starts lower, while a multi-page site with treatment menus, package pages and therapist profiles costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards."
          }
        },
        {
          "@type": "Question",
          "name": "Can spa clients book treatments through the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build booking request forms and WhatsApp enquiry buttons that send clients straight into a conversation with your spa. If you already use a booking tool, we can link out to it."
          }
        },
        {
          "@type": "Question",
          "name": "Will my spa appear in Google search in Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build every site with clean structure, clear headings, descriptive titles and a sitemap - the technical foundations search engines need. Your final position also depends on competition, reviews and your Google Business Profile."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build spa websites outside Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nexora is based in Kisii but builds spa websites across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - with the whole process handled remotely."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing spa website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We review your current site, identify what is holding it back, and either improve it or rebuild it as a faster, clearer website that is easier for clients to find and book through."
          }
        }
      ]
    }
  ]
};

export default function SpaWebsiteDesignKenyaPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your spa website design page and would like a website for my spa."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Spa Website Design
            </h3>
            <h1 className="heading">
              {"\n                Spa websites that set the tone before the first visit.\n                "}
              <span>
                Mobile-first websites for spas and wellness businesses in Kenya - with treatment menus, package pages, therapist profiles and simple WhatsApp booking.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#spa-services" className="btn-primary">
                See what your spa website needs 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20spa%20website%20design%20page%20and%20would%20like%20a%20website%20for%20my%20spa." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="spa-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Spa Website Design
              </p>
              <h2 className="heading">
                {"\n                    What every spa website in Kenya needs to do.\n                "}
              </h2>
              <p className="descr">
                Spa clients are choosing an experience, not just a service. Your website needs to communicate calm, show your treatments clearly and make booking feel effortless.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Treatment Menus
                        </h3>
                        <p className="descr">
                          Present every treatment with the clarity clients expect.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Massage and body treatment pages
                      </li>
                      <li className="serv-list">
                        Facial and skincare menus
                      </li>
                      <li className="serv-list">
                        Duration and session details
                      </li>
                      <li className="serv-list">
                        Therapist specialties
                      </li>
                      <li className="serv-list">
                        Add-on services
                      </li>
                      <li className="serv-list">
                        Aftercare guidance pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Clients arrive informed and relaxed, ready to book rather than asking basic questions.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Packages and Memberships
                        </h3>
                        <p className="descr">
                          Turn single visits into repeat business.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Spa package pages
                      </li>
                      <li className="serv-list">
                        Membership tiers
                      </li>
                      <li className="serv-list">
                        Couple and group packages
                      </li>
                      <li className="serv-list">
                        Seasonal offers
                      </li>
                      <li className="serv-list">
                        Gift voucher pages
                      </li>
                      <li className="serv-list">
                        Loyalty programme details
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Higher-value bookings and a reason for clients to come back.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Therapists and Trust
                        </h3>
                        <p className="descr">
                          The people and the proof behind the experience.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Therapist profiles
                      </li>
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Testimonials
                      </li>
                      <li className="serv-list">
                        Hygiene and safety standards
                      </li>
                      <li className="serv-list">
                        Studio tour galleries
                      </li>
                      <li className="serv-list">
                        Credentials and years in business
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Trust built before the client walks through the door.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Booking and Location
                        </h3>
                        <p className="descr">
                          Make it simple to move from interested to booked.
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
                        Click-to-call links
                      </li>
                      <li className="serv-list">
                        Opening hours
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
                      Fewer steps between a client deciding on you and actually booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="spa-who">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Who We Build For
              </p>
              <h2 className="heading">
                {"\n                    Websites shaped around the experience you actually deliver.\n                "}
              </h2>
              <p className="descr">
                A day spa, a massage clinic and a wellness retreat do not sell the same way. The structure of the website should follow how your clients discover you, choose a treatment and return.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Day Spas
                        </h3>
                        <p className="descr">
                          Present a full menu without overwhelming the visitor.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Full treatment menus
                      </li>
                      <li className="serv-list">
                        Package pages
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Studio tour galleries
                      </li>
                      <li className="serv-list">
                        Opening hours
                      </li>
                      <li className="serv-list">
                        WhatsApp enquiries
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A calm, complete digital presence that matches the spa experience.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Massage Clinics
                        </h3>
                        <p className="descr">
                          Explain the therapy, the therapist and the outcome clearly.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Therapy type pages
                      </li>
                      <li className="serv-list">
                        Therapist profiles
                      </li>
                      <li className="serv-list">
                        Session duration and pricing
                      </li>
                      <li className="serv-list">
                        First-visit guidance
                      </li>
                      <li className="serv-list">
                        Booking forms
                      </li>
                      <li className="serv-list">
                        Click-to-call links
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Clients understand the treatment before they book, so expectations are right from the start.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Wellness Retreats
                        </h3>
                        <p className="descr">
                          Sell the full retreat experience, not just a treatment slot.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Retreat programme pages
                      </li>
                      <li className="serv-list">
                        Accommodation galleries
                      </li>
                      <li className="serv-list">
                        Booking and enquiry flows
                      </li>
                      <li className="serv-list">
                        Itinerary overviews
                      </li>
                      <li className="serv-list">
                        Group booking information
                      </li>
                      <li className="serv-list">
                        Location and travel details
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A website that communicates the full value of the retreat and books longer stays.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Home Wellness Services
                        </h3>
                        <p className="descr">
                          Show where you work and how clients book you there.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service area pages
                      </li>
                      <li className="serv-list">
                        Home visit explanations
                      </li>
                      <li className="serv-list">
                        Pricing for mobile services
                      </li>
                      <li className="serv-list">
                        WhatsApp booking requests
                      </li>
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Safety and hygiene standards
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A clear, trustworthy presence for mobile wellness services.
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
                {"\n                    Questions about spa website design in Kenya?\n                "}
              </h2>
              <p className="descr">
                A few answers for spa and wellness owners considering a new website.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a spa website cost in Kenya?\n                            "}
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
                      {"\n\n                                It depends on scope. A focused spa landing page starts lower, while a multi-page site with treatment menus, package pages and therapist profiles costs more. Nexora quotes clearly before any work begins - typical projects range from KES 15,000 upwards.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can spa clients book treatments through the website?\n                            "}
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
                      {"\n\n                                Yes. We build booking request forms and WhatsApp enquiry buttons that send clients straight into a conversation with your spa. If you already use a booking tool, we can link out to it.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will my spa appear in Google search in Kenya?\n                            "}
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
                      {"\n\n                                We build every site with clean structure, clear headings, descriptive titles and a sitemap - the technical foundations search engines need. Your final position also depends on competition, reviews and your Google Business Profile.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you build spa websites outside Kisii?\n                            "}
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
                      {"\n\n                                Yes. Nexora is based in Kisii but builds spa websites across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - with the whole process handled remotely.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you redesign my existing spa website?\n                            "}
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

      <Script src="/static/js/app.js" strategy="afterInteractive" />
    </>
  );
}
