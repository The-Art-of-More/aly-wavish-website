const POSTS = [
  {
    image: "https://www.re-solve.com.au/files/home/post-001.webp?w=800&h=800&s=exact",
    meta: "Resilience",
    title: "The question I ask before any turnaround",
  },
  {
    image: "https://www.re-solve.com.au/files/home/post-003.webp?w=800&h=800&s=exact",
    meta: "Leadership",
    title: "Why curiosity is a resilience skill, not a personality trait",
  },
  {
    image: "https://www.re-solve.com.au/files/home/post-005.webp?w=800&h=800&s=exact",
    meta: "Case Study",
    title: "What a 41% income lift actually took",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="band-light" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-tag">
          <span className="rule"></span>Insights
        </div>
        <h2>Resilience &amp; curiosity, in practice.</h2>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <div className="blog-card" key={post.title}>
              <img src={post.image} alt="" />
              <div className="meta">{post.meta}</div>
              <h4>{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
