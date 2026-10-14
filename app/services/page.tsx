import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/services/style.css";
import "./page.css";

export const metadata: Metadata = {
title: "Web Design & Website Development Services | Nexora Studio",
description: "Web design and website development services: business sites, landing pages, booking flows, WhatsApp integration, SEO foundations and maintenance for Kenya.",
keywords: "web design services Kenya, website development services, salon website design, booking website, WhatsApp integration, SEO services Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/services",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/services",
    "x-default": "https://nexoraio.vercel.app/services",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/services",
  title: "Web Design & Website Development Services | Nexora Studio",
  description: "Business websites, conversion experiences, booking systems, WhatsApp flows, SEO & growth infrastructure across Kenya.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "Web design and website development services from Nexora Studio, Kenya"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Web Design & Website Development Services | Nexora Studio",
  description: "Web design and website development services: business sites, landing pages, booking flows, WhatsApp integration, SEO foundations and maintenance for Kenya.",
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
      "@type": "Service",
      "serviceType": "Website Design",
      "name": "Web Design Services in Kisii, Kenya",
      "provider": {
        "@id": "https://nexoraio.vercel.app/#business"
      },
      "url": "https://nexoraio.vercel.app/services",
      "areaServed": "Kenya",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nexora Services",
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
              "name": "Booking & WhatsApp Flows"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Foundations"
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
      "@id": "https://nexoraio.vercel.app/services#page",
      "url": "https://nexoraio.vercel.app/services",
      "name": "Web Design Services in Kisii, Kenya",
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
          "name": "Services",
          "item": "https://nexoraio.vercel.app/services"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Nexora build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexora designs and builds digital experiences and frontend-focused business solutions, including websites, landing pages, customer journeys, digital workflows, integrations with existing tools, SEO foundations, analytics setup and optimisation."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Nexora built for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexora works with businesses that want to improve how they present themselves online, attract and guide customers, and organise the processes behind their digital presence."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to know exactly what I need before contacting Nexora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You can come to us with a business problem rather than a predefined technical solution. We'll first understand what you're trying to achieve and then determine what should be built."
          }
        },
        {
          "@type": "Question",
          "name": "Can Nexora work with my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your existing website has a useful foundation, we can improve, restructure or extend it rather than automatically starting from zero."
          }
        },
        {
          "@type": "Question",
          "name": "Does Nexora build backend systems and payment integrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not currently. Our current focus is frontend development and digital experiences using technologies such as HTML, CSS and JavaScript. Backend development, custom payment processing and complex server-side integrations are outside our current service scope."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the scope. A focused website or landing page can move quickly, while a larger digital experience requires more planning, design, development and testing. We'll establish the expected timeline before development begins."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a project cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on the scope, complexity and requirements of the project. After understanding what needs to be built, we'll provide a clear scope and proposal before work begins."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after the website launches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Launch isn't necessarily the end. Depending on the project, Nexora can continue helping with improvements, SEO, performance, analytics and conversion optimisation as the business grows."
          }
        }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
        <section className="hero">
          <SiteHeader variant={"white"} isHome={false} waText={"Hi Nexora, I'm viewing your Services page and would like to discuss which digital solution fits my business."} waTextMobile={"Hi Nexora, I'm using the Services page menu and would like help choosing the right service for my business."} />
          <section className="service-hero">
            <h3 className="eyebrow">
              Nexora Services
            </h3>
            <h1 className="heading">
              {"\n                Web design and website development services built around how your business works.\n                "}
              <span>
                From high-converting digital experiences to connected business systems, Nexora Studio brings strategy, design and frontend technology together to build what your business needs to operate, compete and grow.
              </span>
              {"\n            "}
            </h1>
            <div className="cta-btn">
              {"\n                "}
              <a href="#digital-experiences" className="btn-primary">
                Explore our services 
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I'm%20on%20the%20Services%20hero%20section%20and%20want%20to%20explore%20the%20right%20digital%20services%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary service-secondary">
                Start a conversation
              </a>
              {"\n            "}
            </div>
          </section>
        </section>
        <main>
          <section className="problem capabilities" id="explore-services">
            <div className="prob-cont capabilities-cont">
              <p className="eyebrow">
                Our Digital Capabilities
              </p>
              <h2 className="heading">
                {"\n                    Everything your digital foundation needs to move forward.\n                "}
              </h2>
              <p className="descr">
                From the experience your customers see to the systems your team relies on, Nexora connects the critical pieces into one digital foundation.
              </p>
              <div className="cap-grid">
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Digital Experiences
                        </h3>
                        <p className="descr">
                          Build digital experiences that make your business easier to discover, trust, and choose.
                        </p>
                      </div>
                      {"\n\n                                "}
                      <a href="/web-design-kisii" className="start-now-btn btn-primary">
                        See Web Design in Kisii 
                        <i className="fas fa-angle-right"></i>
                      </a>
                      {"\n                            "}
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Business websites
                      </li>
                      <li className="serv-list">
                        Landing pages
                      </li>
                      <li className="serv-list">
                        UI/UX design
                      </li>
                      <li className="serv-list">
                        Service and product pages
                      </li>
                      <li className="serv-list">
                        Responsive web experiences
                      </li>
                      <li className="serv-list">
                        Conversion-focused experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A professional digital presence designed to turn visitors into customers.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Customer Experiences
                        </h3>
                        <p className="descr">
                          Make it easier for customers to interact with your business online.
                        </p>
                      </div>
                      {"\n\n                                "}
                      <a href="/booking-websites" className="start-now-btn btn-primary">
                        See Booking Websites 
                        <i className="fas fa-angle-right"></i>
                      </a>
                      {"\n                            "}
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Service menus
                      </li>
                      <li className="serv-list">
                        Product showcases
                      </li>
                      <li className="serv-list">
                        Online catalogues
                      </li>
                      <li className="serv-list">
                        Contact and enquiry forms
                      </li>
                      <li className="serv-list">
                        Booking interfaces
                      </li>
                      <li className="serv-list">
                        Interactive web experiences
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A smoother customer journey from discovering your business to taking action.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Web Infrastructure
                        </h3>
                        <p className="descr">
                          Build and launch websites that are fast, accessible, and ready for the web.
                        </p>
                      </div>
                      {"\n\n                                "}
                      <a href="/web-development-kisii" className="start-now-btn btn-primary">
                        See Web Development in Kisii 
                        <i className="fas fa-angle-right"></i>
                      </a>
                      {"\n                            "}
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        Responsive development
                      </li>
                      <li className="serv-list">
                        Mobile-first implementation
                      </li>
                      <li className="serv-list">
                        Website deployment
                      </li>
                      <li className="serv-list">
                        Domain configuration
                      </li>
                      <li className="serv-list">
                        Performance optimization
                      </li>
                      <li className="serv-list">
                        Cross-browser compatibility
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A reliable website that works properly across devices and is ready for real customers.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="cont">
                    <div className="heading">
                      <div className="title">
                        <h3>
                          Digital Growth
                        </h3>
                        <p className="descr">
                          Improve how your website performs, communicates, and converts.
                        </p>
                      </div>
                      {"\n\n                                "}
                      <a href="/web-design-kenya" className="start-now-btn btn-primary">
                        See Web Design in Kenya 
                        <i className="fas fa-angle-right"></i>
                      </a>
                      {"\n                                "}
                      <a href="/seo-services-kenya" className="start-now-btn btn-primary" style={{ "marginTop": "10px" }}>
                        See SEO Services in Kenya 
                        <i className="fas fa-angle-right"></i>
                      </a>
                      {"\n                            "}
                    </div>
                    <nav className="service-list">
                      <li className="serv-list">
                        On-page SEO
                      </li>
                      <li className="serv-list">
                        Google Business Profile setup
                      </li>
                      <li className="serv-list">
                        SEO-friendly website structure
                      </li>
                      <li className="serv-list">
                        Conversion optimization
                      </li>
                      <li className="serv-list">
                        Content structure
                      </li>
                      <li className="serv-list">
                        Website maintenance
                      </li>
                    </nav>
                    <h3 className="outcome">
                      Outcome
                    </h3>
                    <p className="descr">
                      A stronger online presence built to attract attention and turn it into action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities why-nexora experiences" id="digital-experiences">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                01 / Digital Experiences
              </p>
              <h2 className="heading">
                {"\n                    Create digital experiences people want to use.\n                "}
              </h2>
              <p className="descr">
                Your website is often the first interaction someone has with your business. Nexora designs and builds experiences that make that interaction clear, credible and easy to act on.
              </p>
              <div className="consequences-grid why-grid exp-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       BUSINESS WEBSITES
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      A digital presence built to represent your business properly.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Business websites
                    </li>
                    <li className="serv-list">
                      Landing pages
                    </li>
                    <li className="serv-list">
                      UI/UX design
                    </li>
                    <li className="serv-list">
                      Service and product pages
                    </li>
                    <li className="serv-list">
                      Responsive web experiences
                    </li>
                    <li className="serv-list">
                      Conversion-focused experiences
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       CONVERSION EXPERIENCES
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Turn attention into meaningful action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Landing-page journeys
                    </li>
                    <li className="serv-list">
                      Calls to action
                    </li>
                    <li className="serv-list">
                      Lead-generation flows
                    </li>
                    <li className="serv-list">
                      Enquiry experiences
                    </li>
                    <li className="serv-list">
                      Conversion-focused layouts
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       UX & INTERFACE DESIGN
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make every interaction feel intentional.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Information architecture
                    </li>
                    <li className="serv-list">
                      User flows
                    </li>
                    <li className="serv-list">
                      Interface design
                    </li>
                    <li className="serv-list">
                      Responsive layouts
                    </li>
                    <li className="serv-list">
                      Interaction patterns
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       CUSTOMER JOURNEYS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Remove friction between discovery and action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Booking journeys
                    </li>
                    <li className="serv-list">
                      Contact and enquiry flows
                    </li>
                    <li className="serv-list">
                      Service discovery
                    </li>
                    <li className="serv-list">
                      Customer touchpoints
                    </li>
                    <li className="serv-list">
                      Mobile-first experiences
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        05.
                      </b>
                       BUSINESS WEBSITES
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      A digital presence built to represent your business properly.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      SEO foundations
                    </li>
                    <li className="serv-list">
                      Performance
                    </li>
                    <li className="serv-list">
                      Accessibility
                    </li>
                    <li className="serv-list">
                      Deployment
                    </li>
                    <li className="serv-list">
                      Maintainable frontend structure
                    </li>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities why-nexora experiences" id="business-systems">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                02 / Business Systems
              </p>
              <h2 className="heading">
                {"\n                    Make the work behind the business simpler.\n                "}
              </h2>
              <p className="descr">
                Better digital experiences are only part of the equation. Nexora helps businesses organise the workflows, information and customer processes that support the experience behind the scenes.
              </p>
              <div className="consequences-grid why-grid exp-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       LEAD & ENQUIRY WORKFLOWS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Turn incoming interest into an organised process.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Lead capture
                    </li>
                    <li className="serv-list">
                      Enquiry organisation
                    </li>
                    <li className="serv-list">
                      Contact workflows
                    </li>
                    <li className="serv-list">
                      Follow-up structures
                    </li>
                    <li className="serv-list">
                      Customer information flows
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       BOOKING & CUSTOMER FLOWS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make it easier to move customers from interest to action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Booking flows
                    </li>
                    <li className="serv-list">
                      Appointment journeys
                    </li>
                    <li className="serv-list">
                      Confirmation flows
                    </li>
                    <li className="serv-list">
                      Customer touchpoints
                    </li>
                    <li className="serv-list">
                      Service selection
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       BUSINESS WORKFLOW AUTOMATION
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Reduce repetitive digital tasks.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Form-driven workflows
                    </div>
                    <div className="serv-list">
                      Notifications
                    </div>
                    <div className="serv-list">
                      Automated follow-ups
                    </div>
                    <div className="serv-list">
                      Data movement
                    </div>
                    <div className="serv-list">
                      Repetitive task reduction
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
                       OPERATIONAL INTERFACES
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Give teams clearer ways to manage digital processes.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <div className="serv-list">
                      Internal interfaces
                    </div>
                    <div className="serv-list">
                      Simple management tools
                    </div>
                    <div className="serv-list">
                      Workflow views
                    </div>
                    <div className="serv-list">
                      Data organisation
                    </div>
                    <div className="serv-list">
                      Operational utilities
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities why-nexora experiences" id="digital-connections">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                03 / Digital Connections
              </p>
              <h2 className="heading">
                {"\n                    Bring every digital touchpoint together.\n                "}
              </h2>
              <p className="descr">
                Your customers don't experience your business through one channel. Nexora creates connected digital experiences across your website, social channels, search presence and customer touchpoints so the journey feels consistent wherever it begins.
              </p>
              <div className="consequences-grid why-grid exp-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       WEBSITE & SOCIAL
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Create a consistent experience across your digital presence.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Website
                    </li>
                    <li className="serv-list">
                      Social profile links
                    </li>
                    <li className="serv-list">
                      Social CTAs
                    </li>
                    <li className="serv-list">
                      Campaign landing pages
                    </li>
                    <li className="serv-list">
                      Consistent brand experience
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       SEARCH & DISCOVERY
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make it easier for people to find and understand your business.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      SEO foundations
                    </li>
                    <li className="serv-list">
                      Search-friendly pages
                    </li>
                    <li className="serv-list">
                      Google Business Profile alignment
                    </li>
                    <li className="serv-list">
                      Location-focused content
                    </li>
                    <li className="serv-list">
                      Clear business information
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       CUSTOMER TOUCHPOINTS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Connect the moments between discovery and action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      WhatsApp click-to-chat
                    </li>
                    <li className="serv-list">
                      Click-to-call
                    </li>
                    <li className="serv-list">
                      Booking links
                    </li>
                    <li className="serv-list">
                      Contact forms
                    </li>
                    <li className="serv-list">
                      Enquiry CTAs
                    </li>
                    <li className="serv-list">
                      Google Maps links
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       DIGITAL TOUCHPOINTS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make every touchpoint consistent, accessible and ready to grow.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Responsive implementation
                    </li>
                    <li className="serv-list">
                      Performance
                    </li>
                    <li className="serv-list">
                      Accessibility
                    </li>
                    <li className="serv-list">
                      SEO structure
                    </li>
                    <li className="serv-list">
                      Deployment
                    </li>
                    <li className="serv-list">
                      Domain configuration
                    </li>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities why-nexora experiences" id="intelligence">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                04 / Intelligence & Optimization
              </p>
              <h2 className="heading">
                {"\n                    Turn insight into a better digital experience.\n                "}
              </h2>
              <p className="descr">
                A digital presence shouldn't stay static after launch. Nexora uses performance, search and user signals to identify opportunities, remove friction and continuously improve how your digital experience performs.
              </p>
              <div className="consequences-grid why-grid exp-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       SEARCH VISIBILITY
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Help the right people find your business.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      On-page SEO
                    </li>
                    <li className="serv-list">
                      Metadata
                    </li>
                    <li className="serv-list">
                      Search-friendly structure
                    </li>
                    <li className="serv-list">
                      Local SEO foundations
                    </li>
                    <li className="serv-list">
                      Google Business Profile alignment
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        02.
                      </b>
                       PERFORMANCE
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make the experience faster and more reliable.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Page speed
                    </li>
                    <li className="serv-list">
                      Image optimisation
                    </li>
                    <li className="serv-list">
                      Asset optimisation
                    </li>
                    <li className="serv-list">
                      Responsive performance
                    </li>
                    <li className="serv-list">
                      Frontend efficiency
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        03.
                      </b>
                       ANALYTICS & INSIGHTS
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Understand what visitors actually do.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Google Analytics setup
                    </li>
                    <li className="serv-list">
                      Search Console
                    </li>
                    <li className="serv-list">
                      Traffic insights
                    </li>
                    <li className="serv-list">
                      Page performance
                    </li>
                    <li className="serv-list">
                      Basic conversion signals
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       CONVERSION OPTIMISATION
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Remove friction between interest and action.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      CTA optimisation
                    </li>
                    <li className="serv-list">
                      Page structure
                    </li>
                    <li className="serv-list">
                      Content hierarchy
                    </li>
                    <li className="serv-list">
                      Form improvements
                    </li>
                    <li className="serv-list">
                      User-flow refinement
                    </li>
                    <li className="serv-list">
                      Landing-page optimisation
                    </li>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="problem capabilities why-nexora experiences" id="strategy">
            <div className="prob-cont capabilities-cont why-cont exp-cont">
              <p className="eyebrow">
                How We Work
              </p>
              <h2 className="heading">
                {"\n                    A clear process from idea to launch.\n                "}
              </h2>
              <p className="descr">
                Every project is different, but the principles stay the same: understand the problem, design the right solution, build carefully and improve continuously.
              </p>
              <div className="consequences-grid why-grid exp-grid">
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
                      Learn how the business works today.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Business goals
                    </li>
                    <li className="serv-list">
                      Customers
                    </li>
                    <li className="serv-list">
                      Current challenges
                    </li>
                    <li className="serv-list">
                      Existing systems
                    </li>
                  </nav>
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
                      Create the right structure before building.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Priorities
                    </li>
                    <li className="serv-list">
                      User journeys
                    </li>
                    <li className="serv-list">
                      Information architecture
                    </li>
                    <li className="serv-list">
                      Scope
                    </li>
                  </nav>
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
                      Design and develop the experience.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      Design
                    </li>
                    <li className="serv-list">
                      Frontend implementation
                    </li>
                    <li className="serv-list">
                      Testing
                    </li>
                    <li className="serv-list">
                      Refinement
                    </li>
                  </nav>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        04.
                      </b>
                       IMPROVE
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Keep making the system better.
                    </span>
                    {"\n                        "}
                  </h3>
                  <nav className="service-list">
                    <li className="serv-list">
                      SEO
                    </li>
                    <li className="serv-list">
                      Performance
                    </li>
                    <li className="serv-list">
                      Analytics
                    </li>
                    <li className="serv-list">
                      Optimisation
                    </li>
                  </nav>
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
                {"\n                    Questions before we build?\n                "}
              </h2>
              <p className="descr">
                A few answers to help you understand how Nexora works, what we build and what to expect.
              </p>
              <div className="faq-container">
                <div className="faq-item active">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What does Nexora build?\n                            "}
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
                      {"\n\n                                Nexora designs and builds digital experiences and frontend-focused business solutions, including websites, landing pages, customer journeys, digital workflows, integrations with existing tools, SEO foundations, analytics setup and optimisation.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Who is Nexora built for?\n                            "}
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
                      {"\n\n                                Nexora works with businesses that want to improve how they present themselves online, attract and guide customers, and organise the processes behind their digital presence.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Do I need to know exactly what I need before contacting Nexora?\n                            "}
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
                      {"\n\n                                No.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "13px" }}></div>
                      {"\n\n                                You can come to us with a business problem rather than a predefined technical solution. We'll first understand what you're trying to achieve and then determine what should be built.\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Can Nexora work with my existing website?\n                            "}
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
                      {"\n\n                                Yes.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "13px" }}></div>
                      {"\n\n                                If your existing website has a useful foundation, we can improve, restructure or extend it rather than automatically starting from zero.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                Does Nexora build backend systems and payment integrations?\n                            "}
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
                      {"\n\n                                Not currently.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "13px" }}></div>
                      {"\n\n                                Our current focus is frontend development and digital experiences using technologies such as HTML, CSS and JavaScript. Backend development, custom payment processing and complex server-side integrations are outside our current service scope.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How long does a project take?\n                            "}
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
                      {"\n\n                                It depends on the scope.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "5px" }}></div>
                      {"\n\n                                A focused website or landing page can move quickly, while a larger digital experience requires more planning, design, development and testing.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "13px" }}></div>
                      {"\n\n                                We'll establish the expected timeline before development begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                How much does a project cost?\n                            "}
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
                      {"\n                                Pricing depends on the scope, complexity and requirements of the project.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "5px" }}></div>
                      {"\n\n                                After understanding what needs to be built, we'll provide a clear scope and proposal before work begins.\n\n                            "}
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  {"\n\n                        "}
                  <button className="faq-question" type="button">
                    {"\n\n                            "}
                    <span>
                      {"\n                                What happens after the website launches?\n                            "}
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
                      {"\n                                Launch isn't necessarily the end.\n\n                                "}
                      <br />
                      {"\n                                "}
                      <div style={{ "marginBottom": "5px" }}></div>
                      {"\n\n                                Depending on the project, Nexora can continue helping with improvements, SEO, performance, analytics and conversion optimisation as the business grows.\n\n                            "}
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
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I've%20reviewed%20your%20services%20and%20would%20like%20to%20plan%20a%20digital%20system%20that%20moves%20my%20business%20forward." target="_blank" rel="noopener" className="btn-primary btn-secondary" style={{ "border": "1.2px solid rgba(254, 254, 254, 0.218)" }}>
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

      <script defer src="/static/js/service.js" />
    </>
  );
}
