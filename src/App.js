import React, { Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import "./App.css";

const About = React.lazy(() => {
  return import("./pages/About/About");
})

const Experience = React.lazy(() => {
  return import("./pages/Experience/Experience");
})

const App = props => {
  let routes = (
    <Switch>
      <Route path="/Experience" render={props => <Experience {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      <Route path="/" render={props => <Home {...props} />} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
  );
};

export default withRouter(App);
