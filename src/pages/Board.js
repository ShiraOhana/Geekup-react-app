import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "../components/array";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../App.css";

function Board() {
  let history = useNavigate();

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, name, age, contact, fandom) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Fandom", fandom);
  }

  // Deleted function - functionality
  // for deleting the entry
  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    // deleting the entry with index
    array.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/board");
  }

  return (
    <div className="board">
      <Header />
      <h1>Find your kind of people</h1>

      <div style={{ margin: "2rem", textAlign: "center" }}>
        <Table striped bordered hover size="sm" variant="light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact Info</th>
              <th>Fandom</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping though every element in the array
    and showing the data in the form of table */}
            {array.map((item) => {
              return (
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Contact}</td>
                  <td>{item.Fandom}</td>

                  {/* getting theid,name, and age for storing these
          value in the jsx with onclick event */}
                  <td>
                    <Link to={`/edit`}>
                      <Button
                        onClick={(e) =>
                          setID(
                            item.id,
                            item.Name,
                            item.Age,
                            item.Contact,
                            item.Fandom
                          )
                        }
                        variant="info"
                      >
                        Update
                      </Button>
                    </Link>
                  </td>

                  {/* Using thr deleted function passing
       the id of an entry */}
                  <td>
                    <Button onClick={(e) => deleted(item.id)} variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Button for redirecting to create page for
   insertion of values */}
        <Link className="d-grid gap-2" to="/create">
          <Button variant="primary" size="lg">
            Don't be shy
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Board;
