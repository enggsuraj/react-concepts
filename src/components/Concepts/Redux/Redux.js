import React from "react";
import { Link } from "react-router-dom";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Redux() {
  return (
    <div className="wrapper">
      <h2>Redux</h2>
      <p>
        😀 Redux is a predictable state container for JavaScript apps. As the
        application grows, it becomes difficult to keep it organized and
        maintain data flow. Redux solves this problem by managing application’s
        state with a single global object called Store. 💛
      </p>
    </div>
  );
}

export default Redux;
