function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI-Powered Interview Assistant",
      description:
        "An AI-based interview simulation platform that conducts technical and HR interviews, evaluates responses, and provides instant feedback and scoring.",
      tech: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "Gemini API",
        "REST API",
      ],
      github:
        "https://github.com/SumanKumari0103/AI-Powered-Interview",
    },

    {
      number: "02",
      title: "Student Management System",
      description:
        "A console-based Student Management System built with Core Java and JDBC for managing student records using CRUD operations and MySQL.",
      tech: [
        "Java",
        "JDBC",
        "MySQL",
        "VS Code",
      ],
      github:
        "https://github.com/SumanKumari0103/student-management-system",
    },

    {
      number: "03",
      title: "AI Resume Analyzer",
      description:
        "An AI-powered web application that analyzes resumes, predicts suitable job roles, calculates ATS scores, detects missing skills, and generates career recommendations.",
      tech: [
        "Python",
        "Flask",
        "Machine Learning",
        "Scikit-learn",
        "NLP",
      ],
      github:
        "https://github.com/SumanKumari0103/ai-resume-analyzer",
    },

    {
      number: "04",
      title: "Agriculture Portal",
      description:
        "A full-stack agriculture platform providing crop and fertilizer recommendations, rainfall prediction, and yield prediction using machine learning.",
      tech: [
        "Python",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "Machine Learning",
      ],
      github:
        "https://github.com/SumanKumari0103",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        <div className="projects-heading">

          <p className="section-label">MY WORK</p>

          <h2>
            Projects I've <span>built.</span>
          </h2>

          <p>
            A selection of projects I've developed while exploring
            software development, AI, web technologies, and databases.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>

              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">

                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-view"
              >
                View on GitHub <span>↗</span>
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;