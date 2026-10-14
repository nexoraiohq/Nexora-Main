export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="top-nav">
          <div className="card">
            <a href="/" style={{ textDecoration: "none" }} className="logo">
              nexora
            </a>
            <p className="descr">
              Building the digital systems that move businesses forward.
            </p>
            <p className="location">Kisii, Kenya</p>
          </div>

          <div className="card">
            <h2 className="heading">Explore</h2>
            <nav>
              <a href="/">
                <span>Home</span>
              </a>
              <a href="/about">
                <span>About</span>
              </a>
              <a href="/services">
                <span>Services</span>
              </a>
              <a href="/work">
                <span>Work</span>
              </a>
              <a href="/contact">
                <span>Contact</span>
              </a>
            </nav>
          </div>

          <div className="card">
            <h2 className="heading">Capabilities</h2>
            <nav>
              <a href="/services#strategy">
                <span>Strategy</span>
              </a>
              <a href="/services#digital-experiences">
                <span>Digital Experiences</span>
              </a>
              <a href="/services#business-systems">
                <span>Business Systems</span>
              </a>
              <a href="/services#intelligence">
                <span>Intelligence</span>
              </a>
            </nav>
          </div>

          <div className="card">
            <h2 className="heading">Resources</h2>
            <nav>
              <a href="/work#explore-work">
                <span>Case Studies</span>
              </a>
              <a href="/#faq">
                <span>FAQ</span>
              </a>
              <a href="/web-design-kisii">
                <span>Web Design Kisii</span>
              </a>
              <a href="/web-development-kisii">
                <span>Web Development Kisii</span>
              </a>
              <a href="/web-design-kenya">
                <span>Web Design Kenya</span>
              </a>
              <a href="/salon-website-design-kenya">
                <span>Salon Websites</span>
              </a>
              <a href="/barbershop-website-kenya">
                <span>Barbershop Websites</span>
              </a>
              <a href="/spa-website-design-kenya">
                <span>Spa Websites</span>
              </a>
              <a href="/beauty-wellness-web-design">
                <span>Beauty &amp; Wellness</span>
              </a>
              <a href="/booking-websites">
                <span>Booking Websites</span>
              </a>
              <a href="/seo-services-kenya">
                <span>SEO Services</span>
              </a>
            </nav>
          </div>

          <div className="card">
            <h2 className="heading">Connect</h2>
            <nav>
              <a
                href="https://wa.me/254713324672"
                title="Chat with Nexora Studio on WhatsApp"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
                </span>
              </a>
              <a href="/contact" title="Contact Nexora Studio">
                <span>
                  <i className="fas fa-envelope" aria-hidden="true"></i> Enquiries
                </span>
              </a>
            </nav>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="copywright">&copy; 2026 Nexora Studio. All rights reserved</div>
          <nav>
            <a href="/contact">
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
