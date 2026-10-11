import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const bad = (msg, status = 400) => NextResponse.json({ error: msg }, { status });
const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return bad("Invalid request"); }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const name = str(body.name, 100), email = str(body.email, 150), phone = str(body.phone, 30);
  const service = str(body.service, 100), message = str(body.message, 3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Please fill in name, a valid email and your message");

  const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return bad("Email is not configured", 500);

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transporter.sendMail({
      from: SMTP_USER,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nService: ${service || "-"}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return bad("Failed to send", 500);
  }
}
