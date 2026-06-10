/**
 * About page content section.
 * Large background letter "A" with hover fill effect,
 * heading, description, and contact CTA.
 */
export default function AboutContent() {
  return (
    <div className="content">
      <h2 className="fade-in">About us</h2>
      <div className="content__container">
        <div className="bg-text fade-in">
          <span data-letter="A">A</span>
        </div>
        <div className="content__about">
          <h3 className="fade-in">We are the Agius team</h3>
          <p className="fade-in">
            Agius is a leading design, branding, &amp; software development agency based <br></br>
            online. We help clients bring their ideas to life, by design, branding, web & app <br></br>
            development, animation, and other related services.
          </p>
          <a href="#" className="opacity-in">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
