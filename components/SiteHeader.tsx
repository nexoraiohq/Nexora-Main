import { whatsappLink } from "@/lib/site";

type SiteHeaderProps = {
  /** "white" renders the light logo used on dark hero pages */
  variant?: "dark" | "white";
  /** On the home page the section anchors stay in-page */
  isHome?: boolean;
  /** Personalised WhatsApp pre-filled message (desktop header CTA) */
  waText: string;
  /** Optional separate message for the mobile menu CTA */
  waTextMobile?: string;
  /** Some legacy pages percent-encoded apostrophes as %27 in the CTA hrefs */
  waEncodeApos?: boolean;
};

export function SiteHeader({
  variant = "dark",
  isHome = false,
  waText,
  waTextMobile,
  waEncodeApos = false,
}: SiteHeaderProps) {
  const waHref = whatsappLink(waText, waEncodeApos);
  const waHrefMobile = whatsappLink(waTextMobile ?? waText, waEncodeApos);
  const solutionsHref = isHome ? "#solutions" : "/#solutions";
  const capabilitiesHref = isHome ? "#capabilities" : "/#capabilities";
  const white = variant === "white";

  const logoSrc = white ? "/assets/logo-white/favicon.svg" : "/assets/logo/favicon.svg";

  return (
    <div className="header-wrapper">
      <header className="header" role="banner">
        <link rel="preload" href={logoSrc} as="image" />
        <div className="logo">
          <a href="/" className="logo-link" aria-label="Nexora home">
            <img
              className={white ? "logo-text logo-img" : "logo-text"}
              src={logoSrc}
              width="143"
              height="95"
              alt="Nexora Studio logo"
              loading="eager"
              fetchPriority="high"
              decoding={white ? "async" : undefined}
            />
          </a>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <a href={solutionsHref} className="nav-link">
                Solutions
              </a>
            </li>
            <li>
              <a href={capabilitiesHref} className="nav-link">
                Capabilities
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="/work" className="nav-link">
                Work
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a
            href={waHref}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Start a Conversation <i className="fas fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>

        <button
          className="mobile-toggle"
          id="mobileToggle"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-controls="mobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className="mobile-menu"
        id="mobileMenu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href={solutionsHref} className="nav-link">
          Solutions
        </a>
        <a href={capabilitiesHref} className="nav-link">
          Capabilities
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/services" className="nav-link">
          Services
        </a>
        <a href="/work" className="nav-link">
          Work
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
        <a href={waHrefMobile} target="_blank" rel="noopener" className="btn-primary">
          Start a Conversation
        </a>
      </div>
    </div>
  );
}
