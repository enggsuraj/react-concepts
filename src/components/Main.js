import React from "react";

import Footer from "./Footer";
import Heading from "./Heading";
import ConceptContainer from "./ConceptContainer";
import ProjectContainer from "./ProjectContainer";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <Heading
          title="React Concepts in one frame"
          para="Basic concepts in each tiles with other react projects in another tiles."
        />
        <ConceptContainer />
        <Heading
          title="React Projects"
          para="Some demo projects using all the knowledge and lessons."
        />
        <ProjectContainer />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
