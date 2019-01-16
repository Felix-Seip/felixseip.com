import React from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import * as serviceWorker from "./serviceWorker";
import theme from "./theme";

import HomeScreen from "./screens/home";

class Index extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HomeScreen />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
