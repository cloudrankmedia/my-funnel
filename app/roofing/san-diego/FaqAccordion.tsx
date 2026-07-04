"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

type Props = {
  faqs: Faq[];
};

export default function FaqAccordion({ faqs }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="faq-list" role="list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item" role="listitem">
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            aria-expanded={openFaq === i}
          >
            {faq.q}
            <span className={`faq-icon ${openFaq === i ? "open" : ""}`} aria-hidden="true">+</span>
          </button>
          {openFaq === i && (
            <div className="faq-answer">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
