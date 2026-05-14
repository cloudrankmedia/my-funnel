"use client";

import { useState, useEffect } from "react";

export default function WaterDamageRestorationHouston() {
  const [activeTab, setActiveTab] = useState<"restoration" | "mitigation">("restoration");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── REPLACE WITH ELOCAL TRACKING NUMBER ──────────────────────────────────
  const phoneNumber = "(346) 910-9374";
  const phoneHref = "tel:+13469109374";
  // ─────────────────────────────────────────────────────────────────────────

  const faqs = [
    {
      q: "What happens after I call?",
      a: "We immediately match you with the nearest available local water damage restoration contractor serving your zip code. You'll hear from them within minutes to confirm dispatch. There's no cost to get connected.",
    },
    {
      q: "How fast can a crew actually arrive?",
      a: "Contractors in our network typically arrive within 45–90 minutes across the Houston metro. We match with specialists available 24/7 across all major neighborhoods and communities in the Greater Houston area, covering all 508 zip codes in the DMA.",
    },
    {
      q: "What credentials do your contractors hold?",
      a: "Every contractor in our network holds credentials in water damage restoration and mitigation per industry standards your insurer will typically require for claims documentation.",
    },
    {
      q: "Will the crew work directly with my insurance company?",
      a: "The contractors we match you with produce complete insurance documentation — moisture readings, photo evidence, daily drying logs, and final drying reports — and are experienced working with all major insurers serving the Houston area.",
    },
    {
      q: "What is the difference between restoration and mitigation?",
      a: "Mitigation means stopping the damage and stabilizing the property — extraction, drying, dehumidification, and documentation. Restoration is the repair phase — returning the property to pre-loss condition. Our network handles both.",
    },
    {
      q: "Do you handle mold as part of the water damage process?",
      a: "Yes. The specialists we connect you with apply antimicrobial treatments during the drying process to prevent mold growth. If existing mold is present, full mold remediation services are available per industry S520 standards.",
    },
    {
      q: "Is there any cost to call or request dispatch?",
      a: "No. There is no charge to call or get connected with a restoration contractor in your area. No commitments are required.",
    },
    {
      q: "Do you serve the entire Houston metro area?",
      a: "Yes. We have verified 24/7 contractor coverage across the full Greater Houston area — all communities in the Houston-The Woodlands-Sugar Land DMA — all 508 zip codes, around the clock.",
    },
  ];

  const restorationServices = [
    {
      icon: "🌊",
      title: "Flood Damage Restoration",
      body: "Flood restoration from initial extraction through drying and remediation. Storm damage, rising water, and flash flood response across the Houston metro.",
    },
    {
      icon: "💧",
      title: "Burst & Leaking Pipe Response",
      body: "Rapid response to burst pipes, supply line failures, and appliance leaks. Stop the source, extract the water, begin drying immediately.",
    },
    {
      icon: "🏠",
      title: "Sewage Backup Response",
      body: "Category 3 contaminated water events handled with proper PPE, containment, and sanitation protocols. Full remediation of affected areas.",
    },
    {
      icon: "⛈️",
      title: "Storm Damage Response",
      body: "Roof intrusion, window breach, and catastrophic storm flooding handled 24/7. Full Houston metro coverage for major weather events.",
    },
    {
      icon: "🟦",
      title: "Standing Water Removal",
      body: "Industrial pump trucks and wet vacuums remove standing water from basements, slabs, and living areas. Fast, thorough water extraction.",
    },
    {
      icon: "🔧",
      title: "Appliance & HVAC Water Damage",
      body: "Water heater failures, washing machine overflows, refrigerator leaks, and HVAC condensate issues — rapid response to contain the source and begin extraction immediately.",
    },
  ];

  const mitigationServices = [
    {
      icon: "📊",
      title: "Water Mitigation",
      body: "Technical drying science using psychrometric calculations, moisture monitoring, and industry-standard equipment to minimize damage and speed drying time.",
    },
    {
      icon: "📋",
      title: "Water Remediation",
      body: "Systematic remediation including contaminated material removal, antimicrobial treatment, and moisture control — all documented for your insurance adjuster.",
    },
    {
      icon: "🌡️",
      title: "Dehumidification & Drying",
      body: "LGR and desiccant dehumidifiers combined with directed air movers achieve rapid structural drying. Daily monitoring until moisture readings confirm dry per industry S500 standard.",
    },
    {
      icon: "📄",
      title: "Insurance Documentation",
      body: "Complete moisture mapping, photo documentation, daily drying logs, and final drying reports — everything your insurer requires, delivered professionally.",
    },
    {
      icon: "🔬",
      title: "Mold Prevention Protocol",
      body: "Antimicrobial application and HEPA air scrubbing applied during the drying process to prevent mold growth — standard protocol across all contractors in our network.",
    },
    {
      icon: "🏗️",
      title: "Structural Drying Monitoring",
      body: "Daily moisture meter readings and psychrometric tracking throughout the drying process to confirm all structural materials reach dry standard per industry S500.",
    },
  ];

  const whyCards = [
    {
      num: "01 — Response",
      title: "45–90 Minute Dispatch Across the Houston Metro",
      body: "Contractors in our Houston network typically respond within 45–90 minutes. When you call, we match you with the nearest available specialist in your zip code.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "02 — Standards",
      title: "Local Restoration Network",
      body: "Every contractor in our network holds credentials in water damage restoration per industry standards your insurer will typically require for claims documentation.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "03 — Insurance",
      title: "Full Documentation for Your Insurance Claim",
      body: "The contractors we match you with document moisture readings, affected areas, and remediation actions from the moment they arrive — everything your adjuster needs, properly organized.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      num: "04 — Scope",
      title: "Full-Scope Restoration — Not Just Extraction",
      body: "From initial water extraction through structural drying, dehumidification, and mold prevention — the specialists we connect you with handle the complete mitigation and remediation process.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      num: "05 — Technology",
      title: "Industrial Equipment — Dehumidifiers, Air Movers & Moisture Meters",
      body: "The contractors in our network use professional-grade equipment that removes moisture from structural materials — not just surfaces — monitoring until readings confirm the structure is dry.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
    },
    {
      num: "06 — No Risk",
      title: "No Obligation or Commitments",
      body: "There is no obligation to proceed. You only move forward if you're satisfied with what you hear.",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];


  const processSteps = [
    { n: "1", title: "Call Us Now", desc: "Tell us your location and damage type. We'll find the right specialist for you in seconds." },
    { n: "2", title: "We Match You With a Trained Crew", desc: "We connect you with the nearest available local restoration contractor in your zip code." },
    { n: "3", title: "Specialist Arrives in 45–90 Minutes", desc: "Your matched contractor aims to arrive promptly with equipment ready to begin extraction and mitigation." },
    { n: "4", title: "Full Restoration — Confirmed Dry", desc: "Your specialist handles extraction, structural drying, documentation, and mold prevention — mitigation and remediation to industry standard." },
  ];

  const activeServices = activeTab === "restoration" ? restorationServices : mitigationServices;

  return (
    <>
      <style suppressHydrationWarning>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:      #242e51;
          --navy-mid:  #1e2847;
          --navy-lt:   #2d3d6b;
          --orange:    #E8500A;
          --orange-lt: #FF6B2B;
          --cream:     #F7F4EF;
          --white:     #FFFFFF;
          --gray-100:  #F0EDE8;
          --gray-300:  #C8C4BC;
          --gray-500:  #8A8680;
          --gray-700:  #4A4844;
          --text:      #1C1A18;
          --radius:    6px;
          --shadow:    0 4px 24px rgba(11,31,58,0.14);
          --shadow-lg: 0 12px 48px rgba(11,31,58,0.2);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
          line-height: 1.6;
        }

        /* ── UTILS ─────────────────────────────── */
        .container      { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .container--narrow { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--orange); color: var(--white);
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 17px;
          letter-spacing: 0.02em; padding: 18px 36px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(232,80,10,0.35);
        }
        .btn-primary:hover { background: var(--orange-lt); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(232,80,10,0.45); }



        .tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(232,80,10,0.12); color: var(--orange);
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 5px 12px; border-radius: 20px;
        }

        /* ── STICKY BAR ───────────────────────── */
        .sticky-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: var(--navy);
          border-bottom: 3px solid var(--orange);
          padding: 0;
          display: flex; align-items: stretch;
          transform: translateY(-100%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 24px rgba(11,31,58,0.35);
          overflow: hidden;
        }
        .sticky-bar.visible { transform: translateY(0); }
        .sticky-bar__inner { display: flex; align-items: stretch; width: 100%; max-width: 800px; margin: 0 auto; min-width: 0; }
        .sticky-bar__left {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 24px; flex: 1; min-width: 0;
        }
        .sticky-bar__pulse {
          width: 8px; height: 8px; background: #22C55E; border-radius: 50%;
          flex-shrink: 0; animation: livepulse 1.8s infinite;
        }
        .sticky-bar__text {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.75); white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
        }
        .sticky-bar__text strong { color: var(--white); font-weight: 700; }
        .sticky-bar__cta {
          display: flex; align-items: center; gap: 8px;
          background: var(--orange); color: white;
          padding: 0 28px; font-family: 'DM Sans', sans-serif;
          font-weight: 700; font-size: 15px; text-decoration: none;
          white-space: nowrap; transition: background 0.2s;
          border-left: 1px solid rgba(255,255,255,0.1);
          letter-spacing: 0.02em;
        }
        .sticky-bar__cta:hover { background: var(--orange-lt); }
        .sticky-bar__cta svg { flex-shrink: 0; }

        /* ── TOPBAR ───────────────────────────── */
        .topbar {
          background: var(--navy); border-bottom: 2px solid var(--orange);
          padding: 10px 0;
          display: flex; align-items: center; justify-content: center; gap: 32px;
        }
        .topbar__logo {
          font-family: 'Bebas Neue', sans-serif; font-size: 22px;
          color: var(--white); letter-spacing: 0.06em; text-decoration: none;
        }
        .topbar__logo span { color: var(--orange); }
        .topbar__phone {
          display: flex; align-items: center; gap: 8px;
          color: var(--white); font-weight: 600; font-size: 18px;
          text-decoration: none; letter-spacing: 0.01em; transition: color 0.2s;
        }
        .topbar__phone:hover { color: var(--orange-lt); }
        .topbar__phone .dot {
          width: 8px; height: 8px; background: #22C55E; border-radius: 50%;
          animation: livepulse 1.8s infinite;
        }
        @keyframes livepulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        .topbar__divider { width: 1px; height: 20px; background: rgba(255,255,255,0.2); }
        .topbar__cta { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65); letter-spacing: 0.02em; }

        /* ── HERO ─────────────────────────────── */
        .hero {
          background: var(--navy); padding: 100px 0 120px;
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.018) 40px, rgba(255,255,255,0.018) 41px);
          pointer-events: none;
        }
        .hero::after {
          content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
          height: 60px; background: var(--cream);
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        @media (max-width: 600px) { .hero::after { height: 32px; } }
        .hero__inner {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative; z-index: 1;
          max-width: 900px; margin: 0 auto; padding: 0 32px;
        }
        .hero__eyebrow { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px; flex-wrap: nowrap; }
        .hero__eyebrow-text { white-space: nowrap; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
        .hero__eyebrow-text {
          font-size: 12px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.55);
        }
        .hero__headline { margin-bottom: 8px; }
        .hero__hl-1, .hero__hl-2, .hero__hl-3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 84px);
          line-height: 1.05;
          letter-spacing: 0.02em;
          display: block;
          white-space: nowrap;
        }
        .hero__hl-1 { color: var(--white); }
        .hero__hl-2 { color: var(--orange); font-size: clamp(54px, 7vw, 96px); }
        .hero__hl-3 { color: var(--white); }
        .hero__headline br { display: block; }
        .hero__sub {
          font-size: 18px; color: rgba(255,255,255,0.72);
          max-width: 700px; line-height: 1.65; margin: 20px auto 32px; font-weight: 300;
        }
        .hero__sub strong { color: var(--white); font-weight: 600; }
        .hero__cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .hero__trust-strip {
          display: flex; align-items: flex-start; justify-content: center; gap: 20px; flex-wrap: nowrap;
          margin-top: 48px; padding-top: 32px; width: 100%;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        @media (max-width: 700px) {
          .hero__trust-strip { flex-direction: column; align-items: flex-start; width: 100%; padding: 0; margin: 0; }
        }
        .hero__trust-item {
          display: flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.65); font-size: 13px; font-weight: 500;
        }
        .hero__trust-item svg { color: var(--orange); flex-shrink: 0; }
        .hero__risk-reversal {
          font-size: 13px; color: rgba(255,255,255,0.5);
          margin-top: 12px; text-align: center; font-weight: 300; letter-spacing: 0.01em;
        }


        /* ── CREDENTIALS ──────────────────────── */
        .credentials { padding: 64px 0; background: var(--white); }
        .credentials__label {
          text-align: center; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gray-500); margin-bottom: 32px;
        }
        .credentials__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 48px; max-width: 800px; margin: 0 auto; }
        .cred-badge { text-align: center; }
        .cred-badge__icon {
          width: 56px; height: 56px; background: var(--cream); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 10px; border: 2px solid var(--gray-100);
        }
        .cred-badge__icon svg { color: var(--navy); }
        .cred-badge__text { display: flex; flex-direction: column; }
        .cred-badge__title { font-weight: 700; font-size: 14px; color: var(--navy); }
        .cred-badge__sub { font-size: 12px; color: var(--gray-500); margin-top: 2px; }
        @media (max-width: 600px) {
          .credentials__grid { grid-template-columns: 1fr; gap: 16px; max-width: 100%; }
          .cred-badge { display: flex; align-items: center; gap: 16px; text-align: left; }
          .cred-badge__icon { margin: 0; flex-shrink: 0; min-width: 56px; width: 56px; height: 56px; }
          .cred-badge__text { text-align: left; }
          .cred-badge__title { font-size: 15px; text-align: left; }
          .cred-badge__sub { font-size: 12px; text-align: left; }
        }

        /* ── SECTION HEADER ───────────────────── */
        .section-header { margin-bottom: 52px; text-align: left; }
        .section-header__tag { margin-bottom: 14px; display: flex; justify-content: flex-start; }
        .section-header__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 54px); line-height: 1;
          color: var(--navy); letter-spacing: 0.02em;
        }
        .section-header__title em { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--orange); }
        .section-header__body { margin-top: 14px; font-size: 17px; color: var(--gray-700); max-width: 560px; font-weight: 300; line-height: 1.7; }

        /* ── WHY SECTION ──────────────────────── */
        .why { padding: 80px 0; background: var(--cream); }
        .why__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .why-card {
          background: var(--white); border-radius: 10px; padding: 32px 28px;
          border: 1px solid var(--gray-100);
          transition: box-shadow 0.25s, transform 0.25s;
          position: relative; overflow: hidden;
        }
        @media (max-width: 600px) {
          .why-card { text-align: center; }
          .why-card__icon { margin-left: auto; margin-right: auto; }
        }
        .why-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--orange); transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .why-card:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
        .why-card:hover::before { transform: scaleX(1); }
        .why-card__num { font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 0.1em; color: var(--orange); margin-bottom: 16px; }
        .why-card__icon { width: 48px; height: 48px; background: var(--cream); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .why-card__icon svg { color: var(--navy); }
        .why-card__title { font-weight: 700; font-size: 17px; color: var(--navy); margin-bottom: 10px; line-height: 1.3; }
        .why-card__body { font-size: 14px; color: var(--gray-700); line-height: 1.65; font-weight: 300; }

        /* ── SERVICES ─────────────────────────── */
        .services { padding: 80px 0; background: var(--navy); position: relative; overflow: hidden; }
        .services::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px);
          pointer-events: none;
        }
        .services .section-header__title { color: var(--white); }
        .services .section-header__body { color: rgba(255,255,255,0.6); }
        .services .tag { background: rgba(232,80,10,0.2); }
        .services__tabs {
          display: flex; gap: 4px; margin-bottom: 36px;
          background: rgba(255,255,255,0.07); border-radius: 8px; padding: 5px; width: fit-content;
        }
        .services__tab {
          padding: 10px 22px; border-radius: 5px;
          font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.55);
          cursor: pointer; border: none; background: transparent;
          font-family: 'DM Sans', sans-serif; transition: all 0.2s; letter-spacing: 0.02em;
        }
        .services__tab.active { background: var(--orange); color: var(--white); box-shadow: 0 2px 12px rgba(232,80,10,0.4); }
        .services__tab:hover:not(.active) { color: var(--white); }
        .services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .service-tile {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 24px 20px;
          transition: background 0.2s, border-color 0.2s;
        }
        .service-tile:hover { background: rgba(255,255,255,0.1); border-color: rgba(232,80,10,0.4); }
        .service-tile__icon { font-size: 28px; margin-bottom: 12px; display: block; }
        @media (max-width: 600px) { .service-tile { text-align: center; } }
        .service-tile__title { font-weight: 700; font-size: 15px; color: var(--white); margin-bottom: 8px; }
        .service-tile__body { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.6; font-weight: 300; }

        /* ── PROCESS ──────────────────────────── */
        .process { padding: 80px 0; background: var(--white); }
        .process__steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          position: relative; margin-top: 52px;
        }
        .process__steps::before {
          content: ''; position: absolute; top: 28px;
          left: calc(12.5% + 14px); right: calc(12.5% + 14px); height: 2px;
          background: repeating-linear-gradient(90deg, var(--orange) 0, var(--orange) 8px, transparent 8px, transparent 16px);
        }
        .process-step { text-align: center; padding: 0 12px; }
        .process-step__num {
          width: 56px; height: 56px; background: var(--orange); color: var(--white);
          font-family: 'Bebas Neue', sans-serif; font-size: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; position: relative; z-index: 1;
          box-shadow: 0 4px 16px rgba(232,80,10,0.35);
        }
        .process-step__title { font-weight: 700; font-size: 15px; color: var(--navy); margin-bottom: 8px; }
        .process-step__body { font-size: 13px; color: var(--gray-500); line-height: 1.6; font-weight: 300; }

        /* ── INSURANCE CALLOUT ────────────────── */
        .insurance-callout {
          background: var(--navy-mid); border-radius: 14px; padding: 52px 56px;
          margin: 80px auto; max-width: 1072px; padding-left: 24px; padding-right: 24px;
          display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center;
          position: relative; overflow: hidden;
        }
        .insurance-callout::before {
          content: ''; position: absolute; right: -60px; top: -60px;
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(232,80,10,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .insurance-callout__label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--orange); margin-bottom: 14px; }
        @media (max-width: 600px) {
          .insurance-callout__label { text-align: center; }
          .insurance-callout__title { text-align: center; }
          .insurance-callout__body { text-align: center; }
        }
        .insurance-callout__title { font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: var(--white); line-height: 1.05; letter-spacing: 0.02em; margin-bottom: 16px; }
        .insurance-callout__body { font-size: 15px; color: rgba(255,255,255,0.65); max-width: 480px; line-height: 1.7; font-weight: 300; }
        .insurance-callout__checks { list-style: none; margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .insurance-callout__checks li { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500; }
        .insurance-callout__check-icon {
          width: 20px; height: 20px; background: rgba(232,80,10,0.2); border-radius: 50%;
          border: 1.5px solid var(--orange); flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .insurance-callout__check-icon svg { color: var(--orange); }

        /* ── TESTIMONIALS ─────────────────────── */
        .testimonials { padding: 80px 0; background: var(--cream); }
        .testimonials__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .testimonial-card { background: var(--white); border-radius: 10px; padding: 28px; border: 1px solid var(--gray-100); }
        .testimonial-card__quote { font-family: 'DM Serif Display', serif; font-size: 48px; color: var(--orange); line-height: 1; margin-bottom: 8px; opacity: 0.6; }
        .testimonial-card__stars { color: #F59E0B; font-size: 15px; letter-spacing: 2px; margin-bottom: 14px; }
        .testimonial-card__body { font-size: 14px; color: var(--gray-700); line-height: 1.7; font-weight: 300; font-style: italic; margin-bottom: 20px; }
        .testimonial-card__author { display: flex; align-items: center; gap: 12px; }
        .testimonial-card__avatar {
          width: 42px; height: 42px; border-radius: 50%; background: var(--navy);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif; font-size: 14px; color: var(--white); flex-shrink: 0;
        }
        .testimonial-card__name { font-weight: 700; font-size: 14px; color: var(--navy); }
        .testimonial-card__loc { font-size: 12px; color: var(--gray-500); margin-top: 2px; }

        /* ── FAQ ──────────────────────────────── */
        .faq { padding: 80px 0; background: var(--white); }
        .faq__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 48px; margin-top: 48px; }
        .faq-item { border-bottom: 1px solid var(--gray-100); padding: 22px 0; cursor: pointer; }
        .faq-item__q { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; font-weight: 600; font-size: 15px; color: var(--navy); line-height: 1.4; }
        .faq-item__icon {
          width: 24px; height: 24px; background: var(--cream); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px; transition: background 0.2s, transform 0.3s;
        }
        .faq-item__icon.open { background: var(--orange); transform: rotate(45deg); }
        .faq-item__icon.open svg { color: var(--white); }
        .faq-item__a { font-size: 14px; color: var(--gray-700); line-height: 1.7; margin-top: 12px; font-weight: 300; }

        /* ── BOTTOM CTA ───────────────────────── */
        .bottom-cta { padding: 80px 0; background: var(--orange); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
        .bottom-cta::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,0,0,0.04) 30px, rgba(0,0,0,0.04) 31px);
          pointer-events: none;
        }
        .bottom-cta__inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; text-align: center; width: 100%; max-width: 900px; padding: 0 24px; }
        .bottom-cta__title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px, 6vw, 68px); color: var(--white); letter-spacing: 0.02em; line-height: 1; margin-bottom: 16px; }
        .bottom-cta__sub { font-size: 18px; color: rgba(255,255,255,0.8); max-width: 540px; margin: 0 auto 36px; font-weight: 300; line-height: 1.6; }
        .bottom-cta .btn-cta-navy {
          white-space: nowrap;
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--navy); color: var(--white);
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 18px;
          letter-spacing: 0.02em; padding: 20px 44px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(11,31,58,0.4);
        }
        .bottom-cta .btn-cta-navy:hover { background: var(--navy-lt); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(11,31,58,0.5); }
        .bottom-cta__phone { display: block; margin-top: 20px; font-size: 14px; color: rgba(255,255,255,0.75); }
        .bottom-cta__phone a { color: var(--white); font-weight: 700; font-size: 22px; text-decoration: none; letter-spacing: 0.02em; }

        /* ── FOOTER ───────────────────────────── */
        footer { background: var(--navy); padding: 32px 0; }
        .footer__inner { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 16px 40px; width: 100%; text-align: center; }
        .footer__logo-img { display: flex; align-items: center; text-decoration: none; }
        .topbar__logo-img { display: flex; align-items: center; text-decoration: none; }
        .topbar__logo-img-el { height: 28px; width: auto; display: block; }
        .footer__logo-img-el { height: 22px; width: auto; display: block; }
        .footer__links { display: flex; gap: 24px; }
        .footer__links a { font-size: 12px; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
        .footer__links a:hover { color: rgba(255,255,255,0.75); }
        .footer__copy { font-size: 12px; color: rgba(255,255,255,0.3); }
        .tcpa { font-size: 11px; color: rgba(255,255,255,0.35); max-width: 700px; line-height: 1.6; margin: 16px auto 0; text-align: center; display: block; }
        .tcpa a { color: rgba(255,255,255,0.55); text-decoration: underline; }
        .tcpa a:hover { color: var(--white); }


        /* ── FACTS SECTION ──────────────────────── */
        .facts-section { padding: 100px 0 80px; background: var(--cream); }
        .facts__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .fact-card {
          background: var(--white); border-radius: 12px; padding: 36px 28px 28px;
          border: 1px solid var(--gray-100); text-align: center;
          transition: box-shadow 0.25s, transform 0.25s;
          position: relative; overflow: hidden;
        }
        .fact-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, var(--orange), var(--orange-lt));
        }
        .fact-card:hover { box-shadow: var(--shadow); transform: translateY(-4px); }
        .fact-card__number {
          font-family: 'Bebas Neue', sans-serif; font-size: 64px;
          color: var(--orange); line-height: 1; margin-bottom: 16px; letter-spacing: 0.02em;
        }
        .fact-card__divider {
          width: 32px; height: 2px; background: var(--gray-100); margin: 0 auto 16px;
        }
        .fact-card__label {
          font-size: 15px; color: var(--navy); font-weight: 600; line-height: 1.5; margin-bottom: 16px;
        }
        .fact-card__source {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; color: var(--gray-500); font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          background: var(--gray-100); padding: 4px 10px; border-radius: 20px;
        }
        @media (max-width: 900px) { .facts__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .section-header { text-align: center; }
          .section-header__tag { justify-content: center; }
          .section-header__body { margin-left: auto; margin-right: auto; } .facts__grid { grid-template-columns: 1fr; } }


        /* ── SERVICE AREA ─────────────────────── */
        .service-area { padding: 48px 0; background: var(--navy); border-top: 1px solid rgba(255,255,255,0.08); }
        .service-area__label {
          text-align: center; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 20px;
        }
        .service-area__cities {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 4px 0; max-width: 800px; margin: 0 auto 20px;
        }
        .service-area__city {
          font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 400;
        }
        .service-area__city:not(:last-child)::after {
          content: ","; margin-right: 6px; color: rgba(255,255,255,0.3);
        }
        .service-area__note {
          text-align: center; font-size: 11px; color: rgba(255,255,255,0.3);
          max-width: 600px; margin: 0 auto; line-height: 1.6;
        }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .why__grid { grid-template-columns: 1fr 1fr; }
          .services__grid { grid-template-columns: 1fr 1fr; }
          .process__steps { grid-template-columns: 1fr 1fr; gap: 32px; }
          .process__steps::before { display: none; }
          .testimonials__grid { grid-template-columns: 1fr; }
          .faq__grid { grid-template-columns: 1fr; }
          .insurance-callout { grid-template-columns: 1fr; padding: 36px 28px; }
        }
        @media (max-width: 600px) {
          .section-header { text-align: center; }
          .section-header__tag { justify-content: center; }
          .section-header__body { margin-left: auto; margin-right: auto; }
          .topbar { gap: 0; flex-wrap: nowrap; padding: 8px 16px; justify-content: space-between; }
          .topbar__cta { display: none; }
          .topbar__divider { display: none; }
          .hero { padding: 40px 0 80px; padding-left: 20px; padding-right: 20px; }
          .hero__inner { padding: 0 40px; }
          .container { padding: 0 20px; }
          .hero__hl-1, .hero__hl-2, .hero__hl-3 { font-size: clamp(36px, 10vw, 54px); white-space: normal; }
          .hero__hl-2 { font-size: clamp(40px, 11vw, 60px); color: var(--orange) !important; }
          .why__grid { grid-template-columns: 1fr; }
          .services__grid { grid-template-columns: 1fr; }
          .process__steps { grid-template-columns: 1fr; }
          .footer__inner { flex-direction: column; text-align: center; }
          .sticky-bar__text { font-size: 11px; white-space: normal; overflow: visible; text-overflow: unset; line-height: 1.3; text-align: center; }
          .sticky-bar__cta { padding: 0 16px; font-size: 13px; }
          .sticky-bar__left { padding: 8px 12px; justify-content: center; }
        }
      `}</style>

      {/* STICKY BAR */}
      <div className={`sticky-bar ${showStickyBar ? "visible" : ""}`} role="banner">
        <div className="sticky-bar__inner">
          <div className="sticky-bar__left">
            <span className="sticky-bar__pulse" aria-hidden="true" />
            <p className="sticky-bar__text">
              <strong>Water Damage Houston?</strong><span style={{display:'block'}}>Crews available now — 45–90 min response</span>
            </p>
          </div>
          <a href={phoneHref} className="sticky-bar__cta">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* TOPBAR */}
      <nav className="topbar">
        <a href="#" className="topbar__logo-img">
          <img src="/siteflow-logo.png" alt="SiteFlow Network" className="topbar__logo-img-el" />
        </a>
        <div className="topbar__divider" aria-hidden="true" />
        <span className="topbar__cta">Matching Greater Houston Area Homeowners With Local Restoration Specialists</span>
        <div className="topbar__divider" aria-hidden="true" />
        <a href={phoneHref} className="topbar__phone">
          <span className="dot" aria-hidden="true" />
          {phoneNumber}
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">

            <div className="hero__copy">
              <div className="hero__eyebrow">
                <span className="hero__eyebrow-text">Houston Metro · Available Now · 24/7 Response</span>
              </div>

              <h1 className="hero__headline" aria-label="Water Damage Houston. Handled Fast. Restoration Done Right.">
                <span className="hero__hl-1">Water Damage Houston</span>{" "}
                <span className="hero__hl-2">Handled Fast.</span>{" "}
                <span className="hero__hl-3">Restoration Done Right.</span>
              </h1>

              <p className="hero__sub">
                Get matched with a <strong>local water damage specialist</strong> in the Greater Houston Area — right now. Contractors in our network typically respond within <strong>45–90 minutes</strong> and bring full documentation for your insurance claim.
              </p>

              <div className="hero__cta-row">
                <a href={phoneHref} className="btn-primary">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now — Get Matched
                </a>
              </div>
              <p className="hero__risk-reversal">Talking to us is always obligation-free. You decide if you want to move forward.</p>

              <div className="hero__trust-strip">
                {[
                  "Local Restoration Network",
                  "Insurance Claims Supported",
                  "Greater Houston Area Coverage",
                  "Available 24/7",
                ].map((item) => (
                  <div key={item} className="hero__trust-item">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRY FACTS */}
      <section className="facts-section" id="facts">
        <div className="container">
          <div className="section-header">
            <div className="section-header__tag"><span className="tag">Water Damage Facts</span></div>
            <h2 className="section-header__title">The Real Cost of <em>Water Damage</em></h2>
          </div>
          <div className="facts__grid">
            {[
              { number: "1 in 50", label: "Houston homeowners file a water damage claim each year", source: "Insurance Info Institute" },
              { number: "24–48 hrs", label: "Time before water damage can trigger mold growth in a structure", source: "IICRC S500 Standard" },
              { number: "$11,000+", label: "Average insurance payout for a water damage claim in the US", source: "Insurance Info Institute" },
              { number: "3×", label: "Water damage is among the most common homeowner insurance claims", source: "Insurance Info Institute" },
              { number: "Harvey", label: "Houston flooded 3 times in 3 years — more than almost any US city", source: "Harris County Flood Control" },
              { number: "$3.75B", label: "In flood damages from Hurricane Harvey — the costliest weather disaster in Houston history", source: "Harris County Flood Control" },
            ].map((fact) => (
              <div key={fact.number} className="fact-card">
                <div className="fact-card__number">{fact.number}</div>
                <div className="fact-card__divider" aria-hidden="true" />
                <div className="fact-card__label">{fact.label}</div>
                <div className="fact-card__source">{fact.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="credentials" aria-label="Crew verification standards">
        <div className="container">
          <p className="credentials__label">What sets our restoration network apart</p>
          <div className="credentials__grid">
            {[
              {
                title: "Houston-Area Coverage", sub: "Serving all 508 zip codes across the Greater Houston DMA",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              },
              {
                title: "Pre-Screened Contractors", sub: "Vetted restoration service providers",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
              },
              {
                title: "Full Insurance Documentation", sub: "Complete claim support included",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
              },
              {
                title: "Rapid Response Dispatch", sub: "45–90 minute response window",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
              },
              {
                title: "24/7 Crew Availability", sub: "No holidays, no waiting",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                title: "Mold Prevention Protocol", sub: "Applied on every job, every time",
                icon: <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5H9z"/><path d="M9 3v5h6"/><path d="M7 13h4m-2-2v4"/></svg>,
              },
            ].map((badge) => (
              <div key={badge.title} className="cred-badge">
                <div className="cred-badge__icon">{badge.icon}</div>
                <div className="cred-badge__text">
                  <div className="cred-badge__title">{badge.title}</div>
                  <div className="cred-badge__sub">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why" id="why">
        <div className="container">
          <div className="section-header">
            <div className="section-header__tag"><span className="tag">Why It Matters</span></div>
            <h2 className="section-header__title">Every Hour Without <em>Mitigation</em><br />Costs You More</h2>
            <p className="section-header__body">Water damage that sits for 24–48 hours typically triggers mold growth, structural softening, and claim complications. Speed and documentation are everything.</p>
          </div>
          <div className="why__grid">
            {whyCards.map((card) => (
              <div key={card.num} className="why-card">
                <div className="why-card__num">{card.num}</div>
                <div className="why-card__icon">{card.icon}</div>
                <div className="why-card__title">{card.title}</div>
                <div className="why-card__body">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header">
            <div className="section-header__tag"><span className="tag">What We Handle</span></div>
            <h2 className="section-header__title">Restoration Services <em>&amp; Mitigation</em></h2>
            <p className="section-header__body">Whether you need a restoration specialist for a major flood event, or a mitigation contractor for an insurance claim — our network covers both.</p>
          </div>
          <div className="services__tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === "restoration"}
              className={`services__tab ${activeTab === "restoration" ? "active" : ""}`}
              onClick={() => setActiveTab("restoration")}
            >
              Restoration Services
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "mitigation"}
              className={`services__tab ${activeTab === "mitigation" ? "active" : ""}`}
              onClick={() => setActiveTab("mitigation")}
            >
              Mitigation &amp; Remediation
            </button>
          </div>
          <div className="services__grid">
            {activeServices.map((s) => (
              <div key={s.title} className="service-tile">
                <span className="service-tile__icon" aria-hidden="true">{s.icon}</span>
                <div className="service-tile__title">{s.title}</div>
                <div className="service-tile__body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-header__tag"><span className="tag">How It Works</span></div>
            <h2 className="section-header__title">From Your Call to <em>Confirmed Dry</em></h2>
            <p className="section-header__body">Four steps. One call. Complete restoration handled from start to finish.</p>
          </div>
          <div className="process__steps">
            {processSteps.map((step) => (
              <div key={step.n} className="process-step">
                <div className="process-step__num" aria-hidden="true">{step.n}</div>
                <div className="process-step__title">{step.title}</div>
                <div className="process-step__body">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE CALLOUT */}
      <div className="insurance-callout" id="insurance" role="region" aria-label="Insurance claim support">
        <div>
          <div className="insurance-callout__label">For Insurance Claims</div>
          <h2 className="insurance-callout__title">Filing a Claim?<br />Documentation Is Included.</h2>
          <p className="insurance-callout__body">Insurance adjusters typically require specific documentation for water damage claims. Our local restoration crews produce thorough documentation from the moment they arrive — moisture readings, drying logs, and drying reports organized for your adjuster.</p>
          <ul className="insurance-callout__checks">
            {[
              "Moisture mapping with calibrated meter readings",
              "Photo and video documentation of all affected areas",
              "Daily drying logs showing progress toward completion",
              "Final drying report per IICRC S500 standard",
              "Experienced with all major Houston-area insurers",
            ].map((item) => (
              <li key={item}>
                <span className="insurance-callout__check-icon" aria-hidden="true">
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <a href={phoneHref} className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — Get Matched
          </a>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 12 }}>No obligation · No commitment</p>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-header__tag"><span className="tag">Questions</span></div>
            <h2 className="section-header__title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="faq__grid">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-item__q">
                  {faq.q}
                  <div className={`faq-item__icon ${openFaq === i ? "open" : ""}`} aria-hidden="true">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openFaq === i && <div className="faq-item__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <div className="bottom-cta__inner">
          <h2 className="bottom-cta__title">Water Damage Doesn&apos;t Wait.<br />Neither Should You.</h2>
          <p className="bottom-cta__sub">Every hour without mitigation increases damage, mold risk, and claim complexity. Get matched with a local specialist right now.</p>
          <a href={phoneHref} className="btn-cta-navy">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — Get Matched
          </a>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="service-area">
        <div className="container">
          <p className="service-area__label">Serving Greater Houston, TX &amp; Surrounding Areas</p>
          <div className="service-area__cities">
            {[
              "Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland",
              "Pasadena", "Baytown", "League City", "Friendswood", "Missouri City",
              "Stafford", "Rosenberg", "Richmond", "Conroe", "Spring",
              "Humble", "Kingwood", "Cypress", "Tomball", "Galveston",
              "Clear Lake", "Webster", "Seabrook", "Deer Park", "La Porte",
              "Dickinson", "Texas City", "Atascocita", "Crosby", "Fulshear",
              "Alvin", "Manvel", "Magnolia", "Waller", "Channelview",
            ].map((city) => (
              <span key={city} className="service-area__city">{city}</span>
            ))}
          </div>
          <p className="service-area__note">
            All restoration contractors operating through SiteFlow Network comply with applicable Texas licensing requirements.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer__inner">
            <a href="#" className="footer__logo-img">
              <img src="/siteflow-logo.png" alt="SiteFlow Network" className="footer__logo-img-el" />
            </a>
            <div className="footer__links">
              <a href="https://go.siteflownetwork.com/privacy-policy">Privacy Policy</a>
              <a href="https://go.siteflownetwork.com/terms-of-service">Terms of Service</a>
            </div>
            <span className="footer__copy">&copy; 2026 SiteFlow Network. All rights reserved.</span>
          </div>
          <p className="tcpa">
            This website (the &quot;Website&quot;) offers a service to assist homeowners in connecting with local service providers. All contractors/providers are independent and the Website does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work to be performed. All persons depicted in photos or videos are actors or models and not contractors listed on the Website.
          </p>
        </div>
      </footer>
    </>
  );
}
