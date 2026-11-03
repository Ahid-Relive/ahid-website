import type { Metadata } from "next";
import PolicyShell from "@/components/PolicyShell";

import { policyData } from "./data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Ahid collects, uses, and protects your personal data. Read our full privacy policy.",
  openGraph: {
    title: "Privacy Policy | Ahid",
    description:
      "Learn how Ahid collects, uses, and protects your personal data.",
    url: "https://ahid.app/privacy-policy",
  },
  alternates: {
    canonical: "https://ahid.app/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyShell
      pill="Privacy Policy"
      title={policyData.title}
      meta={`Effective Date: ${policyData.effectiveDate} | Last Updated: ${policyData.lastUpdated}`}
      hero={policyData.intro.map((paragraph) => (
        <p key={paragraph} className="policy-intro">
          {paragraph}
        </p>
      ))}
    >
      {policyData.sections.map((section) => (
        <section key={section.heading} className="policy-section">
          <h2>{section.heading}</h2>
          {section.blocks.map((block, index) => {
            if (block.type === "subheading") return <h3 key={index}>{block.text}</h3>;
            if (block.type === "list") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
        </section>
      ))}
    </PolicyShell>
  );
}
