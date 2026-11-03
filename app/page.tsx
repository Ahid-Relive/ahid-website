import type { Metadata } from "next";
import Image from "next/image";

import Faq from "@/components/Faq";
import FeatureTabs from "@/components/FeatureTabs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { AppleLogo, PlayLogo } from "@/components/StoreLogos";
import { PLAY_STORE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ahid — Discover Trusted Local Brands",
  description:
    "Ahid helps you find nearby products and services from verified businesses, making discovery faster and safer. Join 10k+ users today.",
  openGraph: {
    title: "Ahid — Discover Trusted Local Brands",
    description:
      "Find nearby products and services from verified businesses. Download Ahid today.",
    url: "https://ahid.app",
  },
  alternates: {
    canonical: "https://ahid.app",
  },
};

const screens = [
  {
    src: "/assets/Search - Category.png",
    title: "Find what's near you",
    text: "Search by category and location to see verified businesses around you.",
  },
  {
    src: "/assets/(Brands) Home.png",
    title: "Follow trusted brands",
    text: "Browse brand profiles, posts and galleries before you decide.",
  },
  {
    src: "/assets/Add Business Profile - Toast.png",
    title: "List your business",
    text: "Create a business profile in minutes and reach customers nearby.",
  },
];

const steps = [
  { title: "Browse", text: "Explore verified brands near you by category and location." },
  { title: "Discover", text: "View galleries, reviews and trust badges to find what you need." },
  { title: "Connect", text: "Message brands directly or visit them with confidence." },
  { title: "Trust", text: "Share feedback and help others find businesses they can rely on." },
];

function StoreButtons() {
  return (
    <div className="cta-row">
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <PlayLogo />
        <span>Get it on Google Play</span>
      </a>
      <span className="btn-soon" aria-disabled="true">
        <AppleLogo />
        <span>App Store</span>
        <span className="badge">Coming soon</span>
      </span>
    </div>
  );
}

function Phone({ src, alt = "", priority = false }: { src: string; alt?: string; priority?: boolean }) {
  return (
    <div className="phone">
      <Image src={src} alt={alt} width={1572} height={3408} priority={priority} />
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <SiteHeader />

      <section className="shell hero">
        <div>
          <p className="chip">Verified local brands, near you</p>
          <h1>
            Find businesses you can <span>actually trust</span>
          </h1>
          <p className="lead">
            Ahid is a free app that connects you with verified local brands.
            Search by category, see real photos and reviews, and message
            businesses directly &mdash; all in one place.
          </p>
          <StoreButtons />
          <ul className="checks">
            <li>Every brand verified</li>
            <li>Free to use</li>
            <li>List your own business</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="glow" aria-hidden="true"></div>
          <Phone src="/assets/Search - Category.png" alt="Ahid category search screen" priority />
          <Phone src="/assets/(Brands) Home.png" alt="Ahid brand home screen" priority />
        </div>
      </section>

      <section id="about" className="shell">
        <div className="section-head center">
          <p className="eyebrow">What Ahid does</p>
          <h2>One app for discovering, and being discovered</h2>
          <p>
            Customers find nearby products and services they can rely on.
            Businesses get a trusted profile and visibility with people
            searching in their area.
          </p>
        </div>
        <div className="grid grid-3 showcase">
          {screens.map((screen) => (
            <article key={screen.title} className="showcase-item">
              <Phone src={screen.src} />
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="shell">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Get started in four steps</h2>
        </div>
        <div className="grid grid-4">
          {steps.map((step, index) => (
            <article key={step.title} className="item">
              <p className="num">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="shell">
        <div className="section-head">
          <p className="eyebrow">Built for both sides</p>
          <h2>Made for people and for brands</h2>
        </div>
        <FeatureTabs />
      </section>

      <section id="faq" className="shell faq-section">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered</h2>
        </div>
        <Faq />
      </section>

      <section id="contact" className="shell">
        <div className="cta-panel">
          <h2>Get Ahid and start discovering</h2>
          <p>
            Download the app and find trusted local businesses near you in
            minutes.
          </p>
          <StoreButtons />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
