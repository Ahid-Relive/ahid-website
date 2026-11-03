"use client";

import { useState } from "react";

const faqs = [
  { q: "What is Ahid?", a: "Ahid is a platform that connects people with trusted local brands and businesses." },
  { q: "How does brand verification work?", a: "Each listed brand goes through identity and trust checks before receiving a badge." },
  { q: "What makes Ahid different from other platforms?", a: "We combine locality, trust verification, and a curated discovery experience." },
  { q: "Can I buy products or services directly on Ahid?", a: "You can explore offerings, connect with brands, and complete actions through brand channels." },
  { q: "How do I add my brand to Ahid?", a: "Download the app and Signup as a brand." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <details key={item.q} open={openIndex === index}>
          <summary
            onClick={(event) => {
              event.preventDefault();
              setOpenIndex(openIndex === index ? null : index);
            }}
          >
            {item.q}
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
