import React from "react";

import { Extend, Unextend } from "../../assets/icons";

import "../../styles/buttons.css";

export class MoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: <Extend iconWidth={50} iconHeight={50} />,
      iconState: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    console.log("clicked");
    if ((this.state.iconState == 0)) {
      this.setState({
        icon: <Unextend iconWidth={50} iconHeight={50} />,
        iconState: 1
      });
    } else {
      this.setState({
        icon: <Extend iconWidth={50} iconHeight={50} />,
        iconState: 0
      });
    }
  }

  render() {
    return (
      <div className="more-button" onClick={this.onButtonClick}>
        {this.state.icon}
      </div>
    );
  }
}
