"use client";

import { useActionState, useState } from "react";
import Link from "next/link";

import { SUPPORT_LIMITS } from "@/lib/support";

import { submitSupportTicket, type SupportState } from "./actions";

const initialState: SupportState = { status: "idle" };

function Form({ onReset }: { onReset: () => void }) {
  const [state, action, pending] = useActionState(submitSupportTicket, initialState);
  const [length, setLength] = useState(0);
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="support-success" role="status">
        <div className="success-mark" aria-hidden="true">✓</div>
        <h2>Thanks, we&apos;ve got your message</h2>
        <p>
          A support ticket has been created. Our team will reply to the email
          address you gave us within 24 hours.
        </p>
        <p className="ticket-ref">
          Your reference: <strong>{state.ticketId}</strong>
        </p>
        <button type="button" className="btn-soon support-again" onClick={onReset}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={action} className="support-form" noValidate>
      <h2>Tell us what&apos;s going on</h2>
      <p className="form-intro">
        Share as much detail as you can. A real person reads every message.
      </p>

      {state.status === "error" && state.message && (
        <p className="form-alert" role="alert">
          {state.message}
        </p>
      )}

      <div className="field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Ada Okafor"
          required
          maxLength={SUPPORT_LIMITS.nameMax}
          defaultValue={state.values?.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          required
          maxLength={SUPPORT_LIMITS.emailMax}
          defaultValue={state.values?.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : "email-hint"}
        />
        {errors.email ? (
          <p id="email-error" className="field-error">{errors.email}</p>
        ) : (
          <p id="email-hint" className="field-hint">We&apos;ll only use this to reply to you.</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="message">Message or inquiry</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What happened, and what were you trying to do?"
          required
          maxLength={SUPPORT_LIMITS.messageMax}
          defaultValue={state.values?.message}
          onChange={(event) => setLength(event.target.value.length)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <div className="field-foot">
          {errors.message ? (
            <p id="message-error" className="field-error">{errors.message}</p>
          ) : (
            <span />
          )}
          <span className="field-hint">
            {length || state.values?.message.length || 0}/{SUPPORT_LIMITS.messageMax}
          </span>
        </div>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn-primary support-submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>

      <p className="form-legal">
        By sending this message you agree to our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

export default function SupportForm() {
  // Bumping the key remounts the form, which clears the previous result.
  const [round, setRound] = useState(0);
  return <Form key={round} onReset={() => setRound((value) => value + 1)} />;
}
