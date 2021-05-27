import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import logo from "./image/logo.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography variant="h4" align="left">
          <img className={classes.image} src={logo} alt="logo" height="65" />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
