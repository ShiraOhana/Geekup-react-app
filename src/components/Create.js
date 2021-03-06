import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  // Making usestate for setting and
  // fetching a value in jsx
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [contact, setcontact] = useState("");
  const [fandom, setfandom] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = name,
      b = age,
      c = contact,
      d = fandom;
    array.push({ id: uni, Name: a, Age: b, Contact: c, Fandom: d });

    // Redirecting to home page after creation done
    history("/board");
  };

  return (
    <div className="create-page">
      <div>
        <Form className="d-grid gap-2" style={{ margin: "8rem" }}>
          <h1>Tell us about yourself</h1>

          {/* Fetching a value from input textfirld
   in a setname using usestate*/}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>

          {/* Fetching a value from input textfirld in
     a setage using usestate*/}
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control
              onChange={(e) => setage(e.target.value)}
              type="number"
              placeholder="Age"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Control
              onChange={(e) => setcontact(e.target.value)}
              type="text"
              placeholder="Contact info"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFandom">
            <Form.Control
              onChange={(e) => setfandom(e.target.value)}
              type="text"
              placeholder="What's your fandom?"
              required
            />
          </Form.Group>

          {/* handing a onclick event in button for
     firing a function */}
          <Button
            onClick={(e) => handelSubmit(e)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>

          {/* Redirecting back to home page */}
          <Link className="d-grid gap-2 cancel-btn" to="/board">
            <Button variant="info" size="lg">
              Cancel
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Create;
