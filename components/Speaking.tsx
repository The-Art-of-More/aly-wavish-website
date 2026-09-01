const TOPICS = [
  { title: "The Architecture of Resilience", detail: "Flagship keynote — metacognitive endurance in systemic crisis" },
  { title: "The Leader as Advocate", detail: "Why no one else will advocate for your internal system but you" },
  { title: "Root Cause vs. Symptom", detail: "Stop playing whack-a-mole in your business and your biology" },
  { title: "Resilience is Not Linear", detail: "Why endurance requires strategic pauses, not just pushing through" },
];

export default function Speaking() {
  return (
    <section id="speaking" className="band-light" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-tag">
          <span className="rule"></span>Speaking &amp; Media
        </div>
        <h2>Talks that trade platitudes for practice.</h2>
        <p className="lead">
          Aly speaks to conferences, leadership offsites, and industry events on
          resilience under real, compounding pressure — drawn from decades of
          business turnarounds and a personal health crisis she navigated using
          the same systemic thinking.
        </p>
        <div className="topics-grid">
          {TOPICS.map((topic) => (
            <div className="topic-pill" key={topic.title}>
              {topic.title}
              <span>{topic.detail}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="link-more">
          Request Aly&apos;s media kit →
        </a>
      </div>
    </section>
  );
}
