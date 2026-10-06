function Education() {
  const education = [
    {
      year: "2024 – 2026",
      degree: "Master of Computer Applications",
      college: "Galgotias University",
      location: "Greater Noida",
    },
    {
      year: "2021 – 2024",
      degree: "Bachelor of Computer Applications",
      college: "Birla Institute of Technology Mesra",
      location: "Ranchi",
    },
    {
      year: "2021",
      degree: "Intermediate (12th)",
      college: "Ursuline Intermediate College",
      location: "Ranchi",
    },
    {
      year: "2019",
      degree: "High School (10th)",
      college: "S.S Doranda Girls High School",
      location: "Ranchi",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="education-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic <span>journey.</span>
          </h2>

          <p>
            My educational background and academic journey in computer
            applications and technology.
          </p>
        </div>

        <div className="education-timeline">

          {education.map((item, index) => (
            <div className="education-item" key={index}>

              <div className="education-dot"></div>

              <div className="education-content">
                <span className="education-year">
                  {item.year}
                </span>

                <h3>{item.degree}</h3>

                <p>{item.college}</p>

                <span className="education-location">
                  📍 {item.location}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;