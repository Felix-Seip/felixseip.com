import React from "react";

import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Welcome } from "../components/welcome";
import Services from "../components/services/services";
import Skills from "../components/skills/skills";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    marginLeft: "15%"
  },
  appbar: {
    margin: 0,
    padding: 5
  }
};

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <AppBar style={styles.appbar}>
          <Toolbar>
            <Typography variant="h5" color="inherit" className={styles.grow}>
              Felix Seip
            </Typography>
            <div style={{ position: "absolute", right: 0 }}>
              <Button color="inherit" style={{ fontSize: "18px", color: "#f05d5e" }}>
                Home
              </Button>
              <Button color="inherit" style={{ fontSize: "18px" }}>
                Services
              </Button>
              <Button color="inherit" style={{ fontSize: "18px" }}>
                Skills
              </Button>
              <Button color="inherit" style={{ fontSize: "18px" }}>
                Portfolio
              </Button>
              <Button color="inherit" style={{ fontSize: "18px" }}>
                Blog
              </Button>
              <Button color="inherit" style={{ fontSize: "18px" }}>
                About
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Welcome />
        <Services />
        <Skills />
      </div>
    );
  }
}
