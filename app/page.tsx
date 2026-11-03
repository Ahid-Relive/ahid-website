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

export default function Page() {
  return (
    <main className="ahid-landing">
      <div className="top-strip">
        <p>Bring your trusted local brand closer to more customers.</p>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          Download App
        </a>
      </div>

      <SiteHeader variant="landing" />

      <section className="hero reveal-up">
        <div className="hero-content">
          <p className="pill">Discover brands in your city</p>
          <h1>Discover and connect with<span className="gradient-text"> trusted local brands</span></h1>
          <p className="lead">
            Ahid helps you find nearby products and services from verified
            businesses, making discovery faster and safer.
          </p>
          <div className="hero-actions">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <PlayLogo />
              <span>Get it on Google Play</span>
            </a>
            <span className="btn-soon" aria-disabled="true">
              <AppleLogo />
              <span>Download on the App Store</span>
              <span className="badge">Coming soon</span>
            </span>
          </div>
          <p className="hero-subtext">Join 10k+ users discovering trusted brands daily</p>
        </div>
        <div className="hero-visual">
          <div className="mockup-group" aria-hidden="true">
            <figure className="mockup-screen is-back">
              <Image src="/assets/Search - Category.png" alt="" width={1572} height={3408} />
            </figure>
            <figure className="mockup-screen is-front">
              <Image src="/assets/(Brands) Home.png" alt="" width={1572} height={3408} />
            </figure>
          </div>
        </div>
      </section>

      <section className="shell how-it-works reveal-up">
        <p className="pill">How It Works</p>
        <h2>Get started in 4 simple steps</h2>
        <div className="steps-grid">
          <article className="step">
            <div className="step-number">1</div>
            <h3>Browse</h3>
            <p>Explore verified brands and businesses near you by category and location.</p>
          </article>
          <article className="step">
            <div className="step-number">2</div>
            <h3>Discover</h3>
            <p>View galleries, reviews, and trust badges to find exactly what you need.</p>
          </article>
          <article className="step">
            <div className="step-number">3</div>
            <h3>Connect</h3>
            <p>Message brands directly or visit them through the app with confidence.</p>
          </article>
          <article className="step">
            <div className="step-number">4</div>
            <h3>Trust</h3>
            <p>Share feedback and help other users find verified local businesses they can rely on.</p>
          </article>
        </div>
      </section>

      <section className="shell reveal-up">
        <div id="about" className="about reveal-up">
          <div className="about-intro">
            <p className="pill">About us</p>
            <h2>We&apos;re a bridge that connects users to brands</h2>
            <p>
              We empower brands to present themselves and users to discover
              nearby, verified options through a simple and trusted experience.
            </p>
          </div>

          <div className="diff-grid">
            <article className="about-card">
              <div className="dot" aria-hidden="true">&#10003;</div>
              <h3>Trust at the Core</h3>
              <p>
                Brand verification and trust badges help users make confident
                choices.
              </p>
            </article>
            <article className="about-card">
              <div className="dot" aria-hidden="true">&#128202;</div>
              <h3>Actionable Insights for Brands</h3>
              <p>
                Track customer behavior, feedback, and campaign performance with
                ease.
              </p>
            </article>
            <article className="about-card">
              <div className="dot" aria-hidden="true">&#128205;</div>
              <h3>Localized User Experience</h3>
              <p>
                Discover nearby services by category and proximity, tailored for
                each user.
              </p>
            </article>
          </div>

          <div className="mission-panel">
            <div className="portrait" aria-hidden="true">
              <Image src="/assets/heroImage.png" alt="man image" width={1672} height={941} />
            </div>
            <div className="mission-content">
              <p className="pill">Our mission</p>
              <h3>We&apos;re a bridge that connects users to brands</h3>
              <p>
                By combining trust, locality, and discovery, Ahid helps users
                make informed choices while giving brands better visibility.
              </p>
              <div className="stats">
                <div className="stat-card">
                  <strong>5000+</strong>
                  <span>Verified Brands</span>
                </div>
                <div className="stat-card">
                  <strong>10k+</strong>
                  <span>Active Users</span>
                </div>
                <div className="stat-card">
                  <strong>87%</strong>
                  <span>Trust Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="feature-zone reveal-up">
        <div className="shell">
          <p className="pill">Features</p>
          <h2>Our mission is to build a trusted ecosystem without hassle</h2>
          <p className="feature-intro">
            Ahid makes it simple for users and brands to connect through a
            clear, transparent, and community-first experience.
          </p>

          <FeatureTabs />
        </div>
      </section>

      <section className="shell reveal-up">
        <div className="shell stories reveal-up">
          <p className="pill">Testimonials</p>
          <h2>Success stories from brands and users</h2>
          <div className="story-grid">
            <article>
              <p>
                &ldquo;Ahid helped my business appear in search and brought in more
                trusted customers.&rdquo;
              </p>
              <div>
                <strong>Sarah Joe</strong>
                <span>Owner of Luxe Home Goods</span>
              </div>
            </article>
            <article>
              <p>
                &ldquo;As a user, I can quickly discover verified local brands I can
                trust and revisit.&rdquo;
              </p>
              <div>
                <strong>James Chinedu</strong>
                <span>Ahid User</span>
              </div>
            </article>
            <article>
              <p>
                &ldquo;I found a nearby service provider in minutes and booked with
                confidence.&rdquo;
              </p>
              <div>
                <strong>Chinwe Eweka</strong>
                <span>Fashion Retailer</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-zone reveal-up">
        <div className="shell faq-wrap">
          <div>
            <p className="pill">FAQ</p>
            <h2>Frequently Asked Questions about Ahid</h2>
          </div>
          <Faq />
        </div>
      </section>

      <section className="shell cta-zone reveal-up">
        <div className="shell cta-banner reveal-up" id="contact">
          <h2>Join Ahid and transform the way you connect</h2>
          <p>
            Discover nearby trusted services and become part of a transparent
            local commerce network.
          </p>
          <div className="cta-row">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download the app now
            </a>
            <span className="btn-soon" aria-disabled="true">
              <span>Download on iOS</span>
              <span className="badge">Coming soon</span>
            </span>
          </div>
        </div>
      </section>

      <SiteFooter id="newsletter" reveal />
    </main>
  );
}
