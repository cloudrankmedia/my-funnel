import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "San Diego Roofing | Get Connected With a Local Roofer",
  description:
    "Roof leak, cracked tile, a worn flat roof, storm or wind damage, or a full replacement in San Diego County? Call to connect with a licensed, insured local San Diego roofer — free, no-obligation inspection.",
  keywords: [
    "roofing San Diego",
    "roof repair San Diego",
    "roof leak repair San Diego",
    "tile roof repair San Diego",
    "flat roof repair San Diego",
    "roof replacement San Diego",
    "San Diego roofing contractor",
    "local roofer San Diego County",
  ],
  openGraph: {
    title: "San Diego Roofing | Get Connected With a Local Roofer",
    description:
      "Roof leak, cracked tile, a worn flat roof, storm or wind damage, or a full replacement in San Diego County? Call to connect with a licensed, insured local San Diego roofer — free, no-obligation inspection.",
    url: "https://go.siteflownetwork.com/roofing/san-diego",
    siteName: "SiteFlow Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Roofing | Get Connected With a Local Roofer",
    description:
      "Roof leak, cracked tile, a worn flat roof, storm or wind damage, or a full replacement in San Diego County? Call to connect with a licensed, insured local San Diego roofer — free, no-obligation inspection.",
  },
  alternates: {
    canonical: "https://go.siteflownetwork.com/roofing/san-diego",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RoofingSanDiegoLayout({
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

      {/* PENDING SAN DIEGO GHL NUMBER POOL — add the SD roofing pool's */}
      {/* number_pool.js + user_session.js here once it's provisioned. */}
      {/* Do NOT reuse the Oklahoma City pool — it routes to OKC tracking DIDs. */}

      {children}
    </>
  );
}
