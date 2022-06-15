import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default class ClassComponent extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <h2>Class Component</h2>
          <p>
            😀 A class component requires you to extend from React. Component
            and create a render function which returns a React element. 💻 Class
            component is instantiated and different life cycle method is kept
            alive and being run and invoked depending on phase of class
            component. 💛
          </p>
          <p>
            When creating a React component, the component's name must start
            with an upper case letter. The component has to include the extends
            React.Component statement, this statement creates an inheritance to
            React.Component, and gives your component access to
            React.Component's functions.{" "}
            <p>
              The component also requires a render() method, this method returns
              HTML.
            </p>
          </p>
        </div>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/2">
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
      </>
    );
  }
}
