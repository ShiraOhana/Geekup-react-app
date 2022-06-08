import React from "react";
import "../App.css";
import "../assets/logo.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="explore-homepage">
        <p> Check out new events</p>{" "}
        <Link to="/events" className="explore-link">
          Explore{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
