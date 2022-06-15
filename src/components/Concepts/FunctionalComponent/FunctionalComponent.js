import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/functionalcomponent.png";

import "./functionalcomponent.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Sara" />;
  root.render(element);`;

function FunctionalComponent() {
  return (
    <div className="wrapper">
      <h2>Functional Component</h2>
      <p>Hello, Sara</p>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
      <div>
        <Link to="/4">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/6">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FunctionalComponent;
