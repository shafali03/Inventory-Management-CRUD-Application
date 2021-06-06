import React from "react";

import { AppBar, Typography } from "@material-ui/core";

import logo from "../../image/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography variant="h4" align="left">
      <img className={classes.image} src={logo} alt="logo" height="65" />
    </Typography>
  </AppBar>;
};
export default Navbar;
