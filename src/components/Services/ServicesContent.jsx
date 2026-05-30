import { useState } from "react";
import { servicesData } from "../../data/navItems";

/**
 * Services page content section.
 * Displays interactive floating clouds that expand into a detailed card with a sidebar.
 */
export default function ServicesContent() {
  const [activeService, setActiveService] = useState(null);

  const handleCloudClick = (title) => {
    setActiveService(title);
  };

  const closeActiveCard = () => {
    setActiveService(null);
  };

  const activeData = servicesData.find((s) => s.title === activeService);
  const inactiveData = servicesData.filter((s) => s.title !== activeService);

  return (
    <div className="content">
      <h2 className="fade-in">Services</h2>
      <div className="content__container services-interactive-container">
        {/* Background Text */}
        <div className="bg-text fade-in" style={{ opacity: activeService ? 0.2 : 1 }}>
          <span data-letter="S">S</span>
        </div>

        {/* View 1: Floating Clouds */}
        {!activeService && (
          <div className="services__clouds fade-in">
            {servicesData.map((service, index) => (
              <button
                key={service.title}
                className={`service-cloud cloud-${index + 1}`}
                onClick={() => handleCloudClick(service.title)}
              >
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        )}

        {/* View 2: Active Card + Sidebar List */}
        {activeService && (
          <div className="services__active-view fade-in">
            {/* Left: Active Glassy Card */}
            <div className="service-active-card">
              <button className="service-active-card__close" onClick={closeActiveCard}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="service-active-card__content">
                <h3>{activeData.title}</h3>
                <p>{activeData.description}</p>
                <a href={activeData.link} className="service-active-card__btn">
                  {activeData.linkText}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Stack of other services */}
            <div className="service-sidebar">
              {inactiveData.map((service) => (
                <button
                  key={service.title}
                  className="service-sidebar__item"
                  onClick={() => handleCloudClick(service.title)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
