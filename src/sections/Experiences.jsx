import React from "react";

import cssCert from "../certs/CSS.pdf";
import htmlCert from "../certs/HTML.pdf";
import pe1Cert from "../certs/PE1.pdf";
import pe2Cert from "../certs/PE2.pdf";
import resumePdf from "../certs/Resume_Kathea.pdf";
import ojtCert from "../certs/OJT_Certificate.jpg";
import guestspeaker from "../certs/guestspeaker.jpg";
import cybersec from "../certs/CYBERSEC.pdf";
import icsc from "../certs/ICSC.pdf";
import itbpm from "../certs/ITBPM.pdf";


function Experiences() {
  const pdfCertificates = [
    { title: "HTML Certification", file: htmlCert },
    { title: "CSS Certification", file: cssCert },
    { title: "Python Essentials 1 (PE1)", file: pe1Cert },
    { title: "Python Essentials 2 (PE2)", file: pe2Cert },
    { title: "Cybersecurity Fundamentals", file: cybersec },
    { title: "International Computer Science Competition", file: icsc },
    { title: "ITBPM", file: itbpm },
  ];

  const ojtCertImage = ojtCert;
  const editorialImage = guestspeaker;

  return (
    <div className="experiences-section">
      <div className="experiences-header">
        <span className="experiences-type">CURRICULUM VITAE</span>
        <h3>Experience & Credentials</h3>
    

        <div style={{ marginTop: "14px" }}>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="case-study__link-btn"
            style={{ marginTop: 0 }}
          >
            View / Download Resume (PDF) ↗
          </a>
        </div>
      </div>

      <div className="experiences-details">
        {/* 01 — OJT / WORK IMMERSION + CERTIFICATE */}
        <article>
          <h4>01 — WORK IMMERSION / OJT</h4>
          <h5>Tech Intern</h5>
          <p>
            Assisted the A+ Team with data
            management, and day-to-day operations, including digitizing and
            verifying physical records into structured spreadsheets.
          </p>

          <div
            className="case-study__screenshot-card"
            style={{ marginTop: "8px" }}
          >
            {ojtCertImage ? (
              <img
                src={ojtCertImage}
                alt="OJT / Work Immersion Certificate"
                className="case-study__img"
              />
            ) : (
              <div className="case-study__screenshot-placeholder">
                <span>[ Insert OJT / Work Immersion Certificate PNG ]</span>
              </div>
            )}
            <p className="case-study__screenshot-caption">
              Certificate of Completion — Work Immersion / OJT
            </p>
          </div>
        </article>

        {/* 02 — PDF CERTIFICATIONS */}
        <article>
          <h4>02 — TECHNICAL CERTIFICATIONS</h4>
          <h5>Verified Credentials</h5>
          <p>
            Completed foundational coursework and assessments in web
            development, cybersecurity, and programming. Click any badge below to view
            the PDF certificate:
          </p>

          <div
            className="case-study__links"
            style={{ flexWrap: "wrap", marginTop: "6px" }}
          >
            {pdfCertificates.map((cert, index) => (
              <a
                key={index}
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="case-study__link-btn"
                style={{ marginTop: 0 }}
              >
                {cert.title} ↗
              </a>
            ))}
          </div>
        </article>

        {/* 03 — CAMPUS JOURNALISM */}
        <article>
          <h4>03 — CAMPUS JOURNALISM</h4>
          <h5>Editorial Writer</h5>
          <p>
            Serve as an editorial writer for{" "}
            <em>The Forefront — Gordon College</em>. Authored published
            editorials and opinion columns, and led a guest speaker session for
            editorial writing seminar workshops for junior student journalists.
          </p>

          <div
            className="case-study__screenshot-card"
            style={{ marginTop: "8px" }}
          >
            {editorialImage ? (
              <img
                src={editorialImage}
                alt="Editorial Writing & Campus Journalism"
                className="case-study__img"
              />
            ) : (
              <div className="case-study__screenshot-placeholder">
                <span>
                  [ Insert Editorial Article / Seminar Workshop Screenshot ]
                </span>
              </div>
            )}
            <p className="case-study__screenshot-caption">
              The Forefront — Gordon College • Editorial Writing Seminar Highlight
            </p>
          </div>
        </article>
      </div>

    </div>
  );
}

export default Experiences;