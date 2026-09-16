"use client";

import { useState } from "react";

// Set by Formspree (see DEPLOY.md) — a form there is configured to deliver
// to aly@theartofmore.com.au. Not secret; it's a public form endpoint, but
// still env-driven so it's one place to change and the repo isn't hard-wired
// to one account.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ID) {
      // Not configured yet — fail loud in a way a visitor can still act on.
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-band">
      <div className="wrap">
        <div className="section-tag" style={{ justifyContent: "center", color: "var(--crimson)" }}>
          <span className="rule" style={{ background: "var(--crimson)" }}></span>
          Get in Touch
        </div>
        <h2 style={{ margin: "0 auto" }}>Let&apos;s talk about what you&apos;re rebuilding.</h2>
        <p className="sub">
          Coaching, keynotes, workshops, or just a conversation — tell Aly what&apos;s
          going on.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" aria-label="Name" required />
          <input type="email" name="email" placeholder="Email" aria-label="Email" required />
          <input
            type="text"
            name="enquiry"
            placeholder="What are you looking for? (Coaching / Speaking / Workshop)"
            aria-label="What are you looking for?"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Tell Aly a bit about it"
            aria-label="Message"
          ></textarea>
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Enquiry"}
          </button>
          {status === "sent" && (
            <p className="contact-status" role="status">
              Thanks — that&apos;s on its way to Aly. She&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status" role="status">
              Something went wrong sending that. Reach Aly directly at{" "}
              <a href="mailto:aly@theartofmore.com.au">aly@theartofmore.com.au</a> instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
