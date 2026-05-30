import { useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Styles
import "./styles/index.css";
import "./styles/navbar.css";
import "./styles/navmenu.css";
import "./styles/preloader.css";
import "./styles/marquee.css";
import "./styles/hero.css";
import "./styles/content.css";
import "./styles/portfolio.css";
import "./styles/contact.css";

// Layout components
import Preloader from "./components/Layout/Preloader";
import Navbar from "./components/Layout/Navbar";
import Marquee from "./components/Layout/Marquee";
import HireModal from "./components/Layout/HireModal";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

// Hooks
import { usePageAnimations } from "./hooks/usePageAnimations";
import { useTheme } from "./hooks/useTheme";

/**
 * Main application component.
 * Manages preloader state, navigation toggle, hire modal, and page routing.
 * Marquee straps and logo spinner live here (not in pages)
 * so they persist across route transitions without restarting.
 */
export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Handle preloader completion
  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  // Toggle nav menu
  const handleToggleNav = useCallback(() => {
    setNavOpen((prev) => {
      const next = !prev;
      document.body.setAttribute("data-nav", next.toString());
      return next;
    });
  }, []);

  // Close nav menu
  const handleCloseNav = useCallback(() => {
    setNavOpen(false);
    document.body.setAttribute("data-nav", "false");
  }, []);

  // Hire modal handlers
  const handleOpenHire = useCallback(() => setHireOpen(true), []);
  const handleCloseHire = useCallback(() => setHireOpen(false), []);

  // Initialize page animations and scroll/swipe navigation
  usePageAnimations(preloaderDone);

  // Update document title based on route
  const pageTitles = {
    "/": "Agius - Creative Agency | Home",
    "/about": "Agius - Creative Agency | About Us",
    "/services": "Agius - Creative Agency | Services",
    "/portfolio": "Agius - Creative Agency | Portfolio",
    "/contact": "Agius - Creative Agency | Contact",
  };

  document.title = pageTitles[location.pathname] || "Agius - Creative Agency";

  return (
    <>
      {/* Preloader — only shown on initial load */}
      {!preloaderDone && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Navigation */}
      <Navbar onToggleNav={handleToggleNav} onCloseNav={handleCloseNav} onHireClick={handleOpenHire} theme={theme} onToggleTheme={toggleTheme} />

      {/* Hire Us Modal */}
      <HireModal isOpen={hireOpen} onClose={handleCloseHire} />

      {/* Persistent Logo Spinner — stays mounted across pages */}
      <div className="logo-spinner" id="persistent-spinner">
        <svg
          className="logo-spinner__text rotateZ"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="currentColor" fontSize="14" fontFamily="Poppins, sans-serif" letterSpacing="6">
            <textPath href="#circlePath" startOffset="0%">
              AGUIS TEAM • AGUIS TEAM • AGUIS TEAM •&nbsp;
            </textPath>
          </text>
        </svg>
        <img
          src={theme === "light" ? "/images/aguis-logo_vL.png" : "/images/aguis-logo_vD.png"}
          alt="Aguis Team logo"
          className="logo-spinner__logo"
        />
      </div>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Persistent Marquee Straps — stay mounted across pages */}
      <Marquee variant="dark" />
      <Marquee variant="light" />
    </>
  );
}
