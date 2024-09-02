import React from "react";
import map from "./img/vråmap.png";
import { Row, Col, Container } from "reactstrap";



export default function VraMap() {
  return (
    <div>
        
      <Container className="m-5" fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="text-center d-flex align-items-center justify-content-center">
            <a className="google-maps" href="https://maps.app.goo.gl/VgLUMssNkSXELTa4A"><h1>Find your way in Vrå</h1></a>    
            </Col>
          </Row>
        </Container>
          
          <Container className="m-5" fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="text-center d-flex align-items-center justify-content-center">
            <img className="vrå-map"src={map}></img>
    
            </Col>
          </Row>
        </Container>
     
      </div>
  );
}
