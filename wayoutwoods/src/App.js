import "./App.css";
import HomePage from "./home.js";
import Snapsvisor from "./snapsvisor.js";
import Schedule from "./schedule.js";
import Faq from "./faq.js";
import VraMap from "./map.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/navbar.js";
import React from "react";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route exact path="/snapsvisor" element={<Snapsvisor />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/map" element={<VraMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
