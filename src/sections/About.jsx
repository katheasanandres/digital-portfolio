import React from "react";
import kathieImage from "../images/kathie.jpg";

const aboutDetails = [
  {
    label: "♡ MY NAME:",
    value: "Kathea Kim Anjie San Andres",
  },
  {
    label: "♡ BORN ON:",
    value: "October 4",
  },
  {
    label: "♡ CURRENTLY A:",
    value: "3rd-year Computer Science student",
  },
  {
    label: "♡ MY HOBBIES ARE:",
    value: "Gaming, reading, drawing, and crafting",
  },
];

function About() {
  return (
    <div className="about-section">
      <div className="about-intro">
        <div className="about-photo-frame">
          <img
            src={kathieImage}
            alt="Portrait of Kathea"
            className="about-photo"
          />
          <span className="about-photo-star" aria-hidden="true">
            ✦
          </span>
        </div>

        <div className="about-heading">
          <p className="section-intro">
            Hello! I'm Kathea, though most people just call me Kat.
            I'm a computer science student doing my best to survive
            college life while learning and growing as a developer and writer.
          </p>
        </div>
      </div>

      <div className="about-details">
        {aboutDetails.map((detail) => (
          <div className="about-detail" key={detail.label}>
            <div className="about-detail__text">
              <span className="about-detail__label">
                {detail.label}
              </span>
              <span className="about-detail__value">
                {detail.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;