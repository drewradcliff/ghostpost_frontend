import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import CreatePost from "./components/CreatePost"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/top">
            <Home endpoint="/top" />
          </Route>
          <Route path="/boasts">
            <Home endpoint="/boasts" />
          </Route>
          <Route path="/roasts">
            <Home endpoint="/roasts" />
          </Route>
          <Route path="/post">
            <CreatePost />
          </Route>
          <Route path="/">
            <Home endpoint="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
