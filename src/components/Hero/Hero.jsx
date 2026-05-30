/**
 * Hero section for the home page.
 * Features the large banner text, background "A" letter,
 * watch video circle, and side tags.
 * Logo spinner is in App.jsx (persistent across pages).
 */
export default function Hero() {
  return (
    <main>
      <div className="bg">A</div>

      {/* Hero Banner Text */}
      <h2 className="banner" id="hero-banner">
        Brand. <span>Design</span>. <span>Build</span>. From idea to
        <span> Infrastructure</span>
      </h2>

      {/* Watch Video */}
      <div className="watch-video-circle">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon points="5,3 19,12 5,21" />
        </svg>
        <span>Watch</span>
      </div>
    </main>
  );
}
