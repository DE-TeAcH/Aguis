/**
 * "Hire Us" modal overlay.
 * Shows a glassmorphic contact form with name, email, subject, and message fields.
 * UI-only — not functional.
 */
export default function HireModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="hire-modal-overlay" onClick={onClose}>
      <div className="hire-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="hire-modal__close" onClick={onClose} type="button">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="hire-modal__header">
          <h2>Let's Work Together</h2>
          <p>Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <form className="hire-modal__form" onSubmit={(e) => e.preventDefault()}>
          <div className="hire-modal__row">
            <div className="hire-modal__field">
              <label htmlFor="hire-name">Your Name</label>
              <input type="text" id="hire-name" placeholder="John Doe" autoComplete="off" />
            </div>
            <div className="hire-modal__field">
              <label htmlFor="hire-email">Email Address</label>
              <input type="email" id="hire-email" placeholder="john@example.com" autoComplete="off" />
            </div>
          </div>

          <div className="hire-modal__field">
            <label htmlFor="hire-subject">Subject</label>
            <input type="text" id="hire-subject" placeholder="Project inquiry" autoComplete="off" />
          </div>

          <div className="hire-modal__field">
            <label htmlFor="hire-message">Message</label>
            <textarea id="hire-message" rows="4" placeholder="Tell us about your project..."></textarea>
          </div>

          <button type="submit" className="hire-modal__submit">
            Send Message
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
