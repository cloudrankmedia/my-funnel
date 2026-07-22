import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Roof Check — Oklahoma City | SiteFlow Network",
  description:
    "Answer a few quick questions to get matched with a local Oklahoma City roofer.",
  icons: { icon: "/siteflow-favicon.png" },
  // Paid landing page — keep it out of the index to avoid duplicate content
  // with the GHL-hosted survey.
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://go.siteflownetwork.com/roofing/oklahoma-city/quote",
  },
};

export default function RoofingOklahomaCityQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Preconnect to the GHL survey host so the embedded iframe starts faster. */}
      <link rel="preconnect" href="https://links.siteflownetwork.com" />
      <link rel="dns-prefetch" href="https://links.siteflownetwork.com" />
      {children}
    </>
  );
}
