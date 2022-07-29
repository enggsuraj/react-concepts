import React from "react";
import { Link } from "react-router-dom";
import "./lifecyclemethods.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `import "./styles.css";
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");

    super(props);
    this.state = {
      count: 0
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("Did Mount");
    console.log("------------");
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  componentWillUnmount() {
    console.log("Un Mount");
  }

  render() {
    console.log("render");

    return (
      <>
        Counter: {this.state.count}
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
 `;

function LifeCycleMethods() {
  return (
    <div className="wrapper">
      <h2>Life Cycle Methods</h2>
      <p>
        The lifecycle of the component is divided into four phases. They are:
      </p>
      <ul>
        <li>Initial Phase</li>
        <li>Mounting Phase</li>
        <li>Updating Phase</li>
        <li>Unmounting Phase</li>
      </ul>
      <div>
        <Link to="/propsandevents">
          <button>Previous</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/usestate">
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

export default LifeCycleMethods;
