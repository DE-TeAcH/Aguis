/**
 * Contact page — glassmorphic cards with contact form and social media links.
 * Cards sit above the marquee bars layer.
 */
export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Card: Contact Form */}
        <div className="contact-card contact-card--form">
          <div className="contact-card__header">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Fill out the form and we'll reach out.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="John Doe"
                  autoComplete="off"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="john@example.com"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                placeholder="Project inquiry"
                autoComplete="off"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit" className="contact-form__submit">
              Send Message
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Card: Info + Social Media */}
        <div className="contact-card contact-card--info">
          <div className="contact-info__block">
            <h3>Visit Us</h3>
            <p>
              Aguis Creative Agency
              <br />
              Friedrichstraße 123
              <br />
              10117 Berlin, Germany
            </p>
          </div>

          <div className="contact-info__block">
            <h3>Email Us</h3>
            <p>hello@aguis.team</p>
          </div>

          <div className="contact-info__block">
            <h3>Call Us</h3>
            <p>+49 30 1234 5678</p>
          </div>

          <div className="contact-info__block">
            <h3>Follow Us</h3>
            <div className="contact-socials">
              {/* Facebook */}
              <a
                href="#"
                className="contact-social__link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="contact-social__link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="#"
                className="contact-social__link"
                aria-label="Dribbble"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.36c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-2.07-1.84-4.775-2.96-7.795-2.96-.47 0-.938.034-1.4.098zm10.083 3.555c-.217.29-1.94 2.497-5.737 4.04.23.467.443.94.64 1.42.07.17.14.335.204.5 3.396-.427 6.77.26 7.106.33-.02-2.42-.88-4.64-2.21-6.29z" />
                </svg>
              </a>

              {/* Behance */}
              <a
                href="#"
                className="contact-social__link"
                aria-label="Behance"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.3.242-2.02.242H0v-14.7h6.938zM6.33 10.66c.56 0 1.03-.14 1.39-.43.37-.3.55-.73.55-1.29 0-.32-.06-.59-.17-.8-.12-.21-.28-.39-.48-.52-.2-.14-.43-.24-.69-.3-.27-.06-.56-.09-.87-.09H3.06v3.44h3.27zm.23 5.41c.34 0 .66-.04.96-.12.3-.08.57-.21.8-.39.23-.18.41-.42.55-.71.13-.29.2-.65.2-1.09 0-.85-.23-1.47-.7-1.86-.46-.39-1.07-.59-1.83-.59H3.06v4.75h3.5zM21.37 17.12c-.53.54-1.37.81-2.5.81-.79 0-1.45-.2-1.97-.6-.53-.4-.84-.96-.94-1.69h7.06c.05-.53.04-1.09-.04-1.67-.08-.58-.25-1.14-.51-1.66-.26-.53-.62-.99-1.08-1.38-.47-.39-1.06-.7-1.77-.91-.72-.21-1.55-.32-2.5-.32-1.06 0-1.99.17-2.77.5-.78.34-1.43.79-1.95 1.35-.52.56-.91 1.2-1.18 1.94-.26.74-.4 1.51-.4 2.31 0 .84.14 1.63.42 2.36.28.73.68 1.37 1.2 1.9.52.54 1.16.96 1.92 1.27.76.31 1.62.47 2.58.47 1.28 0 2.37-.29 3.27-.86.9-.57 1.55-1.49 1.97-2.76h-2.82c-.09.28-.35.56-.78.83zm-4.36-6.23c.64 0 1.18.17 1.62.5.44.33.7.78.8 1.33H16.4c.12-.56.41-1 .87-1.33.46-.33.99-.5 1.59-.5h.15zM15.3 4.2h5.77v1.44H15.3V4.2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="contact-social__link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-info__cta">
            <p>Ready to start your next project?</p>
            <a href="#" className="contact-info__btn">
              Let's Talk
              <svg
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
