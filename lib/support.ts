import { randomBytes } from "node:crypto";

export const SUPPORT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 3000,
} as const;

export type SupportValues = { name: string; email: string; message: string };
export type SupportErrors = Partial<Record<keyof SupportValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Control characters (incl. newlines) never belong in a name or email address.
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/g;

export function readSupportValues(formData: FormData): SupportValues {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };

  return {
    name: read("name").replace(CONTROL_CHARS, " ").trim(),
    email: read("email").replace(CONTROL_CHARS, "").trim(),
    message: read("message").replace(/\r\n/g, "\n").trim(),
  };
}

export function validateSupportValues(values: SupportValues): SupportErrors {
  const errors: SupportErrors = {};
  const { nameMin, nameMax, emailMax, messageMin, messageMax } = SUPPORT_LIMITS;

  if (values.name.length < nameMin) errors.name = "Please tell us your name so we know who to reply to.";
  else if (values.name.length > nameMax) errors.name = `Please keep your name under ${nameMax} characters.`;

  if (!EMAIL_PATTERN.test(values.email) || values.email.length > emailMax) {
    errors.email = "That email doesn't look right. We need it to reply to you.";
  }

  if (values.message.length < messageMin) {
    errors.message = "Could you tell us a little more? A sentence or two helps us help you.";
  } else if (values.message.length > messageMax) {
    errors.message = `Please keep your message under ${messageMax} characters.`;
  }

  return errors;
}

/** Short, readable reference the customer can quote, e.g. AHD-7K3QF2. */
export function createTicketId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I lookalikes
  const bytes = randomBytes(6);
  const code = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
  return `AHD-${code}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderTicketEmail(ticketId: string, values: SupportValues, submittedAt: Date) {
  const when = submittedAt.toUTCString();

  const text = [
    `New support ticket ${ticketId}`,
    "",
    `Name:  ${values.name}`,
    `Email: ${values.email}`,
    `Sent:  ${when}`,
    "",
    values.message,
    "",
    "Reply to this email to respond to the customer directly.",
  ].join("\n");

  const html = `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f2f2d">
  <p style="margin:0 0 4px;color:#0b7a70;font-weight:700;font-size:13px">NEW SUPPORT TICKET</p>
  <h1 style="margin:0 0 20px;font-size:24px">${escapeHtml(ticketId)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    <tr><td style="padding:8px 0;color:#5a6e6c;width:90px">Name</td><td style="padding:8px 0">${escapeHtml(values.name)}</td></tr>
    <tr><td style="padding:8px 0;color:#5a6e6c">Email</td><td style="padding:8px 0">${escapeHtml(values.email)}</td></tr>
    <tr><td style="padding:8px 0;color:#5a6e6c">Sent</td><td style="padding:8px 0">${escapeHtml(when)}</td></tr>
  </table>
  <div style="margin:20px 0;padding:16px;background:#f4fbfa;border-radius:10px;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(values.message)}</div>
  <p style="color:#5a6e6c;font-size:13px">Reply to this email to respond to the customer directly.</p>
</div>`;

  return { text, html };
}

// Best-effort limiter: it lives in server memory, so on serverless hosting each
// instance counts separately. Swap for a shared store (Redis/Upstash) at scale.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 5000) {
    for (const [ip, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(ip);
    }
  }
  return false;
}
