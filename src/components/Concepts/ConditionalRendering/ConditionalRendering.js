import React, { useState } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `function ConditionalRendering() {
    const [isToggle, setisToggle] = useState(true);
  
    const handleClick = () => {
      setisToggle(!isToggle);
    };
  
    return (
      <div>
        <div>{isToggle ? <h2>😃</h2> : <h2>😄</h2>}</div>
        <button onClick={handleClick}>Toggle</button>
      </div>
    );
  }`;

function ConditionalRendering() {
  const [isToggle, setisToggle] = useState(true);

  const handleClick = () => {
    setisToggle(!isToggle);
  };

  return (
    <div>
      <h2>Conditional Rendering</h2>
      <div>{isToggle ? <h2>😃</h2> : <h2>😡</h2>}</div>
      <button onClick={handleClick}>Mood</button>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
      <div className="navigation">
        <Link to="/8">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/10">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ConditionalRendering;
