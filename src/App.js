import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/top">Top</Link>
            </li>
            <li>
              <Link to="/boasts">Boasts</Link>
            </li>
            <li>
              <Link to="/roasts">Roasts</Link>
            </li>
            <li>
              <Link to="/post">Submit Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/top">
            <h1>Top</h1>
          </Route>
          <Route path="/boasts">
            <h1>Boasts</h1>
          </Route>
          <Route path="/roasts">
            <h1>Roasts</h1>
          </Route>
          <Route path="/post">
            <h1>Submit Post</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
