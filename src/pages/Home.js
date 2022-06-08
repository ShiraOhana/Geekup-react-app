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
      <div className="explore-homepage">
        <p> Check out our events</p>
        <button>Explore</button>{" "}
      </div>

      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default Home;
