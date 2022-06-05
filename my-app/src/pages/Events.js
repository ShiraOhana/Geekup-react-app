import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Events() {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://629b7c06cf163ceb8d1a51ed.mockapi.io/meetings/meetup/"
      );
      setEvent(data);
    };
    search();
  }, []);

  return (
    <div>
      <div className="card">
        <h3> {events.title}</h3>
        <p>{events.date}</p>
        <p>{events.country}</p>
        <img src={events.country} />
        <p>{events.description}</p>
        <p>Online: {events.online}</p>
      </div>
      <Link to="/home">Back Home</Link>
    </div>
  );
}

export default Events;
