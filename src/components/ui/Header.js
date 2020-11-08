import React from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { makeStyles, useTheme } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
    paddingTop: "1rem",
    paddingLeft: "5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2rem",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em",
  },
  tabContainer: {
    marginLeft: "2rem",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 50,
    "&:hover": {
      color: theme.palette.common.veryDark,
    },
  },
  buttonContainer: {
    width: "15em",
    marginLeft: "auto",
    marginRight: "2em",
  },
  signupButton: {
    backgroundColor: theme.palette.common.cyan,
    height: 35,
    width: 90,
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "0.8rem",
    borderRadius: 50,
    marginLeft: 10,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
    },
  },
  loginButton: {
    textTransform: "capitalize",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: theme.palette.grey[700],

    "&:hover": {
      background: "none",
      color: theme.palette.secondary.dark,
    },
  },
  logo: {
    width: "7em",
  },
}));

function Header({ isNavOpen, setIsNavOpen }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  React.useEffect(() => {
    trigger && setIsNavOpen(false);
  }, [trigger]);

  function ElevationScroll(props) {
    const { children } = props;
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      style: { background: trigger ? "#fff" : "none" },
    });
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="primary"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} />
            <Hidden xsDown>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="menu tabs"
                className={classes.tabContainer}
                indicatorColor="#fff"
              >
                <Tab
                  label="Features"
                  className={classes.tab}
                  component={Link}
                  disableRipple
                />
                <Tab
                  label="Pricing"
                  className={classes.tab}
                  component={Link}
                  disableRipple
                />
                <Tab
                  label="Resources"
                  className={classes.tab}
                  component={Link}
                  disableRipple
                />
              </Tabs>
            </Hidden>
            <Grid
              container
              direction="row"
              justify="flex-end"
              className={classes.buttonContainer}
            >
              <Hidden xsDown>
                <Grid item>
                  <Button className={classes.loginButton} disableRipple>
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.signupButton} disableRipple>
                    Sign Up
                  </Button>
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Scroll to="top" smooth={true}>
                  <IconButton
                    aria-label="hamburger"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                  >
                    <MenuIcon color="secondary" style={{ fontSize: "2rem" }} />
                  </IconButton>
                </Scroll>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
