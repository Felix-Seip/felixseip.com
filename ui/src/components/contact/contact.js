import React from "react";

import { Grid, Row } from "react-flexbox-grid";

import Profile from "../../assets/felixseip.jpg";
import { Mail, Phone } from "../../assets/icons";
import ContactItem from "./contact-item";

export default class Contact extends React.Component {
    render() {
        const items = [
            <ContactItem contactText="+49 176 43268265" contactImage={Phone} />,
            <ContactItem contactText="felixseip01@gmail.com" contactImage={Mail} />
        ];

        return (
            <div>
                <Grid fluid style={{ backgroundColor: "#FFFFFF", position: "relative" }}>
                    <Row center="xs sm md lg">
                        <img style={{ borderRadius: "100%", margin: "5%" }} src={Profile}></img>
                    </Row>
                    <Row center="xs sm md lg">
                        {items}
                    </Row>
                </Grid>
            </div>
        );
    }
}