import { useState, useRef, useEffect, useCallback } from "react";
import { portfolioProjects } from "../../data/navItems";

/**
 * Portfolio page content section.
 * Horizontal auto-scrolling slider with drag support and click-to-open modal.
 * Background letter "P" with hover fill effect.
 */
export default function PortfolioContent() {
  const [activeProject, setActiveProject] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const hasDragged = useRef(false);
  const autoScrollRef = useRef(null);
  const autoScrollSpeed = 0.5; // px per frame

  // Auto-scroll animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const tick = () => {
      if (!isDragging.current && !activeProject) {
        slider.scrollLeft += autoScrollSpeed;

        // Loop back when reaching the end
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
          slider.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(autoScrollRef.current);
  }, [activeProject]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    scrollStartX.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
    sliderRef.current.style.userSelect = "none";
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollStartX.current - dx;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
      sliderRef.current.style.userSelect = "";
    }
  }, []);

  // Touch drag handlers
  const handleTouchStart = useCallback((e) => {
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = sliderRef.current.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollStartX.current - dx;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Card click — only open modal if user didn't drag
  const handleCardClick = (project) => {
    if (!hasDragged.current) {
      setActiveProject(project);
    }
  };

  // Close modal
  const closeModal = () => setActiveProject(null);

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("portfolio-modal-overlay")) {
      closeModal();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [activeProject]);

  return (
    <div className="content">
      <h2 className="fade-in">Portfolio</h2>
      <div className="content__container portfolio-slider-container">
        {/* Background Text */}
        <div className="bg-text portfolio-text fade-in">
          <span data-letter="P">P</span>
        </div>

        {/* Horizontal Slider */}
        <div
          className="portfolio-slider fade-in"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="portfolio-slider__track">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.title}
                className="portfolio-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(project)}
              >
                <div className="portfolio-card__image">
                  <div
                    className="portfolio-card__gradient"
                    style={{ background: project.gradient }}
                  />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__view">View Project</span>
                  </div>
                </div>
                <div className="portfolio-card__info">
                  <h3>{project.title}</h3>
                  <p>
                    <span className="portfolio-card__dot" />
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="portfolio-modal-overlay" onClick={handleOverlayClick}>
          <div className="portfolio-modal">
            <button className="portfolio-modal__close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="portfolio-modal__header">
              <div
                className="portfolio-modal__preview"
                style={{ background: activeProject.gradient }}
              />
            </div>

            <div className="portfolio-modal__body">
              <span className="portfolio-modal__category">{activeProject.category}</span>
              <h3 className="portfolio-modal__title">{activeProject.title}</h3>
              <p className="portfolio-modal__desc">{activeProject.description}</p>

              {activeProject.tech && (
                <div className="portfolio-modal__tech">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="portfolio-modal__tag">{t}</span>
                  ))}
                </div>
              )}

              <div className="portfolio-modal__actions">
                {activeProject.github && (
                  <a href={activeProject.github} className="portfolio-modal__btn" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {activeProject.website && (
                  <a href={activeProject.website} className="portfolio-modal__btn portfolio-modal__btn--primary" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
