import type { Metadata } from "next";
import Image from "next/image";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { buildMetadata, pages } from "@/lib/seo";

import SupportForm from "./SupportForm";

export function generateMetadata(): Metadata {
  return buildMetadata(pages.support);
}

const nextSteps = [
  { title: "You send us a message", text: "Tell us what's happening in your own words." },
  { title: "We open a ticket", text: "You'll get a reference number so nothing gets lost." },
  { title: "We reply within 24 hours", text: "A member of our team writes back to you personally, by email." },
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />

      <section className="shell support">
        <div className="support-welcome">
          <p className="chip">Support</p>
          <h1>
            We&apos;re here <span>to help</span>
          </h1>
          <p className="lead">
            Questions, ideas, or something not working? Tell us what&apos;s on
            your mind and we&apos;ll help you get sorted.
          </p>

          <div className="greeting" aria-hidden="true">
            <Image src="/assets/favicon.png" alt="" width={44} height={44} />
            <div>
              <p className="greeting-name">Ahid Support</p>
              <p>Hi there 👋 Take your time, there&apos;s no wrong way to ask.</p>
            </div>
          </div>

          <div className="next-steps">
            <h2>What happens next</h2>
            <ol>
              {nextSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="support-contact">
            Prefer email? Write to{" "}
            <a href="mailto:support@ahid.io">support@ahid.io</a>. We reply to
            every message within 24 hours.
          </p>
        </div>

        <div className="support-card">
          <SupportForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
