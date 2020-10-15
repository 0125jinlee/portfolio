import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Experience from "../src/pages/Experience/Experience";
import About from "../src/pages/About/About";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" render={props => <Home />} />
        <Route path="/About" render={props => <About />} />
        <Route path="/Experience" render={props => <Experience />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default withRouter(App);
