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
          title="🔯 React Projects 🔯"
          para="Demo projects using all the knowledge and lessons."
        />
        <ProjectContainer />
        <Heading
          title="React-In-One"
          para="Basic concepts in each tiles with other react projects in another tiles."
        />
        <ConceptContainer />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
