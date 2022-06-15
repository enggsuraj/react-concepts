import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }

    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);`;

function ErrorBoundaries() {
  return (
    <div className="wrapper">
      {" "}
      <h2>Error Boundaries</h2>
      <p>
        A JavaScript error in a part of the UI shouldn’t break the whole app. To
        solve this problem for React users, React 16 introduces a new concept of
        an “error boundary”.
      </p>
      <p>
        Error boundaries are React components that catch JavaScript errors
        anywhere in their child component tree, log those errors, and display a
        fallback UI instead of the component tree that crashed. Error boundaries
        catch errors during rendering, in lifecycle methods, and in constructors
        of the whole tree below them.
      </p>
    </div>
  );
}

export default ErrorBoundaries;
