"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import {
  createTicketId,
  isRateLimited,
  readSupportValues,
  renderTicketEmail,
  validateSupportValues,
  type SupportErrors,
  type SupportValues,
} from "@/lib/support";

export type SupportState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: SupportErrors;
  values?: SupportValues;
  ticketId?: string;
};

const DEFAULT_SUPPORT_INBOX = "ahidsoftlabs@gmail.com";
// Resend's shared test sender only delivers to the Resend account owner's own
// address. Set SUPPORT_FROM_EMAIL once a domain is verified in Resend.
const DEFAULT_FROM = "Ahid Support <onboarding@resend.dev>";

export async function submitSupportTicket(
  _previous: SupportState,
  formData: FormData,
): Promise<SupportState> {
  // Hidden field real people never see; bots fill it in. Pretend it worked.
  if (formData.get("website")) {
    return { status: "success", ticketId: createTicketId() };
  }

  const values = readSupportValues(formData);
  const fieldErrors = validateSupportValues(values);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      values,
      message: "You've sent a few messages in a short time. Please wait a few minutes and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[support] RESEND_API_KEY is not set; ticket not sent.");
    return {
      status: "error",
      values,
      message: "Our support form is temporarily unavailable. Please try again shortly.",
    };
  }

  const ticketId = createTicketId();
  const { text, html } = renderTicketEmail(ticketId, values, new Date());

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.SUPPORT_FROM_EMAIL || DEFAULT_FROM,
      to: process.env.SUPPORT_TO_EMAIL || DEFAULT_SUPPORT_INBOX,
      replyTo: values.email,
      subject: `[Ahid Support] ${ticketId}`,
      text,
      html,
    });

    if (error) throw new Error(`${error.name}: ${error.message}`);
  } catch (error) {
    console.error(`[support] Failed to send ticket ${ticketId}:`, error);
    return {
      status: "error",
      values,
      message: "Something went wrong on our side and your message wasn't sent. Please try again in a moment.",
    };
  }

  return { status: "success", ticketId };
}
