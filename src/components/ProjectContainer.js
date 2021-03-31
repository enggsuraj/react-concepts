import React from "react";

function ProjectContainer() {
  return (
    <div className="projectContainer">
      <div className="project_item">
        <a
          href="https://covid.blogtheorem.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Covidtheorem</h3>
        </a>
      </div>
      <div className="project_item">
        <a
          href="https://innetwork.blogtheorem.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>LinkedIn Clone</h3>
        </a>
      </div>
      <div className="project_item">
        <a>
          <h3>Twitter Clone</h3>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
