import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";

import ClassComponent from "./components/Concepts/ClassComponent/ClassComponent";
import State from "./components/Concepts/State/State";
import PropsAndEvents from "./components/Concepts/PropsAndEvents/PropsAndEvents";
import LifeCycleMethods from "./components/Concepts/LifeCycleMethods/LifeCycleMethods";

import FunctionalComponent from "./components/Concepts/FunctionalComponent/FunctionalComponent";
import UseState from "./components/Concepts/UseState/UseState";

import Form from "./components/Concepts/Form/Form";
import ConditionalRendering from "./components/Concepts/ConditionalRendering/ConditionalRendering";
import ListAndkeys from "./components/Concepts/ListAndkeys/ListAndkeys";
import UseEffect from "./components/Concepts/UseEffect/UseEffect";
import UseRefs from "./components/Concepts/UseRefs/UseRefs";
import UseMemo from "./components/Concepts/UseMemo/UseMemo";
import UseReducer from "./components/Concepts/UseReducer/UseReducer";
import UseCallback from "./components/Concepts/UseCallback/UseCallback";
import CustomHook from "./components/Concepts/CustomHook/CustomHook";
import RouterExample from "./components/Concepts/RouterExample/RouterExample";
import Portals from "./components/Concepts/Portals/Portals";
import ErrorBoundaries from "./components/Concepts/ErrorBoundaries/ErrorBoundaries";
import ContextAPI from "./components/Concepts/ContextAPI/ContextAPI";
import Redux from "./components/Concepts/Redux/Redux";
import LazyLoading from "./components/Concepts/LazyLoading/LazyLoading";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <div className="middle">
          <Route path="/classcomponent">
            <ClassComponent />
          </Route>
          <Route path="/thisstate">
            <State />
          </Route>
          <Route path="/propsandevents">
            <PropsAndEvents />
          </Route>
          {/* <Route path="/lifecyclemethods">
            <LifeCycleMethods />
          </Route> */}
          <Route path="/functionalcomponents">
            <FunctionalComponent />
          </Route>
          <Route path="/usestate">
            <UseState />
          </Route>

          <Route path="/form">
            <Form />
          </Route>
          <Route path="/conditionalrendering">
            <ConditionalRendering />
          </Route>
          <Route path="/listandkeys">
            <ListAndkeys />
          </Route>
          <Route path="/useeffect">
            <UseEffect />
          </Route>
          <Route path="/userefs">
            <UseRefs />
          </Route>
          <Route path="/usememo">
            <UseMemo />
          </Route>
          <Route path="/usereducer">
            <UseReducer />
          </Route>
          <Route path="/usecallback">
            <UseCallback />
          </Route>
          <Route path="/customhook">
            <CustomHook />
          </Route>
          <Route path="/router">
            <RouterExample />
          </Route>
          <Route path="/portals">
            <Portals />
          </Route>
          <Route path="/errorboundaries">
            <ErrorBoundaries />
          </Route>
          <Route path="/contextapi">
            <ContextAPI />
          </Route>
          <Route path="/redux">
            <Redux />
          </Route>
          <Route path="/lifecyclemethods">
            <LifeCycleMethods />
          </Route>
          <Route path="/lazyloading">
            <LazyLoading />
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
