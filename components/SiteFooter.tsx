import Image from "next/image";
import Link from "next/link";

import NewsletterForm from "./NewsletterForm";

export default function SiteFooter({ id, reveal }: { id?: string; reveal?: boolean }) {
  return (
    <footer id={id} className={`site-footer${reveal ? " reveal-up" : ""}`}>
      <div className="shell footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Image src="/assets/ahid_logo.png" alt="Ahid Logo" width={50} height={18} />
            <p>Discover and connect with verified local brands you can trust.</p>
            <div className="social-links">
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">𝕏</a>
              <a href="https://wa.me" aria-label="Whatsapp" target="_blank" rel="noreferrer">💬</a>
              <a href="mailto:hello@ahid.io" aria-label="Email">✉</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <Link href="/#features">Features</Link>
            <Link href="/#about">About</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <Link href="/#faq">FAQ</Link>
            <a href="https://wa.me" target="_blank" rel="noreferrer">Support</a>
            <a href="#">Blog</a>
            <a href="#">Community</a>
          </div>

          <div className="footer-newsletter">
            <div>
              <h4>Stay Updated</h4>
              <p>Get news about local brands and exclusive offers.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 Ahid. Connecting you with verified local brands.</p>
        </div>
      </div>
    </footer>
  );
}
