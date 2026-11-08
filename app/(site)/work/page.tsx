import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import "@/static/css/work/style.css";

export const metadata: Metadata = {
title: "Our Work | Website Design & Development Projects | Nexora",
description: "Selected website design and development work by Nexora Studio, including salon, barbershop and small business websites built for the Kenyan market.",
keywords: "web design portfolio Kenya, website design examples, salon website examples, barbershop website Kenya, small business website Kisii",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/work",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/work",
    "x-default": "https://nexoraio.vercel.app/work",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/work",
  title: "Our Work | Website Design Projects | Nexora Studio",
  description: "Selected website design and development work by Nexora Studio, including salon, barbershop and small business websites built for Kenya.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Website design and development projects by Nexora Studio, Kenya"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Our Work | Website Design & Development Projects | Nexora",
  description: "Selected website design and development work by Nexora Studio, including salon, barbershop and small business websites built for the Kenyan market.",
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
          "@type": "City",
          "name": "Nairobi"
        },
        {
          "@type": "City",
          "name": "Kisumu"
        },
        {
          "@type": "City",
          "name": "Eldoret"
        },
        {
          "@type": "City",
          "name": "Nakuru"
        },
        {
          "@type": "City",
          "name": "Mombasa"
        },
        {
          "@type": "Country",
          "name": "Kenya"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/work#page",
      "url": "https://nexoraio.vercel.app/work",
      "name": "Our Work | Salon & Barbershop Websites in Kisii & Kenya",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://nexoraio.vercel.app/",
        "name": "Nexora Studio"
      },
      "about": {
        "@id": "https://nexoraio.vercel.app/#business"
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
          "name": "Work",
          "item": "https://nexoraio.vercel.app/work"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What kind of projects does Nexora show in its work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selected website design and development projects for Kenyan businesses, including a barbershop website, salon and beauty websites, booking websites and local business sites for the Kisii and Kenya market."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see a live example of a Nexora website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. States Barbershop is a live example - a website designed and built by Nexora Studio for a Kenyan barbershop. Live previews are linked directly from the relevant project cards."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build websites for businesses outside Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While Nexora is based in Kisii, projects are delivered remotely and can be handled for businesses anywhere, including international clients."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start a project with Nexora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Get in touch through the contact page or WhatsApp. We discuss your business goals, recommend the right approach, agree on a timeline and quote, then design and build the website with review rounds before launch."
          }
        }
      ]
    }
  ]
};

