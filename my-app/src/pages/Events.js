import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Events() {
  function fetchData() {
    const [event, setEvent] = useState([]);

    useEffect(() => {
      const search = async () => {
        const { data } = await axios.get(
          "https://629b7c06cf163ceb8d1a51ed.mockapi.io/meetings"
        );
        setEvent(data);
      };
      search();
    }, []);
  }
  return (
    <div>
      <p> Events</p>
      <div></div>

      <Link to="/home">Events</Link>
    </div>
  );
}

export default Events;
