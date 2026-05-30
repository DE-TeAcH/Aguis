import AboutContent from "../components/About/AboutContent";

/**
 * About page — Company description and background letter.
 * Marquee straps, logo spinner, and watch button are in App.jsx (persistent).
 */
export default function AboutPage() {
  return (
    <div className="container">
      <main>
        <div className="watch-video-circle">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,3 19,12 5,21" fill="currentColor" />
          </svg>
          <span>Watch</span>
        </div>
        <div className="banner-tags">
          <div className="tag">Maintenance</div>
          <div className="tag">Automations</div>
          <div className="tag">Development</div>
          <div className="tag">UI/UX</div>
          <div className="tag">Branding</div>
          <div className="tag">Hosting</div>
        </div>
        <AboutContent />
      </main>
    </div>
  );
}
