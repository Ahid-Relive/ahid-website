import type { Metadata } from "next";

import PolicyShell from "@/components/PolicyShell";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to permanently delete your Ahid account and all associated personal data. Step-by-step instructions and support contact.",
  openGraph: {
    title: "Delete Your Account | Ahid",
    description:
      "Permanently delete your Ahid account and personal data. Full instructions and support info.",
    url: "https://ahid.app/account-deletion",
  },
  alternates: {
    canonical: "https://ahid.app/account-deletion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccountDeletionPage() {
  return (
    <PolicyShell
      pill="Account Management"
      title="Delete Your Ahid Account"
      meta="Full control over your data"
      hero={
        <p className="policy-intro">
          Ahid is committed to giving users full control over their data. You may permanently delete your account and associated information at any time.
        </p>
      }
    >
        
        <section className="policy-section">
          <h2>How to Delete Your Account</h2>
          <ol>
            <li>Open the Ahid mobile application.</li>
            <li>Navigate to <strong>Profile &rarr; Settings</strong>.</li>
            <li>Select <strong>Delete Account</strong>.</li>
            <li>Review the deletion information.</li>
            <li>Confirm your request.</li>
          </ol>
          <p>
            If you cannot access your account, contact our support team using
            the email address below.
          </p>
        </section>

        
        <section className="policy-section">
          <h2>Data That Will Be Deleted</h2>
          <ul>
            <li>Account profile information</li>
            <li>Name and username</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Saved preferences</li>
            <li>Activity associated with your account</li>
            <li>Other personally identifiable account data</li>
          </ul>
        </section>

        
        <section className="policy-section">
          <h2>Data Retention</h2>
          <p>
            Certain records may be retained for a limited period where required
            for:
          </p>
          <ul>
            <li>Fraud prevention and security monitoring</li>
            <li>Legal and regulatory compliance</li>
            <li>Dispute resolution</li>
          </ul>
          <p>
            Any retained information is securely stored and permanently removed
            once the applicable retention period expires.
          </p>
        </section>

        
        <section className="policy-section">
          <h2>Need Assistance?</h2>
          <p>
            If you cannot access your account or need help with deletion, please
            contact us:
          </p>
          <div className="contact-block">
            <p><strong>Ahid Support</strong></p>
            <p>
              Email:{" "}
              <a href="mailto:support@ahid.io">support@ahid.io</a>
            </p>
          </div>
        </section>

        <p className="policy-note">Last updated: June 2026</p>
      </PolicyShell>
  );
}
