import type { Metadata } from "next";

import PolicyShell from "@/components/PolicyShell";
import { buildMetadata, pages } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(pages.childSafety);
}

export default function ChildSafetyPage() {
  return (
    <PolicyShell
      pill="Child Safety"
      title="Child Safety Standards"
      meta="Our commitment to protecting children"
      hero={
        <p className="policy-intro">
          Ahid has zero tolerance for child sexual abuse and exploitation (CSAE) in any form. This page sets out our published standards, reporting mechanisms, and the steps we take to keep children safe on our platform.
        </p>
      }
    >
        
        <section className="policy-section">
          <h2>Our Strict Prohibition</h2>
          <p>
            Ahid explicitly prohibits and does not tolerate any content,
            behaviour, or activity that constitutes child sexual abuse and
            exploitation (CSAE), including but not limited to:
          </p>
          <ul>
            <li>Child sexual abuse material (CSAM) in any format.</li>
            <li>
              Child grooming — befriending a child online to facilitate sexual
              contact or the exchange of sexual imagery.
            </li>
            <li>
              Sexualisation of minors — imagery or content that depicts,
              encourages, or promotes the sexual abuse or exploitation of
              children.
            </li>
            <li>
              Inappropriate interaction targeting a child (e.g., groping,
              caressing, or sexual solicitation).
            </li>
            <li>
              Sextortion — threatening or blackmailing a child using real or
              alleged access to intimate images.
            </li>
            <li>
              Trafficking of a child — advertising or soliciting a child for
              commercial sexual exploitation.
            </li>
          </ul>
          <p>
            Any user found to have created, uploaded, shared, or distributed
            such content will be permanently banned and reported to the relevant
            authorities without delay.
          </p>
        </section>

        
        <section className="policy-section">
          <h2>Enforcement and Action</h2>
          <p>
            When Ahid obtains actual knowledge of CSAM or CSAE-related activity
            on its platform, we take the following immediate actions:
          </p>
          <ol>
            <li>Remove the content from our platform without delay.</li>
            <li>Suspend or permanently ban the responsible account(s).</li>
            <li>
              Preserve relevant evidence in accordance with applicable law.
            </li>
            <li>
              Report confirmed CSAM to the{" "}
              <strong>
                National Center for Missing and Exploited Children (NCMEC)
              </strong>{" "}
              CyberTipline and/or the relevant regional authority in the
              jurisdiction concerned.
            </li>
            <li>
              Cooperate fully with law-enforcement investigations as required.
            </li>
          </ol>
        </section>

        
        <section className="policy-section">
          <h2>In-App Reporting Mechanism</h2>
          <p>
            Every user on Ahid has access to an in-app mechanism to report
            harmful or inappropriate content. To submit a report:
          </p>
          <ol>
            <li>Open the Ahid mobile application.</li>
            <li>
              Navigate to the content or profile you wish to report and tap the{" "}
              <strong>Report</strong> option.
            </li>
            <li>Select the category that best describes your concern.</li>
            <li>Submit the report — our team will review it promptly.</li>
          </ol>
          <p>
            You may also report concerns directly by email at{" "}
            <a href="mailto:support@ahid.io">support@ahid.io</a>. All reports
            are treated confidentially.
          </p>
        </section>

        
        <section className="policy-section">
          <h2>Compliance with Child Safety Laws</h2>
          <p>
            Ahid complies with all applicable child safety laws and regulations,
            including obligations to report confirmed CSAM to NCMEC or the
            relevant regional authority. We maintain internal processes to:
          </p>
          <ul>
            <li>
              Review reports of child-endangering content in a timely manner.
            </li>
            <li>
              File CyberTipline reports with NCMEC for confirmed CSAM, including
              relevant metadata where required by law.
            </li>
            <li>
              Cooperate with law-enforcement requests and legal orders related
              to child safety.
            </li>
          </ul>
        </section>

        
        <section className="policy-section">
          <h2>Child Safety Point of Contact</h2>
          <p>
            Ahid designates a child safety point of contact to receive
            notifications from Google Play and other parties regarding CSAE
            content found on our platform. This representative is authorised to
            speak to our enforcement and review procedures and to take required
            action.
          </p>
          <div className="contact-block">
            <p><strong>Child Safety Contact — Ahid</strong></p>
            <p>
              Email:{" "}
              <a href="mailto:support@ahid.io">support@ahid.io</a>
            </p>
          </div>
          <p>
            If you believe a child is in immediate danger, please contact your
            local law-enforcement agency immediately. You can also find child
            safety organisations in your country at{" "}
            <a
              href="https://www.missingkids.org"
              target="_blank"
              rel="noreferrer noopener"
              >missingkids.org</a>.
          </p>
        </section>

        <p className="policy-note">Last updated: June 2026</p>
      </PolicyShell>
  );
}
