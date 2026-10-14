import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "@/static/css/contact/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Contact Nexora Studio | Web Design Studio in Kisii, Kenya",
description: "Contact Nexora Studio in Kisii, Kenya about a website, booking flow or SEO project. WhatsApp, email and enquiry form - working with clients across Kenya.",
keywords: "contact web designer Kisii, website quote Kenya, hire website designer Kenya, web design enquiry Kisii",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/contact",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/contact",
    "x-default": "https://nexoraio.vercel.app/contact",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/contact",
  title: "Contact Nexora Studio | Web Design Studio in Kisii, Kenya",
  description: "Tell us about your project. Based in Kisii, serving all Kenya via WhatsApp & remote.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Contact Nexora Studio - web design studio in Kisii, Kenya"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Contact Nexora Studio | Web Design Studio in Kisii, Kenya",
  description: "Contact Nexora Studio in Kisii, Kenya about a website, booking flow or SEO project. WhatsApp, email and enquiry form - working with clients across Kenya.",
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
      "@type": "ContactPage",
      "@id": "https://nexoraio.vercel.app/contact#page",
      "url": "https://nexoraio.vercel.app/contact",
      "name": "Contact Nexora Studio | Web Designer in Kisii, Kenya",
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
          "name": "Contact",
          "item": "https://nexoraio.vercel.app/contact"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I contact Nexora Studio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Nexora Studio through WhatsApp on +254 713 324 672, by email, or through the enquiry form on this page. We typically reply within one business day."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The first conversation is about understanding your business and what you need. There is no charge for that initial discussion, and no obligation to proceed."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I include when enquiring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tell us what your business does, what you want the website to achieve, any examples you like, and your rough budget and timeline. The more context you give us, the more useful our first response will be."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on the type of website, its features and the level of customisation. Projects typically range from KES 15,000 for a focused landing page to KES 250,000 for larger custom builds. You receive a clear quote before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with clients outside Kisii?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While we are based in Kisii, we work with clients across Kenya - Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - and internationally. Everything can be handled remotely."
          }
        }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I'm on the Contact page and would like to start a direct project conversation."} waTextMobile={"Hi Nexora, I'm using the Contact page menu and would like to talk directly about a project."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Let's Talk
            </h3>
            <h1 className="heading">
              {"\n                Have a project in mind? Let's talk about it.\n                "}
              <span>
                Whether you're looking to build something new, improve an existing digital experience or figure out the right direction for your business, start by telling us what you're working towards.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I'm%20on%20the%20Contact%20page%20and%20want%20to%20tell%20you%20what%20I'm%20working%20toward." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n\n                "}
              <a href="/work" className="btn-primary">
                View Our Work 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n            "}
            </div>
            <p className="highlight">
              No complicated brief required. Just tell us what you're trying to achieve.
            </p>
          </section>
        </section>
        <main>
          <section className="problem consequences how-we-work why-nexora">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont">
              <p className="eyebrow">
                {"Get In Touch\n\n                "}
              </p>
              <h2 className="heading">
                {"\n                    Prefer to talk directly? We're here.\n                "}
              </h2>
              <p className="descr">
                If you'd rather start with a direct conversation, you can reach Nexora through email or WhatsApp. For project enquiries, the form below gives us the context we need to respond properly.
              </p>
              <div className="contact-details-card">
                <div className="card">
                  <div className="title">
                    {"\n                            "}
                    <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label="Gmail">
                      {"\n                            "}
                      <path fill="#0D1738" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path>
                      {"\n                            "}
                      <path fill="#0D1738" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path>
                      {"\n                            "}
                      <path fill="#0D1738" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path>
                      {"\n                            "}
                      <path fill="#0D1738" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path>
                      {"\n                            "}
                      <path fill="#0D1738" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.182z"></path>
                      {"\n                        "}
                    </svg>
                    {"\n\n                            Email\n                        "}
                  </div>
                  <p className="descr">
                    We'd love to talk about how we can work together.
                  </p>
                  {"\n\n                        "}
                  <a href="mailto:salonflow01@gmail.com" target="_blank" rel="noopener" className="btn-primary">
                    Send us an Email 
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                  </a>
                  {"\n                    "}
                </div>
                <div className="card">
                  <div className="title">
                    {"\n                            "}
                    <svg width="22" height="22" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp">
                      {"\n                            "}
                      <path fill="#0D1738" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                      {"\n                        "}
                    </svg>
                    {"\n\n                            Whatsapp\n                        "}
                  </div>
                  <p className="descr">
                    Get in touch and let us know how we can help.
                  </p>
                  {"\n\n                        "}
                  <a href="https://wa.me/254713324672" target="_blank" rel="noopener" className="btn-primary">
                    Chat on Whatsapp 
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                  </a>
                  {"\n                    "}
                </div>
                <div className="card">
                  <div className="title">
                    {"\n                            "}
                    <svg width="22" height="22" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-label="Location">
                      {"\n                            "}
                      <path fill="#0D1738" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
                      {"\n                            "}
                    </svg>
                    {"\n\n                            Location\n                        "}
                  </div>
                  <p className="descr">
                    Kisii, Kenya · Serving Nairobi, Kisumu, Eldoret, Nakuru, Mombasa & remote
                  </p>
                </div>
                <div className="card-details">
                  <div className="title">
                    {"\n\n                            Response Time:\n                        "}
                  </div>
                  <p className="descr">
                    We aim to respond within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem project-type-section">
            <div className="prob-cont">
              <p className="eyebrow">
                {"\n                    Your Project\n                "}
              </p>
              <h2 className="heading">
                {"\n                    What would you like Nexora to build for your business?\n                "}
              </h2>
              <p className="descr">
                {"\n                    Choose the digital solution that best describes what you need. We'll tailor the next step around your business and your goals.\n                "}
              </p>
              <div className="project-cards-grid" role="radiogroup" aria-label="Project type options">
                <article className="project-card" role="radio" aria-checked="false" tabIndex={0} data-type="website">
                  {"\n\n                        "}
                  <span className="card-number">
                    {"\n                            01\n                        "}
                  </span>
                  {"\n\n                        "}
                  <div className="card-title">
                    {"\n                            Business Website\n                            "}
                    <br />
                    {"\n                            "}
                    <span>
                      A professional website that puts your business online.
                    </span>
                    {"\n                        "}
                  </div>
                  <p className="card-desc">
                    {"\n                            Showcase your services, pricing, work, team and location while giving potential clients a clear way to contact or book with you.\n                        "}
                  </p>
                  <div className="card-footer">
                    <div className="card-tag">
                      {"\n                                "}
                      <strong>
                        Best for:
                      </strong>
                      {"\n                                Salons · Spas · Barbershops · Wellness Brands\n                            "}
                    </div>
                    {"\n\n                            "}
                    <span className="card-arrow">
                      {"\n                                "}
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      {"\n                            "}
                    </span>
                    {"\n\n                        "}
                  </div>
                </article>
                <article className="project-card" role="radio" aria-checked="false" tabIndex={0} data-type="experience">
                  {"\n\n                        "}
                  <span className="card-number">
                    {"\n                            02\n                        "}
                  </span>
                  {"\n\n                        "}
                  <div className="card-title">
                    {"\n                            Booking & Client Experience\n                            "}
                    <br />
                    {"\n                            "}
                    <span>
                      Make it easier for clients to discover, choose and book.
                    </span>
                    {"\n                        "}
                  </div>
                  <p className="card-desc">
                    {"\n                            Create a smoother digital journey around your services, booking enquiries, WhatsApp contact, calls, locations and other client touchpoints.\n                        "}
                  </p>
                  <div className="card-footer">
                    <div className="card-tag">
                      {"\n                                "}
                      <strong>
                        Best for:
                      </strong>
                      {"\n                                Businesses that already have a website or online presence but want a better customer journey.\n                            "}
                    </div>
                    {"\n\n                            "}
                    <span className="card-arrow">
                      {"\n                                "}
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      {"\n                            "}
                    </span>
                    {"\n\n                        "}
                  </div>
                </article>
                <article className="project-card" role="radio" aria-checked="false" tabIndex={0} data-type="business">
                  {"\n\n                        "}
                  <span className="card-number">
                    {"\n                            03\n                        "}
                  </span>
                  {"\n\n                        "}
                  <div className="card-title">
                    {"\n                            Digital Presence Refresh\n                            "}
                    <br />
                    {"\n                            "}
                    <span>
                      Improve an existing website or online experience.
                    </span>
                    {"\n                        "}
                  </div>
                  <p className="card-desc">
                    {"\n                            Redesign, restructure or refine your current digital presence so it better represents your business and makes it easier for clients to take action.\n                        "}
                  </p>
                  <div className="card-footer">
                    <div className="card-tag">
                      {"\n                                "}
                      <strong>
                        Best for:
                      </strong>
                      {"\n                                Businesses with an existing website that feels outdated, unclear or difficult to use.\n                            "}
                    </div>
                    {"\n\n                            "}
                    <span className="card-arrow">
                      {"\n                                "}
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      {"\n                            "}
                    </span>
                    {"\n\n                        "}
                  </div>
                </article>
              </div>
              <div className="project-supporting-note">
                {"\n\n                    "}
                <strong>
                  Not sure which option fits?
                </strong>
                {"\n\n                    Select the closest match and we'll help define the right solution during the conversation.\n\n                "}
              </div>
              <div className="project-continue-row">
                {"\n\n                    "}
                <span className="continue-status" id="continueStatus">
                  {"\n\n                        Select a project type to continue\n\n                    "}
                </span>
                {"\n\n                    "}
                <button className="btn-primary continue-btn" id="continueBtn" type="button" disabled>
                  {"\n\n                        Continue\n\n                        "}
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                  {"\n\n                    "}
                </button>
                {"\n\n                "}
              </div>
            </div>
          </section>
          <section className="problem project-details-section" id="projectDetailsSection" style={{ "display": "none" }}>
            <div className="prob-cont">
              <div className="back-row">
                {"\n\n                    "}
                <button className="back-btn" id="backBtn" type="button">
                  {"\n\n                        "}
                  <span className="back-arrow">
                    {"\n                            ←\n                        "}
                  </span>
                  {"\n\n                        Back\n\n                    "}
                </button>
                {"\n\n                "}
              </div>
              <div id="branchContent"></div>
            </div>
          </section>
          <section className="problem contact-details-section">
            <div className="prob-cont prob-conts">
              <div className="contact-row">
                <div className="contact-col-left">
                  <p className="eyebrow">
                    {"\n                            Your Details\n                        "}
                  </p>
                  <h2 className="heading">
                    {"\n                            How can we get back to you?\n                        "}
                  </h2>
                  <p className="descr">
                    {"\n                            Share your contact details and we'll get back to you about your project.\n                        "}
                  </p>
                  <form id="projectEnquiryForm" noValidate>
                    <div className="contact-form-grid">
                      <div className="form-field">
                        {"\n                                    "}
                        <label htmlFor="fullName">
                          Full Name
                        </label>
                        {"\n                                    "}
                        <input type="text" id="fullName" placeholder="Your name" required />
                        {"\n                                    "}
                        <small className="error-message"></small>
                        {"\n                                "}
                      </div>
                      <div className="form-field">
                        {"\n                                    "}
                        <label htmlFor="email">
                          Email Address
                        </label>
                        {"\n                                    "}
                        <input type="email" id="email" placeholder="you@example.com" required />
                        {"\n                                    "}
                        <small className="error-message"></small>
                        {"\n                                "}
                      </div>
                      <div className="form-field">
                        {"\n                                    "}
                        <label htmlFor="phone">
                          WhatsApp / Phone
                        </label>
                        {"\n                                    "}
                        <input type="text" id="phone" placeholder="Your WhatsApp number" />
                        {"\n                                "}
                      </div>
                    </div>
                    <div className="contact-footer">
                      <p className="privacy-note">
                        {"\n                                    We'll only use your details to respond to your enquiry and discuss your project.\n                                "}
                      </p>
                      {"\n                                "}
                      <button type="submit" className="btn-primary enquiry-submit-btn">
                        {"\n                                    Send Enquiry\n                                    "}
                        <i className="fas fa-angle-right" aria-hidden="true"></i>
                        {"\n                                "}
                      </button>
                      {"\n                            "}
                    </div>
                  </form>
                </div>
                <div className="contact-col-right">
                  {"\n                        "}
                  <picture>
                    {"\n                            "}
                    <source type="image/webp" srcSet="assets/contact-form-img-640.webp 640w, assets/contact-form-img-1024.webp 1024w" sizes="(min-width: 769px) 700px, max(calc(100vw - 40px), 400px)" />
                    {"\n                            "}
                    <img src="/assets/contact-form-img.jpg" alt="Team collaborating on a project" loading="lazy" width="1024" height="1024" decoding="async" />
                    {"\n                        "}
                  </picture>
                  {"\n                    "}
                </div>
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
      <script defer src="/static/js/contact.js" />
    </>
  );
}
