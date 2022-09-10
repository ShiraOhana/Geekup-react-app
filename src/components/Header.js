import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  return (
    <header>
      <ul className="navbar">
        <li>
          <a href="/">
            <img src={require("../assets/logo.png")} className="logo" />
          </a>
        </li>
        <li>
          <ul>
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/events" className="nav-links">
              Events
            </Link>
            <Link to="/board" className="nav-links">
              Board
            </Link>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Header;
