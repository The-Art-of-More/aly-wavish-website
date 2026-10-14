export default function Nav() {
  return (
    <header>
      <div className="navbar">
        <div className="menu-label">MENU ☰</div>
        <a href="#" className="wordmark-link" aria-label="Aly Wavish — home">
          <img src="/brand/aw-wordmark-black.webp" alt="Aly Wavish" className="wordmark-logo" />
        </a>
        <nav>
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
        </nav>
        <a href="#contact" className="cta">
          Work With Aly
        </a>
      </div>
    </header>
  );
}
