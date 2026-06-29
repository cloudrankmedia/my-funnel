import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import StickyCallBar from "./StickyCallBar";

// PENDING SD-ISSUED ROOFING DID — do not ship live
// Single source of truth for the roofing call number. Swap this one value once
// Service Direct issues the roofing DID. Every call button/link references it.
const ROOFING_DID = "{{ROOFING_DID}}";

export default function RoofingOklahomaCityLanding() {
  const phoneNumber = ROOFING_DID;
  const phoneHref = `tel:${ROOFING_DID}`;

  const faqs = [
    {
      q: "Does SiteFlow Network do the roofing work?",
      a: "No. We connect you with independent local roofing contractors who handle the work directly.",
    },
    {
      q: "What areas do you cover?",
      a: "The Oklahoma City metro and surrounding communities, roughly a 50-mile radius.",
    },
    {
      q: "What should I have ready when I call?",
      a: "Your zip code and a quick description of your roof issue.",
    },
    {
      q: "Will someone look at my roof damage?",
      a: "The roofer you're connected with handles inspection of storm or other damage to repair or replace your roof.",
    },
    {
      q: "Does it cost anything to call or get an inspection?",
      a: "No. Calling to get connected is free, and the local roofer you're matched with offers a free, no-obligation roof inspection. You decide whether to move forward.",
    },
    {
      q: "Can a roofer help with my insurance claim?",
      a: "Yes. Many roofers in our network work with storm and hail insurance claims and can help document the damage for your carrier.",
    },
    {
      q: "How fast can someone come out?",
      a: "Many Oklahoma City roofers respond the same day, though response times vary by provider and area.",
    },
  ];

  return (
    <main>
      <style suppressHydrationWarning>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy: #212E50;
      --navy-dark: #18223D;
      --navy-light: #313F66;
      --orange: #E8500A;
      --orange-dark: #C8430A;
      --orange-light: #F47A36;
      --cream: #F6E8E6;
      --bg: #FFFFFF;
      --bg-alt: #FBF6F5;
      --border: #ECE2E0;
      --ink: #212E50;
      --muted: #5B6478;
      --muted-light: #AEB6CC;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-dm-sans), sans-serif;
      background: var(--bg);
      color: var(--ink);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .wrap { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
    @media (max-width: 640px) { .wrap { padding: 0 20px; } }

    /* STICKY BAR */
    .sticky-bar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: var(--navy);
      border-bottom: 2px solid var(--orange);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }
    .sticky-bar.visible { transform: translateY(0); }
    .sticky-bar p { font-size: 15px; font-weight: 600; color: var(--cream); }
    .sticky-bar a {
      background: var(--orange); color: #fff;
      padding: 9px 22px; border-radius: 6px;
      font-weight: 700; font-size: 15px;
      text-decoration: none; white-space: nowrap; flex-shrink: 0;
      transition: background 0.2s;
    }
    .sticky-bar a:hover { background: var(--orange-dark); }
    @media (max-width: 640px) {
      .sticky-bar { padding: 10px 16px; gap: 12px; }
      .sticky-bar p { font-size: 13px; }
      .sticky-bar a { font-size: 13px; padding: 8px 16px; }
    }

    /* NAV */
    nav {
      background: var(--navy);
      padding: 14px 0;
    }
    nav .wrap { display: flex; align-items: center; justify-content: space-between; }
    .logo { display: flex; align-items: center; }
    @media (max-width: 640px) { .logo img { height: 34px !important; } }
    .nav-phone { display: flex; flex-direction: column; align-items: flex-end; text-decoration: none; }
    .nav-phone-label { font-size: 11px; color: var(--muted-light); text-transform: uppercase; letter-spacing: 1.5px; white-space: nowrap; }
    .nav-phone-number {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 26px; font-weight: 700;
      color: var(--cream); letter-spacing: 0.5px;
    }
    .nav-phone:hover .nav-phone-number { color: var(--orange-light); }

    /* HERO */
    .hero {
      background:
        radial-gradient(ellipse at 78% 20%, rgba(232,80,10,0.18) 0%, transparent 55%),
        linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%);
      color: var(--cream);
      padding: 96px 0 104px;
    }
    .eyebrow {
      display: inline-block;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 14px; font-weight: 700;
      letter-spacing: 3px; text-transform: uppercase;
      color: var(--orange-light); margin-bottom: 22px;
    }
    .hero h1 {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(40px, 6vw, 68px);
      font-weight: 800; line-height: 1.02;
      letter-spacing: -0.5px; max-width: 880px;
      margin-bottom: 22px; color: var(--cream);
    }
    .hero h1 .accent { color: var(--orange); }
    .hero-sub {
      font-size: 20px; color: var(--muted-light);
      max-width: 640px; margin-bottom: 16px; line-height: 1.55;
    }
    .hero-sub strong { color: var(--cream); font-weight: 600; }
    .hero-clarity {
      font-size: 15px; color: var(--muted-light);
      max-width: 600px; margin-bottom: 40px;
      padding-left: 16px; border-left: 3px solid var(--orange);
      line-height: 1.6;
    }

    /* CTA BUTTON */
    .cta-block { display: flex; flex-direction: column; gap: 14px; max-width: 520px; align-items: flex-start; }
    .cta-main {
      display: inline-flex; align-items: center; justify-content: center; gap: 12px;
      background: var(--orange); color: #fff;
      padding: 20px 38px; border-radius: 8px;
      text-decoration: none;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 25px; font-weight: 700;
      letter-spacing: 0.5px;
      transition: background 0.2s, transform 0.1s;
      box-shadow: 0 10px 30px rgba(232,80,10,0.28);
      white-space: nowrap;
    }
    .cta-main:hover { background: var(--orange-dark); }
    .cta-main:active { transform: translateY(1px); }
    .cta-main svg { flex-shrink: 0; }
    .cta-helper { font-size: 14px; color: var(--muted-light); font-weight: 500; }
    .cta-helper.dark { color: var(--muted); }
    @media (max-width: 640px) {
      .hero { padding: 64px 0 72px; }
      .cta-main { font-size: 20px; padding: 17px 26px; width: 100%; }
      .cta-block { max-width: none; align-items: stretch; }
      .cta-helper { text-align: center; }
    }

    /* COVERAGE STRIP */
    .coverage {
      background: var(--bg-alt);
      border-bottom: 1px solid var(--border);
    }
    .coverage .wrap {
      display: flex; align-items: stretch; justify-content: center;
      flex-wrap: wrap;
    }
    .cov-item { flex: 1; min-width: 160px; text-align: center; padding: 30px 16px; }
    .cov-item + .cov-item { border-left: 1px solid var(--border); }
    .cov-num {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 30px; font-weight: 800; color: var(--orange); display: block; line-height: 1.1;
    }
    .cov-label { font-size: 13px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    @media (max-width: 640px) {
      .coverage .wrap { display: grid; grid-template-columns: 1fr 1fr; padding: 0; }
      .cov-item { padding: 22px 12px; }
      .cov-item + .cov-item { border-left: none; }
      .cov-item:nth-child(even) { border-left: 1px solid var(--border); }
      .cov-item:nth-child(n+3) { border-top: 1px solid var(--border); }
    }

    /* SECTIONS */
    .section { padding: 88px 0; }
    @media (max-width: 640px) { .section { padding: 60px 0; } }
    .section.alt { background: var(--bg-alt); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .section-label {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 14px; font-weight: 700;
      letter-spacing: 2.5px; text-transform: uppercase;
      color: var(--orange); margin-bottom: 12px;
    }
    .section-title {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(32px, 4.5vw, 48px);
      font-weight: 800; line-height: 1.05; letter-spacing: -0.5px;
      color: var(--navy); margin-bottom: 44px;
    }

    /* REASON CARDS */
    .reason-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .reason-card {
      background: var(--bg); border: 1px solid var(--border);
      border-radius: 10px; padding: 24px 26px;
      display: flex; align-items: center; gap: 16px;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    }
    .reason-card:hover { border-color: var(--orange); box-shadow: 0 8px 24px rgba(36,46,81,0.08); transform: translateY(-2px); }
    .reason-icon {
      width: 40px; height: 40px; flex-shrink: 0;
      background: rgba(232,80,10,0.1); border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      color: var(--orange);
    }
    .reason-card h3 { font-size: 17px; font-weight: 600; color: var(--navy); line-height: 1.3; }
    .section.alt .reason-card { background: #fff; }

    /* HOW IT WORKS */
    .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    @media (max-width: 768px) { .steps { grid-template-columns: 1fr; } }
    .step {
      background: var(--bg); border: 1px solid var(--border);
      border-top: 4px solid var(--orange); border-radius: 10px;
      padding: 32px 30px;
    }
    .step-num {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 18px; font-weight: 800; color: #fff;
      width: 40px; height: 40px; border-radius: 50%;
      background: var(--navy);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 18px;
    }
    .step h3 { font-family: var(--font-barlow-condensed), sans-serif; font-size: 23px; font-weight: 700; color: var(--navy); margin-bottom: 8px; letter-spacing: -0.3px; }
    .step p { font-size: 15px; color: var(--muted); line-height: 1.6; }

    /* CHECKLIST */
    .checklist { list-style: none; max-width: 820px; }
    .checklist li {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 18px 0; border-bottom: 1px solid var(--border);
      font-size: 17px; color: var(--ink);
    }
    .checklist li:last-child { border-bottom: none; }
    .check-icon {
      width: 26px; height: 26px; flex-shrink: 0; margin-top: 1px;
      background: rgba(232,80,10,0.12); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--orange);
    }

    /* FAQ */
    .faq-inner { max-width: 820px; margin: 0 auto; }
    .faq-list { display: flex; flex-direction: column; gap: 12px; }
    .faq-item { background: var(--bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
    .faq-question {
      width: 100%; background: none; border: none;
      padding: 22px 26px;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      cursor: pointer; text-align: left;
      font-family: var(--font-dm-sans), sans-serif;
      font-size: 17px; font-weight: 600; color: var(--navy);
      transition: background 0.2s;
    }
    .faq-question:hover { background: var(--bg-alt); }
    .faq-icon {
      width: 28px; height: 28px; flex-shrink: 0;
      background: rgba(232,80,10,0.12); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--orange); font-size: 20px; font-weight: 400;
      transition: transform 0.2s;
    }
    .faq-icon.open { transform: rotate(45deg); }
    .faq-answer { padding: 0 26px 22px; font-size: 16px; color: var(--muted); line-height: 1.65; }
    .section.alt .faq-item { background: #fff; }

    /* BIG CTA */
    .big-cta {
      background:
        radial-gradient(ellipse at 50% 0%, rgba(232,80,10,0.22) 0%, transparent 60%),
        linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%);
      padding: 96px 0; text-align: center;
    }
    .big-cta h2 {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(34px, 5vw, 56px); font-weight: 800;
      line-height: 1.02; letter-spacing: -0.5px;
      color: var(--cream); margin-bottom: 16px; max-width: 720px; margin-left: auto; margin-right: auto;
    }
    .big-cta > .wrap > p { font-size: 18px; color: var(--muted-light); margin-bottom: 14px; max-width: 600px; margin-left: auto; margin-right: auto; }
    .big-cta .cta-main { margin-top: 22px; }
    .big-cta .cta-helper { margin-top: 16px; }

    /* HERO TRUST BAR */
    .hero-trust {
      display: flex; flex-wrap: wrap; gap: 14px 28px;
      margin-top: 36px; padding-top: 28px;
      border-top: 1px solid rgba(174,182,204,0.25);
      max-width: 660px;
    }
    .hero-trust-item {
      display: flex; align-items: center; gap: 9px;
      font-size: 14.5px; font-weight: 600; color: var(--cream);
    }
    .hero-trust-item svg { color: var(--orange-light); flex-shrink: 0; }
    @media (max-width: 640px) { .hero-trust { gap: 12px 18px; margin-top: 28px; padding-top: 22px; } .hero-trust-item { font-size: 13.5px; } }

    /* PARTNER / CREDENTIAL STRIP */
    .partner-strip {
      background: var(--navy-dark);
      border-top: 1px solid rgba(174,182,204,0.12);
      color: var(--cream); padding: 54px 0;
    }
    .partner-strip .wrap { text-align: center; }
    .partner-lead {
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: clamp(23px, 3.2vw, 32px); font-weight: 700; line-height: 1.18;
      max-width: 780px; margin: 0 auto 10px; letter-spacing: -0.3px;
    }
    .partner-lead .accent { color: var(--orange-light); }
    .partner-sub { font-size: 15px; color: var(--muted-light); max-width: 660px; margin: 0 auto 30px; line-height: 1.6; }
    .partner-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
    .partner-badge {
      display: inline-flex; align-items: center; gap: 9px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(174,182,204,0.22);
      border-radius: 999px; padding: 10px 18px;
      font-size: 14px; font-weight: 600; color: var(--cream);
    }
    .partner-badge svg { color: var(--orange-light); flex-shrink: 0; }

    /* BENEFIT / GUARANTEE CALLOUTS */
    .benefit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 16px; }
    .benefit-card {
      background: var(--bg); border: 1px solid var(--border);
      border-radius: 10px; padding: 28px 26px;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    }
    .benefit-card:hover { border-color: var(--orange); box-shadow: 0 8px 24px rgba(36,46,81,0.08); transform: translateY(-2px); }
    .section.alt .benefit-card { background: #fff; }
    .benefit-icon {
      width: 46px; height: 46px; border-radius: 10px;
      background: rgba(232,80,10,0.1); color: var(--orange);
      display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
    }
    .benefit-card h3 { font-family: var(--font-barlow-condensed), sans-serif; font-size: 22px; font-weight: 700; color: var(--navy); margin-bottom: 7px; letter-spacing: -0.3px; }
    .benefit-card p { font-size: 15px; color: var(--muted); line-height: 1.6; }

    /* INSURANCE COORDINATION */
    .insurance-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
    @media (max-width: 768px) { .insurance-grid { grid-template-columns: 1fr; gap: 32px; } }
    .insurance-copy p { font-size: 17px; color: var(--muted); margin-bottom: 18px; line-height: 1.65; }
    .insurance-copy .checklist { margin-top: 4px; }
    .insurance-card {
      background:
        radial-gradient(ellipse at 50% 0%, rgba(232,80,10,0.20) 0%, transparent 65%),
        linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%);
      border-radius: 14px; padding: 40px 36px; color: var(--cream);
    }
    .insurance-card h3 { font-family: var(--font-barlow-condensed), sans-serif; font-size: 27px; font-weight: 700; margin-bottom: 12px; line-height: 1.15; }
    .insurance-card p { color: var(--muted-light); font-size: 15px; margin-bottom: 24px; line-height: 1.6; }
    .insurance-card .cta-main { width: 100%; font-size: 21px; padding: 16px 24px; }

    /* TESTIMONIALS */
    .reviews-note {
      background: #FFF4E8; border: 1px dashed var(--orange);
      border-radius: 10px; padding: 14px 18px; margin-bottom: 28px;
      font-size: 14px; color: var(--orange-dark); max-width: 860px; line-height: 1.55;
    }
    .review-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; }
    .review-card {
      background: var(--bg); border: 1px solid var(--border); border-radius: 12px;
      padding: 26px 26px; display: flex; flex-direction: column; gap: 14px;
    }
    .section.alt .review-card { background: #fff; }
    .review-card.placeholder { border-style: dashed; border-color: var(--muted-light); background: var(--bg-alt); }
    .review-tag {
      align-self: flex-start;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
      color: var(--orange-dark); background: rgba(232,80,10,0.12);
      padding: 4px 10px; border-radius: 5px;
    }
    .review-quote { font-size: 16px; color: var(--ink); line-height: 1.6; font-style: italic; }
    .review-attrib { display: flex; align-items: center; gap: 12px; margin-top: auto; }
    .review-avatar {
      width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
      background: var(--bg); border: 1px dashed var(--muted-light);
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-barlow-condensed), sans-serif; font-weight: 700; color: var(--muted);
    }
    .review-name { display: block; font-weight: 700; color: var(--navy); font-size: 15px; }
    .review-loc { display: block; font-size: 13px; color: var(--muted); }

    /* FOOTER */
    footer {
      background: var(--navy);
      padding: 48px 0 40px;
    }
    footer .wrap { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
    .footer-logo { display: flex; align-items: center; }
    .tcpa { font-size: 11.5px; color: var(--muted-light); max-width: 660px; line-height: 1.65; }
    .tcpa a { color: var(--cream); text-decoration: underline; }
    .tcpa a:hover { color: var(--orange-light); }
    @media (max-width: 640px) {
      footer .wrap { flex-direction: column; }
    }
  `}</style>

      {/* STICKY BAR */}
      <StickyCallBar phoneNumber={phoneNumber} phoneHref={phoneHref} />

      {/* NAV */}
      <nav>
        <div className="wrap">
          <div className="logo"><Image src="/siteflow-logo.png" alt="SiteFlow Network" width={235} height={50} priority quality={85} sizes="(max-width: 640px) 180px, 235px" style={{ height: "44px", width: "auto" }} /></div>
          <a href={phoneHref} className="nav-phone">
            <span className="nav-phone-label">OKC Roofing Line</span>
            <span className="nav-phone-number">{phoneNumber}</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Oklahoma City Metro</span>
          <h1>
            Roof Damage in Oklahoma City?{" "}
            <span className="accent">Get Connected With a Local Roofer.</span>
          </h1>
          <p className="hero-sub">
            Storm or hail damage, a roof leak, missing shingles, or need a full replacement?{" "}
            <strong>Call to get connected with an independent roofing contractor serving the OKC metro.</strong>
          </p>
          <p className="hero-clarity">
            SiteFlow Network connects homeowners with independent local roofing contractors. We don&apos;t perform roofing work ourselves.
          </p>
          <div className="cta-block">
            <a href={phoneHref} className="cta-main">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Tap to Call · {phoneNumber}
            </a>
            <span className="cta-helper">Have your zip code ready when you call.</span>
          </div>

          {/* HERO TRUST BAR — qualitative, honest service signals only.
              No invented numeric rating or review count for SiteFlow. */}
          <div className="hero-trust">
            {[
              "Free roof inspection",
              "No obligation",
              "Same-day response available",
              "Help with insurance claims",
            ].map((t) => (
              <span key={t} className="hero-trust-item">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE STRIP */}
      <div className="coverage" role="region" aria-label="Service coverage">
        <div className="wrap">
          <div className="cov-item"><span className="cov-num">OKC</span><span className="cov-label">Metro Coverage</span></div>
          <div className="cov-item"><span className="cov-num">~50 mi</span><span className="cov-label">Service Radius</span></div>
          <div className="cov-item"><span className="cov-num">Local</span><span className="cov-label">Independent Roofers</span></div>
          <div className="cov-item"><span className="cov-num">1 Call</span><span className="cov-label">No Forms</span></div>
        </div>
      </div>

      {/* PARTNER / CREDENTIAL STRIP — honest partner-network framing.
          IMPORTANT: every claim here describes the INDEPENDENT roofers in the
          network, NOT SiteFlow itself. SiteFlow is a connection service and
          holds none of these badges. Qualifiers ("vetted", "many", "local")
          are intentional — do not change them to assert specific badges this
          page owns, and do not add named certifications (e.g. "GAF Master
          Elite", "BBB A+") that belong to a specific third-party company. */}
      <section className="partner-strip" id="trust">
        <div className="wrap">
          <p className="partner-lead">
            We match you with <span className="accent">licensed, insured, and vetted</span> local Oklahoma City roofers.
          </p>
          <p className="partner-sub">
            Every contractor in our network is an independent, local professional — many are GAF-certified and BBB-accredited. We help you connect with the right one for your roof.
          </p>
          <div className="partner-badges">
            {[
              "Licensed & insured pros",
              "Vetted local contractors",
              "Many GAF-certified",
              "Many BBB-accredited",
              "OKC-based",
            ].map((b) => (
              <span key={b} className="partner-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON REASONS */}
      <section className="section" id="reasons">
        <div className="wrap">
          <p className="section-label">Why Homeowners Call</p>
          <h2 className="section-title">Common reasons homeowners call</h2>
          <div className="reason-grid">
            {[
              "Storm & hail damage",
              "Emergency roof tarping",
              "Roof leaks",
              "Missing, cracked, or curling shingles",
              "Full roof replacement",
              "Flat, metal, tile & slate roofs",
              "Storm-damage inspection — to repair or replace",
            ].map((reason) => (
              <div key={reason} className="reason-card">
                <span className="reason-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3>{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — service trust signals SiteFlow can honestly claim.
          These are framed around the connection service + what the matched
          local pro provides. No guarantees on response time. */}
      <section className="section alt" id="what-you-get">
        <div className="wrap">
          <p className="section-label">No Cost To Call</p>
          <h2 className="section-title">What you get when you call</h2>
          <div className="benefit-grid">
            {[
              {
                title: "100% free roof inspection",
                desc: "The independent local pro we connect you with offers a free, no-obligation roof inspection — you pay nothing to have your roof looked at.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
                ),
              },
              {
                title: "No obligation",
                desc: "Get your roof looked at and your options explained with zero pressure to commit. You decide if and when to move forward.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                ),
              },
              {
                title: "Fast, same-day response",
                desc: "Call and get connected quickly — many Oklahoma City roofers respond the same day. Response times vary by provider and area.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
                ),
              },
              {
                title: "Help with insurance claims",
                desc: "Storm or hail damage? The roofers we match you with can help you document the damage and work through your insurance claim.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" /></svg>
                ),
              },
              {
                title: "No high-pressure sales",
                desc: "We connect you with a local roofer and step out of the way — no pushy SiteFlow sales calls, ever.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 8h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
                ),
              },
              {
                title: "Matched with a top local pro",
                desc: "We match you with a vetted, local Oklahoma City roofing contractor who knows Oklahoma storms — not an out-of-town call center.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
                ),
              },
            ].map((b) => (
              <div key={b.title} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="wrap">
          <p className="section-label">Simple Process</p>
          <h2 className="section-title">How it works</h2>
          <div className="steps">
            {[
              { n: "1", title: "Call the number above", desc: "One call gets you started — no hold times, no runaround." },
              { n: "2", title: "Tell us about your roof", desc: "Tell us your zip code and what's going on with your roof." },
              { n: "3", title: "Get connected", desc: "Get connected with an independent local roofer serving your area." },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="step-num" aria-hidden="true">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT — modeled on the reference "when we show up" block, but
          honestly reframed: SiteFlow does NOT show up. The independent matched
          roofer does the inspection and work. Reuses the .steps/.step styles. */}
      <section className="section alt" id="what-to-expect">
        <div className="wrap">
          <p className="section-label">After You Call</p>
          <h2 className="section-title">What to expect when your roofer shows up</h2>
          <div className="steps">
            {[
              { n: "1", title: "Your roofer arrives", desc: "The independent local pro we connect you with comes out to look at your roof — often the same day." },
              { n: "2", title: "Free inspection & honest options", desc: "They inspect the damage, walk you through what they find, and lay out repair or replacement options. No obligation to move forward." },
              { n: "3", title: "The work — and the paperwork", desc: "If you decide to proceed, your roofer handles the job and can help document the damage for your insurance claim." },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="step-num" aria-hidden="true">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE COORDINATION */}
      <section className="section" id="insurance">
        <div className="wrap">
          <div className="insurance-grid">
            <div className="insurance-copy">
              <p className="section-label">Storm & Hail Claims</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>We connect you with a roofer who handles insurance</h2>
              <p>
                Central Oklahoma gets hit hard by hail, wind, and tornado-season storms, and roof damage is one of the most common homeowner insurance claims in the OKC metro. The catch: knowing what&apos;s covered and getting it documented right.
              </p>
              <p>
                The independent roofers in our network work with storm and hail claims every day. When you call, we connect you with a local pro who can:
              </p>
              <ul className="checklist">
                {[
                  "Look over storm or hail damage and explain what they find",
                  "Document the damage for your insurance claim",
                  "Meet with your insurance adjuster on site",
                  "Work directly with your carrier through the process",
                ].map((item) => (
                  <li key={item}>
                    <span className="check-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="insurance-card">
              <h3>Not sure if it&apos;s worth a claim?</h3>
              <p>
                A free, no-obligation inspection from a local pro can tell you whether you have damage worth filing for — before you call your insurer. One call gets you connected.
              </p>
              <a href={phoneHref} className="cta-main">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Tap to Call · {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS — PLACEHOLDER SECTION. DO NOT SHIP AS-IS.
          SiteFlow Network has NO reviews of its own. Every card below is a
          dummy placeholder. Replace each with a REAL, attributed testimonial
          collected (with permission) from the actual OKC roofing contractor
          who buys these leads. Do NOT invent reviews, names, locations,
          star ratings, or review counts. If no real testimonials are
          available yet, delete this whole <section> rather than ship dummies.
          ============================================================ */}
      <section className="section alt" id="reviews">
        <div className="wrap">
          <p className="section-label">What Homeowners Say</p>
          <h2 className="section-title">Reviews from Oklahoma City homeowners</h2>
          <div className="reviews-note" role="note">
            ⚠ Placeholder section — these are not real reviews. Replace the cards below with real,
            attributed testimonials from your OKC roofing partner (or delete the section) before publishing.
          </div>
          <div className="review-grid">
            {[1, 2, 3].map((n) => (
              // REPLACE: real OKC partner testimonial + name + city + source
              <div key={n} className="review-card placeholder">
                <span className="review-tag">Placeholder · Replace</span>
                <p className="review-quote">
                  &ldquo;[REPLACE: real customer quote from your OKC roofing partner — e.g. a couple
                  sentences about the storm/hail repair or full replacement experience.]&rdquo;
                </p>
                <div className="review-attrib">
                  <span className="review-avatar" aria-hidden="true">?</span>
                  <span>
                    <span className="review-name">[Customer name]</span>
                    <span className="review-loc">[City, OK] · [source — e.g. Google review]</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CALL */}
      <section className="section" id="why-call">
        <div className="wrap">
          <p className="section-label">Why Call</p>
          <h2 className="section-title">Why call</h2>
          <ul className="checklist">
            {[
              "Connects you with independent roofers across the OKC metro",
              "One call — no forms to fill out",
              "Covers Oklahoma City, Edmond, Norman, Moore, Midwest City, Yukon, Mustang & surrounding areas (~50 mi)",
              "Available 24/7",
            ].map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt" id="faq">
        <div className="wrap faq-inner">
          <p className="section-label" style={{ textAlign: "center" }}>Common Questions</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Questions &amp; answers</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* BIG CTA */}
      <section className="big-cta" id="call-now">
        <div className="wrap">
          <h2>Get connected with a local roofer</h2>
          <p>One call connects you with an independent roofing contractor serving the OKC metro.</p>
          <a href={phoneHref} className="cta-main">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Tap to Call · {phoneNumber}
          </a>
          <div className="cta-helper">Have your zip code ready.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-logo"><Image src="/siteflow-logo.png" alt="SiteFlow Network" width={235} height={50} loading="lazy" quality={85} sizes="(max-width: 640px) 150px, 180px" style={{ height: "36px", width: "auto" }} /></div>
          <p className="tcpa">
            SiteFlow Network offers a free service to assist homeowners in connecting with local service providers. All contractors and providers are independent and SiteFlow Network does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work to be performed. All persons depicted in photos or videos are actors or models and not contractors listed on this website.{" "}
            <a href="https://siteflownetwork.com/privacy-policy">Privacy Policy</a>
            {" "}&nbsp;·&nbsp;{" "}
            <a href="https://siteflownetwork.com/terms-of-service">Terms</a>
            {" "}&nbsp;·&nbsp;{" "}
            © SiteFlow Network
          </p>
        </div>
      </footer>
    </main>
  );
}
