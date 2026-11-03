"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setEmail("");
    window.alert("Thanks. Your email has been captured for the newsletter.");
  }

  return (
    <form id="newsletter-form" onSubmit={onSubmit}>
      <input
        type="email"
        id="newsletter-email"
        placeholder="Enter your email"
        required
        value={email}
        aria-invalid={invalid || undefined}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
