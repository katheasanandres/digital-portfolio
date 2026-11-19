import React, { useState } from "react";

import landingpageImg from "../images/landingpage.png";
import signinpageImg from "../images/signinpage.png";
import termsandconditionsImg from "../images/termsandconditions.png";
import homepageImg from "../images/homepage.png";
import founditemImg from "../images/founditem.png";
import lostitemImg from "../images/lostitem.png";
import bookmarksImg from "../images/bookmarks.png";
import notifsImg from "../images/notifs.png";
import pendingImg from "../images/pending.png";
import reviewImg from "../images/review.png";
import historyImg from "../images/history.png";
import profileImg from "../images/profile.png";

function Projects({ onProjectSelect }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Incirate",
      type: "AI-POWERED PWA FOR CROWDSOURCED NOCTURNAL PUBLIC SAFETY",
      description:
        "An AI-powered Progressive Web Application designed to bridge the nocturnal urban safety data gap through anonymous, real-time crowdsourcing and interactive geospatial heatmaps.",
      technologies: [
        "React",
        "Vite",
        "Python",
        "Flask",
        "Firebase",
        "Leaflet.js",
        "Tailwind CSS",
      ],
      caseStudy: {
        role: "Lead Full-Stack & AI Systems Developer",
        timeline: "March - May 2026",
        overview:
          "Formerly named AfterHours, Incirate is a mobile-friendly web app designed to map street-level safety risks and hazards after dark, where traditional reporting usually falls short. It lets people anonymously share real-time reports about issues like poor lighting or harassment, using a built-in text filter to sort urgency accurately. The platform turns these crowdsourced notes into live, easy-to-read heatmaps, giving everyday commuters, students, and local offices clear visibility into neighborhood safety.",
        problem:
          "Traditional urban safety frameworks are built for daytime operations and rely on reactive, bureaucratic reporting mechanisms that discourage citizens from reporting low-level micro-hazards (such as broken street lighting, isolated areas, or street harassment). This leaves city planners and campus security functionally blind to nocturnal safety risks, disproportionately impacting women, students, and night-shift commuters.",
        targetUsers:
          "Primary users include women, evening university students, and night-shift workers requiring real-time safety visibility during commutes. Secondary target users include Local Government Units (LGUs), barangay councils, and campus security administrators who require structured spatial data for evidence-based interventions.",
        process:
          "The development followed an agile, iterative engineering cycle. Phase 1 focused on production hardening the core PWA frontend (React/Vite) and configuring secure Firebase authentication and Firestore rules. Phase 2 involved building and calibrating the Python Flask backend and NLP triage pipeline. Phase 3 centered on pilot deployment preparation, including accessibility audits and UI/UX optimization for low-end mobile devices.",
        designs:
          "Designed with a nocturnal-first, high-contrast interface to reduce eye strain in low-light conditions. The geospatial interface integrates Leaflet.js to render real-time, color-coded urgency heatmaps derived from user submissions without requiring app store installation.",
        solution:
          "Engineered a frictionless, installation-free Progressive Web Application featuring an automated NLP classification pipeline equipped with a proprietary Sarcasm Override Filter. This mechanism prevents false negatives by recognizing ironic or sarcastic phrasing (e.g., 'Oh great, another pitch-black street') and accurately scoring urgency into Low, Moderate, or High tiers alongside confidence metrics.",
        highlights: [
          "Zero-friction PWA architecture accessible instantly via browser or QR code without app store hurdles",
          "Custom NLP classification pipeline featuring a Sarcasm Override Filter and confidence scoring",
          "Dynamic Leaflet.js geospatial heatmaps visualizing spatiotemporal incident clusters",
          "Strict anonymity-by-design data model ensuring compliance with the Data Privacy Act and NPC guidelines",
          "Institutional data-export infrastructure tailored for LGU and campus security decision-making",
        ],
        lessonsLearned:
          "Building Incirate made me realize how difficult it actually is in developing a web application that balances user privacy with data utility. This experience especially taught me the importance of being very careful with user data. Moreover, this was my first solo project that I was somewhat okay with releasing to the public (although it's not polished yet and there's definitely a lot of room for improvement).",
        links: {
          github: "https://github.com/katheasanandres/Incirate",
          live: "https://afterhours-peach.vercel.app",
        },
      },
    },
    {
      name: "CEASFind",
      type: "CAMPUS (CEAS DEPARTMENT) LOST-AND-FOUND MANAGEMENT PORTAL",
      description:
        "A centralized web-based lost-and-found portal built for the College of Education, Arts, and Sciences (CEAS) in Gordon College featuring school email authentication, Secret Detail claim verification, and automated SMTP notifications.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      caseStudy: {
        role: "Team Lead & Backend Developer (Group mk²)",
        timeline: "January - November 2026",
        overview:
          "CEASFind is a dedicated lost-and-found management system developed in collaboration with the CEAS Student Council at Gordon College. Engineered as part of our Software Engineering 1 and 2 coursework with my group mk², the platform replaces fragmented social media posts with an organized, verifiable workflow for logging, searching, and claiming misplaced belongings across the department.",
        problem:
          "Previously, lost-and-found reports within the CEAS department were scattered across informal Facebook groups, class chats, and physical bulletin boards. This decentralized setup made it difficult for students to track recovered items, exposed high-value belongings to fraudulent claims due to lack of ownership verification, and created administrative bottlenecks for student council officers.",
        targetUsers:
          "Primary users are CEAS students and faculty members reporting misplaced or recovered personal items on campus. Administrative users include CEAS Student Council officers and their faculty adviser, who oversee item moderation, verify ownership claims, and manage official turnover logs.",
        process:
          "Agile development was used to progress through phases such as, requirements elicitation and initial faculty evaluation to beneficiary presentation with the CEAS Student Council. Testing focused on hardening authentication boundaries, refining claim validation logic, and adapting administrative workflows to match student council operations.",
        designs:
          "Designed with a clean, accessible dashboard interface tailored for rapid item filtering by category, location, and date found. Public item listings intentionally conceal sensitive identifiers while displaying essential visual cues.",
        solution:
          "Delivered a full-stack web portal restricted to verified institutional email accounts, paired with a Secret Detail verification mechanism requiring claimants to provide hidden item-specific proof before approval. Integrated automated SMTP email alerts keep finders, claimants, and student council moderators updated at every stage of the recovery lifecycle.",
        highlights: [
          "Institutional school email authentication restricting platform access to verified campus members",
          "Secret Detail claim verification workflow requiring hidden proof of ownership before item release",
          "Automated SMTP email notifications for submission confirmations, claim reviews, and status updates",
          "Role-based administrative dashboard tailored for CEAS Student Council moderation and turnover tracking",
          "Categorized search and filtering interface streamlining item discovery across campus locations",
        ],
        lessonsLearned:
          "Transitioning CEASFind from an initial faculty-assessed prototype to an official CEAS Student Council deployment highlighted the importance of stakeholder adaptability in software engineering. Aligning technical access controls and moderation workflows with real student governance taught me how to translate organizational policies into practical backend logic.",
        privacyNotice:
          "Note: Live demo and source code links are not available for public access as this project is deployed for private institutional use within the college.",
        screenshots: [
          {
            caption: "Landing Page",
            src: landingpageImg,
          },
          {
            caption: "Institutional Sign-In Page",
            src: signinpageImg,
          },
          {
            caption: "Terms and Conditions",
            src: termsandconditionsImg,
          },
          {
            caption: "Main Dashboard & Item Feed",
            src: homepageImg,
          },
          {
            caption: "Report Found Item Form",
            src: founditemImg,
          },
          {
            caption: "Report Lost Item Form",
            src: lostitemImg,
          },
          {
            caption: "Saved Bookmarks",
            src: bookmarksImg,
          },
          {
            caption: "Automated Notifications",
            src: notifsImg,
          },
          {
            caption: "Pending Claims & Submissions",
            src: pendingImg,
          },
          {
            caption: "Claim Review & Verification",
            src: reviewImg,
          },
          {
            caption: "Claim & Turnover History",
            src: historyImg,
          },
          {
            caption: "User Profile",
            src: profileImg,
          },
        ],
      },
    },
    {
      name: "Adaptive Priority Queue",
      type: "ALGORITHM IMPLEMENTATION",
      description:
        "A high-performance, memory-safe adaptive priority queue engine built in Rust with an automated Python benchmarking test controller.",
      technologies: ["Rust", "Python"],
      caseStudy: {
        role: "Team Lead and Developer",
        timeline: "August - November 2026",
        overview:
          "Engineered and evaluated a custom non-blocking adaptive priority queue for web application notification routing to eliminate message starvation under heavy loads.",
        problem:
          "Standard First-In, First-Out (FIFO) queues delay urgent alerts like OTPs during traffic spikes, while Static Priority Queues (SPQ) cause severe low-priority task starvation.",
        solution:
          "Implemented an adaptive priority queue structure capable of dynamically adjusting element priorities efficiently.",
        highlights: [
          "Achieved bounded sub-millisecond P99 tail latencies (0.747–0.957 ms) across Normal, Gradual, and Sudden Spike traffic profiles",
          "Maintained throughput within 0.03% of baseline queues with near-zero hardware overhead (0.152%–0.616% CPU load, ~10.60 MB RSS)",
          "Designed an open-source automated stress-testing controller in Python and Rust for reproducible concurrent data structure evaluation",
        ],
        privacyNotice:
          "Note: Source code repository and research paper cannot be shared publicly until January 2027 as the work has not yet been presented at a research forum or published.",
        links: {
          github: "",
          live: "",
        },
      },
    },
  ];

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    if (onProjectSelect) {
      onProjectSelect(project.name);
    }
  };

  const handleBackToList = () => {
    setSelectedProject(null);
    if (onProjectSelect) {
      onProjectSelect(null);
    }
  };

  // CASE STUDY VIEW
  if (selectedProject) {
    const { name, type, technologies, caseStudy } = selectedProject;

    return (
      <div className="case-study">
        <button
          type="button"
          className="case-study__back"
          onClick={handleBackToList}
        >
          ← Back to Projects
        </button>

        <header className="case-study__header">
          <p className="project-type">{type}</p>
          <h2>{name}</h2>

          <div className="case-study__meta">
            <span>
              <strong>Role:</strong> {caseStudy.role}
            </span>
            <span>
              <strong>Timeline:</strong> {caseStudy.timeline}
            </span>
          </div>

          <div className="project-technologies">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </header>

        <div className="case-study__body">
          <section className="case-study__block">
            <h4>Overview</h4>
            <p>{caseStudy.overview}</p>
          </section>

          <section className="case-study__block">
            <h4>The Problem</h4>
            <p>{caseStudy.problem}</p>
          </section>

          {caseStudy.targetUsers && (
            <section className="case-study__block">
              <h4>Target Users</h4>
              <p>{caseStudy.targetUsers}</p>
            </section>
          )}

          {caseStudy.process && (
            <section className="case-study__block">
              <h4>Process & Development</h4>
              <p>{caseStudy.process}</p>
            </section>
          )}

          {caseStudy.designs && (
            <section className="case-study__block">
              <h4>Designs & Architecture</h4>
              <p>{caseStudy.designs}</p>
            </section>
          )}

          <section className="case-study__block">
            <h4>Final Solution & Results</h4>
            <p>{caseStudy.solution}</p>
          </section>

          <section className="case-study__block">
            <h4>Key Highlights</h4>
            <ul>
              {caseStudy.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {caseStudy.lessonsLearned && (
            <section className="case-study__block">
              <h4>Lessons Learned</h4>
              <p>{caseStudy.lessonsLearned}</p>
            </section>
          )}

          {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
            <section className="case-study__block">
              <h4>Project Screenshots</h4>
              <div className="case-study__screenshots">
                {caseStudy.screenshots.map((shot, idx) => (
                  <div className="case-study__screenshot-card" key={idx}>
                    {shot.src ? (
                      <img src={shot.src} alt={shot.caption} className="case-study__img" />
                    ) : (
                      <div className="case-study__screenshot-placeholder">
                        <span>[ Insert Screenshot: {shot.caption} ]</span>
                      </div>
                    )}
                    <p className="case-study__screenshot-caption">{shot.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {caseStudy.privacyNotice && (
            <section className="case-study__block">
              <p className="case-study__privacy-notice" style={{ fontSize: "13px", fontStyle: "italic", color: "#a08572", marginTop: "1rem" }}>
                {caseStudy.privacyNotice}
              </p>
            </section>
          )}

          {caseStudy.links && (caseStudy.links.github || caseStudy.links.live) && (
            <div className="case-study__links">
              {caseStudy.links.github && (
                <a
                  href={caseStudy.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="case-study__link-btn"
                >
                  View Source Code ↗
                </a>
              )}
              {caseStudy.links.live && (
                <a
                  href={caseStudy.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="case-study__link-btn"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="projects-section">
      <p className="section-intro">
        A few things I've built (that I'm somewhat proud of) while learning,
        experimenting, and trying to improve my skills. Click "Read Case Study"
        on any project to learn more.
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
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button
                type="button"
                className="project-cta-btn"
                onClick={() => handleSelectProject(project)}
              >
                Read Case Study →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

Projects.defaultProps = {
  onProjectSelect: null,
};

export default Projects;