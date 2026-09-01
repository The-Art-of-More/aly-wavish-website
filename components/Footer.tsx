export default function Footer() {
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
            <h5>Contact</h5>
            <ul>
              <li>hello@alywavish.com</li>
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
