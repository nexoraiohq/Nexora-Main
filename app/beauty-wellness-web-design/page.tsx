import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Beauty & Wellness Web Design for Salons & Spas | Nexora",
description: "Web design for salons, barbershops, spas, nail studios and clinics. Websites that show your services, build trust and make it easy for clients to book.",
keywords: "salon website design, beauty wellness web design, spa website, barbershop website Kenya, nail studio website",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/beauty-wellness-web-design",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/beauty-wellness-web-design",
    "x-default": "https://nexoraio.vercel.app/beauty-wellness-web-design",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/beauty-wellness-web-design",
  title: "Beauty & Wellness Web Design for Salons & Spas | Nexora",
  description: "Websites for salons, barbershops, spas and beauty studios - designed to build trust and win bookings.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Web design for salons, spas and beauty businesses - Nexora Studio"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Beauty & Wellness Web Design for Salons & Spas | Nexora",
  description: "Web design for salons, barbershops, spas, nail studios and clinics. Websites that show your services, build trust and make it easy for clients to book.",
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
      "name": "Beauty and Wellness Web Design",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/beauty-wellness-web-design",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beauty and Wellness Web Design",
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
              "name": "Spa Websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Booking Interfaces"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Service Menus"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/beauty-wellness-web-design#page",
      "url": "https://nexoraio.vercel.app/beauty-wellness-web-design",
      "name": "Beauty and Wellness Web Design",
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
          "name": "Beauty and Wellness Web Design",
          "item": "https://nexoraio.vercel.app/beauty-wellness-web-design"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a salon or spa website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At minimum: a clear list of services and prices, photos of your work, your location and opening hours, a way to contact you, and pages that load quickly on a phone. Everything else is secondary to those."
          }
        },
        {
          "@type": "Question",
          "name": "Can you take bookings and payments through the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build enquiry and booking request flows, including WhatsApp and contact forms. Full booking engines with online payments are outside our current scope, so we can link out to a booking tool you already use."
          }
        },
        {
          "@type": "Question",
          "name": "Do you write the content for my salon website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We structure the pages and advise on what each section needs to say. The final wording is agreed with you so it reflects your actual services, prices and business."
          }
        },
        {
          "@type": "Question",
          "name": "Will the website show up on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build every site with clean structure, clear headings, descriptive titles, image alt text and a sitemap, which gives your website the technical foundations search engines need. Where you appear for a given search also depends on competition and reviews outside the website itself."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign a website I already have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can review your existing site, identify what is holding it back, and either improve it or rebuild it as a new website that is easier to use and easier to find."
          }
        }
      ]
    }
  ]
};

export default function BeautyWellnessWebDesignPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I saw your beauty and wellness web design page and would like a website for my business."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Beauty and Wellness Web Design
            </h3>
            <h1 className="heading">
              {"\n                Web design for beauty and wellness brands.\n                "}
              <span>
                Websites for salons, barbershops, spas, nail studios and wellness businesses - built to show your work clearly, earn trust quickly and make booking simple.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#beauty-services" className="btn-primary">
                See what your website needs 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20saw%20your%20beauty%20and%20wellness%20web%20design%20page%20and%20would%20like%20a%20website%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="beauty-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Beauty and Wellness Web Design
              </p>
              <h2 className="heading">
                {"\n                    What your salon, spa or studio needs from a website.\n                "}
              </h2>
              <p className="descr">
                Beauty and wellness businesses are chosen on trust. Your website needs to show the quality of your work, make your services easy to understand and give people a simple way to reach you.
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
                          Help visitors understand what you offer before they ever call.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service and product pages
                      </li>
                      <li className="serv-list">
                        Price lists
                      </li>
                      <li className="serv-list">
                        Treatment descriptions
                      </li>
                      <li className="serv-list">
                        Duration and session details
                      </li>
                      <li className="serv-list">
                        Package offers
                      </li>
                      <li className="serv-list">
                        Online catalogues
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Visitors arrive informed, so conversations start with the booking rather than the basics.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Gallery and Team
                        </h3>
                        <p className="descr">
                          Show the standard of your work and the people behind it.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Photo galleries
                      </li>
                      <li className="serv-list">
                        Stylist and therapist profiles
                      </li>
                      <li className="serv-list">
                        Portfolio sections
                      </li>
                      <li className="serv-list">
                        Studio tour
                      </li>
                      <li className="serv-list">
                        Contact and location details
                      </li>
                      <li className="serv-list">
                        Interactive web experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A visual proof of quality that builds confidence before the first visit.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Trust and Reviews
                        </h3>
                        <p className="descr">
                          Give new customers a reason to choose you with confidence.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Customer reviews
                      </li>
                      <li className="serv-list">
                        Testimonials
                      </li>
                      <li className="serv-list">
                        Years in business
                      </li>
                      <li className="serv-list">
                        Professional credentials
                      </li>
                      <li className="serv-list">
                        Contact and enquiry forms
                      </li>
                      <li className="serv-list">
                        Clear business information
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A first impression that reassures rather than raises questions.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Booking and Contact
                        </h3>
                        <p className="descr">
                          Make it effortless to move from interested to booked.
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
                        Conversion-focused experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      Fewer steps between a visitor deciding on you and actually getting in touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities" id="beauty-who">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Who We Build For
              </p>
              <h2 className="heading">
                {"\n                    Websites shaped around how each business actually works.\n                "}
              </h2>
              <p className="descr">
                A barbershop, a spa and a nail studio do not sell the same way. The structure of the website should follow how your customers book, return and recommend you.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Salons
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
                          Barbershops
                        </h3>
                        <p className="descr">
                          Let customers see your cuts and find you fast.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service and price list
                      </li>
                      <li className="serv-list">
                        Barber profiles
                      </li>
                      <li className="serv-list">
                        Gallery of styles
                      </li>
                      <li className="serv-list">
                        Click-to-call and WhatsApp
                      </li>
                      <li className="serv-list">
                        Map and directions
                      </li>
                      <li className="serv-list">
                        Fast mobile pages
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A simple site that turns a search into a chair booking.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Spas and Wellness
                        </h3>
                        <p className="descr">
                          Set the tone before the client ever walks in.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Treatment menus
                      </li>
                      <li className="serv-list">
                        Package pages
                      </li>
                      <li className="serv-list">
                        Therapist profiles
                      </li>
                      <li className="serv-list">
                        Booking request forms
                      </li>
                      <li className="serv-list">
                        Gallery imagery
                      </li>
                      <li className="serv-list">
                        Contact details
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A calm, credible presence that matches the experience you deliver.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Nail and Beauty Studios
                        </h3>
                        <p className="descr">
                          Present your work and your availability clearly.
                        </p>
                      </div>
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service lists
                      </li>
                      <li className="serv-list">
                        Nail art galleries
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
                      A portfolio that does the selling between appointments.
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
                {"\n                    Questions about beauty and wellness websites?\n                "}
              </h2>
              <p className="descr">
                A few answers for salons, spas and studios thinking about a new website.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What does a salon or spa website need?\n                            "}
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
                      {"\n\n                                At minimum: a clear list of services and prices, photos of your work, your location and opening hours, a way to contact you, and pages that load quickly on a phone. Everything else is secondary to those.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you take bookings and payments through the website?\n                            "}
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
                      {"\n\n                                We build enquiry and booking request flows, including WhatsApp and contact forms. Full booking engines with online payments are outside our current scope, so we can link out to a booking tool you already use.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you write the content for my salon website?\n                            "}
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
                      {"\n\n                                We structure the pages and advise on what each section needs to say. The final wording is agreed with you so it reflects your actual services, prices and business.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Will the website show up on Google?\n                            "}
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
                      {"\n\n                                We build every site with clean structure, clear headings, descriptive titles, image alt text and a sitemap, which gives your website the technical foundations search engines need. Where you appear for a given search also depends on competition and reviews outside the website itself.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can you redesign a website I already have?\n                            "}
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
                      {"\n\n                                Yes. We can review your existing site, identify what is holding it back, and either improve it or rebuild it as a new website that is easier to use and easier to find.\n\n                            "}
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
              <p className="descr">
                Looking for something more specific? Explore our 
                <a href="/salon-website-design-kenya">
                  salon website design
                </a>
                , 
                <a href="/barbershop-website-kenya">
                  barbershop websites
                </a>
                 or 
                <a href="/spa-website-design-kenya">
                  spa website design
                </a>
                 pages.
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
