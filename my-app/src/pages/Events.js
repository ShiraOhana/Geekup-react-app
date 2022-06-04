import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Events() {
  return (
    <div>
      <p> Events</p>
      <Link to="/home">Events</Link>
    </div>
  );
}

export default Events;
