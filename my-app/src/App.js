import "./App.css";
import ReactDOM from "react-dom/client";

import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/events">Events</Link>
        <Link to="/board">Board</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
