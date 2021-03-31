import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";

import ClassComponent from "./components/Concepts/ClassComponent/ClassComponent";
import State from "./components/Concepts/State/State";
import PropsAndEvents from "./components/Concepts/PropsAndEvents/PropsAndEvents";
import FunctionalComponent from "./components/Concepts/FunctionalComponent/FunctionalComponent";
import UseState from "./components/Concepts/UseState/UseState";
import PropsAndEventsFC from "./components/Concepts/PropsAndEventsFC/PropsAndEventsFC";
import Form from "./components/Concepts/Form/Form";
import ConditionalRendering from "./components/Concepts/ConditionalRendering/ConditionalRendering";
import ListAndkeys from "./components/Concepts/ListAndkeys/ListAndkeys";
import UseEffect from "./components/Concepts/UseEffect/UseEffect";
import UseRefs from "./components/Concepts/UseRefs/UseRefs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <div className="middle">
          <Route path="/1">
            <ClassComponent />
          </Route>
          <Route path="/2">
            <State />
          </Route>
          <Route path="/3">
            <PropsAndEvents />
          </Route>
          <Route path="/5">
            <FunctionalComponent />
          </Route>
          <Route path="/6">
            <UseState />
          </Route>
          <Route path="/8">
            <Form />
          </Route>
          <Route path="/9">
            <ConditionalRendering />
          </Route>
          <Route path="/10">
            <ListAndkeys />
          </Route>
          <Route path="/11">
            <UseEffect />
          </Route>
          <Route path="/12">
            <UseRefs />
          </Route>
          {/* <Route path="/12">
            <CustomHooks />
          </Route>  */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
