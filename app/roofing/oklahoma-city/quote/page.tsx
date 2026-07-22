import Image from "next/image";
import SurveyEmbed from "./SurveyEmbed";

// Minimal, fast shell that hosts the GHL roofing survey via a lazy-loaded
// iframe. Header / footer / main mirror the GHL-hosted survey page so the
// A/B test compares like-for-like layout, only differing in the host + embed.
export default function RoofingOklahomaCityQuotePage() {
  return (
    <main className="quote-page">
      <style suppressHydrationWarning>{`
        :root {
          --q-navy: #222E51;
          --q-footer-bg: #FBF6F6;
          --q-link: #F88D3D;
        }
        .quote-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }
        /* Header — navy bar with centered logo (matches GHL section-ej4p8H6K9_) */
        .quote-header {
          background: var(--q-navy);
          padding: 10px 5px;
          display: flex;
          justify-content: center;
        }
        .quote-header .q-logo {
          width: 150px;
          height: auto;
        }
        @media (max-width: 480px) {
          .quote-header .q-logo { width: 120px; }
        }
        /* Main — centered survey column */
        .quote-main {
          flex: 1 0 auto;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px 12px 48px;
        }
        .survey-embed {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.08);
        }
        .survey-skeleton {
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }
        .survey-skeleton-spinner {
          width: 34px;
          height: 34px;
          border: 3px solid #e6e8ec;
          border-top-color: #E8500A;
          border-radius: 50%;
          animation: qspin 0.8s linear infinite;
        }
        @keyframes qspin { to { transform: rotate(360deg); } }
        /* Footer — light bar with copyright + links (matches GHL section-XDBztPov2e) */
        .quote-footer {
          background: var(--q-footer-bg);
          padding: 16px 12px;
          text-align: center;
          font-family: var(--font-dm-sans), sans-serif;
          color: #000000;
          font-size: 14px;
          line-height: 1.4;
        }
        .quote-footer p { margin: 2px 0; }
        .quote-footer a { color: var(--q-link); text-decoration: none; }
        .quote-footer a:hover { text-decoration: underline; }
      `}</style>

      <header className="quote-header">
        <Image
          src="/siteflow-logo-white.webp"
          alt="SiteFlow Network"
          width={150}
          height={38}
          className="q-logo"
          priority
        />
      </header>

      <div className="quote-main">
        <SurveyEmbed />
      </div>

      <footer className="quote-footer">
        <p>© 2026, SiteFlow Network. All Rights Reserved</p>
        <p>
          <a
            href="https://siteflownetwork.com/terms-of-service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          {" | "}
          <a
            href="https://siteflownetwork.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </main>
  );
}
