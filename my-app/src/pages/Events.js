import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Events() {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://629b7c06cf163ceb8d1a51ed.mockapi.io/meetings/meetup/"
      );
      console.log(data);
      setEvent(data);
    };
    search();
  }, []);

  return (
    <div className="container">
      <select></select>
      <div className="grid">
        {events.map((event) => (
          <div className="card">
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
