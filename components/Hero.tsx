export default function Hero() {
  return (
    <section className="hero" style={{ paddingBottom: 0 }}>
      <div className="eyebrow">Resilience Expert &amp; Speaker</div>
      <h1>
        This is <em>Aly.</em>
      </h1>
      <div className="subline">Aspiring Resilience.</div>

      <div className="hero-mark">
        <svg
          viewBox="0 0 1200 140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="markTitle markDesc"
        >
          <title id="markTitle">Aly Wavish symbolic line mark</title>
          <desc id="markDesc">
            A minimal single-line drawing of a centre node radiating asymmetric
            branching lines, symbolizing leading from the centre through a
            networked, resilient system.
          </desc>
          <g fill="none" stroke="#c0506a" strokeWidth="1.1" strokeLinecap="round" opacity="0.9">
            <path d="M600,70 C470,48 300,28 110,42" />
            <path d="M600,70 C500,92 360,102 255,94" />
            <path d="M600,70 C565,58 520,50 470,54" />
            <path d="M600,70 C740,44 930,24 1075,36" />
            <path d="M600,70 C700,96 840,108 935,90" />
            <path d="M600,70 C640,80 675,88 700,84" />
          </g>
          <path
            d="M1075,36 C1110,33 1140,31 1170,29"
            fill="none"
            stroke="#c0506a"
            strokeWidth="0.8"
            opacity="0.5"
            strokeLinecap="round"
          />
          <g fill="#fbf7f2" stroke="#c0506a" strokeWidth="1.1">
            <circle cx="110" cy="42" r="3.2" />
            <circle cx="255" cy="94" r="2.6" />
            <circle cx="470" cy="54" r="2.2" />
            <circle cx="1075" cy="36" r="3.2" />
            <circle cx="935" cy="90" r="2.6" />
            <circle cx="700" cy="84" r="2.2" />
          </g>
          <circle cx="600" cy="70" r="5" fill="#c0506a" />
          <circle cx="600" cy="70" r="9" fill="none" stroke="#c0506a" strokeWidth="0.7" opacity="0.5" />
        </svg>
      </div>

      <p className="sub">
        Not the bounce-back kind of resilience. The kind that analyses the system,
        manages the source code, and keeps leading from the centre when the whole
        model breaks. Aly Wavish built this framework the hard way — now she
        teaches it.
      </p>
      <div className="btnrow">
        <a href="#contact" className="btn btn-primary">
          Book Aly to Speak
        </a>
        <a href="#method" className="btn btn-outline">
          Explore the Resilience Matrix
        </a>
      </div>

      <div className="wrap">
        <div className="stripband">
          <div className="col">
            <h3>1:1 Coaching</h3>
            <p>Executive &amp; leadership coaching built around real pressure, not theory.</p>
            <a href="#method">See the method ↓</a>
          </div>
          <div className="col">
            <h3>Keynote Speaking</h3>
            <p>&ldquo;The Architecture of Resilience&rdquo; — metacognitive endurance in systemic crisis.</p>
            <a href="#speaking">View topics ↓</a>
          </div>
          <div className="col">
            <h3>The re-solve Method</h3>
            <p>Aly&apos;s named framework for systemic resolution — under her own architecture of resilience.</p>
            <a href="#method">Learn more ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}
