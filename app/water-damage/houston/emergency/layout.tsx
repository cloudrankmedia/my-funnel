import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Water Damage Houston | 24/7 Dispatch",
  description: "Flooded basement or burst pipe in Houston? Certified crews respond fast, 24/7. No cost to call — get connected with a local restoration professional now.",
  keywords: [
    "emergency water damage Houston",
    "flooded basement Houston",
    "burst pipe water damage Houston",
    "24 hour water damage restoration Houston",
    "emergency flood cleanup Houston",
    "emergency water damage repair Houston",
    "water damage emergency Houston TX",
    "immediate water damage response Houston",
  ],
  openGraph: {
    title: "Emergency Water Damage Houston | 24/7 Dispatch",
    description: "Flooded basement or burst pipe in Houston? Certified crews respond fast, 24/7. No cost to call — get connected with a local restoration professional now.",
    url: "https://go.siteflownetwork.com/water-damage/houston/emergency",
    siteName: "SiteFlow Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Water Damage Houston | 24/7 Dispatch",
    description: "Flooded basement or burst pipe in Houston? Certified crews respond fast, 24/7. No cost to call — get connected with a local restoration professional now.",
  },
  alternates: {
    canonical: "https://go.siteflownetwork.com/water-damage/houston/emergency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmergencyWaterDamageHoustonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
