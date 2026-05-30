import PortfolioContent from "../components/Portfolio/PortfolioContent";

/**
 * Portfolio page — Project showcase cards, background letter, and creative stamp.
 * Marquee straps and logo spinner are in App.jsx (persistent).
 */
export default function PortfolioPage() {
  return (
    <div className="container">
      <main>
        <div className="watch-video-circle">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,3 19,12 5,21" fill="currentColor" />
          </svg>
          <span>Watch</span>
        </div>
        <PortfolioContent />
      </main>
      <p className="creative__stamp">Trust</p>
    </div>
  );
}
