import React from "react";
import map from "./img/vråmap.png";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "reactstrap";

export default function VraMap() {
  return (
    <div>

<Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={map}
      top
      width="100%"
    />
    <CardBody>
    <CardTitle tag="h1">Find your way in Vrå</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          <a
              className="google-maps"
              href="https://maps.app.goo.gl/VgLUMssNkSXELTa4A"
            >
              <CardText><h4>Spots in Vrå on Google Maps</h4>
             </CardText> </a>
          </CardSubtitle>
        
    </CardBody>
  </Card>

    </div>
  );
}
