import React from "react";

import { Row, Col } from "react-flexbox-grid";

import LinearProgress from "@material-ui/core/LinearProgress";

import "../../styles/text.css";

export default class Skill extends React.Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    const diff = Math.random() * 10;
    this.setState({ completed: Math.min(completed + diff, 100) });
  };

  render() {
    return (
      <Col
        center="xs sm md lg"
        xs={12}
        sm={12}
        md={3}
        style={{ margin: "40px" }}
      >
        <Row center="xs sm md lg">{this.props.img}</Row>
        <Row center="xs sm md lg">
          <p className="header-text-dark">{this.props.header}</p>
        </Row>
        <LinearProgress variant="determinate" value={this.state.completed} />
        <Row center="xs sm md lg">
          <p className="info-text-dark">{this.props.experience}</p>
        </Row>
      </Col>
    );
  }
}
