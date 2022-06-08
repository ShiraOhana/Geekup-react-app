import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <header>
        <ul>
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
