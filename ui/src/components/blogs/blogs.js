import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import Blog from "./blog";

import { MoreButton } from "../general/buttons";

const API_URL = "http://felixseip.de:81/blogs";

export default class Blogs extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    blogs: data.map(item => (
                        <Blog header={item.title} image={item.coverImgURL} body={item.body} />
                    )
                    )
                });
                console.log(this.state.blogs);
            });
    }

    render() {
        var iconHeight = 125;
        var iconWidth = 125;
        return (
            <Grid fluid style={{ padding: 50, position: "relative" }}>
                <Row center="xs sm md lg">{this.state.blogs}</Row>
                <MoreButton />
            </Grid>
        );
    }
}
