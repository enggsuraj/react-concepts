import React from "react";
import { Link } from "react-router-dom";

function ConceptContainer() {
  return (
    <div className="item_container">
      <div className="item">
        <Link to="/classcomponent">
          <p>Class Component</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/thisstate">
          <p>this.state</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/propsandevents">
          <p>Props & Events</p>
        </Link>
      </div>

      <div className="item">
        <Link to="/functionalcomponents">
          <p>Functional Components</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/usestate">
          <p>useState</p>
        </Link>
      </div>

      <div className="item">
        <Link to="/form">
          <p>Form</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/conditionalrendering">
          <p>Conditional Rendering</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/listandkeys">
          <p>List & Keys</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/useeffect">
          <p>useEffect</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/userefs">
          <p>useRefs</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/usememo">
          <p>useMemo</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/usecallback">
          <p>useCallback</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/usereducer">
          <p>useReducer</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/customhook">
          <p>Custom Hook</p>
        </Link>
      </div>

      <div className="item">
        <Link to="/router">
          <p>Router</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/portals">
          <p>Portals</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/errorboundaries">
          <p>Error Boundaries</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/contextapi">
          <p>Context API</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/redux">
          <p>Redux</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/lifecyclemethods">
          <p>LifeCycle Methods</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/lazyloading">
          <p>Lazy Loading</p>
        </Link>
      </div>

      <div className="disabled">
        <p>JEST Testing</p>
      </div>
    </div>
  );
}

export default ConceptContainer;
