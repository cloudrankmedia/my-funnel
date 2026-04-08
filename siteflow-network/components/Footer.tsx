import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-5">
        {/* Logo */}
        <div
          className="rounded-lg overflow-hidden flex-shrink-0"
          style={{ backgroundColor: "#222E50" }}
        >
          <Image
            src="/images/siteflow-logo.png"
            alt="SiteFlow Network"
            width={160}
            height={44}
            className="h-10 w-auto block"
          />
        </div>

        {/* Links — always visible, wrap on mobile */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="mailto:hello@siteflownetwork.com"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Copyright — always visible */}
        <p className="text-sm text-gray-400 text-center sm:text-right">
          © {new Date().getFullYear()} SiteFlow Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
