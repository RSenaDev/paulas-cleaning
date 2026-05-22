import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xaqkjywk')

  return (
    <section className="section section-bg" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Request a free quote or ask us anything.</p>

        <div className="contact-wrapper">
          {/* Contact info */}
          <div className="contact-info">
            <h3>Contact Info</h3>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p><strong>Phone / WhatsApp</strong>+1 (862) 412-6126</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <p><strong>WhatsApp</strong>+1 (862) 412-6126</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p><strong>Email</strong>paulascleaningnk@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <p><strong>Service Area</strong>New Jersey &amp; surrounding areas</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <p><strong>Hours</strong>Mon – Sat: 8 am – 6 pm</p>
            </div>
          </div>

          {/* Contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {state.succeeded && (
              <div className="success-msg">
                <i className="fas fa-check"></i> Message sent! We'll get back to you soon.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" placeholder="(555) 000-0000" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="you@email.com" required />
              <ValidationError field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label>Service</label>
              <select name="service" required>
                <option value="">Select a service...</option>
                <option>Regular Home Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move In / Move Out</option>
                <option>Office & Commercial</option>
                <option>Post-Construction</option>
                <option>Window Cleaning</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell us about your space and needs..." />
              <ValidationError field="message" errors={state.errors} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
