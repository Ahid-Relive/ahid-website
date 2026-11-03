"use client";

import { useState } from "react";

import { faqs } from "@/lib/faq";

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
