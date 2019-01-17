import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";

import { PortfolioButton } from "./general/buttons";

import iPhone from "../assets/freelance-app-developer-iphone.png";
import iPad from "../assets/freelance-app-developer.png";
import MacBook from "../assets/freelance-app-developer-mac.png";

import "../styles/text.css";
import "../styles/animations.css";

export const Welcome = () => (
  <Grid
    fluid
    style={{ position: "relative", marginBottom: "10%" }}
    center="xs sm md lg"
  >
    <Row center="xs sm md lg">
      <p className="site-header">
        Freelance Mobile App Designer & Developer based in Frankfurt, Germany
      </p>
    </Row>
    <Row style={{ marginTop: "2%" }} center="xs sm md lg">
      <Col style={{ overflow: "hidden" }}>
        <img
          src={iPad}
          className="slide-right"
          style={{ position: "relative", zIndex: 99 }}
        />
        <img src={MacBook} style={{ position: "relative" }} />

        <img
          src={iPhone}
          className="slide-left"
          style={{ position: "relative" }}
        />
      </Col>
      <Col>
        <PortfolioButton />
      </Col>
    </Row>
  </Grid>
);
