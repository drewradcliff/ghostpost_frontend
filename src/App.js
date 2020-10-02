import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/top">
            <h1>Top</h1>
          </Route>
          <Route path="/boasts">
            <Home endpoint="/boasts" />
          </Route>
          <Route path="/roasts">
            <Home endpoint="/roasts" />
          </Route>
          <Route path="/post">
            <h1>Submit Post</h1>
          </Route>
          <Route path="/">
            <Home endpoint="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
