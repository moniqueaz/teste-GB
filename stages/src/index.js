import React from "react";
import ReactDOM from "react-dom";

import Parent from "./Parent";
import ParentChallenge from "./challenge/Parent.js";
import ParentSolution from "./solution/Parent.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>
        <nav className='menu'>
          <ul>
            <li>
              <Link to="/">Stages</Link>
            </li>
            <li>
              <Link to="/challenge">Challenge</Link>
            </li>
            <li>
              <Link to="/solution">Solution</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Parent/>}/>
          <Route path="/challenge" element={<ParentChallenge/>}/>
          <Route path="/solution" element={<ParentSolution/>}/>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  rootElement
);
