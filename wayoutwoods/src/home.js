import './App.css';
import "./App.css";
import walkinwoods from "./img/walkinwoods.JPG";
import logo from "./img/wow_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Row, Col, Container, NavLink, NavItem } from "reactstrap";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

export default function HomePage(){
return(
<header>       
      <div
        className="main-background"
        style={{
          backgroundImage: `url(${walkinwoods})`,
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Row>
            <Col className="text-center">
              <img className="logo" roundedCircle fluid src={logo} />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="text-center d-flex align-items-center justify-content-center">
              <FlipClockCountdown
                to={new Date("September 6, 2024 18:00:00")}
                labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
                labelStyle={{
                  color: "white",
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
                digitBlockStyle={{ width: 30, height: 50, fontSize: 30 }}
              />

            </Col>
          </Row>
        </Container>

        <Container className="m-5" fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="text-center d-flex align-items-center justify-content-center">
              <NavItem><NavLink href="/map/"><h1 className="vrå-link">📍 VRÅ</h1></NavLink></NavItem>
            </Col>
          </Row>
        </Container>
      </div>
      </header>
      );
    }