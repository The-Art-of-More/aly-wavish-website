"use client";

import { useState } from "react";

// Same Formspree form as the main contact form (components/Contact.tsx) —
// wherever that's configured to deliver is where this routes too. See
// DEPLOY.md for setup.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ID) {
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
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="wordmark">
              ALY <span style={{ color: "var(--crimson)" }}>WAVISH</span>
            </div>
            <p style={{ maxWidth: "320px", color: "#9a9a9a" }}>
              Resilience expert, coach, and creator of the re-solve Method —
              helping leaders turn pressure into practice.
            </p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#method">The re-solve Method</a>
              </li>
              <li>
                <a href="#speaking">Speaking</a>
              </li>
              <li>
                <a href="#insights">Insights</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get in Touch</h5>
            <form className="footer-capture" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New enquiry — footer capture" />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Email"
                required
              />
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "…" : "Notify Aly"}
              </button>
            </form>
            {status === "sent" && (
              <p className="footer-capture-status" role="status">
                Thanks — Aly will be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="footer-capture-status" role="status">
                Couldn&apos;t send that — email{" "}
                <a href="mailto:aly@theartofmore.com.au">aly@theartofmore.com.au</a> directly.
              </p>
            )}
            <ul style={{ marginTop: 18 }}>
              <li>
                Suite 9/214 Bay Street,
                <br />
                Brighton VIC 3186
              </li>
              <li>Mon–Fri, 9am–5pm</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Aly Wavish. All rights reserved.</span>
          <span>Mockup draft — content &amp; imagery placeholder, not final</span>
        </div>
      </div>
    </footer>
  );
}
