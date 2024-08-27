import './App.css';
import "./App.css";
import walkinwoods from "./img/walkinwoods.JPG";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Row, Col, Container } from "reactstrap";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";



export default function BreweryPage(){
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

        <Container fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="text-center d-flex align-items-center justify-content-center">
              <p> Schedule</p>
            </Col>
            <Col>
              <p>Snapsvisor</p>
            </Col>
            <Col>
              <p>Info</p>
            </Col>
          </Row>
        </Container>
      </div>
      </header>
      );
    }