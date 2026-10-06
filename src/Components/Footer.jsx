function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Suman<span>.dev</span></h2>
          <p>
            MCA Graduate & Software Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/SumanKumari0103"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sumankumari0103/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Suman Kumari. All rights reserved.</p>
        <p>Built with React & JavaScript</p>
      </div>

    </footer>
  );
}

export default Footer;