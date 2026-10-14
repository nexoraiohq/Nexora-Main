import { SiteHeader } from "@/components/SiteHeader";
import "@/static/css/404.css";

export default function NotFoundPage() {
  return (
    <>
        <SiteHeader variant={"dark"} isHome={false} waText={"Hi Nexora, I landed on the 404 page and would like help finding the right place to start a project conversation."} waTextMobile={"Hi Nexora, I'm using the 404 page menu and would like to start a conversation about my project."} />
        <main className="error-main">
          <div className="error-container">
            <div className="error-text">
              <h1 className="error-title">
                This page doesn't exist.
              </h1>
              <p className="error-descr">
                 The page you're looking for may have moved, been removed, or never existed. Visit our 
                <a href="/" className="error-link">
                  homepage
                </a>
                , or try one of these.
              </p>
            </div>
            <nav className="error-grid" aria-label="Helpful links">
              {"\n\n                "}
              <a href="/services" className="error-card">
                <div className="card-icon icon-services">
                  {"\n                        "}
                  <i className="fas fa-briefcase" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"\n                        Services\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Explore our full suite of digital solutions, from strategy to development.
                </p>
              </a>
              {"\n\n                "}
              <a href="/work" className="error-card">
                <div className="card-icon icon-work">
                  {"\n                        "}
                  <i className="fas fa-layer-group" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"\n                        Our Work\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Browse case studies and see how we move businesses forward.
                </p>
              </a>
              {"\n\n                "}
              <a href="/about" className="error-card">
                <div className="card-icon icon-about">
                  {"\n                        "}
                  <i className="fas fa-users" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"\n                        About\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Learn about Nexora's mission, team, and the values that drive us.
                </p>
              </a>
              {"\n\n                "}
              <a href="/" className="error-card">
                <div className="card-icon icon-home">
                  {"\n                        "}
                  <i className="fas fa-home" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"\n                        Homepage\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Return to the main base and start your journey from the top.
                </p>
              </a>
              {"\n\n                "}
              <a href="/contact" className="error-card">
                <div className="card-icon icon-contact">
                  {"\n                        "}
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"\n                        Contact\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Reach out directly. We'd love to hear about your next project.
                </p>
              </a>
              {"\n\n                "}
              <a href="https://wa.me/254713324672?text=Hi%20Nexora%2C%20I%20landed%20on%20the%20404%20page%20but%20I%20want%20to%20start%20a%20project%20conversation%20and%20tell%20you%20what%20I'm%20building." target="_blank" rel="noopener" className="error-card">
                <div className="card-icon icon-start">
                  {"\n                        "}
                  <i className="fas fa-rocket" aria-hidden="true"></i>
                  {"\n                    "}
                </div>
                <h2 className="card-title">
                  {"Start a\n                        Project\n\n                        "}
                  <span>
                    {"\n                            "}
                    <i className="fas fa-arrow-right" style={{ "fontSize": "11px" }} aria-hidden="true"></i>
                    {"\n                        "}
                  </span>
                  {"\n                    "}
                </h2>
                <p className="card-descr">
                  Tell us what you're building and let's create something extraordinary.
                </p>
              </a>
              {"\n\n            "}
            </nav>
          </div>
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

      <script defer src="/static/js/app.js" />
      <script defer src="/static/js/404.js" />
    </>
  );
}
