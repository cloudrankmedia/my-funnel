"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// GHL survey embed (official widget). If you re-point the survey, swap the host
// or ID here — this is the only place the embed target lives.
const SURVEY_HOST = "https://links.siteflownetwork.com";
const SURVEY_ID = "FoNuVShVLVnYgvYidl93";
const SURVEY_SRC = `${SURVEY_HOST}/widget/survey/${SURVEY_ID}`;

export default function SurveyEmbed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer the heavy GHL iframe until the browser is idle so the page shell
    // (logo + layout) paints first. This keeps FCP/LCP fast while the survey
    // loads a beat later, isolated inside its iframe.
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="survey-embed">
      {ready ? (
        <>
          <iframe
            src={SURVEY_SRC}
            id={SURVEY_ID}
            title="Roofing survey"
            scrolling="no"
            loading="lazy"
            style={{ border: "none", width: "100%", minHeight: 600 }}
          />
          {/* form_embed.js listens for the iframe's postMessage and resizes it
              to fit its content (matched by the iframe id above). */}
          <Script src={`${SURVEY_HOST}/js/form_embed.js`} strategy="lazyOnload" />
        </>
      ) : (
        <div className="survey-skeleton" aria-hidden="true">
          <div className="survey-skeleton-spinner" />
        </div>
      )}
    </div>
  );
}
