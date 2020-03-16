import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./components/Nav";
import "./App.scss";
function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
