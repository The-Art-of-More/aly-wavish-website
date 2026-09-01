const VALUES = [
  {
    title: "Root Cause, Not Symptom",
    body: "Don't fix the locked knee if the issue is the connective tissue. This applies to a business just as much as a body — Aly stops the whack-a-mole and finds the actual source.",
  },
  {
    title: "Resilience Isn't Linear",
    body: "Endurance is not a straight line upward. Sometimes it involves a strategic pause — and the courage to stop everything when the strain is too high.",
  },
  {
    title: "Metacognition in Crisis",
    body: "You cannot control the crisis. But when you understand how you think, how you process data, and how your systems operate, you become the architect of your own survival.",
  },
  {
    title: "Leading From the Centre",
    body: "Leadership isn't about avoiding the breakdown — it's the grueling, rewarding work of understanding the systems we inhabit.",
  },
];

export default function Values() {
  return (
    <section className="band-light" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-tag">
          <span className="rule"></span>How Aly Works
        </div>
        <h2>If you don&apos;t advocate for your own internal system, no one else will.</h2>
        <div className="values-list">
          {VALUES.map((value) => (
            <div className="value-row" key={value.title}>
              <h4>{value.title}</h4>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
