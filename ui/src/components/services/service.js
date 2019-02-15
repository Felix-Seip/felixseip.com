import React from "react";

import { Row, Col } from "react-flexbox-grid";

import "../../styles/text.css";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Col center="xs sm md lg" xs={12} sm={12} md={3} style={{ margin: "40px" }}>
        <Row
          center="xs sm md lg"
        >
          {this.props.img}
        </Row>
        <Row center="xs sm md lg">
          <p className="header-text">{this.props.header}</p>
        </Row>
        <Row center="xs sm md lg" style={{marginTop: 20}}>
          <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum volutpat mi, eget auctor sem.</p>
        </Row>
      </Col>
    );
  }
}
