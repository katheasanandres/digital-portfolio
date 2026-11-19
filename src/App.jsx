import React, { useState } from "react";

import SectionModal from "./components/SectionModal";
import ChocolateBox from "./components/ChocolateBox";

import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Extras from "./sections/Extras";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const sections = {
  about: {
    title: "About Me",
    content: <About />,
  },
  experience: {
    title: "Experiences",
    content: <Experiences />,
  },
  contact: {
    title: "Contact",
    content: <Contact />,
  },
  extras: {
    title: "A Few More Things",
    content: <Extras />,
  },
  projects: {
    title: "Projects",
    content: <Projects />,
  },
  skills: {
    title: "Skills",
    content: <Skills />,
  },
};

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const selectedSection = sections[activeSection];

  return (
    <>
      <main className="home-page">
        <section className="home-chocolate">
          <ChocolateBox onSelectSection={setActiveSection} />

          <p className="home-instruction">
        
          </p>
        </section>
      </main>

      {selectedSection && (
        <SectionModal
          title={selectedSection.title}
          onClose={() => setActiveSection(null)}
        >
          {selectedSection.content}
        </SectionModal>
      )}
    </>
  );
}

export default App;