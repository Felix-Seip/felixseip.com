import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import Blog from "./blog";

import { MoreButton } from "../general/buttons";

const API_URL = "http://felixseip.de:81/blogs";

export default class Blogs extends React.Component {
    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
                console.log(data);
            });
    }

    render() {
        var iconHeight = 125;
        var iconWidth = 125;
        var blogs = [
            <Blog
                header="App A"
                description="A to-do list app that offers an improved UI design "
                projectURL="https://google.com"
            />,
            <Blog
                header="App B"
                description="A beautiful recipe app with an intuitive design  "
                projectURL="https://google.com"
            />,
            <Blog
                header="App C"
                description="A convenient app for when you travel "
                projectURL="https://google.com"
            />
        ];

        return (
            <Grid fluid style={{ padding: 50, position: "relative" }}>
                <Row center="xs sm md lg"></Row>
                <MoreButton />
            </Grid>
        );
    }
}
