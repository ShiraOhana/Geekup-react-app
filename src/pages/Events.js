import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AppData } from "../App";
import imgData from "../components/imgData";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../App.css";

function Events() {
  const { events, setEvent, filters, setFilters } = useContext(AppData);
  const { online } = filters;
  useEffect(() => {
    search(online);
  }, [online]);
  let navigate = useNavigate();
  const search = async (isOnline) => {
    let query = "";
    if (isOnline !== "any") {
      query = query + `Online=${isOnline}`;
    }
    const { data } = await axios.get(
      `https://629b7c06cf163ceb8d1a51ed.mockapi.io/meetings/meetup?${query}`
    );
    setEvent(data);
  };
  const handleChange = (e) => {
    setFilters((prev) => {
      return { ...prev, online: e.target.value };
    });
  };

  const getImg = () => {
    const rand = Math.floor(
      Math.random(0, imgData.length - 1) * imgData.length
    );
    const img = imgData[rand].img;
    return img;
  };
  return (
    <div className="events">
      <div className="bcg-img">
        <Header />
        <div className="container">
          <h1>Events and Meetups</h1>
          <div>
            <select onChange={handleChange}>
              <option value="any">Any</option>
              <option value={true}>Online</option>
              <option value={false}>Offline</option>
            </select>
          </div>
          <div className="grid">
            {events.map((event, i) => (
              <div
                className="card"
                onClick={() => {
                  navigate(`/event/${event.id}`);
                }}
              >
                <h3> {event.title}</h3>
                <p className="date-location">
                  {moment(event.date).format("MMMM Do YYYY, h:mm a")}
                </p>
                <p className="date-location">{event.country}</p>

                {imgData && <img src={getImg()} />}
                <div className="card-buttom">
                  <p>
                    <span className="underline">About the event:</span> <br />
                    {event.description}
                  </p>
                  <p>
                    {" "}
                    <span className="date-location">Online:</span>{" "}
                    {event.Online ? "Yes" : "No"}
                  </p>
                  <button>Click for more info</button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/">Back Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
