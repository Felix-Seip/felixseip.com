import React from "react";

import { Row, Col } from "react-flexbox-grid";

import { Github } from "../../assets/icons"
import "../../styles/text.css";

export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Col center="xs sm md lg" xs={12} sm={12} md={3} style={{ margin: "40px", borderStyle: "solid", borderColor: "#FFFFFF", borderRadius: "15px", borderWidth: "thin" }}>
                <Row center="xs sm md lg">
                    <p className="header-text" style={{ cursor: "pointer" }}>{this.props.header}</p>
                </Row>
                <Row center="xs sm md lg" style={{ marginTop: 20 }}>
                    <p className="info-text">{this.props.description}</p>
                </Row>
            </Col>
        );
    }
}
