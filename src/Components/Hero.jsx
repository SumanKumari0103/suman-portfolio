import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Software Developer",
    "Web Developer",
    "Java Developer",
    "React Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // =========================
  // TYPING ANIMATION
  // =========================

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // =========================
  // 3D CARD MOUSE EFFECT
  // =========================

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      ((y - rect.height / 2) / rect.height) * -12;

    const rotateY =
      ((x - rect.width / 2) / rect.width) * 12;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section className="hero" id="home">

      {/* =========================
          BACKGROUND PARTICLES
      ========================= */}

      <div className="hero-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">

        {/* Availability */}

        <div className="availability-badge">
          <span className="status-dot"></span>
          Open to Opportunities
        </div>

        <p className="hero-small-text">
          👋 Hello, I'm
        </p>

        <h1>
          Suman <span>Kumari</span>
        </h1>

        <h2>
          I'm a{" "}
          <span className="typing-text">
            {text}
          </span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          MCA graduate passionate about software development,
          web technologies, and building solutions to real-world
          problems.
        </p>

        {/* =========================
            BUTTONS
        ========================= */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View My Work
            <span className="btn-arrow">↗</span>
          </a>

          <a
            href="/Suman_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            View Resume
            <span className="btn-arrow">↗</span>
          </a>

        </div>

        {/* =========================
            SOCIAL LINKS
        ========================= */}

        <div className="social-links">

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

        {/* =========================
            HERO STATS
        ========================= */}

        <div className="hero-stats">

          <div className="hero-stat">
            <h3>4+</h3>
            <p>Projects</p>
          </div>

          <div className="hero-stat">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="hero-stat">
            <h3>MCA</h3>
            <p>Graduate</p>
          </div>

        </div>

      </div>

      {/* =========================
          HERO VISUAL
      ========================= */}

      <div className="hero-visual">

        <div className="glow-circle"></div>

        {/* 3D Profile Card */}

        <div
          className="profile-card"
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
        >

          <div className="profile-icon">
            &lt;/&gt;
          </div>

          <h3>
            Software Developer
          </h3>

          <p>
            Java • React • JavaScript
          </p>

          {/* Floating Technology Badges */}

          <div className="floating-badge badge-one">
            ☕ Java
          </div>

          <div className="floating-badge badge-two">
            ⚛ React
          </div>

          <div className="floating-badge badge-three">
            JS
          </div>

        </div>

      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <a
        href="#about"
        className="scroll-indicator"
      >
        <span>Scroll to explore</span>

        <span className="scroll-arrow">
          ↓
        </span>
      </a>

    </section>
  );
}

export default Hero;