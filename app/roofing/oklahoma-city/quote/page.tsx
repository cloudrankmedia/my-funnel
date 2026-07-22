import Image from "next/image";
import SurveyEmbed from "./SurveyEmbed";

// Minimal, fast shell that hosts the GHL roofing survey via a lazy-loaded
// iframe. Purpose: A/B the page/embed performance against the fully
// GHL-hosted survey at forms.siteflownetwork.com/roofing/oklahoma-city/service-request.
export default function RoofingOklahomaCityQuotePage() {
  return (
    <main className="quote-page">
      <style suppressHydrationWarning>{`
        .quote-page {
          min-height: 100vh;
          background: #f4f5f7;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .quote-header {
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #e6e8ec;
          display: flex;
          justify-content: center;
          padding: 14px 16px;
        }
        .quote-shell {
          width: 100%;
          max-width: 640px;
          padding: 16px 12px 48px;
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
      `}</style>

      <header className="quote-header">
        <Image
          src="/siteflow-logo.webp"
          alt="SiteFlow Network"
          width={180}
          height={43}
          priority
        />
      </header>

      <div className="quote-shell">
        <SurveyEmbed />
      </div>
    </main>
  );
}
