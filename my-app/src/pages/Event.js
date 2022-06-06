import React from "react";
import { useParams } from "react-router-dom";

function Event() {
  const params = useParams();
  return <div>Event {params.id}</div>;
}

export default Event;
