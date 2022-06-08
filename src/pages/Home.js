import { logDOM } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../assets/logo.png";

function Home() {
  return (
    <div className="home">
      <header>
        <img src={require("../assets/logo.png")} className="logo" />

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
      </header>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default Home;
