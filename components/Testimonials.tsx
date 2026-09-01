const TESTIMONIALS = [
  {
    quote:
      "It was a pleasure working with Aly on the re-positioning project at Oceana Walk Arcade. Through an effective and tailored strategy, she helped me achieve a 41% improvement in asset income.",
    name: "Scott Green",
    role: "AAPI",
  },
  {
    quote:
      "I've had the pleasure of having Aly involved with my company for the previous six years, working across strategy, remixing, and advocacy. Her thinking always holds up under pressure.",
    name: "Jamie Gray",
    role: "Clarendon Property Group",
  },
  {
    quote:
      "When I started my own business, I brought in Aly to help me work through my plan — I had no experience with any of it. She was a tremendous help, offering invaluable, honest advice.",
    name: "Nicki Larionoff",
    role: "Business Owner",
  },
];

export default function Testimonials() {
  return (
    <section className="band-light">
      <div className="wrap">
        <div className="section-tag">
          <span className="rule"></span>In Her Own Words — From Clients
        </div>
        <h2>What it&apos;s like to work with Aly.</h2>
        <div className="testi-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div className="testi-card" key={testimonial.name}>
              <div className="quotemark">&ldquo;</div>
              <p>{testimonial.quote}</p>
              <div className="name">{testimonial.name}</div>
              <div className="role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
