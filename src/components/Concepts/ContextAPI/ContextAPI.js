import React from "react";
import { Link } from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

import ColorState from "./ColorState";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `import React, { createContext } from "react";
const UserContext = createContext();`;

const codeString_2 = `import React from "react";
import { ColorContext } from "./ColorContext";

function ColorState(props) {
  const color = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
  };

  const name = "suraj";
  return (
    <ColorContext.Provider value={{ color, name }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorState;
`;

const codeString_3 = `import React, { useContext } from "react";
import ComB from "./ComB";
import { ColorContext } from "./ColorContext";

function ComA() {
  const c = useContext(ColorContext);
  return (
    <div style={{ backgroundColor: c.color.red }}>
      <p>This is ComA</p>
      <ComB />
    </div>
  );
}

export default ComA;`;

function ContextAPI() {
  return (
    <div className="wrapper">
      {/****************** WORKING ******************/}

      <h2>Context API</h2>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux.
      </p>
      <div>
        <Link to="/errorboundaries">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <h2>How to use Context API?</h2>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString_2}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString_3}
      </SyntaxHighlighter>

      <ColorState>
        <ComA />
      </ColorState>
      <br />
    </div>
  );
}

export default ContextAPI;
