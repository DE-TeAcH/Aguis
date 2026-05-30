import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../data/navItems";

/**
 * Small dropdown navigation menu.
 * Replaces the old fullscreen overlay. Highlights active section.
 */
export default function NavMenu({ onClose }) {
  const location = useLocation();

  // Close nav on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="navMenu" id="nav-menu">
      <ul className="navMenu__list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className={`navMenu__item ${isActive ? "active" : ""}`}>
              <Link to={item.path} onClick={onClose} className="navMenu__link">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
