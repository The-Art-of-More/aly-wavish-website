const SERVICES = [
  { tag: "1:1 & Executive", title: "Resilience Coaching", body: "Ongoing coaching for leaders navigating high-stakes change, burnout risk, or a rebuild moment." },
  { tag: "Teams", title: "Leadership Workshops", body: "Hands-on sessions that teach teams to apply the re-solve Method to their own real pressure points." },
  { tag: "Events", title: "Keynote Speaking", body: "A resilience talk built around Aly's own high-stakes case studies — not borrowed theory." },
  { tag: "Programs", title: "The re-solve Method", body: "Aly's signature framework, delivered as a structured program for organisations ready to build resilience on purpose." },
  { tag: "Advisory", title: "Strategic Advisory", body: "Drawing on 25 years across retail, property, and hospitality for leaders navigating a genuine turnaround." },
  { tag: "Custom", title: "Tailored Engagements", body: "Every engagement starts with a conversation — Aly scopes what's actually needed before proposing a format." },
];

export default function Services() {
  return (
    <section className="band-light">
      <div className="wrap">
        <div className="section-tag">
          <span className="rule"></span>Work With Aly
        </div>
        <h2>Coaching, keynotes, and workshops built on the re-solve Method.</h2>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="tag">{service.tag}</div>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
