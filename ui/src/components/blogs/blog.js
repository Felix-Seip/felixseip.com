import React from "react";

import { Row, Col } from "react-flexbox-grid";

import { Github } from "../../assets/icons"
import "../../styles/text.css";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Col center="xs sm md lg" xs={12} sm={12} md={3} style={{ margin: "40px", borderStyle: "solid", borderColor: "#000000", borderRadius: "15px", borderWidth: "thin" }}>
                <Row center="xs sm md lg">
                    <p className="header-text" style={{ cursor: "pointer", color: "#000000" }}>{this.props.header}</p>
                </Row>
                <Row center="xs sm md lg" style={{ marginTop: 20 }}>
                    <p className="info-text" style={{ color: "#000000" }}>{this.props.description}</p>
                </Row>
            </Col>
        );
    }
}
