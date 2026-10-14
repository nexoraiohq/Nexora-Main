import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import "@/static/css/about/about.css";

export const metadata: Metadata = {
title: "About Nexora Studio | Web Design Studio in Kisii, Kenya",
description: "Nexora Studio is a web design and development studio in Kisii, Kenya, building websites, booking flows and SEO foundations for businesses across Kenya.",
keywords: "about Nexora Studio, web design studio Kisii, website developer Kenya, web designer Kisii Kenya",
robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
alternates: {
  canonical: "https://nexoraio.vercel.app/about",
  languages: {
    "en-KE": "https://nexoraio.vercel.app/about",
    "x-default": "https://nexoraio.vercel.app/about",
  },
},
openGraph: {
  type: "website",
  siteName: "Nexora Studio",
  locale: "en_KE",
  url: "https://nexoraio.vercel.app/about",
  title: "About Nexora Studio | Web Design Studio in Kisii, Kenya",
  description: "The studio behind digital experiences for Kenyan service businesses. Based in Kisii, serving Kenya.",
  images: [{
    url: "https://nexoraio.vercel.app/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
    width: 512,
    height: 512,
    alt: "About Nexora Studio - web design studio in Kisii, Kenya"
  }],
},
twitter: {
  card: "summary_large_image",
  title: "About Nexora Studio | Web Design Studio in Kisii, Kenya",
  description: "Nexora Studio is a web design and development studio in Kisii, Kenya, building websites, booking flows and SEO foundations for businesses across Kenya.",
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
      "@type": "AboutPage",
      "@id": "https://nexoraio.vercel.app/about#page",
      "url": "https://nexoraio.vercel.app/about",
      "name": "About Nexora Studio | Web Design Studio in Kisii, Kenya",
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
          "name": "About",
          "item": "https://nexoraio.vercel.app/about"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Nexora Studio based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexora Studio is based in Kisii, Kenya and works with clients across Kenya - including Nairobi, Kisumu, Eldoret, Nakuru and Mombasa - as well as international clients, with the whole process handled remotely."
          }
        },
        {
          "@type": "Question",
          "name": "Who runs Nexora Studio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexora Studio is led by Kenyatta Michael, a web designer and developer based in Kisii, Kenya, focused on building websites and digital systems for service-based businesses."
          }
        },
        {
          "@type": "Question",
          "name": "What does Nexora Studio build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business websites, landing pages, booking and enquiry flows, WhatsApp integrations, SEO foundations and ongoing website maintenance - primarily for salons, barbershops, spas and other local service businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How does Nexora work with clients remotely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The process is built around clear written updates, shared reviews and agreed milestones. Discovery, strategy, design, development and launch are all managed online, so location does not affect the quality of the work."
          }
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
        <SiteHeader variant={"dark"} isHome={false} waText={"Hi Nexora, I'm on the About page and would like to learn whether Nexora is the right digital partner for my business."} waTextMobile={"Hi Nexora, I'm using the About page menu and would like to start a conversation about working together."} />
        <main>
          <section className="hero">
            <div className="content">
              <p className="eyebrow">
                About Nexora
              </p>
              <h1 className="headline">
                We build digital systems that move businesses forward.
              </h1>
              <p className="descr">
                Nexora is a digital studio focused on creating websites, digital experiences and business systems that help ambitious businesses operate better, connect with their customers and grow with confidence.
              </p>
              <div className="cta-btn">
                {"\n                    "}
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20read%20about%20Nexora%20and%20want%20to%20talk%20about%20how%20your%20approach%20could%20fit%20my%20business." target="_blank" rel="noopener" className="btn-primary btn-secondary start">
                  Start a Conversation
                </a>
                {"\n                    "}
                <a href="/work" className="btn-primary">
                  Explore Our Work 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n                "}
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont">
              <p className="eyebrow">
                The Nexora Difference
              </p>
              <h2 className="heading">
                {"\n                    Better digital systems create better business experiences.\n                "}
              </h2>
              <p className="descr">
                We don't build digital experiences simply to make a business look better. We build them to make the business easier to discover, easier to understand,  easier to use and better equipped to grow.
              </p>
              <div className="consequences-grid why-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       BE FOUND
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make your business easier to discover.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    {"\n                            Build a stronger digital presence that helps the right people find you, understand what you offer and take the next step.\n                        "}
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        2.
                      </b>
                       BE UNDERSTOOD
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Make complexity easier to navigate.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    Turn scattered information, unclear messaging and complicated journeys into experiences people can understand quickly.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        3.
                      </b>
                       BE EXPERIENCED
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Create digital experiences people want to use.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    Design thoughtful interfaces and interactions that make every customer touchpoint clearer, smoother and more memorable.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        4.
                      </b>
                       BE READY
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Build a foundation that can grow with you.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    Create structured digital systems that give your business room to evolve instead of forcing you to rebuild every time you grow.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora believe testimonial">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont">
              <p className="eyebrow">
                What We Believe
              </p>
              <h2 className="heading">
                {"\n                    The way we work matters as much "}
                <br />
                {" as what we build.\n                "}
              </h2>
              <p className="descr">
                Good digital work isn't created by following a template. It comes from understanding the problem, making deliberate decisions and building experiences that work for both people and the business.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            1.
                          </b>
                           CLARITY OVER COMPLEXITY
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Make the important things obvious.
                        </h3>
                        <p className="descr">
                          We simplify information, interfaces and customer journeys so people can understand what matters and know what to do next.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            2.
                          </b>
                           PURPOSE BEFORE DECORATION
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Every decision should have a reason.
                        </h3>
                        <p className="descr">
                          Design should support the business objective, not exist simply to make something look impressive.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            3.
                          </b>
                           BUILD FOR PEOPLE
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Technology should feel useful, not complicated
                        </h3>
                        <p className="descr">
                          We design around how people actually discover, understand and interact with a business.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            4.
                          </b>
                           KEEP MOVING FORWARD
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Digital work should evolve with the business
                        </h3>
                        <p className="descr">
                          We build with the future in mind, creating foundations that can be improved, expanded and adapted as the business grows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="founder">
            <div className="problem consequences how-we-work why-nexora believe founder-main">
              <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont founder-cont">
                <p className="eyebrow">
                  The People Behind Nexora
                </p>
                <h2 className="heading">
                  {"\n                        Built by people who care "}
                  <br />
                  {" about the work.\n                    "}
                </h2>
                <p className="descr">
                  Nexora is built around a simple idea: great digital work requires ownership. We stay close to the problems we solve, the decisions we make and the experiences we create.
                </p>
                <div className="founder-profile">
                  <div className="founder-img">
                    <div className="image">
                      {"\n"}
                      <img src="/assets/founder-profile.jpg" alt="Kenyatta Michael, founder of Nexora Studio" loading="lazy" />
                      {"\n                            "}
                    </div>
                  </div>
                  <div className="founder-details">
                    <div style={{ "display": "flex", "flexDirection": "column", "textDecoration": "none" }}>
                      <h3 className="founder-name">
                        Kenyatta Michael
                      </h3>
                      <p className="role">
                        Founder & Digital Developer, 
                        <span>
                          Nexora
                        </span>
                      </p>
                    </div>
                    <p className="descr">
                      Kenyatta Michael founded Nexora with the goal of helping businesses build stronger digital foundations through thoughtful design, frontend development and practical digital systems.
                    </p>
                    {"\n\n                            "}
                    <a className="location">
                      <i className="fas fa-location-dot" aria-hidden="true"></i>
                       Based in Kisii, Kenya – serving Nairobi, Kisumu, Eldoret, Nakuru, Mombasa
                    </a>
                    {"\n                        "}
                  </div>
                </div>
              </div>
            </div>
            <div className="image-right">
              {"\n                "}
              <picture>
                {"\n                    "}
                <source type="image/webp" srcSet="assets/nexora-about-img-640.webp 640w, assets/nexora-about-img-1000.webp 1000w" sizes="(min-width: 769px) max(calc(50vw - 60px), 566px), max(calc(100vw - 40px), 320px)" />
                {"\n                    "}
                <img src="/assets/nexora-about-img.jpg" alt="The way we work matters as much as what we build - Nexora Studio" loading="lazy" width="1000" height="1000" decoding="async" />
                {"\n                "}
              </picture>
              {"\n            "}
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont">
              <p className="eyebrow">
                Why NEXORA
              </p>
              <h2 className="heading">
                {"\n                    A smaller studio. A more direct way of working.\n                "}
              </h2>
              <p className="descr">
                You work directly with the people shaping the strategy, designing the experience and building the solution — without unnecessary layers between the idea and the work.
              </p>
              <div className="consequences-grid why-grid">
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        01.
                      </b>
                       DIRECT COLLABORATION
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Work with the people doing the work.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    {"\n                            We keep communication close and decisions clear, so your project doesn't get lost between account managers, departments or layers of approval.\n                        "}
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        2.
                      </b>
                       BUSINESS-FIRST THINKING
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Build for the problem, not just the brief.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    We look beyond what needs to be built to understand what the business is actually trying to achieve, then shape the digital solution around that.
                  </p>
                </div>
                <div className="card">
                  <h3 className="heading">
                    {"\n                            "}
                    <span>
                      <b>
                        3.
                      </b>
                       CRAFT WITH PURPOSE
                    </span>
                    {"\n                            "}
                    <span className="heading-span">
                      Every detail should earn its place.
                    </span>
                    {"\n                        "}
                  </h3>
                  <p className="descr">
                    From structure and messaging to interface and frontend implementation, we care about creating work that feels considered, useful and built to last.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora believe testimonial">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont">
              <p className="eyebrow">
                Working With Nexora
              </p>
              <h2 className="heading">
                {"\n                    Clear from the first conversation to the final launch.\n                "}
              </h2>
              <p className="descr">
                Good work starts with a clear understanding of the problem. We keep the process focused, collaborative and intentional so you always know what we're solving, why we're solving it and what comes next.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card card-1">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            1.
                          </b>
                           DISCOVER
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Understand the business before building.
                        </h3>
                        <p className="descr">
                          We learn about your business, your customers, your goals and the challenges behind the project.
                        </p>
                      </div>
                    </div>
                    <div className="card card-2">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            2.
                          </b>
                           DEFINE
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Turn the problem into a clear direction.
                        </h3>
                        <p className="descr">
                          We identify what matters most, establish the structure and determine what the digital experience needs to accomplish.
                        </p>
                      </div>
                    </div>
                    <div className="card card-3">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            3.
                          </b>
                           BUILD
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Design and develop with purpose.
                        </h3>
                        <p className="descr">
                          We bring the direction to life through thoughtful interfaces, responsive frontend development and a system built around the needs of the business.
                        </p>
                      </div>
                    </div>
                    <div className="card card-4">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            4.
                          </b>
                           LAUNCH
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Put the work into the real world.
                        </h3>
                        <p className="descr">
                          We prepare the experience for launch, make the final refinements and leave you with a foundation you can continue to build on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora believe testimonial">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont">
              <p className="eyebrow">
                Who We Work With
              </p>
              <h2 className="heading">
                {"\n                    Built for businesses ready to take their digital presence seriously.\n                "}
              </h2>
              <p className="descr">
                Nexora works best with businesses that see their digital presence as more than a brochure — businesses that want clearer experiences, stronger foundations and a better way to connect with the people they serve.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card card-5">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            1.
                          </b>
                           GROWING BUSINESSES
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Ready for a stronger digital foundation.
                        </h3>
                        <p className="descr">
                          Businesses that have outgrown an outdated, limited or inconsistent online presence and need something that reflects where they're going.
                        </p>
                      </div>
                    </div>
                    <div className="card card-6">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            2.
                          </b>
                           CUSTOMER-FIRST BUSINESSES
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Where experience matters.
                        </h3>
                        <p className="descr">
                          Businesses whose success depends on making it easy for customers to discover, understand, choose and engage with what they offer.
                        </p>
                      </div>
                    </div>
                    <div className="card card-7">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            3.
                          </b>
                           AMBITIOUS FOUNDERS
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Building something with direction.
                        </h3>
                        <p className="descr">
                          Founders and teams who have a clear vision and need a digital partner who can turn that vision into a thoughtful, usable experience.
                        </p>
                      </div>
                    </div>
                    <div className="card card-8">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            4.
                          </b>
                           BUSINESSES IN TRANSITION
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Ready for what's next.
                        </h3>
                        <p className="descr">
                          Businesses going through a rebrand, expansion, new offering or digital shift that need their systems and experiences to evolve with them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora believe testimonial">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont">
              <p className="eyebrow">
                Our Promise
              </p>
              <h2 className="heading">
                {"\n                    We don't just build the experience. "}
                <br />
                {" We take ownership of it.\n                "}
              </h2>
              <p className="descr">
                From the first conversation to the final details, we approach every project with care, clarity and accountability. The goal is not simply to deliver something finished, but to create digital work that genuinely helps the business move forward.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card card-9">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            1.
                          </b>
                           WE LISTEN
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Understand before we recommend.
                        </h3>
                        <p className="descr">
                          We take time to understand the business, the people it serves and the problem we're actually trying to solve.
                        </p>
                      </div>
                    </div>
                    <div className="card card-10">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            2.
                          </b>
                           WE THINK
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Make decisions with intention.
                        </h3>
                        <p className="descr">
                          Every structural, visual and technical decision should serve a purpose and contribute to a better overall experience.
                        </p>
                      </div>
                    </div>
                    <div className="card card-11">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            3.
                          </b>
                           WE BUILD
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Care about the details.
                        </h3>
                        <p className="descr">
                          We bring strategy, design and development together to create work that is thoughtful, usable and technically sound.
                        </p>
                      </div>
                    </div>
                    <div className="card card-12">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            4.
                          </b>
                           WE OWN
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Stand behind what we create.
                        </h3>
                        <p className="descr">
                          We take responsibility for the quality of the work and remain focused on creating something the business can confidently build on.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="problem consequences how-we-work why-nexora believe testimonial">
            <div className="prob-cont consequences-cont how-we-work-cont why-cont believe-cont testimonial-cont">
              <p className="eyebrow">
                What's Next
              </p>
              <h2 className="heading">
                {"\n                    We're building Nexora for the long term.\n                "}
              </h2>
              <p className="descr">
                Nexora is still growing, but the direction is clear: build better digital foundations for businesses, keep improving how we work, and create experiences that become more valuable over time.
              </p>
              <div className="testimonial-grid-wrapper">
                <div className="testimonial-grid">
                  <div className="carousel">
                    <div className="card card-13">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            1.
                          </b>
                           DEEPER CAPABILITIES
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          More ways to solve meaningful problems.
                        </h3>
                        <p className="descr">
                          We continue expanding our capabilities across design, frontend development, digital experiences and practical business systems.
                        </p>
                      </div>
                    </div>
                    <div className="card card-14">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            2.
                          </b>
                           STRONGER PARTNERSHIPS
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Work alongside businesses, not just for them.
                        </h3>
                        <p className="descr">
                          As Nexora grows, we want to build lasting relationships with businesses that value thoughtful digital work and see technology as part of their growth.
                        </p>
                      </div>
                    </div>
                    <div className="card card-15">
                      <div className="carousel-cont">
                        {"\n                                    "}
                        <span>
                          <b>
                            3.
                          </b>
                           CONTINUOUS IMPROVEMENT
                        </span>
                        {"\n                                    "}
                        <h3 className="title">
                          Never stop refining the work.
                        </h3>
                        <p className="descr">
                          Every project, conversation and challenge gives us something to learn. We use that experience to make the next thing better than the last.
                        </p>
                      </div>
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
                  Ready To Move Forward?
                </p>
              </div>
              <h2 className="heading">
                {"\n                    Let's build what comes next.\n                "}
              </h2>
              <p className="descr">
                Whether you have a clear project in mind or you're still figuring out the right direction, start with a conversation. We'll explore the problem, understand what you're trying to achieve and determine what makes sense from there.
              </p>
              <div className="hero-cta final">
                {"\n                    "}
                <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20reached%20the%20About%20page%20final%20section%20and%20would%20like%20to%20explore%20what%20comes%20next%20for%20my%20business." target="_blank" rel="noopener" className="btn-primary btn-secondary" style={{ "border": "1.2px solid rgba(254, 254, 254, 0.218)" }}>
                  Start a Conversation 
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                {"\n\n                    "}
                <a href="/work" className="btn-primary work-primary">
                  Explore our work 
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
      <script defer src="/static/js/about.js" />
    </>
  );
}
