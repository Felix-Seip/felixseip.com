import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import Service from "./service";
import { MoreButton } from "../general/buttons";

import { UXUIDesign, Android, IOS } from "../../assets/icons";

export default class Services extends React.Component {
  render() {
    var iconHeight = 125;
    var iconWidth = 125;
    var services = [
      <Service
        img={<UXUIDesign iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="UX/UI Design"
      />,
      <Service
        img={<Android iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="Android Development"
      />,
      <Service
        img={<IOS iconWidth={iconWidth} iconHeight={iconHeight} />}
        header="iOS Development"
      />
    ];

    return (
      <Grid fluid style={{ backgroundColor: "#68A691", padding: 30, marginTop: 20 }}>
        <Row center="xs sm md lg">{services}</Row>
        <MoreButton />
      </Grid>
    );
  }
}
