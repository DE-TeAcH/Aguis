import { useState, useCallback, useEffect } from "react";

/**
 * Custom hook to manage dark/light theme toggling.
 * Persists preference in localStorage and applies
 * `data-theme` attribute on the root element.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("agius-theme");
    return saved || "dark";
  });

  // Apply theme to root element on mount and change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("agius-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
