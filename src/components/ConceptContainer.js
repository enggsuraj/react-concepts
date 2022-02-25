import React from "react";
import { Link } from "react-router-dom";

function ConceptContainer() {
  return (
    <div className="item_container">
      <div className="item">
        <Link to="/1">
          <p>Class Component</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/2">
          <p>this.state</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/3">
          <p>Props & Events</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/4">
          <p>LifeCycle Methods</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/5">
          <p>Functional Comp</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/6">
          <p>useState</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/7">
          <p>Props & Events in FC</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/8">
          <p>Form</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/9">
          <p>Conditional Rendering</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/10">
          <p>List & Keys</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/11">
          <p>useEffect</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/12">
          <p>useRefs</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/13">
          <p>useMemo</p>
        </Link>
      </div>
      <div className="item">
        <Link to="/14">
          <p>useCallback</p>
        </Link>
      </div>
      <div className="disabled">
        <p>Prop.Types</p>
      </div>
      <div className="disabled">
        <p>Context API</p>
      </div>
      <div className="disabled">
        <p>Code Splitting</p>
      </div>
      <div className="disabled">
        <p>HOCs</p>
      </div>
      <div className="disabled">
        <p>Portals</p>
      </div>
      <div className="disabled">
        <p>Error Boundaries</p>
      </div>
      <div className="disabled">
        <p>Fiber Architecture</p>
      </div>
      <div className="disabled">
        <p>Router</p>
      </div>
      <div className="disabled">
        <p>Formik</p>
      </div>
      <div className="disabled">
        <p>Redux</p>
      </div>
      <div className="disabled">
        <p>JEST Testing</p>
      </div>
    </div>
  );
}

export default ConceptContainer;
