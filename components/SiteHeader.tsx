"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="shell header-bar">
        <Link href="/" className="brand" aria-label="Go to the Ahid homepage" onClick={close}>
          <Image src="/assets/ahid_logo.png" width={70} height={25} alt="Ahid" priority />
        </Link>

        <nav id="primary-nav" aria-label="Primary" className="header-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-chip nav-cta" onClick={close}>
            Get the app
          </Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
