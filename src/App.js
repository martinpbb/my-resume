import React from 'react';
import './App.css';
import resumeData from './data/resumeData.json';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Summary from './components/sections/Summary';
import Technologies from './components/sections/Technologies';
import Languages from './components/sections/Languages';
import Certifications from './components/sections/Certifications';
import OtherProjects from './components/sections/OtherProjects';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="name">{resumeData.name}</h1>
          <h2 className="role">{resumeData.role}</h2>
        </header>

        <div className="content">
          <div className="left-column">
            <Skills skills={resumeData.skills} />
            <Projects projects={resumeData.projects} />
            <OtherProjects otherProjects={resumeData.otherProjects} />
          </div>
          
          <div className="right-column">
            <Summary summary={resumeData.summary} />
            <Technologies technologies={resumeData.technologies} />
            <Languages languages={resumeData.languages} />
            <Education education={resumeData.education} />
            <Certifications certifications={resumeData.certifications} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
