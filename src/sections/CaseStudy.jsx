
import React from "react";

function CaseStudy() {
  return (
    <div className="case-study-section">

      <div className="case-study-header">
        <span className="case-study-type">FEATURED CASE STUDY</span>
        <h3>CEASFind</h3>
        <p>A web application for reporting and finding lost items.</p>
      </div>

      <div className="case-study-details">
        <article>
          <h4>01 — THE PROBLEM</h4>
          <p>
            Keeping track of different tasks can become confusing,
            especially when everything is written in different places.
          </p>
        </article>

        <article>
          <h4>02 — THE SOLUTION</h4>
          <p>
            TidyToad provides a centralized space where users can
            organize tasks into folders and monitor their progress.
          </p>
        </article>

        <article>
          <h4>03 — THE RESULT</h4>
          <p>
            A simple task management interface with ongoing, missed,
            and completed task statuses.
          </p>
        </article>
      </div>

      <p className="case-study-note">
        Project details can be expanded with screenshots and
        implementation details later.
      </p>
    </div>
  );
}

export default CaseStudy;
