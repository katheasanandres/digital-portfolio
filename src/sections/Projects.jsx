
import React from "react";

function Projects() {
  const projects = [
    {
      name: "Incirate",
      type: "A PWA FOR REPORTING AND TRACKING INCIDENTS",
      description:
        "A progressive web application for reporting and tracking incidents that shows on a live heatmap.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      name: "CEASFind",
      type: "LOST AND FOUND WEBSITE",
      description:
        "A website for reporting and finding lost items with an item AI-detection feature.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      name: "Adaptive Priority Queue",
      type: "ALGORITHM IMPLEMENTATION",
      description:
        "An implementation of an adaptive priority queue algorithm.",
      technologies: ["Rust", "Python"],
    },
  ];

  return (
    <div className="projects-section">
      <p className="section-intro">
        A few things I've built (that im somewhat proud of) while learning, experimenting,
        and trying to improve my skills.
      </p>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-item" key={project.name}>
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="project-info">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
