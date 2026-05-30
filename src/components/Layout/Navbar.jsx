import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

/**
 * Top navigation bar with "Hire Us" CTA, logo, theme toggle, and menu toggle.
 */
export default function Navbar({ onToggleNav, onCloseNav, onHireClick, theme, onToggleTheme }) {
  return (
    <nav id="main-nav">
      <button
        className="hire-us-btn"
        type="button"
        id="hire-us-btn"
        onClick={onHireClick}
      >
        <span className="hire-us-btn__dot"></span>
        <span className="hire-us-btn__text">Hire Us</span>
        <svg
          className="hire-us-btn__arrow"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Link to="/" className="navLogo-link">
        <img
          src={theme === "light" ? "/images/logo-dark.svg" : "/images/logo.svg"}
          alt="Agius creative agency logo"
          className="navLogo"
        />
      </Link>

      <div className="navActions">
        {/* Theme Toggle Button (replaces old search icon) */}
        <button
          className="theme-toggle"
          type="button"
          id="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            /* Sun icon */
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <div className="nav-dropdown-container">
          <button
            className="navToggle"
            type="button"
            id="nav-toggle"
            onClick={onToggleNav}
          >
            <span>Menu</span>
            <div className="navIcon">
              <div className="navIcon__bar"></div>
              <div className="navIcon__bar navIcon__bar-short"></div>
            </div>
          </button>
          <NavMenu onClose={onCloseNav} />
        </div>
      </div>
    </nav>
  );
}

