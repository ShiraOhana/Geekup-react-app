import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppData } from "../App";
import moment from "moment";
import axios from "axios";
import imgData from "../components/imgData";
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
  return (
    <div className="event">
      {events
        .filter((event) => event.id === params.id)
        .map((event) => (
          <div className="card">
            <h3> {event.title}</h3>
            <p>{moment(event.date).format("MMMM Do YYYY, h:mm a")}</p>
            <p>{event.country}</p>
            {imgData && <img src={getImg()} />}
            <p>{event.description}</p>
            <p>Online: {event.Online ? "V" : "X"}</p>
            <form>
              <input type="text" placeholder="Name"></input> <br />
              <input type="email" placeholder="Email"></input>
              <br />
              <input type="phone" placeholder="Phone Number"></input> <br />
              <button>Submit</button>
            </form>
          </div>
        ))}
    </div>
  );
}

export default Event;
