import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import StickyCallBar from "./StickyCallBar";

// PENDING SD-ISSUED ROOFING DID — do not ship live
// Single source of truth for the roofing call number. Swap this one value once
// Service Direct issues the roofing DID. Every call button/link references it.
const ROOFING_DID = "{{ROOFING_DID}}";

export default function RoofingDallasLanding() {
  const phoneNumber = ROOFING_DID;
  const phoneHref = `tel:${ROOFING_DID}`;

  const faqs = [
    {
      q: "Does SiteFlow Network do the roofing work?",
      a: "No. We connect you with independent local roofing contractors who handle the work directly.",
    },
    {
      q: "What areas do you cover?",
      a: "The Dallas–Fort Worth metro and surrounding communities, roughly a 50-mile radius.",
    },
    {
      q: "What should I have ready when I call?",
      a: "Your zip code and a quick description of your roof issue.",
    },
    {
      q: "Will someone look at my roof damage?",
      a: "The roofer you're connected with handles inspection of storm or other damage to repair or replace your roof.",
    },
  ];

  return (
    <main>
      <style suppressHydrationWarning>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --red: #D92B2B;
      --red-dark: #B01E1E;
      --red-light: #FF3B3B;
      --charcoal: #0F0F0F;
      --dark: #161616;
      --panel: #1E1E1E;
      --border: #2A2A2A;
      --text: #E8E8E8;
      --white: #FFFFFF;
      --yellow: #F5A623;
      --label-color: #FF6B6B;
      --accessible-muted: #B0B0B0;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-barlow), sans-serif;
      background: var(--charcoal);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* STICKY BAR */
    .sticky-bar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: var(--red);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }
    .sticky-bar.visible { transform: translateY(0); }
    .sticky-bar p { font-family: var(--font-barlow-condensed), sans-serif; font-size: 18px; font-weight: 700; color: #fff; }
    .sticky-bar a {
      background: white; color: var(--red);
      padding: 8px 20px; border-radius: 4px;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-weight: 800; font-size: 16px;
      text-decoration: none; white-space: nowrap; flex-shrink: 0;
    }
    @media (max-width: 640px) {
      .sticky-bar { padding: 10px 16px; gap: 12px; }
      .sticky-bar p { font-size: 14px; }
      .sticky-bar a { font-size: 14px; padding: 7px 14px; }
    }

    /* NAV */
    nav {
      padding: 16px 40px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
      background: var(--charcoal);
    }
    .logo { display: flex; align-items: center; }
    @media (max-width: 640px) { .logo img { height: 32px !important; } }
    .nav-phone { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .nav-phone-label { font-size: 12px; color: var(--accessible-muted); text-transform: uppercase; letter-spacing: 1px; white-space: nowrap; }
    .nav-phone-number {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 24px; font-weight: 800;
      color: var(--red-light); letter-spacing: 1px;
    }

    /* HERO */
    .hero {
      position: relative; min-height: 82vh;
      display: flex; align-items: center;
      overflow: hidden; background: var(--charcoal);
    }
    .hero-bg {
      position: absolute; inset: 0; z-index: 1;
      background:
        linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%),
        radial-gradient(ellipse at 80% 50%, rgba(217,43,43,0.15) 0%, transparent 60%);
    }
    .hero-content {
      position: relative; z-index: 2;
      max-width: 1100px; margin: 0 auto;
      padding: 80px 40px; width: 100%;
    }
    .emergency-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(217,43,43,0.15);
      border: 1px solid rgba(217,43,43,0.4);
      padding: 8px 16px; border-radius: 3px; margin-bottom: 28px;
    }
    .emergency-badge .dot {
      width: 8px; height: 8px;
      background: var(--red-light); border-radius: 50%;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.3); }
    }
    .emergency-badge span {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 13px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--red-light);
    }
    .hero h1 {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(40px, 6vw, 72px);
      font-weight: 900; line-height: 0.95;
      text-transform: uppercase; letter-spacing: -1px;
      margin-bottom: 8px; color: var(--white);
    }
    .hero h1 .accent { color: var(--red); display: block; }
    .hero-sub {
      font-size: 20px; color: var(--accessible-muted);
      max-width: 620px; margin: 24px 0 12px; line-height: 1.5;
    }
    .hero-sub strong { color: var(--text); }
    .hero-value-prop {
      font-size: 15px; color: var(--accessible-muted);
      max-width: 620px; margin: 0 0 36px;
      padding: 12px 16px;
      border-left: 3px solid var(--red);
      background: rgba(217,43,43,0.05);
      line-height: 1.6;
    }

    /* CTA BLOCK */
    .cta-block { display: flex; flex-direction: column; gap: 12px; max-width: 520px; }
    .cta-main {
      display: flex; align-items: center; justify-content: center; gap: 14px;
      background: var(--red); color: white;
      padding: 22px 36px; border-radius: 4px;
      text-decoration: none;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 26px; font-weight: 800;
      letter-spacing: 1px; text-transform: uppercase;
      transition: background 0.2s; border: none; cursor: pointer;
      white-space: nowrap;
    }
    .cta-main:hover { background: var(--red-light); }
    .cta-main svg { flex-shrink: 0; }
    .cta-subtext { text-align: center; font-size: 13px; color: #FFFFFF; letter-spacing: 0.5px; background: rgba(0,0,0,0.4); padding: 8px 12px; border-radius: 4px; }
    .cta-subtext strong { color: var(--yellow); }
    @media (max-width: 640px) {
      .cta-main { font-size: 19px; padding: 16px 20px; gap: 10px; white-space: nowrap; }
      .cta-main svg { width: 20px; height: 20px; flex-shrink: 0; }
    }

    /* SOCIAL PROOF BAR */
    .social-proof-bar {
      background: var(--dark);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 24px 40px;
      display: flex; align-items: center; justify-content: center;
      gap: 48px; flex-wrap: wrap;
    }
    .proof-stat { text-align: center; }
    .proof-num {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 30px; font-weight: 900;
      color: var(--red-light); display: block;
    }
    .proof-label { font-size: 12px; color: var(--accessible-muted); text-transform: uppercase; letter-spacing: 1px; }
    .proof-divider { width: 1px; height: 40px; background: var(--border); }
    @media (max-width: 640px) {
      .social-proof-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding: 0; }
      .proof-stat { padding: 20px 16px; border-bottom: 1px solid var(--border); }
      .proof-stat:nth-child(odd) { border-right: 1px solid var(--border); }
      .proof-divider { display: none; }
    }

    /* SECTIONS */
    .section { max-width: 1100px; margin: 0 auto; padding: 80px 40px; }
    .section-label {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 15px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--label-color); margin-bottom: 16px;
    }
    .section-title {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(36px, 5vw, 56px);
      font-weight: 900; text-transform: uppercase;
      line-height: 0.95; color: var(--white); margin-bottom: 48px;
    }

    /* TIMELINE */
    .timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    @media (max-width: 768px) { .timeline { grid-template-columns: 1fr; } }
    .timeline-step {
      background: var(--panel); padding: 32px 28px;
      border-top: 3px solid var(--border); transition: border-color 0.2s;
    }
    .timeline-step:hover { border-color: var(--red); }
    .step-num {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 72px; font-weight: 900;
      color: #888888; line-height: 1; margin-bottom: 12px;
    }
    .step-title {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 20px; font-weight: 800;
      text-transform: uppercase; color: var(--white);
      margin-bottom: 8px; letter-spacing: 0.5px;
    }
    .step-desc { font-size: 14px; color: var(--accessible-muted); line-height: 1.6; }

    /* REASON CARDS */
    .damage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; margin-top: 16px; }
    .damage-card {
      background: var(--panel); padding: 28px;
      border-left: 3px solid var(--border); transition: border-color 0.2s;
      display: flex; align-items: center; gap: 14px;
    }
    .damage-card:hover { border-color: var(--red); }
    .damage-card svg { color: var(--red-light); flex-shrink: 0; }
    .damage-card h3 {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 19px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--white);
    }

    /* CHECKLIST */
    .checklist { list-style: none; margin-top: 24px; max-width: 800px; }
    .checklist li {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 16px 0; border-bottom: 1px solid var(--border);
      font-size: 16px; color: var(--text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li svg { color: var(--red-light); flex-shrink: 0; margin-top: 4px; }

    /* FAQ */
    .faq-section { background: var(--dark); padding: 80px 40px; border-top: 1px solid var(--border); }
    .faq-inner { max-width: 800px; margin: 0 auto; }
    .faq-list { margin-top: 40px; display: flex; flex-direction: column; gap: 2px; }
    .faq-item { background: var(--panel); overflow: hidden; }
    .faq-question {
      width: 100%; background: none; border: none;
      padding: 22px 28px;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      cursor: pointer; text-align: left;
      font-family: var(--font-barlow), sans-serif;
      font-size: 16px; font-weight: 600; color: var(--white);
      transition: background 0.2s;
    }
    .faq-question:hover { background: rgba(255,255,255,0.03); }
    .faq-icon {
      width: 24px; height: 24px; flex-shrink: 0;
      background: rgba(217,43,43,0.15);
      border: 1px solid rgba(217,43,43,0.3);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--red-light); font-size: 18px; font-weight: 300;
      transition: transform 0.2s;
    }
    .faq-icon.open { transform: rotate(45deg); }
    .faq-answer {
      padding: 0 28px 22px;
      font-size: 15px; color: var(--accessible-muted);
      line-height: 1.7;
    }

    /* BIG CTA */
    .big-cta {
      background: var(--red-dark); padding: 80px 40px;
      text-align: center; position: relative; overflow: hidden;
    }
    .big-cta::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at center, rgba(255,59,59,0.15) 0%, transparent 70%);
    }
    .big-cta-content { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
    .big-cta h2 {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(40px, 6vw, 72px); font-weight: 900;
      text-transform: uppercase; line-height: 0.9;
      color: var(--white); margin-bottom: 20px;
    }
    .big-cta p { font-size: 18px; color: rgba(255,255,255,0.9); margin-bottom: 40px; }

    /* FOOTER */
    footer {
      background: var(--dark); border-top: 1px solid var(--border);
      padding: 40px;
      display: flex; align-items: flex-start; justify-content: space-between;
      flex-wrap: wrap; gap: 20px;
    }
    .footer-logo { display: flex; align-items: center; }
    .tcpa { font-size: 11px; color: #A8A8A8; max-width: 640px; line-height: 1.6; }
    .tcpa a { color: #C8C8C8; text-decoration: underline; }
    .tcpa a:hover { color: var(--white); }

    /* RESPONSIVE */
    @media (max-width: 640px) {
      nav { padding: 14px 20px; }
      .nav-phone-label { font-size: 10px; letter-spacing: 0.5px; }
      .nav-phone-number { font-size: 20px; }
      .hero-content { padding: 28px 20px 60px; text-align: center; }
      .hero h1 { text-align: center; }
      .hero-sub { text-align: center; margin-left: auto; margin-right: auto; }
      .hero-value-prop { text-align: center; margin-left: auto; margin-right: auto; }
      .emergency-badge { display: flex; justify-content: center; width: 100%; }
      .cta-block { margin: 0 auto; }
      .cta-subtext { text-align: center; }
      .section { padding: 60px 20px; }
      .section-label { text-align: center; display: block; }
      .section-title { text-align: center; }
      .big-cta { padding: 60px 20px; }
      footer { padding: 28px 20px; flex-direction: column; align-items: flex-start; }
      .faq-section { padding: 60px 20px; }
      .faq-inner .section-label { text-align: center; display: block; }
      .faq-inner .section-title { text-align: center; }
    }
  `}</style>

      {/* STICKY BAR */}
      <StickyCallBar phoneNumber={phoneNumber} phoneHref={phoneHref} />

      {/* NAV */}
      <nav>
        <div className="logo"><Image src="/siteflow-logo.png" alt="SiteFlow Network" width={205} height={56} priority quality={75} sizes="(max-width: 640px) 160px, 205px" style={{ height: "40px", width: "auto" }} /></div>
        <a href={phoneHref} className="nav-phone">
          <div>
            <div className="nav-phone-label">DFW Roofing Line</div>
            <div className="nav-phone-number">{phoneNumber}</div>
          </div>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="emergency-badge">
            <div className="dot" />
            <span>Serving the Dallas–Fort Worth Metro</span>
          </div>

          <h1>
            Roof Damage in Dallas–Fort Worth?
            <span className="accent">Get Connected With a Local Roofer.</span>
          </h1>

          <p className="hero-sub">
            Storm or hail damage, a roof leak, missing shingles, or need a full replacement?{" "}
            <strong>Call to get connected with an independent roofing contractor serving the DFW metro.</strong>
          </p>

          <p className="hero-value-prop">
            SiteFlow Network connects homeowners with independent local roofing contractors. We don&apos;t perform roofing work ourselves.
          </p>

          <div className="cta-block">
            <a href={phoneHref} className="cta-main">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Tap to Call · {phoneNumber}
            </a>
            <p className="cta-subtext">
              Have your zip code ready when you call.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="social-proof-bar" role="region" aria-label="Service coverage">
        <div className="proof-stat">
          <span className="proof-num">DFW</span>
          <span className="proof-label">Metro Coverage</span>
        </div>
        <div className="proof-divider" aria-hidden="true" />
        <div className="proof-stat">
          <span className="proof-num">~50 mi</span>
          <span className="proof-label">Service Radius</span>
        </div>
        <div className="proof-divider" aria-hidden="true" />
        <div className="proof-stat">
          <span className="proof-num">Local</span>
          <span className="proof-label">Independent Roofers</span>
        </div>
        <div className="proof-divider" aria-hidden="true" />
        <div className="proof-stat">
          <span className="proof-num">1 Call</span>
          <span className="proof-label">No Forms</span>
        </div>
      </div>

      {/* COMMON REASONS */}
      <section style={{ background: "var(--dark)", borderTop: "1px solid var(--border)" }} id="reasons">
        <div className="section">
          <p className="section-label">Why Homeowners Call</p>
          <h2 className="section-title">Common Reasons<br />Homeowners Call</h2>
          <div className="damage-grid">
            {[
              "Storm & hail damage",
              "Emergency roof tarping",
              "Roof leaks",
              "Missing, cracked, or curling shingles",
              "Full roof replacement",
              "Flat, metal, tile & slate roofs",
              "Storm-damage inspection — to repair or replace",
            ].map((reason) => (
              <div key={reason} className="damage-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3>{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--charcoal)" }} id="how-it-works">
        <div className="section">
          <p className="section-label">What To Expect</p>
          <h2 className="section-title">How It Works</h2>
          <div className="timeline">
            {[
              { n: "01", title: "Call the Number Above", desc: "One call gets you started — no hold times, no runaround." },
              { n: "02", title: "Tell Us About Your Roof", desc: "Tell us your zip code and what's going on with your roof." },
              { n: "03", title: "Get Connected", desc: "Get connected with an independent local roofer serving your area." },
            ].map((s) => (
              <div key={s.n} className="timeline-step">
                <div className="step-num" aria-hidden="true">{s.n}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CALL */}
      <section style={{ background: "var(--dark)", borderTop: "1px solid var(--border)" }} id="why-call">
        <div className="section">
          <p className="section-label">Why Call</p>
          <h2 className="section-title">Why Call</h2>
          <ul className="checklist">
            {[
              "Connects you with independent roofers across the DFW metro",
              "One call — no forms to fill out",
              "Covers Dallas, Fort Worth, Arlington, Plano, Irving, Frisco, McKinney, Garland & surrounding areas (~50 mi)",
              "Available [HOURS_PLACEHOLDER]",
            ].map((item) => (
              <li key={item}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <p className="section-label">Common Questions</p>
          <h2 className="section-title">Got Questions?<br />We Have Answers.</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* BIG CTA */}
      <section className="big-cta" id="call-now">
        <div className="big-cta-content">
          <h2>Get Connected<br />With a Local Roofer.</h2>
          <p>One call connects you with an independent roofing contractor serving the DFW metro.</p>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", marginBottom: "24px" }}>Have your zip code ready.</p>
          <a href={phoneHref} className="cta-main" style={{ display: "inline-flex", margin: "0 auto" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Tap to Call · {phoneNumber}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo"><Image src="/siteflow-logo.png" alt="SiteFlow Network" width={205} height={56} loading="lazy" quality={75} sizes="(max-width: 640px) 120px, 160px" style={{ height: "28px", width: "auto", opacity: 0.7 }} /></div>
        <p className="tcpa">
          SiteFlow Network offers a free service to assist homeowners in connecting with local service providers. All contractors and providers are independent and SiteFlow Network does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work to be performed. All persons depicted in photos or videos are actors or models and not contractors listed on this website.{" "}
          <a href="https://siteflownetwork.com/privacy-policy">Privacy Policy</a>
          {" "}&nbsp;·&nbsp;{" "}
          <a href="https://siteflownetwork.com/terms-of-service">Terms</a>
          {" "}&nbsp;·&nbsp;{" "}
          © SiteFlow Network
        </p>
      </footer>
    </main>
  );
}
