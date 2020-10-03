import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/top">Top</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/boasts">Boasts</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/roasts">Roasts</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/post">Create Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
