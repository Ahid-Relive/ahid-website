import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-row">
          <Image src="/assets/ahid_logo.png" alt="Ahid" width={50} height={18} />
          <nav className="footer-links" aria-label="Footer">
            <Link href="/support">Support</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/child-safety">Child Safety</Link>
            <Link href="/account-deletion">Account Deletion</Link>
            <a href="mailto:support@ahid.io">support@ahid.io</a>
          </nav>
        </div>
        <p className="copyright">© 2026 Ahid. Connecting you with verified local brands.</p>
      </div>
    </footer>
  );
}
