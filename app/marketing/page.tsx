import { LOGO_WHITE_DATA_URI } from "@/lib/logos";
import { whatsappLink } from "@/lib/site";

const WA_TEXT =
  "Hi Nexora, I'm on the marketing page and would like to talk about how Nexora can help my business move forward.";

const NAV = [
  { label: "Benefits", href: "#benefits" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const INDUSTRIES = ["SALONS", "BARBERSHOPS", "SPAS", "WELLNESS", "BEAUTY", "CLINICS", "SMEs"];

const BENEFITS = [
  {
    n: "01",
    title: "Get discovered",
    body: "A website built to rank — search-friendly structure, local SEO foundations and fast pages that put your business in front of people already looking for you.",
    tag: "More of the right people find you",
    color: "#00A9D9",
  },
  {
    n: "02",
    title: "Earn trust instantly",
    body: "Clean design, clear pricing signals and proof of your work. When someone lands on your site, they decide in seconds whether you're the real deal.",
    tag: "Visitors believe before they contact",
    color: "#4F46E5",
  },
  {
    n: "03",
    title: "Win more bookings",
    body: "Every page has one job: move people to action. WhatsApp booking, enquiry forms and calls are one tap away — on any screen, anywhere in Kenya.",
    tag: "Interest turns into revenue",
    color: "#7C5CFF",
  },
];

const INCLUDES = [
  "WhatsApp booking",
  "SEO foundations",
  "Mobile-first build",
  "Speed optimisation",
  "Google Business setup",
  "Support after launch",
];

const WORK = [
  {
    img: "/assets/work-cards/salon-beauty.jpg",
    label: "Salons & Beauty",
    title: "Websites that fill appointment books",
    body: "Gallery-first designs with booking and WhatsApp enquiries built in — made for beauty businesses that live on their reputation.",
    href: "/salon-website-design-kenya",
    featured: true,
  },
  {
    img: "/assets/work-cards/web-design-kisii.jpg",
    label: "Kisii & Kenya",
    title: "Local businesses, national standard",
    body: "Fast, credible sites for SMEs that compete with anyone in the country.",
    href: "/web-design-kenya",
    featured: false,
  },
  {
    img: "/assets/work-cards/booking-websites.jpg",
    label: "Booking",
    title: "Booking journeys that don't leak customers",
    body: "Fewer steps, clearer choices, WhatsApp on standby at every point.",
    href: "/booking-websites",
    featured: false,
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", body: "We learn your business, your customers and what a win looks like." },
  { step: "02", title: "Strategy", body: "Pages, message and the actions every visitor should take." },
  { step: "03", title: "Design", body: "A brand-matched design you review before we build." },
  { step: "04", title: "Development", body: "Fast, mobile-first code with SEO and integrations wired in." },
  { step: "05", title: "Review", body: "You test everything. We refine until it feels right." },
  { step: "06", title: "Launch", body: "We go live — then keep improving it with you." },
];

const FACTS = [
  { value: "KES 15k–250k", label: "Typical project investment" },
  { value: "50% deposit", label: "To start, balance before launch" },
  { value: "6 steps", label: "From first call to launch day" },
  { value: "Kisii-based", label: "Serving businesses across Kenya" },
];

const FAQ = [
  {
    q: "How long does a website take?",
    a: "It depends on scope. A focused landing page can be turned around quickly, while larger multi-page websites take longer. We agree a clear timeline before work begins.",
  },
  {
    q: "How much does a website cost?",
    a: "Projects typically range from KES 15,000 to KES 250,000 depending on the type of site, its features and how custom it needs to be. You get a clear quote before anything starts.",
  },
  {
    q: "Can customers book through WhatsApp?",
    a: "Yes. We integrate WhatsApp into your website so customers can start a booking or enquiry conversation in one tap — ideal for salons, spas, barbershops and clinics.",
  },
  {
    q: "Do you work with businesses outside Kisii?",
    a: "Yes. We're based in Kisii but work with businesses in Nairobi, Kisumu, Eldoret, Nakuru, Mombasa and internationally — everything is handled remotely.",
  },
  {
    q: "What happens after launch?",
    a: "We stay available for updates, maintenance, improvements and troubleshooting so your website keeps working as your business grows.",
  },
];

export default function MarketingPage() {
  const wa = whatsappLink(WA_TEXT);

  return (
    <div className="mk">
      {/* ══ DARK TOP: nav + hero ══ */}
      <div className="mk-top">
        <header className="mk-nav">
          <a href="https://nexoraio.vercel.app/" className="mk-nav-logo" aria-label="Nexora Studio home">
            <img src={LOGO_WHITE_DATA_URI} width="120" height="80" alt="Nexora Studio" fetchPriority="high" />
          </a>

          <nav className="mk-nav-links" aria-label="Marketing navigation">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={wa} target="_blank" rel="noopener" className="mk-nav-cta">
            Start a Conversation
          </a>
        </header>

        <main id="main-content" className="mk-hero">
          <div className="mk-hero-grid">
            <div className="mk-hero-copy">
              <p className="mk-eyebrow mk-eyebrow-light">Nexora Studio — Kisii, Kenya</p>

              <h1 className="mk-h1">
                Your website should bring you{" "}
                <span className="mk-h1-accent">customers.</span>
              </h1>

              <p className="mk-sub">
                We design and build fast, mobile-first websites for salons, barbershops, spas and
                growing businesses across Kenya — turning visitors into WhatsApp enquiries and
                bookings.
              </p>

              <div className="mk-actions">
                <a href={wa} target="_blank" rel="noopener" className="mk-btn mk-btn-primary">
                  Start a Conversation
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </a>
                <a href="#work" className="mk-btn mk-btn-ghost">
                  See the work
                </a>
              </div>

              <ul className="mk-trust" aria-label="What every Nexora website includes">
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Mobile-first
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> WhatsApp booking
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> SEO foundations
                </li>
                <li>
                  <i className="fas fa-check" aria-hidden="true"></i> Support after launch
                </li>
              </ul>
            </div>

            {/* Site preview mockup — pure CSS, no images */}
            <div className="mk-hero-visual" aria-hidden="true">
              <div className="mk-mock">
                <div className="mk-mock-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <em>yourbusiness.co.ke</em>
                </div>
                <div className="mk-mock-body">
                  <div className="mk-mock-hero">
                    <b></b>
                    <i></i>
                    <i className="short"></i>
                    <u></u>
                  </div>
                  <div className="mk-mock-cards">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="mk-float mk-float-wa">
                <i className="fab fa-whatsapp"></i>
                <span>
                  <strong>New booking</strong>
                  via WhatsApp · 2s ago
                </span>
              </div>

              <div className="mk-float mk-float-rank">
                <i className="fas fa-arrow-up"></i>
                <span>
                  <strong>Top local results</strong>
                  Google search
                </span>
              </div>
            </div>
          </div>
        </main>

        <div className="mk-strip">
          <div className="mk-strip-track">
            {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((name, i) => (
              <span key={`${name}-${i}`}>
                {name}
                <em aria-hidden="true">◆</em>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ BENEFITS ══ */}
      <section className="mk-section" id="benefits">
        <div className="mk-section-head">
          <p className="mk-eyebrow">Why it matters</p>
          <h2 className="mk-h2">A website is only good if it grows the business.</h2>
          <p className="mk-lead">
            We don't build brochures. Every Nexora site is engineered around three outcomes that
            move the needle.
          </p>
        </div>

        <div className="mk-benefits">
          {BENEFITS.map((b) => (
            <article className="mk-benefit" key={b.n} style={{ "--accent": b.color } as React.CSSProperties}>
              <span className="mk-benefit-n">{b.n}</span>
              <h3 className="mk-benefit-title">{b.title}</h3>
              <p className="mk-benefit-body">{b.body}</p>
              <p className="mk-benefit-tag">
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                {b.tag}
              </p>
            </article>
          ))}
        </div>

        <ul className="mk-includes" aria-label="Included with every website">
          {INCLUDES.map((item) => (
            <li key={item}>
              <i className="fas fa-check" aria-hidden="true"></i>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ══ WORK ══ */}
      <section className="mk-section" id="work">
        <div className="mk-section-head">
          <p className="mk-eyebrow">Proof, not promises</p>
          <h2 className="mk-h2">Work that works as hard as you do.</h2>
        </div>

        <div className="mk-work">
          {WORK.map((item) => (
            <a
              className={`mk-work-card${item.featured ? " mk-work-featured" : ""}`}
              href={item.href}
              key={item.title}
            >
              <span className="mk-work-media">
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
              </span>
              <span className="mk-work-copy">
                <span className="mk-work-label">{item.label}</span>
                <span className="mk-work-title">{item.title}</span>
                <span className="mk-work-body">{item.body}</span>
                <span className="mk-work-link">
                  Explore <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="mk-section" id="process">
        <div className="mk-section-head">
          <p className="mk-eyebrow">How it works</p>
          <h2 className="mk-h2">From first call to launch day — six clear steps.</h2>
        </div>

        <ol className="mk-timeline">
          {PROCESS.map((item) => (
            <li className="mk-tl-item" key={item.step}>
              <span className="mk-tl-dot">{item.step}</span>
              <div>
                <h3 className="mk-tl-title">{item.title}</h3>
                <p className="mk-tl-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mk-facts">
          {FACTS.map((f) => (
            <div className="mk-fact" key={f.label}>
              <p className="mk-fact-value">{f.value}</p>
              <p className="mk-fact-label">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="mk-section" id="faq">
        <div className="mk-section-head">
          <p className="mk-eyebrow">Good to know</p>
          <h2 className="mk-h2">Questions we hear before every project.</h2>
        </div>

        <div className="mk-faq">
          {FAQ.map((item) => (
            <details className="mk-faq-item" key={item.q}>
              <summary>
                {item.q}
                <i className="fas fa-plus" aria-hidden="true"></i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className="mk-cta">
        <p className="mk-eyebrow mk-eyebrow-light">Let&apos;s build</p>
        <h2 className="mk-cta-title">Ready for a website that pulls its weight?</h2>
        <p className="mk-cta-body">
          Tell us about your business and where you want to go. We&apos;ll recommend the right
          approach and a clear quote — no pressure, no jargon.
        </p>
        <div className="mk-actions">
          <a href={wa} target="_blank" rel="noopener" className="mk-btn mk-btn-light">
            Start a Conversation
            <i className="fas fa-angle-right" aria-hidden="true"></i>
          </a>
          <a href="https://nexoraio.vercel.app/contact" className="mk-btn mk-btn-outline">
            Send an enquiry
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="mk-footer">
        <div className="mk-footer-top">
          <div className="mk-footer-brand">
            <a href="https://nexoraio.vercel.app/" className="mk-footer-logo">
              nexora
            </a>
            <p>Building the digital systems that move businesses forward.</p>
            <span>Kisii, Kenya</span>
          </div>

          <nav aria-label="Main site">
            <h2>Main site</h2>
            <a href="https://nexoraio.vercel.app/">Home</a>
            <a href="https://nexoraio.vercel.app/services">Services</a>
            <a href="https://nexoraio.vercel.app/work">Work</a>
            <a href="https://nexoraio.vercel.app/about">About</a>
            <a href="https://nexoraio.vercel.app/contact">Contact</a>
          </nav>

          <nav aria-label="On this page">
            <h2>On this page</h2>
            <a href="#benefits">Benefits</a>
            <a href="#work">The work</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>

          <nav aria-label="Connect">
            <h2>Connect</h2>
            <a href="https://wa.me/254713324672" target="_blank" rel="noopener">
              <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a href="https://nexoraio.vercel.app/contact">
              <i className="fas fa-envelope" aria-hidden="true"></i> Enquiries
            </a>
          </nav>
        </div>

        <div className="mk-footer-bottom">
          <span>&copy; 2026 Nexora Studio. All rights reserved</span>
          <a href="https://nexoraio.vercel.app/">Visit the main site →</a>
        </div>
      </footer>
    </div>
  );
}
