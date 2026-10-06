import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "Java", icon: "☕", category: "Programming" },
    { name: "JavaScript", icon: "JS", category: "Programming" },
    { name: "HTML", icon: "🌐", category: "Frontend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "React", icon: "⚛", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express.js", icon: "EX", category: "Backend" },
    { name: "SQL", icon: "🗄", category: "Database" },
    { name: "MySQL", icon: "DB", category: "Database" },
    { name: "Git", icon: "🔀", category: "Tools" },
    { name: "GitHub", icon: "◉", category: "Tools" },
    { name: "VS Code", icon: "VS", category: "Tools" },
  ];

  const categories = [
    "All",
    "Programming",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <div className="skills-heading">

          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use while building projects
            and improving my software development skills.
          </p>

        </div>

        <div className="skill-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="skills-grid">

          {filteredSkills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>

              <span className="skill-arrow">↗</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;