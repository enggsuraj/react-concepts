import React from "react";
import "./listandkeys.css";

import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function ListAndkeys() {
    const numbers = [1, 2, 3, 4, 5];
  
    return (
      <div>
        <div className="listAndKey">
          {numbers.map((number) => (
            <li key={number.toString()}>{number}</li>
          ))}
        </div>
      </div>
    );
  }`;

function ListAndkeys() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>List & Keys</h2>
      <div className="listAndKey">
        {numbers.map((number) => (
          <li key={number.toString()}>{number}</li>
        ))}
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
      <div className="navigation">
        <Link to="/conditionalrendering">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/useeffect">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ListAndkeys;
