import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AppData } from "../App";

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

  return (
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
        {events.map((event) => (
          <div
            className="card"
            onClick={() => {
              navigate(`/event/${event.id}`);
            }}
          >
            <h3> {event.title}</h3>
            <p>{moment(event.date).format("MMMM Do YYYY, h:mm a")}</p>
            <p>{event.country}</p>
            <img src={event.img} />
            <p>{event.description}</p>
            <p>Online: {event.Online ? "V" : "X"}</p>
          </div>
        ))}
      </div>
      <Link to="/home">Back Home</Link>
    </div>
  );
}

export default Events;
