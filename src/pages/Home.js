import React from "react";
import "../App.css";
import "../assets/logo.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="home">
        <Header />
        <div className="explore-homepage">
          <h1>The place for meeting geeks</h1>
          <p> Check out new events</p>{" "}
          <Link to="/events" className="explore-link">
            Explore{" "}
          </Link>
        </div>
      </div>
      <div className="about">
        <Row>
          <Col>
            {" "}
            <div className="dnd-description">
              <h2>Meet geeks who's into the same fandom </h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p>
                {" "}
                <Link to="/board">Learn more </Link>
              </p>
            </div>
          </Col>
          <Col>
            <img
              className="dnd-img"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b93dac4c-d249-427c-a52e-0be04f96e098/dczndfo-65966128-b352-4315-b793-20c10d8d7784.png/v1/fill/w_1280,h_1159,q_80,strp/happy_couple__dnd_commission__by_abd_illustrates_dczndfo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE1OSIsInBhdGgiOiJcL2ZcL2I5M2RhYzRjLWQyNDktNDI3Yy1hNTJlLTBiZTA0Zjk2ZTA5OFwvZGN6bmRmby02NTk2NjEyOC1iMzUyLTQzMTUtYjc5My0yMGMxMGQ4ZDc3ODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sAeAxlFeMmAn0jBXdiJUml-QK2baDdaDS3esvWxDDqs"
            ></img>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
