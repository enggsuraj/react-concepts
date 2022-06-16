import React from "react";
import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `import React from 'react'  
import ReactDOM from 'react-dom'  
  
function PortalDemo(){  
    return ReactDOM.createPortal(  
      <h1>Portals Demo</h1>,  
      document.getElementById('portal-root')  
    )  
}  
export default PortalDemo  

<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <meta charset="utf-8" />  
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />  
    <meta name="viewport" content="width=device-width, initial-scale=1" />  
    <meta name="theme-color" content="#000000" />  
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />  
    <title>React App</title>  
  </head>  
  <body>  
    <noscript>It is required to enable JavaScript to run this app.</noscript>  
    <div id="root"></div>  
    <div id="portal-root"></div>  
  </body>  
</html>  `;

function Portals() {
  return (
    <div className="wrapper">
      {" "}
      <h2>Portals</h2>
      <p>
        Portals provide a first-class way to render children into a DOM node
        that exists outside the DOM hierarchy of the parent component.
      </p>
      <div className="navigation">
        <Link to="/router">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/errorboundaries">
          <button>Next</button>
        </Link>
      </div>
      <SyntaxHighlighter
        class="codesyntax"
        language="javascript"
        style={tomorrowNightEighties}
      >
        {codeString}
      </SyntaxHighlighter>{" "}
    </div>
  );
}

export default Portals;
