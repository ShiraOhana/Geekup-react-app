import "./App.css";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Create from "./components/Create";
import Edit from "./components/Edit";

export const AppData = React.createContext();
function App() {
  const [events, setEvent] = useState([]);
  const [filters, setFilters] = useState({ online: "any", recent: true });

  return (
    <AppData.Provider value={{ events, setEvent, filters, setFilters }}>
      <div className="App">
        <BrowserRouter>
          <header>
            <ul>
              <Link to="/events" className="nav-links">
                Events
              </Link>
              <Link to="/board" className="nav-links">
                Board
              </Link>
            </ul>
          </header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppData.Provider>
  );
}
export default App;
