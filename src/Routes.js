import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Activities from "./components/Activities";
import Personal from "./components/Personal";
import Work from "./components/Work";
export default function() {
  return (
    <Switch>
      <Route path="/activities">
        <Activities />
      </Route>
      <Route path="/personal">
        <Personal />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/">
        <About />
      </Route>
    </Switch>
  );
}
