
import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      skills: ["Python", "C", "JavaScript", "SQL", "Rust", "PHP"],
    },
    {
      title: "WEB DEVELOPMENT",
      skills: ["HTML", "CSS", "React"],
    },
    {
      title: "TOOLS & SOFTWARE",
      skills: ["VS Code", "GitHub", "Figma", "Adobe Photoshop", "Adobe Illustrator"],
    },
  ];

  return (
    <div className="skills-section">
      <p className="section-intro">
        A collection of tools and technologies I've worked with
        throughout my learning journey.
      </p>

      <div className="skills-categories">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="skill-category__title">
              {category.title}
            </h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
