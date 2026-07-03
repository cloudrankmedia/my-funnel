import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import StickyCallBar from "./StickyCallBar";

// Single source of truth for the roofing call number. Swap these two values to
// re-point the page. Every call button/link references them.
// phoneHref must stay in tel:+1XXXXXXXXXX format (with the +1 country code).
const phoneNumber = "(405) 832-0080";
const phoneHref = "tel:+14058320080";

export default function RoofingOklahomaCityLanding() {

  const faqs = [
    {
      q: "Who will I be connected with?",
      a: "An established local Oklahoma City roofing team with 30+ years serving the metro. They're licensed and fully insured, answer the phone 24/7, and handle every job directly — from inspection to the finished roof.",
    },
    {
      q: "What areas do you cover?",
      a: "The Oklahoma City metro and surrounding communities — including Edmond, Norman, Moore, Midwest City, Yukon, and Mustang — roughly a 50-mile radius.",
    },
    {
      q: "What should I have ready when I call?",
      a: "Just a quick description of what's going on with your roof and your address. Someone answers 24/7 and can get your inspection scheduled.",
    },
    {
      q: "Will someone look at my roof damage?",
      a: "Yes. The roofer handles a precision, on-site inspection of storm, hail, or other damage and gives you a straight answer on whether a repair or a full replacement is the right call.",
    },
    {
      q: "Does it cost anything to call or get an inspection?",
      a: "No. Calling is free, and the on-site roof inspection is free and no-obligation. You get an honest assessment of what they find, and you decide whether to move forward.",
    },
    {
      q: "Can a roofer help with my insurance claim?",
      a: "Yes. The team works storm and hail claims every day — documenting the damage with detailed reports and photos, meeting your adjuster on site, and working directly with your carrier so nothing gets missed.",
    },
    {
      q: "How fast can someone come out?",
      a: "The phone is answered 24/7, and for emergency hail storm damage the team aims to be on site for an inspection within about 2 hours. Response times can vary by weather and demand after a major storm.",
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
    @media (max-width: 640px) { .logo img { height: 28px !important; } }
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
      /* Real hero photo (/roofing-hero.jpg) under a left-weighted navy scrim:
         dark on the left where the headline sits, lighter on the right so the
         roofer shows through. Mobile uses a more even vertical scrim (below). */
      background:
        linear-gradient(90deg, rgba(18,25,45,0.90) 0%, rgba(18,25,45,0.68) 42%, rgba(18,25,45,0.36) 74%, rgba(18,25,45,0.20) 100%),
        url('/roofing-hero.jpg');
      background-size: cover, cover;
      background-position: center, center right;
      background-repeat: no-repeat;
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
    .hero-photo-mobile { display: none; }
    @media (max-width: 640px) {
      .hero {
        padding: 28px 0 44px; text-align: center;
        background:
          radial-gradient(ellipse at 72% 12%, rgba(232,80,10,0.18) 0%, transparent 58%),
          linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%);
        background-repeat: no-repeat;
      }
      .hero-photo-mobile { display: block; margin-top: 30px; border-radius: 14px; overflow: hidden; box-shadow: 0 14px 34px rgba(0,0,0,0.32); }
      .hero-photo-mobile img { display: block; width: 100%; height: auto; }
      .hero h1, .hero-sub { margin-left: auto; margin-right: auto; }
      .hero-clarity {
        margin-left: auto; margin-right: auto;
        padding-left: 0; border-left: none;
      }
      .cta-main { font-size: 20px; padding: 17px 26px; width: 100%; }
      .cta-block { max-width: none; align-items: stretch; }
      .cta-helper { text-align: center; }
      .hero-trust { justify-content: center; }
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
    /* Mobile: center every section header (eyebrow + title) for a consistent
       rhythm down the page. Cards, checklists, and body copy stay left-aligned
       for readability. */
    @media (max-width: 640px) {
      .section-label, .section-title { text-align: center; }
    }

    /* REASON CARDS */
    .reason-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    @media (max-width: 900px) { .reason-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 560px) { .reason-grid { grid-template-columns: 1fr; } }
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

    /* CREDENTIAL LOGO ROW — real accreditation logos on white chips so each
       reads clearly on the dark strip. To add/replace: drop the file in /public
       and update the credentials[] array. */
    .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 14px; }
    .logo-chip {
      background: #fff; border-radius: 10px;
      height: 74px; padding: 0 22px;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 6px 18px rgba(0,0,0,0.20);
    }
    .logo-chip img { height: 42px; width: auto; display: block; }
    .logo-chip.square img { height: 52px; }
    @media (max-width: 640px) {
      .logo-chip { height: 60px; padding: 0 16px; }
      .logo-chip img { height: 34px; }
      .logo-chip.square img { height: 42px; }
    }

    /* PROJECT GALLERY — PLACEHOLDER imagery. Each card's background-image points
       at /roofing-project-placeholder.svg. Swap in real OKC job photos (jpg/webp)
       per card; keep the 4:3 aspect so the grid stays even. */
    .projects {
      background: var(--navy-dark);
      border-top: 1px solid rgba(174,182,204,0.12);
      border-bottom: 1px solid rgba(174,182,204,0.12);
      padding: 84px 0;
    }
    .projects .section-label { color: var(--orange-light); text-align: center; }
    .projects .section-title { color: var(--cream); text-align: center; margin-bottom: 14px; }
    .projects-sub { text-align: center; color: var(--muted-light); max-width: 640px; margin: 0 auto 40px; font-size: 15px; line-height: 1.6; }
    .project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    @media (max-width: 860px) { .project-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { .project-grid { grid-template-columns: 1fr; } }
    .project-card {
      position: relative; border-radius: 12px; overflow: hidden;
      aspect-ratio: 4 / 3;
      background-size: cover; background-position: center;
      border: 1px solid rgba(174,182,204,0.18);
    }
    .project-tag {
      position: absolute; left: 12px; top: 12px;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
      color: #fff; background: rgba(232,80,10,0.92); padding: 5px 10px; border-radius: 5px;
    }

    /* BEFORE / AFTER (single pre-composed split image) */
    .beforeafter { position: relative; margin: 0 0 44px; border-radius: 14px; overflow: hidden; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(36,46,81,0.10); }
    .beforeafter img { display: block; width: 100%; height: auto; }
    .ba-label {
      position: absolute; top: 16px;
      font-family: var(--font-barlow-condensed), sans-serif;
      font-size: 14px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
      color: #fff; padding: 6px 14px; border-radius: 6px;
    }
    .ba-before { left: 16px; background: rgba(15,20,35,0.82); }
    .ba-after { right: 16px; background: var(--orange); }
    @media (max-width: 640px) { .ba-label { top: 10px; font-size: 12px; padding: 4px 10px; } .ba-before { left: 10px; } .ba-after { right: 10px; } }

    /* LOCAL CREW BAND */
    .crew-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    @media (max-width: 768px) { .crew-grid { grid-template-columns: 1fr; gap: 28px; } }
    .crew-photo img { width: 100%; height: auto; border-radius: 14px; display: block; box-shadow: 0 12px 34px rgba(36,46,81,0.16); }
    .crew-copy .section-title { margin-bottom: 16px; }
    .crew-copy p { font-size: 17px; color: var(--muted); line-height: 1.65; margin-bottom: 26px; }
    .crew-copy .section-label { color: var(--orange); font-size: 14px; margin-bottom: 12px; }

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
    @media (max-width: 768px) {
      .insurance-grid { grid-template-columns: 1fr; gap: 32px; }
      /* Let the single column shrink to the viewport instead of being forced
         wide by the card's nowrap CTA button. */
      .insurance-copy, .insurance-card { min-width: 0; }
    }
    @media (max-width: 640px) { .insurance-card .cta-main { font-size: 18px; padding: 15px 16px; } }
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
          <span className="eyebrow">Oklahoma City Metro · Answering 24/7</span>
          <h1>
            Roof Damage in Oklahoma City?{" "}
            <span className="accent">Get Connected With a Local Roofer.</span>
          </h1>
          <p className="hero-sub">
            Storm or hail damage, a roof leak, missing shingles, or need a full replacement?{" "}
            <strong>One call connects you with experienced local Oklahoma City area roofers — and they answer 24/7.</strong>
          </p>
          <p className="hero-clarity">
            SiteFlow Network connects you with experienced local Oklahoma City area roofers — established for 30+ years, licensed, insured, and handling both residential and commercial roofs across the metro. Truth-first inspections and premium materials, with a straight answer on repair vs. replacement.
          </p>
          <div className="cta-block">
            <a href={phoneHref} className="cta-main">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Tap to Call · {phoneNumber}
            </a>
            <span className="cta-helper">A local Oklahoma City roofer answers 24/7 — even nights, weekends, and after storms.</span>
          </div>

          {/* HERO TRUST BAR — qualitative, honest service signals only.
              Every claim reflects the real, established local roofing team
              these exclusive calls route to. No invented rating or review count. */}
          <div className="hero-trust">
            {[
              "GAF Master Elite certified",
              "BBB A+ rated",
              "5-star Google rated",
              "Answering phones 24/7",
            ].map((t) => (
              <span key={t} className="hero-trust-item">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          {/* Mobile only: the hero photo shows in full below the text (desktop
              uses it as a background). Avoids cropping the roofer into a tall
              slice and keeps the text uncluttered. */}
          <div className="hero-photo-mobile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/roofing-hero.jpg" alt="A local roofer installing shingles on an Oklahoma City home at dusk" />
          </div>
        </div>
      </section>

      {/* COVERAGE STRIP */}
      <div className="coverage" role="region" aria-label="Service coverage">
        <div className="wrap">
          <div className="cov-item"><span className="cov-num">30+ Yrs</span><span className="cov-label">Serving The OKC Metro</span></div>
          <div className="cov-item"><span className="cov-num">24/7</span><span className="cov-label">Phones Answered</span></div>
          <div className="cov-item"><span className="cov-num">$0</span><span className="cov-label">Roof Inspection</span></div>
          <div className="cov-item"><span className="cov-num">1 Call</span><span className="cov-label">No Forms</span></div>
        </div>
      </div>

      {/* PARTNER / CREDENTIAL STRIP — describes the established local roofing
          team these exclusive OKC calls route to. Every badge below is a real,
          named credential the client verified on the provider's own website
          (GAF Master Elite, BBB A+, 5-star Google, NRCA, ORCA, OK Construction
          Industries Board, works with the OK Insurance Department). Only add or
          change a named credential here if it is confirmed for this provider. */}
      <section className="partner-strip" id="trust">
        <div className="wrap">
          <p className="partner-lead">
            We connect you with <span className="accent">GAF Master Elite certified, BBB A+ rated</span> local Oklahoma City area roofers.
          </p>
          <p className="partner-sub">
            Experienced, credentialed local roofers who answer 24/7 — 5-star rated on Google, and members of the national and Oklahoma roofing contractor associations. They lead with truth-first inspections and premium materials, and won&apos;t cut corners to shave an estimate.
          </p>
          {/* Real accreditation logos on white chips. Add a Google badge file
              and append an entry here when it's available. */}
          <div className="partner-logos">
            {[
              { src: "/badge-gaf.svg", alt: "GAF Master Elite certified roofer", square: true },
              { src: "/badge-bbb.avif", alt: "BBB A+ rated" },
              { src: "/badge-nrca.avif", alt: "National Roofing Contractors Association member", square: true },
              { src: "/badge-orca.avif", alt: "Oklahoma Roofing Contractors Association member" },
              { src: "/badge-cib.png", alt: "Oklahoma Construction Industries Board" },
              { src: "/OID-Logo.svg", alt: "Works with the Oklahoma Insurance Department" },
            ].map((c) => (
              <div key={c.src} className={`logo-chip${c.square ? " square" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON REASONS */}
      <section className="section" id="reasons">
        <div className="wrap">
          <p className="section-label">Why Homeowners Call</p>
          <h2 className="section-title">Common Reasons Homeowners Call</h2>
          <div className="reason-grid">
            {[
              "Storm, Hail & Wind Damage",
              "Emergency Roof Tarping",
              "Roof Leaks",
              "Missing, Cracked, or Curling Shingles",
              "Complete Roof Replacement",
              "Aging or Worn-Out Roof",
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
          <h2 className="section-title">What You Get When You Call</h2>
          <div className="benefit-grid">
            {[
              {
                title: "Free, No-Obligation Roof Inspection",
                desc: "A free, straightforward on-site assessment — you pay nothing to have your roof looked at, and there's no pressure to commit either way.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
                ),
              },
              {
                title: "Truth-First, Honest Answers",
                desc: "You get a straight recommendation on whether a precise repair or a full replacement is the smarter financial move — honest answers about exactly what they find.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                ),
              },
              {
                title: "24/7 Answering · 2-Hour Storm Response",
                desc: "The phone is answered around the clock, and for emergency hail storm damage the team aims to be on site for an inspection within about 2 hours.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
                ),
              },
              {
                title: "Insurance Documentation to Your Driveway",
                desc: "Storm or hail damage? They document every wind and hail impact with detailed reports and photos, stand on site with your adjuster, and work directly with your carrier.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" /></svg>
                ),
              },
              {
                title: "Premium Materials, Precision Craftsmanship",
                desc: "Top-tier materials paired with precise workmanship — they won't cut corners to shave an estimate — plus constant communication and a spotless cleanup when the job's done.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 8h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
                ),
              },
              {
                title: "Established Local Team — 30+ Years in OKC",
                desc: "A licensed, fully insured Oklahoma City roofing crew with 30+ years on local roofs that knows Oklahoma storms — not an out-of-town call center.",
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
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            {[
              { n: "1", title: "Call — Answered 24/7", desc: "One call gets you started, day or night. Someone answers 24/7 — no forms, no hold times, no runaround." },
              { n: "2", title: "Get Connected & Inspected", desc: "You're connected with an experienced local OKC roofer who comes out for a free, no-obligation inspection — often same day, and within about 2 hours for emergency hail damage." },
              { n: "3", title: "Honest Options, Then the Work", desc: "They walk you through exactly what they find with a truth-first call on repair vs. replacement. If you move forward, they handle the job with premium materials, a spotless cleanup, and full insurance documentation." },
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

      {/* LOCAL CREW BAND — real crew photo + trust copy + mid-page CTA. */}
      <section className="section alt" id="crew">
        <div className="wrap">
          <div className="crew-grid">
            <div className="crew-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/roofing-crew.jpg" alt="An established local Oklahoma City roofing crew arriving at a home with their truck and ladder" loading="lazy" />
            </div>
            <div className="crew-copy">
              <p className="section-label">Local Crews, Not a Call Center</p>
              <h2 className="section-title">An Established Oklahoma City Crew at Your Door</h2>
              <p>
                Every call routes to an experienced, licensed and insured local roofing team with 30+ years on OKC roofs — the same crews who show up, do the work, and clean up when it&apos;s done. No out-of-town subcontractors, no runaround.
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

      {/* PROJECT GALLERY — each card is a real OKC job photo set as a CSS
          background so it covers the 4:3 tile. Tags label the job type. */}
      <section className="projects" id="projects">
        <div className="wrap">
          <p className="section-label">Recent Work</p>
          <h2 className="section-title">Recent Oklahoma City Roofing Projects</h2>
          <p className="projects-sub">
            A look at the kind of work the local roofers handle across the OKC metro — full replacements, storm and hail repairs, and emergency tarping.
          </p>
          <div className="project-grid">
            {[
              { tag: "Full roof replacement", img: "/project-1.jpg" },
              { tag: "Storm & hail repair", img: "/project-2.jpg" },
              { tag: "Emergency tarp & repair", img: "/project-3.jpg" },
            ].map((p) => (
              <div
                key={p.tag}
                className="project-card"
                style={{ backgroundImage: `url('${p.img}')` }}
                role="img"
                aria-label={`Oklahoma City roofing project — ${p.tag}`}
              >
                <span className="project-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE COORDINATION */}
      <section className="section alt" id="insurance">
        <div className="wrap">
          <p className="section-label">Storm & Hail Claims</p>
          <h2 className="section-title" style={{ marginBottom: "28px" }}>A Local Roofing Team That Handles the Insurance Side</h2>

          {/* Before / after: storm-damaged roof restored (single pre-composed split). */}
          <figure className="beforeafter">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/storm-before-after.jpg" alt="An Oklahoma City roof with hail and storm damage on the left, fully restored with a new roof on the right" loading="lazy" />
            <span className="ba-label ba-before" aria-hidden="true">Before</span>
            <span className="ba-label ba-after" aria-hidden="true">After</span>
          </figure>

          <div className="insurance-grid">
            <div className="insurance-copy">
              <p>
                Central Oklahoma gets hit hard by hail, wind, and tornado-season storms, and roof damage is one of the most common homeowner insurance claims in the OKC metro. The catch: knowing what&apos;s covered and getting it documented right.
              </p>
              <p>
                The local roofers we connect you with work storm and hail claims every day — and they work with the Oklahoma Insurance Department. When you call, you reach a local team that will:
              </p>
              <ul className="checklist">
                {[
                  "Inspect storm and hail damage and give you honest answers on what they find",
                  "Document every wind and hail impact with detailed reports and photos — before any work starts",
                  "Stand on site with your insurance adjuster so nothing gets missed",
                  "Work directly with your carrier and handle the paperwork through the whole process",
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
              <h3>Not Sure if It&apos;s Worth a Claim?</h3>
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

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap faq-inner">
          <p className="section-label" style={{ textAlign: "center" }}>Common Questions</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Questions &amp; Answers</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* BIG CTA */}
      <section className="big-cta" id="call-now">
        <div className="wrap">
          <h2>Get Connected With a Local Roofer</h2>
          <p>One call connects you with experienced local Oklahoma City area roofers — and they answer 24/7.</p>
          <a href={phoneHref} className="cta-main">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Tap to Call · {phoneNumber}
          </a>
          <div className="cta-helper">A local Oklahoma City roofer answers 24/7.</div>
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
