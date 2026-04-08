import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Inter for body/paragraph text — loaded via next/font for zero CLS
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// Helvetica is a system font — no import needed, defined in tailwind.config.ts

export const metadata: Metadata = {
  title: "Drone Surveys for Construction Projects | SiteFlow Network",
  description:
    "Connect with FAA-certified drone surveyors across the United States for progress monitoring, volumetric analysis, and as-built documentation. Free matching service for contractors and developers.",
  keywords: [
    "construction drone survey",
    "aerial survey construction",
    "drone progress monitoring",
    "volumetric analysis drone",
    "as-built documentation drone",
    "general contractor drone survey",
    "civil earthwork drone",
    "construction site mapping",
    "nationwide drone survey",
    "FAA certified drone survey",
  ],
  openGraph: {
    title: "Drone Surveys for Construction Projects | SiteFlow Network",
    description:
      "Survey-grade drone data for general contractors, civil engineers, and developers nationwide. 85% faster than ground surveys. Free matching service.",
    type: "website",
  },
};

const GA_ID = "G-531807410";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
