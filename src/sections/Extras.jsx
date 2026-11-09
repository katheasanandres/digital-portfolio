
import React from "react";

function Extras() {
  const interests = [
    "Gaming",
    "Reading",
    "Drawing",
    "Crafting",
  ];

  return (
    <div className="extras-section">
      <p className="section-intro">
        Some of the things I enjoy outside of coding and college.
      </p>

      <div className="extras-category">
        <h3>♡ My Interests</h3>

        <div className="extras-list">
          {interests.map((interest) => (
            <span className="extras-item" key={interest}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Extras;
