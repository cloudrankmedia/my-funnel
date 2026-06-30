import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Roof Damage Oklahoma City | Get Connected With a Local Roofer",
  description:
    "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to get connected with an independent local roofing contractor.",
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
      "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to get connected with an independent local roofing contractor.",
    url: "https://go.siteflownetwork.com/roofing/oklahoma-city",
    siteName: "SiteFlow Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Damage Oklahoma City | Get Connected With a Local Roofer",
    description:
      "Storm or hail damage, a roof leak, missing shingles, or full replacement in the Oklahoma City metro? Call to get connected with an independent local roofing contractor.",
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
      {/* GHL preconnects — backend serves the Script tags, services receives runtime calls */}
      <link rel="preconnect" href="https://backend.leadconnectorhq.com" />
      <link rel="preconnect" href="https://services.leadconnectorhq.com" />

      {/* Google Tag Manager — head script (mirrors water-damage layout). */}
      {/* The Google Ads click-to-call conversion (AW-17034161603) is configured */}
      {/* inside this GTM container as a tel: click trigger — not in page code. */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54RJ95RD');`,
        }}
      />

      {/* Google Tag Manager — noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-54RJ95RD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Meta Pixel — base code (Pixel ID 1165749681766347). */}
      {/* lazyOnload: defer to browser idle for fastest page load; still fires PageView. */}
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1165749681766347');
fbq('track', 'PageView');`,
        }}
      />

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

      {/* PENDING SD-ISSUED ROOFING DID — GHL number pool scripts go here once the */}
      {/* roofing pool is provisioned (mirrors the water-damage emergency layout). */}
      {/* Do NOT reuse the water-damage pool — it routes to water-damage DIDs. */}

      {children}
    </>
  );
}
