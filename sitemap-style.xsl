<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" exclude-result-prefixes="sitemap">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en-KE">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nexora Studio Sitemap | Kisii, Kenya</title>
        <meta name="robots" content="noindex, follow"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon/nexora-favicon/favicon.svg"/>
        <style>
          :root{
            --font-family:"SF Pro Display",Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
            --fw-regular:400; --fw-medium:500; --fw-bold:700;
            --ls-tight:-0.045em; --ls-normal:-0.02em;
            --lh-heading:1.05; --lh-body:1.5;
            --primary:#4F46E5; --primary-hover:#4338CA;
            --ink:#0F172A; --slate:#1E293B; --muted:rgb(57,95,132);
            --bg:#f8f9fa; --card:#ffffff; --line:rgba(15,23,42,.08); --soft:#F8FAFC;
          }
          *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
          body{font-family:var(--font-family);font-weight:var(--fw-medium);background:var(--bg);color:var(--ink);line-height:var(--lh-body);padding:.25rem 1.5rem;min-height:100vh}
          /* ===== HERO — matches .hero padding + .prob-cont spacing ===== */
          .hero{padding:2rem 6.6rem 72px;max-width:1280px;margin:0 auto}
          .eyebrow{display:inline-flex;width:fit-content;color:#635BFF;background:rgba(232,240,255,.937);padding:4px 8px;border-radius:4px;font-size:14px;font-weight:var(--fw-bold);line-height:1.45;letter-spacing:var(--ls-normal);margin-bottom:18px}
          .eyebrow i{font-size:.72rem;margin-right:6px;transition:transform .45s ease}
          .eyebrow:hover i{transform:translateX(4.5px)}
          .hero-header{font-size:35.12px;font-weight:var(--fw-medium);line-height:40.388px;letter-spacing:-0.025em;color:var(--ink);margin-bottom:.1rem;max-width:22ch}
          .hero-header em{font-style:normal;color:var(--primary)}
          .hero-descr{font-size:1rem;line-height:1.6;color:var(--muted);max-width:70ch;font-weight:var(--fw-medium);margin:12px 0 40px}
          /* ===== BTN ROW — exact .btn-primary / .btn-secondary + FA slide ===== */
          .hero-cta{display:flex;align-items:center;gap:8px;width:fit-content;flex-wrap:wrap}
          .btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:4px;font-family:var(--font-family);font-size:.875rem;font-weight:var(--fw-bold);letter-spacing:-.01em;color:#fff;background:var(--primary);border-radius:4px;padding:10px 18px;border:none;cursor:pointer;text-decoration:none;line-height:1.4;white-space:nowrap;transition:background .25s ease,transform .15s ease,box-shadow .25s ease;box-shadow:0 1px 2px rgba(0,0,0,.04)}
          .btn-primary:hover{box-shadow:0 4px 16px rgba(0,0,0,.08);background:var(--primary-hover)}
          .btn-primary:active{transform:scale(.97)}
          .btn-primary i{position:relative;font-size:.74rem;transition:transform .45s ease}
          .btn-primary:hover i{transform:translateX(4.5px)}
          .btn-secondary{border-radius:4px;font-weight:var(--fw-medium);font-size:.875rem;border:1.2px solid #CBD5E1;background:transparent;text-decoration:none;color:var(--ink);padding:10px 18px;transition:all .3s ease;display:inline-flex;align-items:center;gap:6px;line-height:1.4}
          .btn-secondary i{font-size:.74rem;transition:transform .45s ease}
          .btn-secondary:hover{border:1.2px solid var(--muted);color:var(--muted);background:var(--soft)}
          .btn-secondary:hover i{transform:translateX(4.5px)}
          .pills{display:flex;gap:.9rem;margin-top:28px;flex-wrap:wrap}
          .pill{display:inline-flex;align-items:center;gap:8px;font-size:.875rem;font-weight:var(--fw-medium);letter-spacing:-.01em;color:var(--slate);background:#fff;border:1.2px solid rgba(15,23,42,.182);padding:10px 18px;border-radius:999px;transition:background .3s ease,transform .2s ease,border .3s ease}
          .pill i{font-size:.78rem;color:var(--primary);transition:transform .45s ease}
          .pill:hover{border:1.2px solid #0A2540;transform:translateY(-1px)}
          .pill:hover i{transform:translateX(4.5px)}
          /* ===== CONTENT SECTION — separated, never under hero ===== */
          .problem{padding:11px 44px;margin-top:40px;max-width:1280px;margin-left:auto;margin-right:auto;position:relative;z-index:1}
          .prob-cont{padding:.8rem;display:flex;flex-direction:column;gap:4px;background:transparent}
          .section-heading{font-size:2.5rem;line-height:1.15;font-weight:var(--fw-bold);color:var(--slate);max-width:30ch;margin-bottom:.75rem;letter-spacing:var(--ls-normal)}
          .section-descr{font-size:1rem;line-height:1.6;color:var(--muted);max-width:70ch;font-weight:var(--fw-medium);margin-bottom:40px}
          /* ===== TABLE CARD ===== */
          .card{background:var(--card);border:1px solid var(--line);border-radius:8px;box-shadow:0 12px 35px rgba(0,0,0,.08);overflow:hidden;margin-top:1.5rem}
          .card-head{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--line);gap:12px;flex-wrap:wrap}
          .card-head strong{font-size:.875rem;font-weight:var(--fw-bold);letter-spacing:-.01em;color:var(--slate);display:inline-flex;align-items:center;gap:8px}
          .card-head strong i{color:var(--primary);font-size:.85rem;transition:transform .45s ease}
          .card-head strong:hover i{transform:translateX(4.5px)}
          .count{background:var(--primary);color:#fff;font-size:.8125rem;font-weight:var(--fw-bold);padding:.5rem 1.25rem;border-radius:4px;letter-spacing:-.01em}
          table{width:100%;border-collapse:collapse;font-size:.875rem}
          th{text-align:left;font-size:.875rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;line-height:1.2;color:var(--slate);opacity:.7;padding:14px 24px;background:var(--soft);border-bottom:1px solid var(--line)}
          th i{margin-right:6px;color:var(--primary);transition:transform .3s ease}
          td{padding:16px 24px;border-bottom:1px solid var(--line);vertical-align:middle}
          tr:last-child td{border-bottom:none}
          tbody tr{transition:background .3s ease,transform .2s ease}
          tbody tr:hover td{background:var(--soft)}
          a.url{color:var(--primary);font-weight:600;text-decoration:none;word-break:break-all;display:inline-flex;align-items:center;gap:8px;font-size:.9375rem;letter-spacing:-.01em}
          a.url i{font-size:.72rem;transition:transform .45s ease}
          a.url:hover i{transform:translateX(4.5px)}
          a.url:hover{text-decoration:underline}
          .badge{display:inline-block;font-size:.75rem;font-weight:var(--fw-bold);padding:4px 10px;border-radius:4px;background:rgba(232,240,255,.937);color:#635BFF;border:1px solid transparent;letter-spacing:-.01em}
          .date{color:var(--muted);white-space:nowrap;font-weight:var(--fw-medium);font-size:.875rem}
          .foot{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin:80px 0 40px}
          .mini{background:#fff;border:1px solid var(--line);border-radius:8px;padding:22px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
          .mini h3{font-size:1rem;font-weight:var(--fw-bold);letter-spacing:-.01em;margin-bottom:8px;color:var(--slate);display:flex;align-items:center;gap:8px}
          .mini h3 i{color:var(--primary);transition:transform .45s ease}
          .mini h3:hover i{transform:translateX(4.5px)}
          .mini p{font-size:.875rem;color:var(--muted);line-height:1.6}
          .mini a{color:var(--primary);font-weight:600;text-decoration:none}
          .mini a i{font-size:.7rem;transition:transform .45s ease}
          .mini a:hover i{transform:translateX(4.5px)}
          .mini a:hover{text-decoration:underline}
          @media(max-width:900px){.hero{padding:1.5rem 1.75rem 56px}.problem{padding:11px 20px}.section-heading{font-size:2rem}}
          @media(max-width:700px){body{padding:1rem .75rem}.hero{padding:1rem 1rem 48px}.hero-header{font-size:28px;line-height:32px}.foot{grid-template-columns:1fr}th:nth-child(3),td:nth-child(3){display:none}.hero-cta{width:100%}.btn-primary,.btn-secondary{width:100%;justify-content:center}}
        </style>
      </head>
      <body>
        <section class="hero">
          <span class="eyebrow"><i class="fas fa-location-dot"></i> Nexora Studio — Kisii, Kenya</span>
          <h1 class="hero-header">Sitemap for <em>humans &amp; search engines.</em></h1>
          <p class="hero-descr">Digital experiences, business systems and growth infrastructure for ambitious businesses in Kisii, Nairobi, Kisumu, Eldoret, Nakuru, Mombasa and across Kenya.</p>
          <div class="hero-cta">
            <a class="btn-primary" href="/">Back to website <i class="fas fa-angle-right"></i></a>
            <a class="btn-secondary" href="/contact.html">Start a conversation <i class="fas fa-angle-right"></i></a>
          </div>
          <div class="pills">
            <span class="pill"><i class="fas fa-sitemap"></i> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> pages</span>
            <span class="pill"><i class="fas fa-clock"></i> Updated 2026-09-23</span>
            <span class="pill"><i class="fas fa-globe"></i> nexoraio.vercel.app </span>
          </div>
        </section>
        <section class="problem">
          <div class="prob-cont">
            <h2 class="section-heading">All pages</h2>
            <p class="section-descr">Every public page on nexoraio.vercel.app — <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs to help visitors and search engines find everything.</p>
            <div class="card">
              <div class="card-head">
                <strong><i class="fas fa-table-list"></i> All pages</strong>
                <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span>
              </div>
              <table>
                <tr><th><i class="fas fa-file-lines"></i> Page URL</th><th><i class="fas fa-arrow-trend-up"></i> Priority</th><th><i class="fas fa-calendar"></i> Last modified</th></tr>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td><a class="url" href="{sitemap:loc}"><i class="fas fa-arrow-right"></i> <xsl:value-of select="sitemap:loc"/></a></td>
                    <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td class="date"><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </div>
            <div class="foot">
              <div class="mini">
                <h3><i class="fas fa-location-dot"></i> Based in Kisii, serving Kenya</h3>
                <p>Kisii (HQ) • Nairobi • Kisumu • Eldoret • Nakuru • Mombasa. <a href="/">Back to Nexora <i class="fas fa-angle-right"></i></a></p>
              </div>
              <div class="mini">
                <h3><i class="fas fa-robot"></i> For search engines</h3>
                <p>This XML sitemap helps Google discover all Nexora pages. Robots: <a href="/robots.txt">/robots.txt <i class="fas fa-angle-right"></i></a></p>
              </div>
            </div>
          </div>
        </section>
        <script>
          document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function(button) {
            var icon = button.querySelector('i');
            if (!icon) return;
            button.addEventListener('mouseenter', function() {
              icon.classList.remove('fa-angle-right');
              icon.classList.add('fa-arrow-right');
            });
            button.addEventListener('mouseleave', function() {
              icon.classList.remove('fa-arrow-right');
              icon.classList.add('fa-angle-right');
            });
          });
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
