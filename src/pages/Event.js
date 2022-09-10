import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppData } from "../App";
import moment from "moment";
import axios from "axios";
import imgData from "../components/imgData";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../App.css";

function Event() {
  const { events, setEvent } = useContext(AppData);
  const params = useParams();
  useEffect(() => {
    if (events.length === 0) {
      (async () => {
        const { data } = await axios.get(
          `https://629b7c06cf163ceb8d1a51ed.mockapi.io/meetings/meetup/`
        );
        setEvent(data);
      })();
    }
  }, []);

  const getImg = () => {
    const rand = Math.floor(
      Math.random(0, imgData.length - 1) * imgData.length
    );
    const img = imgData[rand].img;
    return img;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="event bcg-img">
      <div>
        {" "}
        <Header />
      </div>
      {events
        .filter((event) => event.id === params.id)
        .map((event) => (
          <div className="card">
            <h3> {event.title}</h3>
            <p className="date-location">
              {moment(event.date).format("MMMM Do YYYY, h:mm a")}
            </p>
            <p className="date-location">{event.country}</p>
            {imgData && <img src={getImg()} />}
            <p>
              {" "}
              <span className="underline">About the event:</span> <br />
              {event.description}
            </p>
            <p>Online: {event.Online ? "Yes" : "No"}</p>
            <form>
              <hr />
              <h3>Sign up to this event</h3>
              <input type="text" placeholder="Name"></input> <br />
              <input type="email" placeholder="Email"></input>
              <br />
              <input type="phone" placeholder="Phone Number"></input> <br />
              <input type="number" placeholder="Number of tickets"></input>{" "}
              <br />
              <button onSubmit={handleSubmit}>Submit</button>
            </form>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default Event;
