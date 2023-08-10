import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./init/About";
import Home from "./init/Home";
import Tools from "./init/Tools";

export default function App() {
  return (
    <Router>
      <div>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/tools" className="nav-link">Tools</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
