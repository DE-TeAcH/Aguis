import { portfolioProjects } from "../../data/navItems";

/**
 * Portfolio page content section.
 * Displays project cards with gradient backgrounds (replacing original images),
 * project titles, and categories.
 * Background letter "P" with hover fill effect.
 */
export default function PortfolioContent() {
  return (
    <div className="content">
      <h2 className="fade-in">Portfolio</h2>
      <div className="content__container">
        <div className="bg-text portfolio-text fade-in">
          <span data-letter="P">P</span>
        </div>
        <div className="content__portfolio">
          <ul className="projects__list">
            {portfolioProjects.map((project) => (
              <li key={project.title} className="project__item fade-in">
                <div className="project__img">
                  <div
                    className="double__img"
                    style={{ background: project.gradient }}
                  />
                </div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
