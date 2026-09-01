"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
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
          <button type="submit" className="btn btn-primary">
            Send Enquiry
          </button>
          {submitted && (
            <p className="contact-status" role="status">
              Thanks — this form isn&apos;t wired to an inbox yet. In the meantime,
              reach Aly directly at hello@alywavish.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
