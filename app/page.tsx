import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
title: "Nexora Studio | Web Design Kisii & Website Development Kenya",
description: "Web design and website development in Kisii, Kenya for salons, barbershops, spas and SMEs. Mobile-first sites with WhatsApp booking and SEO foundations.",
keywords: "web design Kisii, website development Kenya, website design Kenya, salon website, barbershop website, booking website, beauty wellness web design, small business website Kisii",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/",
    "x-default": "https://nexoraio.vercel.app/",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/",
  title: "Nexora Studio | Web Design Kisii & Website Development Kenya",
  description: "Web design and website development in Kisii, Kenya for salons, barbershops, spas and SMEs - with WhatsApp booking and SEO foundations.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Nexora Studio - web design and website development studio in Kisii, Kenya"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Nexora Studio | Web Design Kisii & Website Development Kenya",
  description: "Web design and website development in Kisii, Kenya for salons, barbershops, spas and SMEs. Mobile-first sites with WhatsApp booking and SEO foundations.",
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
      "image": "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
      "description": "Web design studio in Kisii, Kenya building business websites, booking systems, WhatsApp integrations, SEO foundations and growth infrastructure for salons, barbershops, spas and SMEs across Kenya.",
      "priceRange": "KES 15,000 - KES 250,000",
      "telephone": "+254713324672",
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
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://nexoraio.vercel.app/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nexoraio.vercel.app/#website",
      "url": "https://nexoraio.vercel.app/",
      "name": "Nexora Studio",
      "inLanguage": "en-KE",
      "publisher": {
        "@id": "https://nexoraio.vercel.app/#business"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nexoraio.vercel.app/#homepage",
      "url": "https://nexoraio.vercel.app/",
      "name": "Website Design in Kisii & Kenya | Nexora Studio",
      "isPartOf": {
        "@id": "https://nexoraio.vercel.app/#website"
      },
      "about": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "inLanguage": "en-KE"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with service-based businesses, particularly salons, barbershops, spas, beauty businesses, and other local businesses that want to build a professional online presence, attract more customers, and make it easier for people to discover and contact them."
          }
        },
        {
          "@type": "Question",
          "name": "What does Nexora actually provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexora designs and builds modern, high-performance websites and digital experiences for businesses. Depending on your needs, this can include website design and development, responsive layouts, SEO foundations, WhatsApp booking, integrations, ongoing maintenance, and other features that help your business operate and grow online."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with businesses outside Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While Nexora is based in Kisii, Kenya, we serve Nairobi, Kisumu, Eldoret, Nakuru, Mombasa and work with businesses internationally. Projects can be handled remotely, with communication, design, development, and delivery managed online."
          }
        },
        {
          "@type": "Question",
          "name": "How does the process work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We keep the process straightforward: Discovery → Strategy → Design → Development → Review → Launch. We first understand your business and goals, then plan and build the website around them. You review the work before launch, and once everything is approved, we take it live."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a project take",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines depend on the scope and complexity of the website. A focused landing page can be completed relatively quickly, while larger multi-page websites and custom features require more time. We agree on a clear timeline before development begins."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Launch is not necessarily the end of the relationship. We can help with updates, maintenance, improvements, troubleshooting, and ongoing website support so your website continues to work properly as your business grows."
          }
        },
        {
          "@type": "Question",
          "name": "Can Nexora maintain the website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Nexora can provide ongoing website maintenance after launch, including content updates, technical fixes, improvements, performance checks, and other changes your business may need."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide SEO foundations as part of relevant website projects, including search-friendly structure, metadata, performance considerations, mobile responsiveness, and other technical best practices. For businesses that need a more extensive SEO strategy, additional services can be discussed."
          }
        },
        {
          "@type": "Question",
          "name": "Can customers book through WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can integrate WhatsApp into your website so customers can quickly contact your business or start a booking conversation. This is particularly useful for businesses such as salons, spas, barbershops, clinics, hospitality businesses, and service providers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply get in touch with Nexora and tell us about your business, what you want to achieve, and what you need help with. We’ll discuss your requirements, recommend the right approach, and outline the next steps before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website pricing depends on the type of website, its features, and the level of customization required. We don't use a one-size-fits-all price because every business has different needs. After understanding your requirements, we'll recommend the right solution and provide a clear quote before the project begins."
          }
        },
        {
          "@type": "Question",
          "name": "How much do I pay before the project starts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Projects can be started with either full payment upfront or a 50% deposit, depending on the agreed payment arrangement. For projects using the 50% deposit option, the remaining 50% is due before the website is launched. The payment terms are confirmed clearly before development begins."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
        <SiteHeader variant={"dark"} isHome={true} waText={"Hi Nexora, I'm on the homepage and would like to start a conversation about building a stronger digital system for my business."} waEncodeApos />
        <main>
          <section className="hero-wrapper">
            <div className="hero-cont">
              <p className="eyebrow">
                Digital Systems for Ambitious Businesses
              </p>
              <h1 className="hero-header">
                Web design in Kisii that moves your business forward.
              </h1>
              <p className="hero-descr">
                Nexora Studio is a website design and development studio in Kisii, Kenya, building fast, mobile-first websites for salons, barbershops, spas and businesses across Kenya — with booking flows, WhatsApp integration and SEO foundations built in.
              </p>
              <div className="hero-cta">
                {"\n                    "}
                <a href="#explore-nexora" className="btn-primary">
                  Explore Nexora 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n\n                    "}
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%27m%20using%20the%20homepage%20menu%20and%20would%20like%20to%20talk%20about%20how%20Nexora%20can%20help%20my%20business%20move%20forward." target="_blank" rel="noopener" className="btn-secondary">
                  Start a Conversation
                </a>
                {"\n                "}
              </div>
            </div>
            <div className="stats">
              <h2 className="stat-header">
                {"\n                    BUILT FOR BUSINESSES READY TO GROW WITH INTENT\n                "}
              </h2>
              <div className="stat-carousel">
                <div className="step">
                  <div className="stat-value beauty-font salon">
                    SALONS
                  </div>
                  <div className="stat-value beauty-font barber">
                    BARBERSHOP
                  </div>
                  <div className="stat-value beauty-font spa">
                    SPAS
                  </div>
                  <div className="stat-value beauty-font wellness">
                    WELLNESS
                  </div>
                  <div className="stat-value beauty-font beauty">
                    BEAUTY
                  </div>
                  <div className="stat-value beauty-font salon">
                    SALONS
                  </div>
                  <div className="stat-value beauty-font barber">
                    BARBERSHOP
                  </div>
                  <div className="stat-value beauty-font spa">
                    SPAS
                  </div>
                  <div className="stat-value beauty-font wellness">
                    WELLNESS
                  </div>
                  <div className="stat-value beauty-font beauty">
                    BEAUTY
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem" id="explore-nexora">
            <div className="prob-cont">
              <p className="eyebrow">
                The Problem
              </p>
              <h2 className="heading">
                {"\n                    Your business can’t scale on a digital foundation built to hold it back\n                "}
              </h2>
              <p className="descr">
                When your digital presence, customer journey and internal systems work in isolation, growth becomes harder than it should be — making it harder to get discovered, convert interest, operate efficiently and scale with confidence.
              </p>
              <div className="filters">
                <div className="option active" data-target="one">
                  Hard to Discover
                </div>
                <div className="option" data-target="two">
                  Hard to convert
                </div>
                <div className="option" data-target="three">
                  Hard to operate
                </div>
                <div className="option" data-target="four">
                  Hard to scale
                </div>
              </div>
              <div className="problem-grid">
                <div className="card one active-card">
                  {"\n                        "}
                  <picture>
                    {"\n                            "}
                    <source type="image/webp" srcSet="/assets/Hard-to-be-discovered-640.webp 640w, /assets/Hard-to-be-discovered-1024.webp 1024w, /assets/Hard-to-be-discovered-1536.webp 1536w" sizes="(min-width: 1024px) max(calc(100vw - 160px), 990px), max(calc(100vw - 60px), 390px)" />
                    {"\n                            "}
                    <img loading="lazy" src="/assets/Hard-to-be-discovered.png" alt="Hard to discover" width="1536" height="1024" decoding="async" />
                    {"\n                        "}
                  </picture>
                  {"\n                    "}
                </div>
                <div className="card two">
                  {"\n                        "}
                  <picture>
                    {"\n                            "}
                    <source type="image/webp" srcSet="assets/hard-to-convert-640.webp 640w, assets/hard-to-convert-1024.webp 1024w, assets/hard-to-convert-1536.webp 1536w" sizes="(min-width: 1024px) max(calc(100vw - 160px), 990px), max(calc(100vw - 60px), 390px)" />
                    {"\n                            "}
                    <img loading="lazy" src="/assets/hard-to-convert.png" alt="Hard to convert" width="1536" height="1024" decoding="async" />
                    {"\n                        "}
                  </picture>
                  {"\n                    "}
                </div>
                <div className="card three">
                  {"\n                        "}
                  <picture>
                    {"\n                            "}
                    <source type="image/webp" srcSet="/assets/hard-to-operate-640.webp 640w, /assets/hard-to-operate-1024.webp 1024w, /assets/hard-to-operate-1536.webp 1536w" sizes="(min-width: 1024px) max(calc(100vw - 160px), 990px), max(calc(100vw - 60px), 390px)" />
                    {"\n                            "}
                    <img loading="lazy" src="/assets/hard-to-operate.png" alt="Hard to operate" width="1536" height="1024" decoding="async" />
                    {"\n                        "}
                  </picture>
                  {"\n                    "}
                </div>
                <div className="card four">
                  {"\n                        "}
                  <picture>
                    {"\n                            "}
                    <source type="image/webp" srcSet="/assets/hard-to-scale-640.webp 640w, /assets/hard-to-scale-1024.webp 1024w, /assets/hard-to-scale-1536.webp 1536w" sizes="(min-width: 1024px) max(calc(100vw - 160px), 990px), max(calc(100vw - 60px), 390px)" />
                    {"\n                            "}
                    <img loading="lazy" src="/assets/hard-to-scale.png" alt="Hard to scale" width="1536" height="1024" decoding="async" />
                    {"\n                        "}
                  </picture>
                  {"\n                    "}
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences">
            <div className="prob-cont consequences-cont">
              <p className="eyebrow">
                The Cost Of Disconnected Growth
              </p>
              <h2 className="heading">
                {"\n                    When your digital foundation falls behind, growth starts leaking through the gaps.\n                "}
              </h2>
              <p className="descr">
                Every weak touchpoint creates friction — from being discovered to earning trust, converting interest and managing the customer journey. Over time, those small gaps become lost opportunities and slower growth.
              </p>
              <div className="consequences-grid">
                <div className="card">
                  {"\n                        "}
                  <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    {"\n\n                            "}
                    {"\n                            "}
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="8" y="12" width="18" height="13" rx="3" fill="#00C8FF"></rect>
                    {"\n                            "}
                    <rect x="38" y="10" width="17" height="12" rx="3" fill="#5CE0F5"></rect>
                    {"\n                            "}
                    <rect x="42" y="37" width="14" height="11" rx="3" fill="#00C8FF"></rect>
                    {"\n                            "}
                    <rect x="8" y="40" width="16" height="11" rx="3" fill="#7AE8F7"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="13" cy="18" r="2" fill="#0088FF"></circle>
                    {"\n                            "}
                    <circle cx="47" cy="16" r="2" fill="#0088FF"></circle>
                    {"\n                            "}
                    <circle cx="49" cy="42" r="2" fill="#0088FF"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="19" y="23" width="27" height="22" rx="4" fill="#00A9D9"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="23" y="27" width="13" height="3" rx="1.5" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="23" y="33" width="18" height="2.5" rx="1.25" fill="#B8F3FA"></rect>
                    {"\n                            "}
                    <rect x="23" y="38" width="10" height="3" rx="1.5" fill="#B8F3FA"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="35" y="18" width="19" height="15" rx="3" fill="#315BFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="39" y="22" width="10" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="39" y="27" width="7" height="2.5" rx="1.25" fill="#A9BBFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="52" cy="19" r="3" fill="#FF1744"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="17" cy="49" r="3" fill="#526574"></circle>
                    {"\n                            "}
                    <circle cx="27" cy="49" r="2" fill="#91A5B2"></circle>
                    {"\n\n                        "}
                  </svg>
                  {"\n\n                        "}
                  <h3 className="heading">
                    Customers notice competitors
                  </h3>
                  <p className="descr">
                    A business website surrounded by competing digital signals, notifications, and content cards, with the business visually pushed into the background.
                  </p>
                </div>
                <div className="card">
                  {"\n                        "}
                  <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    {"\n\n                            "}
                    {"\n                            "}
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="8" y="9" width="48" height="43" rx="6" fill="#FFFFFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="8" y="9" width="48" height="11" rx="6" fill="#0088FF"></rect>
                    {"\n                            "}
                    <rect x="8" y="15" width="48" height="5" fill="#0088FF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="14" cy="14.5" r="2" fill="#FFFFFF"></circle>
                    {"\n                            "}
                    <circle cx="20" cy="14.5" r="2" fill="#FFFFFF"></circle>
                    {"\n                            "}
                    <circle cx="26" cy="14.5" r="2" fill="#FFFFFF"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="13" y="25" width="21" height="17" rx="3" fill="#9DEEFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="17" y="29" width="13" height="3.5" rx="1.75" fill="#0057D9"></rect>
                    {"\n                            "}
                    <rect x="17" y="35" width="16" height="2.5" rx="1.25" fill="#00A9D9"></rect>
                    {"\n                            "}
                    <rect x="17" y="39" width="10" height="2.5" rx="1.25" fill="#70DDF0"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="38" y="25" width="12" height="8" rx="2.5" fill="#E1F3F8"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="40" y="27" width="7" height="2.5" rx="1.25" fill="#788894"></rect>
                    {"\n                            "}
                    <circle cx="48" cy="36" r="3" fill="#FF1744"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="38" y="39" width="15" height="4" rx="2" fill="#315BFF"></rect>
                    {"\n                            "}
                    <rect x="40" y="40" width="7" height="2" rx="1" fill="#FFFFFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="13" y="46" width="10" height="2.5" rx="1.25" fill="#8DEBFF"></rect>
                    {"\n                            "}
                    <rect x="27" y="46" width="7" height="2.5" rx="1.25" fill="#B9E8F2"></rect>
                    {"\n                            "}
                    <rect x="38" y="46" width="15" height="2.5" rx="1.25" fill="#5BC6E0"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="51" cy="14" r="3.5" fill="#FF1744"></circle>
                    {"\n                            "}
                    <rect x="50" y="12.2" width="2" height="4" rx="1" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <circle cx="51" cy="17.3" r="0.8" fill="#FFFFFF"></circle>
                    {"\n\n                        "}
                  </svg>
                  {"\n\n                        "}
                  <h3 className="heading">
                    A weak digital presence erodes trust
                  </h3>
                  <p className="descr">
                    A polished business interface with subtle inconsistencies, outdated elements, broken visual hierarchy, and fragmented details that weaken its credibility.
                  </p>
                </div>
                <div className="card">
                  {"\n                        "}
                  <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    {"\n\n                            "}
                    {"\n                            "}
                    {"\n\n                            "}
                    {"\n                            "}
                    <path d="M10 31H20L25 24H34L39 31H47" fill="none" stroke="#0088FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="11" cy="31" r="5" fill="#00C8FF"></circle>
                    {"\n                            "}
                    <circle cx="11" cy="31" r="2" fill="#FFFFFF"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="19" y="25" width="12" height="12" rx="3" fill="#0057D9"></rect>
                    {"\n                            "}
                    <rect x="22" y="28" width="6" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="22" y="32" width="4" height="2" rx="1" fill="#9FB5FF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <path d="M34 27L38 35" stroke="#FF1744" strokeWidth="3.2" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    <path d="M38 27L34 35" stroke="#FF1744" strokeWidth="3.2" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    {"\n                            "}
                    <path d="M40 31H45" fill="none" stroke="#7DB6C8" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 3"></path>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="46" y="24" width="10" height="14" rx="3" fill="#78B9CC"></rect>
                    {"\n\n                            "}
                    <rect x="49" y="28" width="5" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="49" y="32" width="4" height="2" rx="1" fill="#B9E8F2"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="50" cy="45" r="5" fill="#FF1744"></circle>
                    {"\n                            "}
                    <path d="M48 43L52 47M52 43L48 47" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="14" y="45" width="18" height="5" rx="2.5" fill="#8DEBFF"></rect>
                    {"\n                            "}
                    <rect x="17" y="46.5" width="8" height="2" rx="1" fill="#0088FF"></rect>
                    {"\n\n                        "}
                  </svg>
                  {"\n\n                        "}
                  <h3 className="heading">
                    Friction turns interest into lost opportunities
                  </h3>
                  <p className="descr">
                    A customer journey toward booking, inquiry, or purchase that becomes fragmented, interrupted, or disconnected before completion.
                  </p>
                </div>
                <div className="card">
                  {"\n                        "}
                  <svg width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    {"\n\n                            "}
                    {"\n                            "}
                    {"\n\n                            "}
                    {"\n                            "}
                    <path d="M18 22C25 22 25 32 32 32" fill="none" stroke="#0088FF" strokeWidth="3.5" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    <path d="M46 22C39 22 39 32 32 32" fill="none" stroke="#00C8FF" strokeWidth="3.5" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    <path d="M32 32C25 32 25 43 18 43" fill="none" stroke="#315BFF" strokeWidth="3.5" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    <path d="M32 32C39 32 39 43 46 43" fill="none" stroke="#0088FF" strokeWidth="3.5" strokeLinecap="round"></path>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="32" cy="32" r="8" fill="#0057D9"></circle>
                    {"\n                            "}
                    <circle cx="32" cy="32" r="3" fill="#FFFFFF"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="8" y="14" width="18" height="14" rx="3.5" fill="#00C8FF"></rect>
                    {"\n                            "}
                    <rect x="12" y="18" width="9" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="12" y="22" width="6" height="2" rx="1" fill="#8DEBFF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="38" y="13" width="18" height="15" rx="3.5" fill="#315BFF"></rect>
                    {"\n                            "}
                    <rect x="42" y="17" width="10" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="42" y="21" width="7" height="2" rx="1" fill="#9FB5FF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="8" y="38" width="18" height="14" rx="3.5" fill="#0088FF"></rect>
                    {"\n                            "}
                    <rect x="12" y="42" width="9" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="12" y="46" width="6" height="2" rx="1" fill="#9DE8FF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <rect x="38" y="38" width="18" height="14" rx="3.5" fill="#00C8FF"></rect>
                    {"\n                            "}
                    <rect x="42" y="42" width="10" height="2.5" rx="1.25" fill="#FFFFFF"></rect>
                    {"\n                            "}
                    <rect x="42" y="46" width="6" height="2" rx="1" fill="#A5F0FF"></rect>
                    {"\n\n                            "}
                    {"\n                            "}
                    <circle cx="25" cy="32" r="2.5" fill="#FF1744"></circle>
                    {"\n                            "}
                    <circle cx="39" cy="32" r="2.5" fill="#FF1744"></circle>
                    {"\n\n                            "}
                    {"\n                            "}
                    <path d="M49 35L53 31L56 34" fill="none" stroke="#FF1744" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    {"\n\n                        "}
                  </svg>
                  {"\n                        "}
                  <h3 className="heading">
                    Disconnected systems slow business growth
                  </h3>
                  <p className="descr">
                    A growing business system surrounded by increasingly tangled tools, disconnected processes, and overlapping workflows that create friction and slow expansion.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem nexora-solution" id="solutions">
            <div className="prob-cont soln-cont">
              <p className="eyebrow">
                The NEXORA System
              </p>
              <h2 className="heading">
                {"\n                    One connected system for building, strengthening and growing your business.\n                "}
              </h2>
              <p className="descr">
                Nexora brings strategy, digital experience, business systems and intelligent execution together so your business can move from fragmented activity to coordinated growth.
              </p>
              <div className="soln-grid">
                <div className="card">
                  <div className="image">
                    {"\n                            "}
                    <picture>
                      {"\n                                "}
                      <source type="image/webp" srcSet="/assets/Hard-to-be-discovered-640.webp 640w, /assets/Hard-to-be-discovered-1024.webp 1024w, /assets/Hard-to-be-discovered-1536.webp 1536w" sizes="(min-width: 768px) max(calc((100vw - 208px) / 2), 480px), max(calc(100vw - 60px), 480px)" />
                      {"\n                                "}
                      <img src="/assets/Hard-to-be-discovered.png" alt="Illustration of a business that is difficult to discover online" loading="lazy" decoding="async" width="1536" height="1024" />
                      {"\n                            "}
                    </picture>
                    {"\n                        "}
                  </div>
                  <p className="eyebrow">
                    {"\n                            "}
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {"\n                                "}
                      <path d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z" fill="#7C5CFF"></path>
                      {"\n                                "}
                      <path d="M20 3L35 11.5L20 20L5 11.5L20 3Z" fill="#00D9FF"></path>
                      {"\n                                "}
                      <path d="M20 20V37L35 28.5V11.5L20 20Z" fill="#5B32E6"></path>
                      {"\n\n                                "}
                      <path d="M12 25L20 20L28 25" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      {"\n                            "}
                    </svg>
                    {"\n\n                            STRATEGY\n                        "}
                  </p>
                  <h2 className="heading">
                    Know where you're going.
                  </h2>
                  <p className="descr">
                    Build a clear strategic direction by understanding your position, identifying opportunities, and setting priorities that move the business forward. Turn ambition into focused decisions and a foundation built for sustainable growth.
                  </p>
                </div>
                <div className="card">
                  <div className="image">
                    {"\n                            "}
                    <picture>
                      {"\n                                "}
                      <source type="image/webp" srcSet="/assets/hard-to-convert-640.webp 640w, /assets/hard-to-convert-1024.webp 1024w, /assets/hard-to-convert-1536.webp 1536w" sizes="(min-width: 768px) max(calc((100vw - 208px) / 2), 480px), max(calc(100vw - 60px), 480px)" />
                      {"\n                                "}
                      <img src="/assets/hard-to-convert.png" alt="Illustration of a business website that struggles to convert visitors" loading="lazy" decoding="async" width="1536" height="1024" />
                      {"\n                            "}
                    </picture>
                    {"\n                        "}
                  </div>
                  <p className="eyebrow">
                    {"\n                            "}
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {"\n                                "}
                      <circle cx="20" cy="19" r="16" fill="#00D9FF"></circle>
                      {"\n                                "}
                      <path d="M4 19C4 10.163 11.163 3 20 3V35C11.163 35 4 27.837 4 19Z" fill="#7C5CFF"></path>
                      {"\n\n                                "}
                      <path d="M12 19H28" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M20 11V27" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"></path>
                      {"\n\n                                "}
                      <circle cx="20" cy="19" r="4.5" fill="#5B32E6"></circle>
                      {"\n                            "}
                    </svg>
                    {"\n\n                            EXPERIENCE\n                        "}
                  </p>
                  <h2 className="heading">
                    Create how people experience you.
                  </h2>
                  <p className="descr">
                    Shape the digital presence, customer journeys, and touchpoints that make your business easier to understand, trust, and choose. Turn every interaction into a clear, consistent experience that moves people from attention to action.
                  </p>
                </div>
                <div className="card">
                  <div className="image">
                    {"\n                            "}
                    <picture>
                      {"\n                                "}
                      <source type="image/webp" srcSet="/assets/hard-to-operate-640.webp 640w, /assets/hard-to-operate-1024.webp 1024w, /assets/hard-to-operate-1536.webp 1536w" sizes="(min-width: 768px) max(calc((100vw - 208px) / 2), 480px), max(calc(100vw - 60px), 480px)" />
                      {"\n                                "}
                      <img src="/assets/hard-to-operate.png" alt="Illustration of disconnected business systems that are hard to operate" loading="lazy" decoding="async" width="1536" height="1024" />
                      {"\n                            "}
                    </picture>
                    {"\n                        "}
                  </div>
                  <p className="eyebrow">
                    {"\n                            "}
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {"\n                                "}
                      <rect x="4" y="4" width="14" height="14" rx="3" fill="#00D9FF"></rect>
                      {"\n                                "}
                      <rect x="22" y="4" width="14" height="14" rx="3" fill="#7C5CFF"></rect>
                      {"\n                                "}
                      <rect x="4" y="22" width="14" height="14" rx="3" fill="#7C5CFF"></rect>
                      {"\n                                "}
                      <rect x="22" y="22" width="14" height="14" rx="3" fill="#5B32E6"></rect>
                      {"\n\n                                "}
                      <path d="M18 11H22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M11 18V22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M29 18V22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M18 29H22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                            "}
                    </svg>
                    {"\n\n                            SYSTEMS\n                        "}
                  </p>
                  <h2 className="heading">
                    Build how the business operates.
                  </h2>
                  <p className="descr">
                    Connect the tools, workflows, processes, and infrastructure that keep your business moving. Create systems that reduce friction, improve efficiency, and give the business the structure it needs to operate consistently and scale.
                  </p>
                </div>
                <div className="card">
                  <div className="image">
                    {"\n                            "}
                    <picture>
                      {"\n                                "}
                      <source type="image/webp" srcSet="/assets/hard-to-scale-640.webp 640w, /assets/hard-to-scale-1024.webp 1024w, /assets/hard-to-scale-1536.webp 1536w" sizes="(min-width: 768px) max(calc((100vw - 208px) / 2), 480px), max(calc(100vw - 60px), 480px)" />
                      {"\n                                "}
                      <img src="/assets/hard-to-scale.png" alt="Illustration of a digital foundation that is hard to scale" loading="lazy" decoding="async" width="1536" height="1024" />
                      {"\n                            "}
                    </picture>
                    {"\n                        "}
                  </div>
                  <p className="eyebrow">
                    {"\n                            "}
                    <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {"\n                                "}
                      <path d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z" fill="#7C5CFF"></path>
                      {"\n                                "}
                      <path d="M20 3L35 11.5L20 20L5 11.5L20 3Z" fill="#00D9FF"></path>
                      {"\n                                "}
                      <path d="M20 20L35 11.5V28.5L20 37V20Z" fill="#5B32E6"></path>
                      {"\n\n                                "}
                      <circle cx="20" cy="20" r="5.5" fill="#FFFFFF"></circle>
                      {"\n                                "}
                      <circle cx="20" cy="20" r="2.5" fill="#5B32E6"></circle>
                      {"\n\n                                "}
                      <path d="M20 11V14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M20 26V29" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M11 20H14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                                "}
                      <path d="M26 20H29" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"></path>
                      {"\n                            "}
                    </svg>
                    {"\n\n                            INTELLIGENCE\n                        "}
                  </p>
                  <h2 className="heading">
                    Turn information into better decisions.
                  </h2>
                  <p className="descr">
                    Transform data and business information into useful insight. Build the visibility, automation, and intelligent systems that help you understand what is happening, make better decisions, and execute with greater precision.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value">
            <div className="prob-cont value-cont">
              <p className="eyebrow">
                What Changes
              </p>
              <h2 className="heading">
                {"\n                    Turn digital complexity into business momentum.\n                "}
              </h2>
              <p className="descr">
                When your strategy, experience, systems and intelligence work together, your business becomes easier to discover, easier to trust, easier to operate and better equipped to grow.
              </p>
              <section className="stories">
                <div className="stories-wrapper">
                  <div className="stories-frame" id="storiesFrame">
                    <div className="frame-veil"></div>
                    <div className="stories-track" id="storiesTrack">
                      <article className="story-card" data-index="0">
                        <div className="story-content">
                          <blockquote className="story-quote">
                            {"\n                                A stronger digital presence helps the right customers discover your business, understand your value, and see why you’re different—building trust from the first interaction and making it easier to move from discovery to action.\n                            "}
                          </blockquote>
                          <p className="story-author">
                            {"\n                                "}
                            <strong>
                              Be easier to discover.
                            </strong>
                            {"\n                            "}
                          </p>
                        </div>
                        <div className="story-brand">
                          {"\n                                "}
                          <span className="story-brand-name">
                            {"\n                                    "}
                            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                              {"\n                                        "}
                              <path d="M6 5h20v5H6V5Z" fill="currentColor"></path>
                              {"\n                                        "}
                              <path d="M6 13h14v5H6v-5Z" fill="currentColor"></path>
                              {"\n                                        "}
                              <path d="M6 21h10v5H6v-5Z" fill="currentColor"></path>
                              {"\n                                    "}
                            </svg>
                            {"\n                                    More Visibility\n                                "}
                          </span>
                          {"\n                            "}
                        </div>
                      </article>
                      <article className="story-card" data-index="1">
                        <div className="story-content">
                          <blockquote className="story-quote">
                            {"\n                                Every digital touchpoint works together to create a more credible, consistent, and compelling customer experience—building trust at every stage and making it easier for the right people to choose your business.\n                            "}
                          </blockquote>
                          <p className="story-author">
                            {"\n                                "}
                            <strong>
                              Make your value easier to believe.
                            </strong>
                            {"\n                            "}
                          </p>
                        </div>
                        <div className="story-brand">
                          {"\n                                "}
                          <span className="story-brand-name">
                            {"\n                                    "}
                            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                              {"\n                                        "}
                              <path d="M16 4a12 12 0 1 0 12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                              {"\n                                        "}
                              <path d="M16 10v6l5 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                              {"\n                                    "}
                            </svg>
                            {"\n                                    More Trust\n                                "}
                          </span>
                          {"\n                            "}
                        </div>
                      </article>
                      <article className="story-card" data-index="2">
                        <div className="story-content">
                          <blockquote className="story-quote">
                            {"\n                                Connected systems and smarter workflows reduce unnecessary manual work, simplify complex processes, and give you greater visibility and control over how the business operates—so your team can move faster and focus on what matters.\n                            "}
                          </blockquote>
                          <p className="story-author">
                            {"\n                                "}
                            <strong>
                              Operate with less friction.
                            </strong>
                            {"\n                            "}
                          </p>
                        </div>
                        <div className="story-brand">
                          {"\n                            "}
                          <span className="story-brand-name">
                            {"\n                                "}
                            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                              {"\n                                    "}
                              <rect x="5" y="5" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="3"></rect>
                              {"\n                                    "}
                              <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                              {"\n                                "}
                            </svg>
                            {"\n\n                                More Control\n                            "}
                          </span>
                          {"\n                            "}
                        </div>
                      </article>
                      <article className="story-card" data-index="3">
                        <div className="story-content">
                          <blockquote className="story-quote">
                            {"\n                                A stronger digital foundation gives your business the infrastructure to adapt, improve, and scale with confidence—making it easier to pursue new opportunities without rebuilding what already works.\n                            "}
                          </blockquote>
                          <p className="story-author">
                            {"\n                                "}
                            <strong>
                              Build for the next stage of growth.
                            </strong>
                            {"\n                            "}
                          </p>
                        </div>
                        <div className="story-brand">
                          {"\n                            "}
                          <span className="story-brand-name">
                            {"\n                                "}
                            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                              {"\n                                    "}
                              <path d="M7 23 13 17l5 4 8-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                              {"\n                                    "}
                              <path d="M20 10h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                              {"\n                                "}
                            </svg>
                            {"\n\n                                More Momentum\n                            "}
                          </span>
                          {"\n                            "}
                        </div>
                      </article>
                    </div>
                    <div className="stories-dashes" id="storiesDashes" aria-hidden="true">
                      {"\n                        "}
                      <span className="dash is-active"></span>
                      {"\n                        "}
                      <span className="dash"></span>
                      {"\n                        "}
                      <span className="dash"></span>
                      {"\n                        "}
                      <span className="dash"></span>
                      {"\n                        "}
                    </div>
                  </div>
                  <nav className="stories-nav" id="storiesNav" aria-label="Client stories">
                    {"\n\n                        "}
                    <button className="stories-nav-item is-active" data-index="0" type="button">
                      {"\n                            "}
                      <span className="nav-dot">
                        {"\n                                "}
                        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          {"\n                                    "}
                          <path d="M6 5h20v5H6V5Z" fill="currentColor"></path>
                          {"\n                                    "}
                          <path d="M6 13h14v5H6v-5Z" fill="currentColor"></path>
                          {"\n                                    "}
                          <path d="M6 21h10v5H6v-5Z" fill="currentColor"></path>
                          {"\n                                "}
                        </svg>
                        {"\n                            "}
                      </span>
                      {"\n                            More Visibility\n                        "}
                    </button>
                    {"\n\n                        "}
                    <button className="stories-nav-item" data-index="1" type="button">
                      {"\n                            "}
                      <span className="nav-dot">
                        {"\n                                "}
                        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          {"\n                                    "}
                          <path d="M16 4a12 12 0 1 0 12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                          {"\n                                    "}
                          <path d="M16 10v6l5 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                          {"\n                                "}
                        </svg>
                        {"\n                            "}
                      </span>
                      {"\n                            More Trust\n                        "}
                    </button>
                    {"\n\n                        "}
                    <button className="stories-nav-item" data-index="2" type="button">
                      {"\n                            "}
                      <span className="nav-dot">
                        {"\n                                "}
                        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          {"\n                                    "}
                          <rect x="5" y="5" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="3"></rect>
                          {"\n                                    "}
                          <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                          {"\n                                "}
                        </svg>
                        {"\n                            "}
                      </span>
                      {"\n                            More Control\n                        "}
                    </button>
                    {"\n\n                        "}
                    <button className="stories-nav-item" data-index="3" type="button">
                      {"\n                            "}
                      <span className="nav-dot">
                        {"\n                                "}
                        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          {"\n                                    "}
                          <path d="M7 23 13 17l5 4 8-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                          {"\n                                    "}
                          <path d="M20 10h6v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                          {"\n                                "}
                        </svg>
                        {"\n                            "}
                      </span>
                      {"\n                            More Momentum\n                        "}
                    </button>
                    {"\n\n                    "}
                  </nav>
                </div>
              </section>
            </div>
          </section>
          <section className="problem consequences why-nexora">
            <div className="prob-cont consequences-cont why-cont">
              <p className="eyebrow">
                Why NEXORA
              </p>
              <h2 className="heading">
                {"\n                    We don't build isolated digital "}
                <br />
                {" assets. We build connected systems.\n                "}
              </h2>
              <p className="descr">
                A website can attract attention. A system can move a business. Nexora connects strategy, experience, operations and intelligence so every digital investment strengthens the next.
              </p>
              <div className="consequences-grid why-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            THINK BEYOND THE WEBSITE "}
                    <br />
                    {"\n                            "}
                    <span className="heading-span">
                      Start with the business, not the interface.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    {"\n                            "}
                    <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%27m%20interested%20in%20rethinking%20my%20business%20website%20so%20it%20can%20do%20more%20than%20just%20exist%20online.%20I%27d%20like%20to%20explore%20what%20Nexora%20could%20build%20for%20my%20business." target="_blank" rel="noopener">
                      {"\n                                A business website\n                            "}
                    </a>
                    {"\n                            surrounded by competing digital signals, notifications, and content cards, with the business visually pushed into the background.\n                        "}
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            CONNECT THE EXPERIENCE "}
                    <br />
                    {"\n                            "}
                    <span className="heading-span">
                      Every touchpoint should work together.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    Your website, customer journey, content and 
                    <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%27m%20interested%20in%20connecting%20my%20digital%20channels%20into%20one%20consistent%20customer%20experience.%20I%27d%20like%20to%20explore%20how%20Nexora%20can%20help." target="_blank" rel="noopener">
                      {"\n                        digital channels\n                        "}
                    </a>
                     should create one consistent experience instead of disconnected interactions.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            BUILD FOR THE BUSINESS"}
                    <br />
                    {"\n                            "}
                    <span className="heading-span">
                      Infrastructure matters as much as appearance.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We design systems and workflows that make the business easier to operate, 
                    <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%27m%20looking%20to%20improve%20how%20my%20business%20operates%20and%20build%20systems%20that%20can%20support%20the%20next%20stage%20of%20growth.%20I%27d%20like%20to%20discuss%20what%20Nexora%20can%20do." target="_blank" rel="noopener">
                      improve and scale.
                    </a>
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            DESIGN FOR WHAT'S NEXT "}
                    <br />
                    {"\n                            "}
                    <span className="heading-span">
                      Build something that can evolve.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    The goal isn't to create another rebuild six months from now. It's to 
                    <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%27m%20interested%20in%20establishing%20a%20strong%20digital%20foundation%20for%20my%20business%20that%20can%20adapt%20and%20scale%20as%20we%20grow.%20I%27d%20like%20to%20explore%20working%20with%20Nexora." target="_blank" rel="noopener">
                      establish a foundation
                    </a>
                     that can adapt as the business grows.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value work">
            <div className="prob-cont value-cont work-cont">
              <p className="eyebrow">
                Proof Through Work
              </p>
              <h2 className="heading">
                {"\n                    Can Nexora actually do this?\n                "}
              </h2>
              <p className="descr">
                The work is where strategy becomes tangible. Explore how we approach real business challenges through digital experiences, connected systems and thoughtful execution.
              </p>
              <div className="work-grid-container">
                <div className="card">
                  <div className="text-cont">
                    <h3 className="heading">
                      How we built a stronger presence for States Barbershop
                    </h3>
                    <div className="detail">
                      <div className="group">
                        <h4 className="title">
                          Client
                        </h4>
                        <p className="name">
                          States Barbershop
                        </p>
                      </div>
                      <div className="group">
                        <h4 className="title">
                          Industry
                        </h4>
                        <p className="name">
                          Barbershop
                        </p>
                      </div>
                    </div>
                    <div className="group">
                      <h4 className="title">
                        Challenge
                      </h4>
                      <p className="name">
                        States Barbershop lacked a dedicated website to showcase its services, team, reviews, location, and brand, leaving important information scattered across platforms and making it harder for customers to discover and trust the business online.
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="title">
                        Solution
                      </h4>
                      <p className="name">
                        {"Nexora Studio designed and developed a modern, mobile-friendly website that brings the entire customer journey into one place—showcasing the barbershop, services, team, reviews, location, and key information, with a direct path to WhatsApp for enquiries and bookings.\n                                "}
                        <br />
                        {"\n                                "}
                        <br />
                        {"\n                                The experience follows a simple journey:\n                                "}
                        <br />
                        {"\n                                "}
                        <b style={{ "color": "rgb(96, 91, 210)" }}>
                          Discover → Build Trust → Explore → Contact.
                        </b>
                        {"\n                            "}
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="title">
                        Outcome
                      </h4>
                      <p className="name">
                        States Barbershop now has a professional digital presence that clearly represents the brand, helps customers discover and understand the business, and provides a direct path to take action. The website also creates a strong foundation for Google, social media, referrals, and future digital growth.
                      </p>
                    </div>
                    <div className="detail">
                      <div className="group">
                        <h4 className="title">
                          Tech Stack
                        </h4>
                        <div className="grid">
                          <div className="name language">
                            {"\n                                            HTML\n                                        "}
                          </div>
                          <div className="name language">
                            {"\n                                            CSS\n                                        "}
                          </div>
                          <div className="name language">
                            {"\n                                            JavaScript\n                                        "}
                          </div>
                          <div className="name language">
                            {"\n                                            Vercel\n                                        "}
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <h4 className="title">
                          Project Overview
                        </h4>
                        <div className="group-link">
                          {"\n                                        "}
                          <a href="https://states-barbershop.vercel.app/" target="_blank" rel="noopener" className="link btn-primary">
                            Preview Website 
                            <i className="fas fa-angle-right" style={{ "fontSize": "12px" }} aria-hidden="true"></i>
                          </a>
                          {"\n                                        "}
                          {"\n                                    "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-cont">
                    <div className="image-main">
                      {"\n                                "}
                      <picture>
                        {"\n                                    "}
                        <source type="image/webp" srcSet="assets/proof-through-work/overlay-540.webp 540w, assets/proof-through-work/overlay-921.webp 921w" sizes="270px" />
                        {"\n                                    "}
                        <img loading="lazy" src="/assets/proof-through-work/overlay.png" alt="Nexora digital experience" width="921" height="1708" decoding="async" />
                        {"\n                                "}
                      </picture>
                      {"\n                            "}
                    </div>
                    <div className="image-secondary">
                      {"\n                                "}
                      <picture>
                        {"\n                                    "}
                        <source type="image/webp" srcSet="assets/proof-through-work/main-540.webp 540w, assets/proof-through-work/main-921.webp 921w" sizes="267px" />
                        {"\n                                    "}
                        <img src="/assets/proof-through-work/main.png" alt="States Barbershop website homepage designed and built by Nexora Studio" loading="lazy" decoding="async" width="921" height="1708" />
                        {"\n                                "}
                      </picture>
                      {"\n                            "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrows">
              <div className="main">
                {"\n                    "}
                <button className="arrow arrow-left" aria-label="Previous">
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                </button>
                {"\n                    "}
                <button className="arrow arrow-right" aria-label="Next">
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
                {"\n                "}
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora" id="capabilities">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont">
              <p className="eyebrow">
                How We Work
              </p>
              <h2 className="heading">
                {"\n                    From clarity to execution, without unnecessary complexity.\n                "}
              </h2>
              <p className="descr">
                We work in focused stages that turn business goals into practical digital systems—aligning the strategy, experience and technology before moving into execution.
              </p>
              <div className="consequences-grid why-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       UNDERSTAND
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Start with the business
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    {"We examine your goals, customers, current digital presence and operational challenges to understand what actually needs to change.\n                        "}
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       DEFINE
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Turn insight into direction.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We establish the priorities, structure and experience required to create a clear path from where the business is today to where it needs to go.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       BUILD
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Turn the direction into reality.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We design and develop the digital experiences, systems and workflows required to solve the identified problems.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       LAUNCH
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Put the system into motion.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We test, refine and deploy the work so it is ready for real customers and real business operations.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        05.
                      </b>
                       IMPROVE
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make the system better over time.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We use feedback, data and new opportunities to refine the experience and strengthen the foundation as the business evolves.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value results">
            <div className="prob-cont value-cont results-cont">
              <p className="eyebrow">
                Results That Matter
              </p>
              <h2 className="heading">
                {"\n                    The work should move the business forward.\n                "}
              </h2>
              <p className="descr">
                We measure success by what changes after the work is done—not simply by what we deliver.
              </p>
              {"\n\n                "}
              <a href="/work" className="case-studies-btn btn-primary">
                {"\n                    View Case Studies "}
                <i className="fas fa-angle-right"></i>
                {"\n                "}
              </a>
              {"\n\n                "}
              <div className="consequences-grid result-grid">
                <div className="card">
                  <div className="heading">
                    <h3 className="title">
                      More visibility
                    </h3>
                  </div>
                  <p className="descr">
                    A stronger digital presence for the business
                  </p>
                </div>
                <div className="card">
                  <div className="heading">
                    <h3 className="title">
                      More trust
                    </h3>
                  </div>
                  <p className="descr">
                    A professional experience that helps customers understand the brand
                  </p>
                </div>
                <div className="card">
                  <div className="heading">
                    <h3 className="title">
                      More opportunities
                    </h3>
                  </div>
                  <p className="descr">
                    A clear path from discovery to enquiries and bookings
                  </p>
                </div>
                <div className="card">
                  <div className="heading">
                    <h3 className="title">
                      24
                      <span>
                        /
                      </span>
                      7
                    </h3>
                  </div>
                  <p className="descr">
                    A website customers can access anytime
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem value testimonial">
            <div className="prob-cont value-cont testimonial-cont">
              <p className="eyebrow">
                From The People We Work With
              </p>
              <h2 className="heading">
                {"\n                    The best proof comes from the people who experienced the work.\n                "}
              </h2>
              <p className="descr">
                Strategy and systems matter. So does the experience of working together.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {"\n                                        "}
                          <path fill="#4285F4" d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.21a4.45 4.45 0 0 1-1.93 2.92v2.42h3.13c1.83-1.69 2.94-4.18 2.94-7.37Z"></path>
                          {"\n                                        "}
                          <path fill="#34A853" d="M12 21.75c2.61 0 4.8-.86 6.41-2.33l-3.13-2.42c-.87.58-1.98.93-3.28.93-2.52 0-4.65-1.7-5.41-3.98H3.36v2.5A9.68 9.68 0 0 0 12 21.75Z"></path>
                          {"\n                                        "}
                          <path fill="#FBBC05" d="M6.59 13.95a5.82 5.82 0 0 1 0-3.9v-2.5H3.36a9.75 9.75 0 0 0 0 8.9l3.23-2.5Z"></path>
                          {"\n                                        "}
                          <path fill="#EA4335" d="M12 6.07c1.42 0 2.7.49 3.7 1.45l2.78-2.78C16.8 3.2 14.61 2.25 12 2.25a9.68 9.68 0 0 0-8.64 5.3l3.23 2.5C7.35 7.77 9.48 6.07 12 6.07Z"></path>
                          {"\n                                    "}
                        </svg>
                        {"\n\n                                    "}
                        <div className="cont">
                          <h3 className="title">
                            Clearer Path to Booking
                          </h3>
                          <p className="descr">
                            Everything feels much easier for customers now. They can see our services, understand what we offer, and contact us without having to search through different platforms.
                          </p>
                        </div>
                        <div className="credentials">
                          <div className="top">
                            <div className="top-flex">
                              <div className="images">
                                {"\n                                                    "}
                                <img loading="lazy" src="https://i.pinimg.com/1200x/bf/d6/b5/bfd6b5ead3e81c7d0ff530a2a6c98de3.jpg" alt="" />
                                {"\n                                                "}
                              </div>
                              <div className="details">
                                <p className="client">
                                  States Barbershop • 
                                  <span className="founder">
                                    Client
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="bottom">
                              <p className="industry">
                                {"\n                                                    States\n\n                                                    "}
                                <span className="company">
                                  {"\n                                                        Barbershop\n                                                    "}
                                </span>
                                {"\n                                                "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {"\n                                        "}
                          <path fill="#4285F4" d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.21a4.45 4.45 0 0 1-1.93 2.92v2.42h3.13c1.83-1.69 2.94-4.18 2.94-7.37Z"></path>
                          {"\n                                        "}
                          <path fill="#34A853" d="M12 21.75c2.61 0 4.8-.86 6.41-2.33l-3.13-2.42c-.87.58-1.98.93-3.28.93-2.52 0-4.65-1.7-5.41-3.98H3.36v2.5A9.68 9.68 0 0 0 12 21.75Z"></path>
                          {"\n                                        "}
                          <path fill="#FBBC05" d="M6.59 13.95a5.82 5.82 0 0 1 0-3.9v-2.5H3.36a9.75 9.75 0 0 0 0 8.9l3.23-2.5Z"></path>
                          {"\n                                        "}
                          <path fill="#EA4335" d="M12 6.07c1.42 0 2.7.49 3.7 1.45l2.78-2.78C16.8 3.2 14.61 2.25 12 2.25a9.68 9.68 0 0 0-8.64 5.3l3.23 2.5C7.35 7.77 9.48 6.07 12 6.07Z"></path>
                          {"\n                                    "}
                        </svg>
                        {"\n\n                                    "}
                        <div className="cont">
                          <h3 className="title">
                            A More Professional Presence
                          </h3>
                          <p className="descr">
                            The website finally gives our brand a professional home online. It makes a strong first impression and gives customers everything they need to know in one place.
                          </p>
                        </div>
                        <div className="credentials">
                          <div className="top">
                            <div className="top-flex">
                              <div className="images">
                                {"\n                                                    "}
                                <img loading="lazy" src="https://i.pinimg.com/736x/b1/34/99/b134994fcdca206150a4307a3b2dc0b9.jpg" alt="" />
                                {"\n                                                "}
                              </div>
                              <div className="details">
                                <p className="client">
                                  Spa & Wellness • 
                                  <span className="founder">
                                    Client
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="bottom">
                              <p className="industry">
                                {"\n                                                    Spa\n\n                                                    "}
                                <span className="company">
                                  {"\n                                                        Wellness\n                                                    "}
                                </span>
                                {"\n                                                "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {"\n                                        "}
                          <path fill="#4285F4" d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.21a4.45 4.45 0 0 1-1.93 2.92v2.42h3.13c1.83-1.69 2.94-4.18 2.94-7.37Z"></path>
                          {"\n                                        "}
                          <path fill="#34A853" d="M12 21.75c2.61 0 4.8-.86 6.41-2.33l-3.13-2.42c-.87.58-1.98.93-3.28.93-2.52 0-4.65-1.7-5.41-3.98H3.36v2.5A9.68 9.68 0 0 0 12 21.75Z"></path>
                          {"\n                                        "}
                          <path fill="#FBBC05" d="M6.59 13.95a5.82 5.82 0 0 1 0-3.9v-2.5H3.36a9.75 9.75 0 0 0 0 8.9l3.23-2.5Z"></path>
                          {"\n                                        "}
                          <path fill="#EA4335" d="M12 6.07c1.42 0 2.7.49 3.7 1.45l2.78-2.78C16.8 3.2 14.61 2.25 12 2.25a9.68 9.68 0 0 0-8.64 5.3l3.23 2.5C7.35 7.77 9.48 6.07 12 6.07Z"></path>
                          {"\n                                    "}
                        </svg>
                        {"\n\n                                    "}
                        <div className="cont">
                          <h3 className="title">
                            Easier for Customers to Discover Us
                          </h3>
                          <p className="descr">
                            Customers can now quickly see our services, location, and what makes us different. It has made our online presence much clearer and more organized.
                          </p>
                        </div>
                        <div className="credentials">
                          <div className="top">
                            <div className="top-flex">
                              <div className="images">
                                {"\n                                                    "}
                                <img loading="lazy" src="https://i.pinimg.com/1200x/f2/8c/da/f28cdabe70e63432b7bae68d21be0a9b.jpg" alt="" />
                                {"\n                                                "}
                              </div>
                              <div className="details">
                                <p className="client">
                                  Salon & Beauty • 
                                  <span className="founder">
                                    Client
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="bottom">
                              <p className="industry">
                                {"\n                                                    Salon\n\n                                                    "}
                                <span className="company">
                                  {"\n                                                        Beauty\n                                                    "}
                                </span>
                                {"\n                                                "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {"\n                                        "}
                          <path fill="#4285F4" d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.21a4.45 4.45 0 0 1-1.93 2.92v2.42h3.13c1.83-1.69 2.94-4.18 2.94-7.37Z"></path>
                          {"\n                                        "}
                          <path fill="#34A853" d="M12 21.75c2.61 0 4.8-.86 6.41-2.33l-3.13-2.42c-.87.58-1.98.93-3.28.93-2.52 0-4.65-1.7-5.41-3.98H3.36v2.5A9.68 9.68 0 0 0 12 21.75Z"></path>
                          {"\n                                        "}
                          <path fill="#FBBC05" d="M6.59 13.95a5.82 5.82 0 0 1 0-3.9v-2.5H3.36a9.75 9.75 0 0 0 0 8.9l3.23-2.5Z"></path>
                          {"\n                                        "}
                          <path fill="#EA4335" d="M12 6.07c1.42 0 2.7.49 3.7 1.45l2.78-2.78C16.8 3.2 14.61 2.25 12 2.25a9.68 9.68 0 0 0-8.64 5.3l3.23 2.5C7.35 7.77 9.48 6.07 12 6.07Z"></path>
                          {"\n                                    "}
                        </svg>
                        {"\n\n                                    "}
                        <div className="cont">
                          <h3 className="title">
                            Built Around the Customer
                          </h3>
                          <p className="descr">
                            The whole experience feels intentional. From discovering the business to exploring the services and getting in touch, the website makes the next step obvious.
                          </p>
                        </div>
                        <div className="credentials">
                          <div className="top">
                            <div className="top-flex">
                              <div className="images">
                                {"\n                                                    "}
                                <img loading="lazy" src="https://i.pinimg.com/736x/ab/80/f3/ab80f3c9e645817f9bb62808878ee6d7.jpg" alt="" />
                                {"\n                                                "}
                              </div>
                              <div className="details">
                                <p className="client">
                                  Wellness Studio • 
                                  <span className="founder">
                                    Client
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="bottom">
                              <p className="industry">
                                {"\n                                                    Wellness\n\n                                                    "}
                                <span className="company">
                                  {"\n                                                        Studio\n                                                    "}
                                </span>
                                {"\n                                                "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                {"\n                    Everything you need to know before we start.\n                "}
              </h2>
              <p className="descr">
                Clear answers to the questions businesses usually have before working with Nexora.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Who do you work with?\n                            "}
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
                      {"\n\n                                We work with service-based businesses, particularly salons, barbershops, spas, beauty businesses, and other local businesses that want to build a professional online presence, attract more customers, and make it easier for people to discover and contact them.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What does Nexora actually provide?\n                            "}
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
                      {"\n\n                                Nexora designs and builds modern, high-performance websites and digital experiences for businesses. Depending on your needs, this can include website design and development, responsive layouts, SEO foundations, WhatsApp booking, integrations, ongoing maintenance, and other features that help your business operate and grow online.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you work with businesses outside Kenya?\n                            "}
                    </span>
                    {"\n\n\n                            "}
                    <span className="faq-icon">
                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                    </span>
                    {"\n\n\n                        "}
                  </button>
                  {"\n\n\n                        "}
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {"\n\n                                Yes. While Nexora is based in Kisii, Kenya, we serve Nairobi, Kisumu, Eldoret, Nakuru, Mombasa and work with businesses internationally. Projects can be handled remotely, with communication, design, development, and delivery managed online.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How does the process work?\n                            "}
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
                      {"\n\n                                We keep the process straightforward: Discovery → Strategy → Design → Development → Review → Launch. We first understand your business and goals, then plan and build the website around them. You review the work before launch, and once everything is approved, we take it live.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How long does a project take\n                            "}
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
                      {"\n\n                                Project timelines depend on the scope and complexity of the website. A focused landing page can be completed relatively quickly, while larger multi-page websites and custom features require more time. We agree on a clear timeline before development begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What happens after launch?\n                            "}
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
                      {"\n\n                                Launch is not necessarily the end of the relationship. We can help with updates, maintenance, improvements, troubleshooting, and ongoing "}
                      <a href="/services">
                        website support
                      </a>
                      {" so your website continues to work properly as your business grows.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can Nexora maintain the website?\n                            "}
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
                      {"\n                                Yes. Nexora can provide ongoing "}
                      <a href="/services">
                        website maintenance
                      </a>
                      {" after launch, including content updates, technical fixes, improvements, performance checks, and other changes your business may need.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do you provide SEO?\n                            "}
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
                      {"\n                                Yes. We provide SEO foundations as part of relevant website projects, including search-friendly structure, metadata, performance considerations, mobile responsiveness, and other technical best practices. For businesses that need a more extensive SEO strategy, additional services can be discussed.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can customers book through WhatsApp?\n                            "}
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
                      {"\n                                Yes. We can integrate WhatsApp into your website so customers can quickly contact your business or start a booking conversation. This is particularly useful for businesses such as salons, spas, barbershops, clinics, hospitality businesses, and service providers.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How do I get started?\n                            "}
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
                      {"\n                                Simply "}
                      <a href="/contact">
                        get in touch with Nexora
                      </a>
                      {" and tell us about your business, what you want to achieve, and what you need help with. We’ll discuss your requirements, recommend the right approach, and outline the next steps before any work begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a website cost?\n                            "}
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
                      {"\n                                Website pricing depends on the type of website, its features, and the level of customization required. We don't use a one-size-fits-all price because every business has different needs. After understanding your requirements, we'll recommend the right solution and provide a clear quote before the project begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much do I pay before the project starts?\n                            "}
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
                      {"\n                                Projects can be started with either full payment upfront or a 50% deposit, depending on the agreed payment arrangement. For projects using the 50% deposit option, the remaining 50% is due before the website is launched. The payment terms are confirmed clearly before development begins.\n\n                            "}
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
                Looking for something specific? Explore our 
                <a href="/salon-website-design-kenya">
                  salon website design
                </a>
                , 
                <a href="/barbershop-website-kenya">
                  barbershop websites
                </a>
                , 
                <a href="/spa-website-design-kenya">
                  spa websites
                </a>
                , 
                <a href="/beauty-wellness-web-design">
                  beauty and wellness web design
                </a>
                , 
                <a href="/booking-websites">
                  booking websites
                </a>
                , 
                <a href="/seo-services-kenya">
                  SEO services
                </a>
                 and 
                <a href="/web-design-kisii">
                  web design services in Kisii
                </a>
                .
              </p>
              <div className="hero-cta final">
                {"\n                    "}
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20reached%20the%20homepage%20final%20section%20and%20would%20like%20to%20discuss%20what%20we%20could%20build%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary btn-secondary" style={{ "border": "1.2px solid rgba(254, 254, 254, 0.218)" }}>
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

      <script defer src="/static/js/app.js" />
    </>
  );
}
