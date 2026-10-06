function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something <span>together.</span>
          </h2>

          <p>
            I'm currently looking for opportunities to start my career
            and grow as a software developer.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <a
              href="mailto:sinhasuman0305@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">✉</div>
              <div>
                <span>Email</span>
                <h3>sinhasuman0305@gmail.com</h3>
              </div>
            </a>

            <a
              href="tel:9334646156"
              className="contact-card"
            >
              <div className="contact-icon">☎</div>
              <div>
                <span>Phone</span>
                <h3>9334646156</h3>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sumankumari0103/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>
              <div>
                <span>LinkedIn</span>
                <h3>Connect with me</h3>
              </div>
            </a>

            <a
              href="https://github.com/SumanKumari0103"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">◉</div>
              <div>
                <span>GitHub</span>
                <h3>View my projects</h3>
              </div>
            </a>

          </div>

          <div className="contact-message">
            <h3>Have an opportunity?</h3>

            <p>
              Feel free to reach out. I'm open to discussing
              entry-level software development opportunities,
              internships, and projects.
            </p>

            <a
              href="mailto:sinhasuman0305@gmail.com"
              className="contact-btn"
            >
              Send Me an Email ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;