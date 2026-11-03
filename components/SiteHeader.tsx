"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pageLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/child-safety", label: "Child Safety" },
  { href: "/account-deletion", label: "Account Deletion" },
];

const activeStyle = { color: "black", fontWeight: "bold" } as const;

export default function SiteHeader({
  variant = "page",
}: {
  variant?: "landing" | "page";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const landing = variant === "landing";
  const prefix = landing ? "" : "/";

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".nav-wrap")) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={
        landing
          ? `nav-wrap reveal-up${open ? " nav-open" : ""}`
          : "shell nav-wrap policy-header"
      }
    >
      <div className="brand">
        <Link href="/" aria-label="Go to the Ahid homepage">
          <Image src="/assets/ahid_logo.png" width={70} height={25} alt="Ahid Logo" priority />
        </Link>
      </div>
      {landing && (
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <nav id="primary-nav" aria-label="Primary">
        <Link href={`${prefix}#about`} onClick={close}>About us</Link>
        <Link href={`${prefix}#features`} onClick={close}>Features</Link>
        <Link href={`${prefix}#faq`} onClick={close}>FAQ</Link>
        {pageLinks.map((link) => {
          const current = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              style={current ? activeStyle : undefined}
              aria-current={current ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      {landing && <div className="nav-backdrop" aria-hidden="true" onClick={close}></div>}
      {landing ? (
        <Link href="#contact" className="cta-chip">Contact us</Link>
      ) : (
        <Link href="/" className="cta-chip">Back home</Link>
      )}
    </header>
  );
}
