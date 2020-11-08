import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.veryDark,
    height: "20em",
    padding: "3em",
    paddingLeft: "5em",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2rem",
    },
  },
  button: {
    textTransform: "capitalize",
    fontWeight: 700,
    fontFamily: "Poppins",
    marginBottom: "0.7em",
    textDecoration: "none",
    color: theme.palette.grey[700],
    "&:hover": {
      background: "none",
      color: theme.palette.common.cyan,
    },
  },
  bottomNavTitle: {
    marginBottom: "1em",
  },
  socailIcon: {
    width: 18,
    cursor: "pointer",
    marginTop: "0.5rem",
    "&:hover": {
      background: theme.palette.common.cyan,
      borderRadius: 2.5,
    },
  },
  bottomNavContainer: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    width: "7em",
  },
}));

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const featureLists = [
    { title: "Link Shortnening", href: "/" },
    { title: "Branded Links", href: "/" },
    { title: "Analytics", href: "/" },
  ];

  const resourceLists = [
    { title: "Blog", href: "/" },
    { title: "Developers", href: "/" },
    { title: "Support", href: "/" },
  ];

  const companyLists = [
    { title: "About", href: "/" },
    { title: "Our Team", href: "/" },
    { title: "Careers", href: "/" },
    { title: "Contact", href: "/" },
  ];

  const socialIcons = [
    { icon: facebookIcon, href: "https://www.facebook.com" },
    { icon: twitterIcon, href: "https://www.twitter.com" },
    { icon: pinterestIcon, href: "https://www.pinterest.com" },
    { icon: instagramIcon, href: "https://www.instagram.com" },
  ];
  return (
    <footer className={classes.container}>
      <Grid
        container
        direction="column"
        alignItems={matchesXS ? "center" : undefined}
      >
        <Grid item style={{ textAlign: matchesXS ? "center" : undefined }}>
          <Grid
            container
            direction="row"
            justify={matchesXS ? "center" : undefined}
            spacing={matchesXS ? 3 : undefined}
          >
            <Grid item md={2}>
              <img src={logo} className={classes.logo} />
            </Grid>
            <Grid item container direction="row" md={10}>
              <Grid
                item
                container
                direction={matchesXS ? "column" : "row"}
                justify="space-around"
              >
                <Grid item className={classes.bottomNavContainer}>
                  <Typography
                    variant="h6"
                    className={classes.bottomNavTitle}
                    gutterBottom
                  >
                    Features
                  </Typography>
                  {featureLists.map((feature, index) => (
                    <Grid item key={index} style={{ marginBottom: "1em" }}>
                      <Link className={classes.button}>{feature.title}</Link>
                    </Grid>
                  ))}
                </Grid>
                <Grid item className={classes.bottomNavContainer}>
                  <Typography
                    variant="h6"
                    className={classes.bottomNavTitle}
                    gutterBottom
                  >
                    Resources
                  </Typography>
                  {resourceLists.map((resource, index) => (
                    <Grid item key={index} style={{ marginBottom: "1em" }}>
                      <Link to="/link" className={classes.button}>
                        {resource.title}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
                <Grid item className={classes.bottomNavContainer}>
                  <Typography
                    variant="h6"
                    className={classes.bottomNavTitle}
                    gutterBottom
                  >
                    Company
                  </Typography>
                  {companyLists.map((company, index) => (
                    <Grid item key={index} style={{ marginBottom: "1em" }}>
                      <Link className={classes.button}>{company.title}</Link>
                    </Grid>
                  ))}
                </Grid>
                <Grid item className={classes.bottomNavContainer}>
                  <Grid
                    container
                    spacing={2}
                    justify={matchesXS ? "center" : undefined}
                  >
                    {socialIcons.map(({ icon, href }, index) => (
                      <Grid item key={index}>
                        <a href={href} target="_blank">
                          <img src={icon} className={classes.socailIcon} />
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
