import { logDOM } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../assets/logo.png";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      {/* <header>
        <ul className="navbar">
          <li>
            <img src={require("../assets/logo.png")} className="logo" />
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
      </header> */}

      <div className="explore-homepage">
        <p> Check out our events</p>
        <button>Explore</button>{" "}
      </div>

      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default Home;
