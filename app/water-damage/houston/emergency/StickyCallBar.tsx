"use client";

import { useEffect, useState } from "react";

type Props = {
  phoneNumber: string;
  phoneHref: string;
};

export default function StickyCallBar({ phoneNumber, phoneHref }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? "visible" : ""}`}>
      <p>Water damage gets worse every hour — call now — have your zip code ready to enter after dialing.</p>
      <a href={phoneHref}>{phoneNumber}</a>
    </div>
  );
}
