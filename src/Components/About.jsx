function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into <span>digital experiences.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I'm Suman Kumari, an MCA graduate with a strong foundation
              in Java, web development, SQL, and core computer science concepts.
            </p>

            <p>
              I enjoy building applications, exploring new technologies,
              and solving real-world problems through programming. I have
              worked on projects involving AI, machine learning, web
              development, databases, and REST APIs.
            </p>

            <p>
              I'm looking for an opportunity where I can contribute my
              technical skills, learn from experienced professionals,
              and grow as a software developer.
            </p>

            <a href="#contact" className="about-btn">
              Let's Connect →
            </a>

          </div>

          <div className="about-cards">

            <div className="info-card">
              <span>🎓</span>

              <div>
                <h3>MCA Graduate</h3>
                <p>Galgotias University</p>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>

              <div>
                <h3>4 Projects</h3>
                <p>AI, Web & Software Development</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>

              <div>
                <h3>Always Learning</h3>
                <p>Exploring new technologies</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;