import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Damage Oklahoma City | Get Connected With a Local Roofer",
  description:
    "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to reach an established local roofing team with 30+ years serving OKC — licensed, fully insured, and answering 24/7.",
  keywords: [
    "roof damage Oklahoma City",
    "roofing contractor Oklahoma City",
    "storm damage roof Oklahoma City",
    "hail damage roof OKC",
    "roof leak repair Oklahoma City",
    "roof replacement Oklahoma City",
    "emergency roof tarping Oklahoma City",
    "local roofer OKC metro",
  ],
  openGraph: {
    title: "Roof Damage Oklahoma City | Get Connected With a Local Roofer",
    description:
      "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to reach an established local roofing team with 30+ years serving OKC — licensed, fully insured, and answering 24/7.",
    url: "https://go.siteflownetwork.com/roofing/oklahoma-city",
    siteName: "SiteFlow Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Damage Oklahoma City | Get Connected With a Local Roofer",
    description:
      "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to reach an established local roofing team with 30+ years serving OKC — licensed, fully insured, and answering 24/7.",
  },
  alternates: {
    canonical: "https://go.siteflownetwork.com/roofing/oklahoma-city",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofingOklahomaCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* DNS-prefetch for the deferred (lazyOnload) tag origins so that when GTM,
          GA/Google Ads, and the Meta Pixel fire at browser idle their DNS/TLS is
          already warm — keeps them off the critical path without paying an early
          preconnect for scripts that don't run until idle. */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />

      {/* GTM (→ GA4 + Google Ads) and the Meta Pixel are injected by the
          <TrackingScripts> client component, rendered per-page so each route can
          pick its load trigger:
            - landing page  → mode="idle"        (ready before click-to-call)
            - /quote survey → mode="interaction" (held until first interaction
                              to keep third-party JS out of the load window)
          Only the JS-based tags moved; the <noscript> fallbacks stay here so
          no-JS visitors still fire GTM + Pixel regardless of route. */}

      {/* Google Tag Manager — noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-54RJ95RD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Meta Pixel — noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1165749681766347&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* NOTE: the GHL number-pool + user_session scripts (dynamic number
          insertion) intentionally live on the calls-only landing page
          (app/roofing/oklahoma-city/page.tsx), NOT in this shared layout. This
          layout also wraps the /quote survey page, which has no phone number to
          swap — keeping DNI off that route removes dead third-party JS from the
          survey. */}

      {children}
    </>
  );
}