export default function WorkPage() {
  return (
    <>
        <SiteHeader variant={"dark"} isHome={false} waText={"Hi Nexora, I'm viewing your Work page and would like to talk about a similar project for my business."} waTextMobile={"Hi Nexora, I'm using the Work page menu and would like to start a conversation about a project."} />
        <main id="main-content">
          <Breadcrumbs items={[{ name: "Our Work" }]} />
          <section className="work-hero">
            <div className="cont">
              <div className="text">
                <h3 className="eyebrow">
                  Selected Work
                </h3>
                <h1 className="heading">
                  Work built to move businesses forward.
                </h1>
                <p className="descr">
                  Explore selected digital experiences, systems and solutions designed to help businesses present themselves better, connect with customers and build a stronger foundation for growth.
                </p>
                <div className="hero-cta">
                  {"\n                        "}
                  <a href="#explore-work" className="btn-primary">
                    Explore Our Work 
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                  </a>
                  {"\n\n                        "}
                  <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20just%20explored%20the%20Work%20page%20hero%20and%20would%20like%20to%20discuss%20a%20project%20for%20my%20business." target="_blank" rel="noopener" className="btn-secondary">
                    Start a Conversation
                  </a>
                  {"\n                    "}
                </div>
              </div>
              <div className="image">
                <div className="cards-grid">
                  <div className="card card-1">
                    {"\n                            "}
                    <picture>
                      {"\n                                "}
                      <source type="image/webp" srcSet="/assets/proof-through-work/main-540.webp 540w, /assets/proof-through-work/main-921.webp 921w" sizes="(min-width: 768px) 460px, 160px" />
                      {"\n                                "}
                      <img src="/assets/proof-through-work/main.png" alt="" loading="eager" fetchPriority="high" width="921" height="1708" />
                      {"\n                            "}
                    </picture>
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        States Barbershop
                      </h2>
                      <div className="link-txt">
                        <p>
                          A conversion-focused website built for a local barbershop
                        </p>
                        {"\n                                    "}
                        <a href="#explore-work">
                          View Project 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-2">
                    {"\n                            "}
                    <img src="/assets/work-cards/salon-beauty.jpg" alt="Salon and beauty website design preview" loading="lazy" width="736" height="1104" decoding="async" />
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        Salon & Beauty
                      </h2>
                      <div className="link-txt">
                        <p>
                          Websites designed for salons, spas and beauty brands
                        </p>
                        {"\n                                    "}
                        <a href="/beauty-wellness-web-design">
                          View Service 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-3">
                    {"\n                            "}
                    <img src="/assets/work-cards/booking-websites.jpg" alt="Booking website design preview showing an appointment flow" loading="lazy" width="736" height="1551" decoding="async" />
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        Booking Websites
                      </h2>
                      <div className="link-txt">
                        <p>
                          Turn website visitors into confirmed appointments
                        </p>
                        {"\n                                    "}
                        <a href="/booking-websites">
                          View Service 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-4">
                    {"\n                            "}
                    <img src="/assets/work-cards/web-design-kisii.jpg" alt="Web design project preview for a business in Kisii" loading="lazy" width="1200" height="675" decoding="async" />
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        Web Design Kisii
                      </h2>
                      <div className="link-txt">
                        <p>
                          Professional web design for businesses in Kisii
                        </p>
                        {"\n                                    "}
                        <a href="/web-design-kisii">
                          View Service 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-5">
                    {"\n                            "}
                    <img src="/assets/work-cards/web-development-kisii.jpg" alt="Web development project preview for a growing Kisii business" loading="lazy" width="735" height="851" decoding="async" />
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        Web Development Kisii
                      </h2>
                      <div className="link-txt">
                        <p>
                          Frontend website development for growing businesses
                        </p>
                        {"\n                                    "}
                        <a href="/web-development-kisii">
                          View Service 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-6">
                    {"\n                            "}
                    <img src="/assets/work-cards/web-design-kenya.jpg" alt="Website design preview for a Kenyan business" loading="lazy" width="736" height="2118" decoding="async" />
                    {"\n                            "}
                    <div className="overlay"></div>
                    <div className="content">
                      <h2>
                        Web Design Kenya
                      </h2>
                      <div className="link-txt">
                        <p>
                          Websites built for Kenyan businesses nationwide
                        </p>
                        {"\n                                    "}
                        <a href="/web-design-kenya">
                          View Service 
                          <i className="fas fa-angle-right" aria-hidden="true"></i>
                        </a>
                        {"\n                                "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem projects" id="explore-work">
            <div className="prob-cont projects-cont">
              <p className="eyebrow">
                Featured Work
              </p>
              <h2 className="heading">
                {"\n                    Selected work, built with purpose.\n                "}
              </h2>
              <p className="descr">
                A selection of digital experiences and systems created to solve real business problems, strengthen customer journeys and create better foundations for growth.
              </p>
              <div className="content">
                <div className="card card-1">
                  <div className="card-border">
                    <div className="card-inner">
                      <div className="image">
                        {"\n                                    "}
                        <picture>
                          {"\n                                        "}
                          <source type="image/webp" srcSet="/assets/project-1-768.webp 768w, /assets/project-1-1024.webp 1024w, /assets/project-1-1536.webp 1536w" sizes="(min-width: 768px) max(calc(100vw - 80px), 787px), max(calc(100vw - 40px), 525px)" />
                          {"\n                                        "}
                          <img src="/assets/project-1.png" alt="States Barbershop Website" loading="lazy" width="1920" height="878" decoding="async" />
                          {"\n                                    "}
                        </picture>
                        {"\n                                "}
                      </div>
                      <div className="text">
                        <h3 className="eyebrow">
                          {"\n                                        01 / Digital Experience\n                                    "}
                        </h3>
                        <div className="client-industry">
                          <h2 className="client">
                            {"\n                                            Daniel Adams\n                                        "}
                          </h2>
                          <p className="industry">
                            {"\n                                            states barbershop\n                                        "}
                          </p>
                        </div>
                        <div className="heading">
                          {"\n                                        States Barbershop Website\n                                    "}
                        </div>
                        <div className="descr">
                          {"\n                                        A premium, conversion-focused website designed and developed for States Barbershop to establish a stronger online presence and make it easier for customers to discover, understand, and contact the business.\n                                    "}
                        </div>
                        <div className="txt-grid">
                          <div className="cont-card">
                            <h2 className="title">
                              {"\n                                                Challenge\n                                            "}
                            </h2>
                            <p className="descr" style={{ "paddingBottom": "5px", "margin": "0" }}>
                              {"\n                                                States Barbershop lacked a dedicated website where potential customers could easily explore its services, meet the team, view reviews, find its location, and understand the brand.\n                                            "}
                            </p>
                            <p className="descr" style={{ "margin": "0" }}>
                              {"\n                                                Important information was spread across different platforms, creating unnecessary friction for customers and limiting the business's ability to present itself professionally online.\n                                            "}
                            </p>
                          </div>
                          <div className="cont-card">
                            <h2 className="title">
                              {"\n                                                Solution\n                                            "}
                            </h2>
                            <p className="descr" style={{ "paddingBottom": "5px", "margin": "0" }}>
                              {"\n                                                Nexora Studio designed and developed a modern, mobile-friendly website that brings the entire customer journey into one place.\n                                            "}
                            </p>
                            <p className="descr" style={{ "margin": "0", "paddingBottom": "5px" }}>
                              {"\n                                                The website showcases the barbershop, services, team, customer reviews, location, and business information while providing a direct path to WhatsApp for enquiries and bookings.\n                                            "}
                            </p>
                            <p className="descr" style={{ "margin": "0", "paddingTop": "14.5px" }}>
                              {"\n                                                The design was built around a simple journey:\n                                                "}
                              <span style={{ "color": "#4F46E5", "fontWeight": "700", "fontSize": "inherit" }}>
                                Discover → Build Trust → Explore → Contact
                              </span>
                              {"\n                                            "}
                            </p>
                          </div>
                          <div className="cont-card">
                            <h2 className="title">
                              {"\n                                                Outcome\n                                            "}
                            </h2>
                            <p className="descr" style={{ "paddingBottom": "5px", "margin": "0" }}>
                              {"\n                                                States Barbershop now has a professional digital presence that accurately represents the business and gives customers a clear way to learn about the brand and take action.\n                                            "}
                            </p>
                            <p className="descr" style={{ "margin": "0" }}>
                              {"\n                                                The website also provides a strong foundation for the barbershop's Google presence, social media marketing, referrals, and future digital growth.\n                                            "}
                            </p>
                          </div>
                        </div>
                        <div className="cta-btn" style={{ "marginTop": "30px" }}>
                          {"\n\n                                        "}
                          <a href="https://states-barbershop.vercel.app/" target="_blank" rel="noopener" className="btn-primary view-btn">
                            {"\n                                            View Case Study\n                                            "}
                            <i className="fas fa-angle-right" aria-hidden="true"></i>
                            {"\n                                        "}
                          </a>
                          {"\n\n                                    "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="project-in-mind">
            <h3 className="title">
              Have a project in mind?
            </h3>
            {"\n            "}
            <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20tell%20you%20what%20I'm%20trying%20to%20build." target="_blank" rel="noopener" className="btn-primary start">
              Start a Conversation 
              <i className="fas fa-angle-right" aria-hidden="true"></i>
            </a>
            {"\n        "}
          </section>
          <section className="problem capabilities why-nexora experiences impact">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                The Impact
              </p>
              <h2 className="heading">
                {"\n                    Digital work should change something.\n                "}
              </h2>
              <p className="descr">
                A better interface is only the beginning. The work should make a business easier to discover, easier to understand, easier to use and better prepared to grow.
              </p>
              <div className="consequences-grid why-grid exp-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       MORE VISIBILITY
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Help the right people find the business.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Stronger digital presence
                    </div>
                    <div className="serv-list">
                      Better search foundations
                    </div>
                    <div className="serv-list">
                      Clearer positioning
                    </div>
                    <div className="serv-list">
                      Better discoverability
                    </div>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       MORE CONVERSION
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Turn attention into meaningful action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Clearer customer journeys
                    </div>
                    <div className="serv-list">
                      Stronger calls to action
                    </div>
                    <div className="serv-list">
                      Better information hierarchy
                    </div>
                    <div className="serv-list">
                      Less friction
                    </div>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       MORE CONTROL
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make the digital experience easier to manage.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Better structured content
                    </div>
                    <div className="serv-list">
                      Connected workflows
                    </div>
                    <div className="serv-list">
                      Clearer processes
                    </div>
                    <div className="serv-list">
                      More useful information
                    </div>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       MORE MOMENTUM
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Build a foundation that can evolve.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Scalable frontend
                    </div>
                    <div className="serv-list">
                      Better performance
                    </div>
                    <div className="serv-list">
                      Continuous optimisation
                    </div>
                    <div className="serv-list">
                      Room for future growth
                    </div>
                  </nav>
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
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20reviewed%20your%20work%20and%20want%20to%20start%20a%20conversation%20about%20building%20something%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary btn-secondary" style={{ "border": "1.2px solid rgba(254, 254, 254, 0.218)" }}>
                  Start a Conversation 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n\n                    "}
                <a href="/services#digital-experiences" className="btn-primary work-primary">
                  View Services 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n                "}
              </div>
            </div>
          </section>
          {"\n    "}
          <button id="installAppBtnFloating" className="floating-install-btn" type="button" aria-label="Install App" hidden>
            {"\n        "}
            <i className="fas fa-download" aria-hidden="true"></i>
            {"\n        "}
            <span>
              Install App
            </span>
            {"\n    "}
          </button>
          {"\n\n\n    "}
        </main>
      <JsonLd data={structuredData} />

      <Script src="/static/js/work.js" strategy="afterInteractive" />
      <Script src="/static/js/app.js" strategy="afterInteractive" />
    </>
  );
}
