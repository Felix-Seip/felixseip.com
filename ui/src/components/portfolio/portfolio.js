import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import PortfolioItem from "./portfolio-item";

import { MoreButton } from "../general/buttons";

import LinearProgress from "@material-ui/core/LinearProgress";

export default class Portfolio extends React.Component {
    render() {
        var iconHeight = 125;
        var iconWidth = 125;
        var portfolio = [
            <PortfolioItem
                header="App A"
                description="A to-do list app that offers an improved UI design "
                projectURL="https://google.com"
            />,
            <PortfolioItem
                header="App B"
                description="A beautiful recipe app with an intuitive design  "
                projectURL="https://google.com"
            />,
            <PortfolioItem
                header="App C"
                description="A convenient app for when you travel "
                projectURL="https://google.com"
            />
        ];

        return (
            <Grid fluid style={{ backgroundColor: "#1F2421", padding: 50, position: "relative" }}>
                <Row center="xs sm md lg">{portfolio}</Row>
                <MoreButton />
            </Grid>
        );
    }
}
