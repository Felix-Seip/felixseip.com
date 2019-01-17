import React from "react";

import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Grid, Row } from "react-flexbox-grid";

import { Welcome } from "../components/welcome";
import Services from "../components/services/services";
import Skills from "../components/skills/skills";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appbar: {
    margin: 0
  }
};

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        {/* <AppBar style={styles.appbar} position="absolute">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              Felix Seip
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Welcome />
        <Services />
        <Skills />
      </div>
    );
  }
}
