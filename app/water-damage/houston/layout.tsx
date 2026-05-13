import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Water Damage Restoration Houston | 45–90 Min Response",
  description:
    "Local water damage restoration & mitigation crews in Houston TX. 45–90 min dispatch, insurance documentation included. Available 24/7.",
  keywords: [
    "water damage restoration company Houston",
    "water damage restoration Houston TX",
    "flood damage restoration Houston",
    "water restoration companies near me",
    "water mitigation company Houston",
    "water remediation Houston",
    "water mitigation company near me",
    "IICRC water damage Houston",
  ],
  openGraph: {
    title: "Water Damage Restoration Houston | 45–90 Min Response",
    description:
      "Local water damage restoration and mitigation crews serving all of Houston. 45–90 minute dispatch, full insurance documentation, available 24/7.",
    url: "https://go.siteflownetwork.com/water-damage/houston",
    siteName: "SiteFlow Network",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://go.siteflownetwork.com/water-damage/houston",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function HoustonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preload Bebas Neue — used for LCP hero headline */}
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/bebasneuepro/v3/Block/BebasNeue-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Google Fonts — preconnect for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
      />

      {/* Google Tag Manager — head script */}
      <Script
        id="gtm-head"
        strategy="beforeInteractive"
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

      {children}

      {/* GHL Number Pool — attribution tracking */}
      <Script
        id="ghl-number-pool"
        strategy="afterInteractive"
        src="https://backend.leadconnectorhq.com/appengine/loc/8yVaGIElOnPyCAjDk5Mr/pool/1DEMAG86O8UkcanY9FST/number_pool.js"
      />
      <Script
        id="ghl-user-session"
        strategy="afterInteractive"
        src="https://backend.leadconnectorhq.com/appengine/js/user_session.js"
      />
    </>
  );
}
