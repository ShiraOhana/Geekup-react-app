import React from "react";
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
    </div>
  );
}

export default Home;
