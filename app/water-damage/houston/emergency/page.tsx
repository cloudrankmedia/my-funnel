"use client";

import { useState, useEffect } from "react";

export default function WaterDamageLanding() {
const [showStickyBar, setShowStickyBar] = useState(false);
const [openFaq, setOpenFaq] = useState<number | null>(null);

useEffect(() => {
const handleScroll = () => setShowStickyBar(window.scrollY > 300);
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

const phoneNumber = "(346) 910-9374";
const phoneHref = "tel:13469109374";

const faqs = [
{
q: "Who actually comes to my home?",
a: "We connect you with a local water damage restoration company operating in your area. It is your responsibility to verify that the provider furnishes the necessary license and insurance required for the work being performed."
},
{
q: "Is there a cost to call?",
a: "No. This is a no-cost connection service. You pay nothing to call and nothing for the connection. The restoration contractor will provide you with a full assessment and quote before any work begins."
},
{
q: "Will the contractor work with my insurance?",
a: "Many restoration contractors accept homeowner's insurance claims. Ask the contractor directly about their insurance billing process when they arrive."
},
{
q: "How fast will someone arrive?",
a: "Response times vary by provider and location. Many Houston metro crews aim to arrive within 45–90 minutes of dispatch. Confirm an ETA directly with the crew when you call."
},
{
q: "What if it's 2am or a weekend?",
a: "Water damage doesn't keep business hours. Our dispatch line connects you with available crews around the clock — 24 hours a day, 7 days a week including holidays."
},
{
q: "Is this a referral service?",
a: "No. SiteFlow Network is a connection service that assists homeowners in finding local service providers. All service providers are independent. We do not warrant or guarantee any service performed or product offered."
},
];

return (
<>
<style suppressHydrationWarning>{`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');

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
      font-family: 'Barlow', sans-serif;
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
    .sticky-bar p { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; color: #fff; }
    .sticky-bar a {
      background: white; color: var(--red);
      padding: 8px 20px; border-radius: 4px;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800; font-size: 16px;
      text-decoration: none; white-space: nowrap;
    }

    /* NAV */
    nav {
      padding: 16px 40px;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid var(--border);
      background: var(--charcoal);
    }
    .logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 22px; font-weight: 800;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--white);
    }
    .logo span { color: var(--red-light); }
    .nav-phone { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .nav-phone-label { font-size: 12px; color: var(--accessible-muted); text-transform: uppercase; letter-spacing: 1px; }
    .nav-phone-number {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 24px; font-weight: 800;
      color: var(--red-light); letter-spacing: 1px;
    }

    /* HERO */
    .hero {
      position: relative; min-height: 92vh;
      display: flex; align-items: center;
      overflow: hidden; background: var(--charcoal);
    }
    .hero-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 80% 50%, rgba(217,43,43,0.12) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgba(217,43,43,0.06) 0%, transparent 50%);
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 60px 60px;
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
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 13px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--red-light);
    }
    .hero h1 {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(52px, 8vw, 96px);
      font-weight: 900; line-height: 0.9;
      text-transform: uppercase; letter-spacing: -1px;
      margin-bottom: 8px; color: var(--white);
    }
    .hero h1 .accent { color: var(--red); display: block; }
    .hero-sub {
      font-size: 20px; color: var(--accessible-muted);
      max-width: 560px; margin: 24px 0 12px; line-height: 1.5;
    }
    .hero-sub strong { color: var(--text); }
    .hero-value-prop {
      font-size: 15px; color: var(--accessible-muted);
      max-width: 520px; margin: 0 0 36px;
      padding: 12px 16px;
      border-left: 3px solid var(--red);
      background: rgba(217,43,43,0.05);
      line-height: 1.6;
    }

    /* CTA BLOCK */
    .cta-block { display: flex; flex-direction: column; gap: 12px; max-width: 480px; }
    .cta-main {
      display: flex; align-items: center; justify-content: center; gap: 14px;
      background: var(--red); color: white;
      padding: 22px 36px; border-radius: 4px;
      text-decoration: none;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 26px; font-weight: 800;
      letter-spacing: 1px; text-transform: uppercase;
      transition: background 0.2s; border: none; cursor: pointer;
    }
    .cta-main:hover { background: var(--red-light); }
    .cta-main svg { flex-shrink: 0; }
    .cta-subtext { text-align: center; font-size: 13px; color: var(--accessible-muted); letter-spacing: 0.5px; }
    .cta-subtext strong { color: var(--yellow); }
    .cta-note {
      text-align: center; font-size: 12px;
      color: var(--accessible-muted);
      padding: 8px 0;
      border-top: 1px solid var(--border);
      margin-top: 4px;
    }

    /* TRUST ROW */
    .trust-row { display: flex; gap: 32px; margin-top: 52px; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 10px; }
    .trust-icon {
      width: 36px; height: 36px;
      background: rgba(217,43,43,0.12);
      border: 1px solid rgba(217,43,43,0.3);
      border-radius: 4px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .trust-icon svg { color: var(--red-light); }
    .trust-label { font-size: 14px; font-weight: 600; color: var(--text); }
    .trust-sublabel { font-size: 12px; color: var(--accessible-muted); }

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
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 36px; font-weight: 900;
      color: var(--red-light); display: block;
    }
    .proof-label { font-size: 12px; color: var(--accessible-muted); text-transform: uppercase; letter-spacing: 1px; }
    .proof-divider { width: 1px; height: 40px; background: var(--border); }

    /* INDUSTRY STATS */
    .stats-section {
      background: var(--charcoal);
      padding: 64px 40px;
    }
    .stats-inner { max-width: 1100px; margin: 0 auto; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2px; margin-top: 40px;
    }
    .stat-card {
      background: var(--panel);
      padding: 36px 32px;
      border-top: 3px solid var(--red);
    }
    .stat-number {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 56px; font-weight: 900;
      color: var(--red-light); line-height: 1;
      margin-bottom: 8px; display: block;
    }
    .stat-headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 20px; font-weight: 800;
      text-transform: uppercase; color: var(--white);
      margin-bottom: 10px; letter-spacing: 0.5px;
    }
    .stat-detail { font-size: 14px; color: var(--accessible-muted); line-height: 1.6; }
    .stat-source { font-size: 11px; color: #666; margin-top: 12px; font-style: italic; }

    /* CREDIBILITY MARKS */
    .credibility-bar {
      background: var(--panel);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 20px 40px;
      display: flex; align-items: center; justify-content: center;
      gap: 12px; flex-wrap: wrap;
    }
    .credibility-label {
      font-size: 11px; color: var(--accessible-muted);
      text-transform: uppercase; letter-spacing: 2px;
      white-space: nowrap;
    }
    .credibility-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      padding: 6px 14px; border-radius: 3px;
      font-size: 12px; font-weight: 600;
      color: var(--accessible-muted);
      letter-spacing: 0.5px;
    }
    .credibility-badge svg { color: var(--red-light); }

    /* URGENCY STRIP */
    .urgency-strip {
      background: var(--red-dark); padding: 16px 40px;
      display: flex; align-items: center; justify-content: center;
      gap: 40px; flex-wrap: wrap;
    }
    .urgency-strip p {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 16px; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase;
      display: flex; align-items: center; gap: 8px; color: #fff;
    }

    /* SECTIONS */
    .section { max-width: 1100px; margin: 0 auto; padding: 80px 40px; }
    .section-label {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 15px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--label-color); margin-bottom: 16px;
    }
    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
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
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 72px; font-weight: 900;
      color: #4A4A4A; line-height: 1; margin-bottom: 12px;
    }
    .step-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 20px; font-weight: 800;
      text-transform: uppercase; color: var(--white);
      margin-bottom: 8px; letter-spacing: 0.5px;
    }
    .step-desc { font-size: 14px; color: var(--accessible-muted); line-height: 1.6; }

    /* DAMAGE TYPES */
    .damage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2px; margin-top: 16px; }
    .damage-card {
      background: var(--panel); padding: 28px;
      border-left: 3px solid var(--border); transition: border-color 0.2s;
    }
    .damage-card:hover { border-color: var(--red); }
    .damage-card h3 {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 20px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.5px;
      color: var(--white); margin-bottom: 10px;
    }
    .damage-card p { font-size: 14px; color: var(--accessible-muted); }

    /* SPLIT SECTION */
    .split { display: grid; grid-template-columns: 1fr; gap: 2px; background: var(--border); }
    .split-panel { background: var(--panel); padding: 64px 52px; max-width: 900px; margin: 0 auto; width: 100%; }
    @media (max-width: 640px) { .split-panel { padding: 40px 24px; } }

    /* COST TABLE */
    .cost-table { width: 100%; border-collapse: collapse; margin-top: 24px; }
    .cost-table tr { border-bottom: 1px solid var(--border); }
    .cost-table tr:last-child { border-bottom: none; }
    .cost-table td { padding: 14px 0; font-size: 15px; }
    .cost-table td:first-child { color: var(--accessible-muted); }
    .cost-table td:last-child { text-align: right; color: var(--white); font-weight: 600; font-family: 'Barlow Condensed', sans-serif; font-size: 18px; }

    /* MOLD WARNING */
    .mold-warning {
      background: rgba(217,43,43,0.08);
      border: 1px solid rgba(217,43,43,0.25);
      border-radius: 4px; padding: 24px; margin-top: 28px;
    }
    .mold-warning-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 18px; font-weight: 800;
      text-transform: uppercase; color: #FF6B6B;
      margin-bottom: 8px; letter-spacing: 0.5px;
    }
    .mold-warning p { font-size: 14px; color: var(--accessible-muted); }

    /* CHECKLIST */
    .checklist { list-style: none; margin-top: 24px; }
    .checklist li {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 12px 0; border-bottom: 1px solid var(--border);
      font-size: 15px; color: var(--text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li svg { color: var(--red-light); flex-shrink: 0; margin-top: 2px; }

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
      font-family: 'Barlow', sans-serif;
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
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(44px, 7vw, 80px); font-weight: 900;
      text-transform: uppercase; line-height: 0.9;
      color: var(--white); margin-bottom: 20px;
    }
    .big-cta p { font-size: 18px; color: rgba(255,255,255,0.9); margin-bottom: 40px; }
    .big-cta-number {
      display: block;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(40px, 7vw, 72px); font-weight: 900;
      color: var(--white); letter-spacing: 2px;
      text-decoration: none; margin-bottom: 16px;
      transition: color 0.2s;
    }
    .big-cta-number:hover { color: var(--yellow); }

    /* FOOTER */
    footer {
      background: var(--dark); border-top: 1px solid var(--border);
      padding: 40px;
      display: flex; align-items: flex-start; justify-content: space-between;
      flex-wrap: wrap; gap: 20px;
    }
    .footer-logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 16px; font-weight: 800;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--accessible-muted);
    }
    .footer-logo span { color: var(--red-light); }
    .tcpa { font-size: 11px; color: #A8A8A8; max-width: 640px; line-height: 1.6; }
    .tcpa a { color: #C8C8C8; text-decoration: underline; }
    .tcpa a:hover { color: var(--white); }

    /* RESPONSIVE */
    @media (max-width: 640px) {
      nav { padding: 14px 20px; }
      .hero-content { padding: 60px 20px; }
      .section { padding: 60px 20px; }
      .trust-row { gap: 20px; }
      .urgency-strip { padding: 14px 20px; gap: 16px; }
      .split-panel { padding: 40px 24px; }
      .big-cta { padding: 60px 20px; }
      footer { padding: 28px 20px; flex-direction: column; align-items: flex-start; }
      .social-proof-bar { gap: 24px; padding: 24px 20px; }
      .proof-divider { display: none; }
      .credibility-bar { padding: 16px 20px; gap: 8px; }
      .stats-section { padding: 48px 20px; }
      .faq-section { padding: 60px 20px; }
    }
  `}</style>

  {/* STICKY BAR */}
  <div className={`sticky-bar ${showStickyBar ? "visible" : ""}`}>
    <p>Water damage gets worse every hour — call now</p>
    <a href={phoneHref}>{phoneNumber}</a>
  </div>

  {/* NAV */}
  <nav>
    <div className="logo">Site<span>Flow</span> Network</div>
    <a href={phoneHref} className="nav-phone">
      <div>
        <div className="nav-phone-label">Emergency Line — 24/7</div>
        <div className="nav-phone-number">{phoneNumber}</div>
      </div>
    </a>
  </nav>

  {/* HERO */}
  <section className="hero">
    <div className="hero-bg" />
    <div className="hero-grid" />
    <div className="hero-content">
      <div className="emergency-badge">
        <div className="dot" />
        <span>Available 24 Hours — 7 Days a Week</span>
      </div>

      <h1>
        Water
        <span className="accent">Emergency?</span>
      </h1>

      <p className="hero-sub">
        Standing water, flood damage, or active leak —{" "}
        <strong>one call connects you with a local restoration crew.</strong>
      </p>

      <p className="hero-value-prop">
        We connect Houston homeowners with local water damage restoration professionals. Industrial pumps and air movers on-site. Many Houston crews aim to arrive within 45–90 minutes — response times vary by provider and location.
      </p>

      <div className="cta-block">
        <a href={phoneHref} className="cta-main">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Call Now — Get Connected Fast
        </a>
        <p className="cta-subtext">
          <strong>No cost to call.</strong> Local restoration professionals. Houston metro area.
        </p>
        <p className="cta-note">
          Contractors provide a quote before work begins — you decide whether to proceed.
        </p>
      </div>

      <div className="trust-row">
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <div className="trust-label">Fast Response</div>
            <div className="trust-sublabel">Houston Metro Area</div>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <div className="trust-label">Local Professionals</div>
            <div className="trust-sublabel">Serving the Houston area</div>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
            </svg>
          </div>
          <div>
            <div className="trust-label">Insurance Assistance</div>
            <div className="trust-sublabel">Ask contractor about billing</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* SOCIAL PROOF BAR */}
  <div className="social-proof-bar" role="region" aria-label="Service statistics">
    <div className="proof-stat">
      <span className="proof-num">24/7</span>
      <span className="proof-label">Emergency Dispatch</span>
    </div>
    <div className="proof-divider" aria-hidden="true" />
    <div className="proof-stat">
      <span className="proof-num">45–90</span>
      <span className="proof-label">Min. Typical Response*</span>
    </div>
    <div className="proof-divider" aria-hidden="true" />
    <div className="proof-stat">
      <span className="proof-num">$0</span>
      <span className="proof-label">Cost to Call</span>
    </div>
    <div className="proof-divider" aria-hidden="true" />
    <div className="proof-stat">
      <span className="proof-num">Houston</span>
      <span className="proof-label">Metro Coverage</span>
    </div>
  </div>

  {/* CREDIBILITY MARKS */}
  <div className="credibility-bar" role="region" aria-label="Provider requirements">
    <span className="credibility-label">We ask providers to carry</span>
    {[
      { label: "State License" },
      { label: "Active Insurance" },
      { label: "IICRC Training" },
      { label: "Background Check" },
    ].map((b) => (
      <span key={b.label} className="credibility-badge">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        {b.label}
      </span>
    ))}
  </div>

  {/* URGENCY STRIP */}
  <div className="urgency-strip" role="region" aria-label="Urgency indicators">
    <p>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21L12 2l11 19H1zm11-3v-4h-2v4h2zm0-6V9h-2v3h2z"/></svg>
      Mold can begin forming within 24–48 hours
    </p>
    <p>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21L12 2l11 19H1zm11-3v-4h-2v4h2zm0-6V9h-2v3h2z"/></svg>
      Structural damage accelerates after 72 hours
    </p>
    <p>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21L12 2l11 19H1zm11-3v-4h-2v4h2zm0-6V9h-2v3h2z"/></svg>
      Insurance prefers documented rapid response
    </p>
  </div>

  {/* INDUSTRY STATS */}
  <section className="stats-section">
    <div className="stats-inner">
      <p className="section-label">Why Fast Response Matters</p>
      <h2 className="section-title">The Cost of<br />Waiting</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">1 in 50</span>
          <h3 className="stat-headline">Homes Affected Annually</h3>
          <p className="stat-detail">Approximately 1 in 50 insured homes files a water damage claim each year, making it one of the most common homeowner insurance events in the US.</p>
          <p className="stat-source">Source: Insurance Information Institute</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">24–48</span>
          <h3 className="stat-headline">Hours to Mold Growth</h3>
          <p className="stat-detail">Mold can begin colonizing wet building materials within 24 to 48 hours of water exposure. Fast extraction and drying is the only reliable way to prevent it.</p>
          <p className="stat-source">Source: EPA guidelines on mold and moisture</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">$13K</span>
          <h3 className="stat-headline">Average Water Damage Claim</h3>
          <p className="stat-detail">The average homeowner insurance claim for water damage and freezing is approximately $13,000. Delayed response consistently increases both damage scope and remediation cost.</p>
          <p className="stat-source">Source: Insurance Information Institute</p>
        </div>
      </div>
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section style={{ background: "var(--charcoal)" }}>
    <div className="section">
      <p className="section-label">What To Expect</p>
      <h2 className="section-title">
        How It Works
        <br />
        When You Call
      </h2>
      <div className="timeline">
        {[
          { n: "01", title: "You Call", desc: "One call connects you with a local restoration professional available in your zip code — no hold times, no runaround." },
          { n: "02", title: "Fast Dispatch", desc: "A local crew is dispatched. Many Houston area crews aim to arrive within 45–90 minutes. Response times vary by provider and location." },
          { n: "03", title: "Assessment", desc: "The team evaluates the source, scope, and category of damage and walks you through the remediation plan before any work begins." },
          { n: "04", title: "Water Removal", desc: "Industrial extractors and air movers begin removing standing water and moisture from walls, floors, and cavities." },
          { n: "05", title: "Drying & Monitoring", desc: "Dehumidifiers run continuously. Moisture readings are tracked daily until all affected areas are certified dry." },
          { n: "06", title: "Restoration", desc: "Damaged materials are repaired or replaced. Your home is returned to pre-loss condition. Ask your contractor about insurance paperwork." },
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

  {/* DAMAGE TYPES */}
  <section style={{ background: "var(--dark)", borderTop: "1px solid var(--border)" }}>
    <div className="section">
      <p className="section-label">We Handle</p>
      <h2 className="section-title">Every Type of Water Emergency</h2>
      <div className="damage-grid">
        {[
          { title: "Burst Pipes", desc: "Frozen or failed pipes can dump hundreds of gallons per hour. Fast extraction stops the spread." },
          { title: "Flooding", desc: "Storm water, overflowing rivers, or heavy rain intrusion — category 3 water requires immediate professional response." },
          { title: "Sewage Backup", desc: "Black water contamination is a health emergency. Full containment, extraction, and sanitization required." },
          { title: "Appliance Leaks", desc: "Water heaters, washing machines, and dishwashers can silently saturate walls and subfloors for days." },
          { title: "Roof Leaks", desc: "Storm damage, failed flashing, or ice dams allow water to penetrate attic insulation and ceiling cavities." },
          { title: "Slab Leaks", desc: "Under-slab plumbing failures cause moisture to wick upward through flooring — often missed until mold appears." },
        ].map((d) => (
          <div key={d.title} className="damage-card">
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* SPLIT: COST + WHAT TO DO */}
  <div className="split">
    <div className="split-panel">
      <p className="section-label">Understand the Cost</p>
      <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
        What Water<br />Damage Costs
      </h2>
      <p style={{ fontSize: 14, color: "var(--accessible-muted)", marginBottom: 8 }}>
        Typical Houston restoration costs by severity:
      </p>
      <table className="cost-table">
        <tbody>
          {[
            ["Minor (single room)", "$1,200 – $3,500"],
            ["Moderate (multiple rooms)", "$3,500 – $8,000"],
            ["Major (structural impact)", "$8,000 – $20,000+"],
            ["Sewage contamination", "$7,000 – $25,000+"],
          ].map(([label, cost]) => (
            <tr key={label}><td>{label}</td><td>{cost}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="mold-warning">
        <h3 className="mold-warning-title">⚠ Delayed Response = Higher Cost</h3>
        <p>Every 24-hour delay increases remediation costs by an estimated 20–40%. Mold remediation alone can add $3,000–$15,000 to a claim that could have been avoided with fast response.</p>
      </div>
    </div>

    <div className="split-panel">
      <p className="section-label">Right Now</p>
      <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
        What To Do<br />While You Wait
      </h2>
      <ul className="checklist">
        {[
          "Shut off the water source if safe to do so — main shutoff is typically near the meter",
          "Cut power to affected rooms at the breaker if water is near electrical outlets",
          "Do not use a standard vacuum or shop vac on standing water — it's a shock hazard",
          "Move valuables, documents, and electronics to dry areas",
          "Do not walk on wet flooring more than necessary — it spreads contamination",
          "Document everything with photos before moving or removing anything",
          "Do not use fans or open windows — this can spread mold spores if already present",
          "Call your insurance company after calling the restoration crew",
        ].map((item) => (
          <li key={item}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* FAQ */}
  <section className="faq-section">
    <div className="faq-inner">
      <p className="section-label">Common Questions</p>
      <h2 className="section-title">Got Questions?<br />We Have Answers.</h2>
      <div className="faq-list" role="list">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item" role="listitem">
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              {faq.q}
              <span className={`faq-icon ${openFaq === i ? "open" : ""}`} aria-hidden="true">+</span>
            </button>
            {openFaq === i && (
              <div className="faq-answer">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* BIG CTA */}
  <section className="big-cta">
    <div className="big-cta-content">
      <h2>Don&apos;t Wait.<br />Call Now.</h2>
      <p>The longer water sits, the worse the damage and the higher the bill. One call connects you with a local restoration professional right now.</p>
      <a href={phoneHref} className="cta-main" style={{ display: "inline-flex", margin: "0 auto" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        Call Now — Get Connected Fast
      </a>
    </div>
  </section>

  {/* FOOTER */}
  <footer>
    <div className="footer-logo">Site<span>Flow</span> Network</div>
    <p className="tcpa">
      SiteFlow Network (the &ldquo;Website&rdquo;) offers a no-cost service to assist homeowners in connecting with local water damage restoration service providers. All contractors/providers are independent and the Website does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work to be performed. All persons depicted in photos or videos are actors or models and not contractors listed on the Website.{" "}
      By calling the number above, you consent to be contacted by a local restoration contractor in your area. This is an advertising service. We do not perform restoration work directly. Calls may be recorded for quality assurance. Standard call rates may apply. *Response times vary by provider and location.{" "}
      <a href="https://siteflownetwork.com/privacy-policy">Privacy Policy</a>
      {" "}&nbsp;|&nbsp;{" "}
      <a href="https://siteflownetwork.com/terms-of-service">Terms of Service</a>
    </p>
  </footer>
</>
  );
}
