import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";

import "../../styles/text.css";

export default class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Row center="xs sm md lg">
                <Col>
                    {this.props.contactImage}
                </Col>
                <Col>
                    <p className="site-header" style={{ fontSize: "24px" }}>{this.props.contactText}</p>
                </Col>
            </Row>
        );
    }
}