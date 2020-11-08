import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import boostImage from "../../assets/bg-boost-desktop.svg";
import boostImageMoibile from "../../assets/bg-boost-mobile.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "15em",
    backgroundColor: theme.palette.secondary.dark,
    background: `url(${boostImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      background: `url(${boostImageMoibile})`,
      backgroundColor: theme.palette.secondary.dark,
      backgroundRepeat: "no-repeat",
    },
  },
  button: {
    borderRadius: 50,
    fontFamily: "Poppins",
    textTransform: "none",
    color: "#fff",
    height: 45,
    fontWeight: 600,
    fontSize: "1rem",
    marginTop: "0.8em",
    "&:hover": {
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Typography
              variant="h4"
              style={{ fontSize: matchesSM ? "1.2rem" : "inherent" }}
              gutterBottom
            >
              Boost your links today
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
