import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pay from "./components/Pay";

const Index = () => (
  <Router>
    <Route path="/:amount?" component={Pay} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));
