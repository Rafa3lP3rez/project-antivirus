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
import Principal from "./init/Principal";

export default function App() {
  return (
    <Router>
      <div>
        <ul className="nav-list ">
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-link">Scanear Archivo</Link>
          </li>
          <li>
            <Link to="/tools" className="nav-link">Scanear URL</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About us</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Principal />
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
