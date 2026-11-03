import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="shell site-header">
      <Link href="/" className="brand" aria-label="Go to the Ahid homepage">
        <Image src="/assets/ahid_logo.png" width={70} height={25} alt="Ahid" priority />
      </Link>
      <nav aria-label="Primary">
        <Link href="/#about">About</Link>
        <Link href="/#how">How it works</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <Link href="/#contact" className="btn-chip">
        Get the app
      </Link>
    </header>
  );
}
