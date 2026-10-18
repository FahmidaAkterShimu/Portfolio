"use client";
import { useState } from "react";

export default function ContactForm({ services }) {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(new FormData(form))
        ),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const label = "sr-only";
  return (
    <form onSubmit={onSubmit} className="grid gap-5">

      <div>
        <label htmlFor="name" className={label}>Name</label>
        <input id="name" className="field w-full " name="name" required maxLength={100} autoComplete="name" placeholder="Your Name" />
      </div>

      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" className="field w-full " name="email" type="email" required maxLength={150} autoComplete="email" placeholder="Email Address" />
      </div>

      <div>
        <label htmlFor="phone" className={label}>Phone</label>
        <input id="phone" className="field w-full " name="phone" maxLength={30} autoComplete="tel" placeholder="+880 1XXX XXXXXX" />
      </div>

      <div>
        <label htmlFor="message" className={label}>Your Message</label>
        <textarea id="message" className="field w-full " name="message" rows={5} required maxLength={3000} placeholder="Your Message!" />
      </div>

      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button className="btn btn-primary w-full disabled:opacity-60" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message ↗"}
      </button>
      <p role="status" className="min-h-6 text-sm">
        {status === "sent" && <span className="text-accent">Message sent. I will reply soon.</span>}
        {status === "error" && <span className="text-red-500">Could not send. Please try again or email me directly.</span>}
      </p>

    </form>
  );
}
