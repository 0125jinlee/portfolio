import React, { Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Projects from "../src/pages/Projects/Projects";
import "./App.css";

const App = props => {
  let routes = (
    <Switch>
      <Route path="/Projects" render={props => <Projects {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      <Route path="/" render={props => <Home {...props} />} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>{routes}</Suspense>
    </div>
  );
};

export default withRouter(App);
