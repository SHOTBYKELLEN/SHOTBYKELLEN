import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data/site";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  sessionType: string;
  date?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, sessionType, date, message } = body;

  if (!name || !email || !sessionType || !message) {
    return NextResponse.json(
      { error: "Name, email, session type, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery isn't configured yet. Please email kellens.photography1@gmail.com directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "ShotByKellen Website <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    subject: `New inquiry from ${name} — ${sessionType}`,
    html: `
      <h2>New session inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Session Type:</strong> ${escapeHtml(sessionType)}</p>
      ${date ? `<p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
