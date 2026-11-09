
import React from "react";
import ChocolatePiece from "./ChocolatePiece";

const chocolateSections = [
  { id: "about", label: "About Me", shape: "round" },
  { id: "skills", label: "Skills", shape: "flower" },
  { id: "projects", label: "Projects", shape: "square" },
  { id: "case-study", label: "Case Study", shape: "heart" },
  { id: "contact", label: "Contact", shape: "round" },
  { id: "extras", label: "Extras", shape: "flower" },
];

function ChocolateBox({ onSelectSection }) {
  return (
    <div className="chocolate-box-scene">
      <div className="chocolate-box">

        {/* Box lid */}
        <div className="chocolate-box__lid">
          <div className="chocolate-box__lid-design">
            <span className="chocolate-box__ornament">・ ✦ʚ ♡ ɞ✦  ・</span>
            <span className="chocolate-box__brand">PORTFOLIO</span>
            <span className="chocolate-box__subtitle">
              OF KATHEA KIM ANJIE SAN ANDRES
            </span>
            <span className="chocolate-box__ornament">・ ✦ʚ ♡ ɞ✦  ・</span>
          </div>
        </div>

        {/* Chocolate pieces */}
        <div className="chocolate-box__pieces">
          {chocolateSections.map((section, index) => (
            <div className="chocolate-well" key={section.id}>
              <ChocolatePiece
                label={section.label}
                shape={section.shape}
                index={index}
                onClick={() => onSelectSection(section.id)}
              />
            </div>
          ))}
        </div>

        {/* Box base */}
        <div className="chocolate-box__base" />

      </div>
    </div>
  );
}

export default ChocolateBox;
