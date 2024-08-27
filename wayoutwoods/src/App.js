import "./App.css";
import HomePage from "./home.js"
import Snapsvisor from "./snapsvisor.js"
import Schedule from "./schedule.js"
import walkinwoods from "./img/walkinwoods.JPG";
import welcome from "./img/welcome.png";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/navbar.js";
import React, { useState } from 'react';
import { Row, Col, Container, Image, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, UncontrolledDropdown } from "reactstrap";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App(args) {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (


<Router>
      <div className="App">
      <Navbar {...args}>
          <NavbarBrand href="/">way out (in the) woods</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>

              <NavItem>
                <NavLink href="/schedule/">Schedule</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/snapsvisor/">Snapsvisor</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
              <Routes>
              <Route path="/" element={<HomePage />} />          
              <Route path="/schedule" element={<Schedule />} />
          <Route exact path="/snapsvisor" element={<Snapsvisor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
