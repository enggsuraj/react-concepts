import React, { useState } from "react";
import Img from "../../../assets/usestate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function UseState() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <div className="props_box">
          <button onClick={() => setCount(count + 1)}>
            +
          </button>
          <p>
            {count}
          </p>
          <button onClick={() => setCount(count - 1)}>
            -
          </button>
        </div>
    );
  }`;

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <h2>UseState Hook</h2>
      <p>
        😀 What is a Hook? A Hook is a special function that lets you “hook
        into” React features. For example, useState is a Hook that lets you add
        React state to function components.💛
      </p>
      <p>
        The React useState Hook allows us to track state in a function
        component. State generally refers to data or properties that need to be
        tracking in an application.
      </p>
      <div className="props_box">
        <button onClick={() => setCount(count + 1)}>+</button>
        &nbsp; &nbsp;
        <p>{count}</p>
        &nbsp; &nbsp;
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
      <div className="navigation">
        <Link to="/functionalcomponents">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/form">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default UseState;
