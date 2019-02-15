import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import Skill from "./skill";

import { MoreButton } from "../general/buttons";
import { ReactJS, Flutter, Java } from "../../assets/icons";

import LinearProgress from "@material-ui/core/LinearProgress";

export default class Skills extends React.Component {
  render() {
    var iconHeight = 125;
    var iconWidth = 125;
    var services = [
      <Skill
        img={<ReactJS iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="ReactJS"
        experience="1+ Years of Experience"
      />,
      <Skill
        img={<Flutter iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="Flutter"
        experience="1+ Years of Experience"
      />,
      <Skill
        img={<Java iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="Java"
        experience="3+ Years of Experience"
      />
    ];

    return (
      <Grid fluid style={{ padding: 30, position: "relative" }}>
        <Row center="xs sm md lg">{services}</Row>
        <MoreButton />
      </Grid>
    );
  }
}
