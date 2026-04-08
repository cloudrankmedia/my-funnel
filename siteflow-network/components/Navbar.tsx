"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      } border-b border-gray-100`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
        {/* Logo */}
        <div
          className="rounded-lg overflow-hidden flex-shrink-0"
          style={{ backgroundColor: "#222E50" }}
        >
          <Image
            src="/images/siteflow-logo.png"
            alt="SiteFlow Network"
            width={200}
            height={56}
            className="h-10 sm:h-12 w-auto block"
            priority
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden md:block text-base text-gray-500">
            For Contractors
          </span>
          <button
            onClick={scrollToForm}
            className="bg-brand-orange hover:bg-brand-orange-light transition-colors text-white font-medium rounded-md
              text-xs px-3 py-2
              sm:text-sm sm:px-4 sm:py-2.5
              md:text-base md:px-5 md:py-2.5"
          >
            <span className="sm:hidden">Free Assessment</span>
            <span className="hidden sm:inline">Get Free Site Assessment</span>
          </button>
        </div>
      </div>
    </nav>
  );
}