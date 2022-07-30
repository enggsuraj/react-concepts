import React from "react";
import { useEffect, useState, useMemo } from "react";

import Img from "../../../assets/useeffect.png";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

function LazyLoading() {
  const codeString = `import React, { Suspense } from 'react';

  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  
  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
    `;
  return (
    <div className="wrapper">
      {" "}
      <h2>Lazy Loading</h2>
      <p>
        React.lazy takes a function that must call a dynamic import(). This must
        return a Promise which resolves to a module with a default export
        containing a React component. The lazy component should then be rendered
        inside a Suspense component, which allows us to show some fallback
        content (such as a loading indicator) while we’re waiting for the lazy
        component to load.
      </p>
      <div>
        <Link to="/userefs">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/usereducer">
          <button>Next</button>
        </Link>
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default LazyLoading;
