const STEPS = [
  { num: "01", title: "The Micro-Signal", body: "Catch the weak signal everyone else writes off as an isolated quirk." },
  { num: "02", title: "The System Failure", body: "See where daily operations miss the connection between symptom and cause." },
  { num: "03", title: "Strategic Translation", body: "Recognise the real, underlying signal driving the surface-level problem." },
  { num: "04", title: "Systemic Resolution", body: "Treat the root cause — not the symptom — and re-solve it for good." },
];

export default function Method() {
  return (
    <section id="method" className="band-dark">
      <div className="wrap">
        <div className="section-tag" style={{ color: "var(--crimson)" }}>
          <span className="rule" style={{ background: "var(--crimson)" }}></span>
          Signature Framework
        </div>
        <h2>
          The Resilience Matrix — <span className="tagname" style={{ color: "var(--crimson)" }}>re-solve</span>
        </h2>
        <p className="lead" style={{ color: "#6b5f5c" }}>
          Metacognitive Endurance, not &ldquo;bouncing back.&rdquo; Aly&apos;s named framework
          for moving from crisis reaction to systemic resolution — built while
          rebuilding her own health, and now taught directly to leaders and teams.
        </p>

        <div className="method-box">
          <div>
            <h3>
              Bouncing Back
              <br />
              <span style={{ color: "#888", fontSize: "20px" }}>(The Old Model)</span>
            </h3>
            <p style={{ marginBottom: "14px" }}>
              Treat the symptoms. Push through the pain. Seek quick fixes. View
              problems as isolated incidents. Chase the &ldquo;golden goose.&rdquo;
            </p>
            <h3 style={{ marginTop: "28px" }}>
              Metacognitive Endurance
              <br />
              <span className="tagname" style={{ fontSize: "20px" }}>(The re-solve Model)</span>
            </h3>
            <p>
              Analyse the systems. Enforce strategic pauses. Manage the source
              code. View problems as an interconnected network. Do the grueling
              work of understanding the host.
            </p>
          </div>
          <div className="method-steps">
            {STEPS.map((step) => (
              <div className="step" key={step.num}>
                <div className="num">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="lead" style={{ color: "#6b5f5c", maxWidth: "760px", marginTop: "40px", fontStyle: "italic" }}>
          &ldquo;Leadership isn&apos;t about avoiding the breakdown. It is the
          grueling, rewarding work of understanding the systems we inhabit.
          Become the architect of your own source code.&rdquo; — Aly Wavish
        </p>
      </div>
    </section>
  );
}
