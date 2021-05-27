import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./image/logo.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h4" align="left">
          <img src={logo} alt="logo" height="65" />
        </Typography>
      </AppBar>
    </Container>
  );
};

export default App;
