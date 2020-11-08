import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";

import workIllustration from "../../assets/illustration-working.svg";
import shortenImage from "../../assets/bg-shorten-desktop.svg";
import shortenMobileImage from "../../assets/bg-shorten-mobile.svg";
import brandIcon from "../../assets/icon-brand-recognition.svg";
import recordIcon from "../../assets/icon-detailed-records.svg";
import customizableIcon from "../../assets/icon-fully-customizable.svg";

import CallToAction from "./CallToAction";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "5em",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      paddingTop: "1em",
      textAlign: "center",
    },
  },
  heroContainer: {
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  illustration: {
    width: "35em",
    [theme.breakpoints.down("sm")]: {
      width: "22em",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("md")]: {
      width: "22em",
      marginBottom: "2em",
    },
  },
  button: {
    borderRadius: 50,
    fontFamily: "Poppins",
    textTransform: "none",
    color: "#fff",
    fontWeight: 700,
    height: 40,
    width: 125,
    "&:hover": {
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5rem",
    },
  },
  copyButton: {
    borderRadius: 5,
    fontFamily: "Poppins",
    textTransform: "none",
    color: "#fff",
    fontWeight: 700,
    height: 30,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5rem",
    },
  },
  title: {
    marginBottom: "0.5rem",
    lineHeight: 1.4,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      paddingLeft: "1em",
      paddingRight: "1em",
      textAlign: "center",
    },
  },
  shorten: {
    marginTop: "5em",
    marginRight: "5em",
    marginLeft: "5em",
    paddingTop: "2em",
    paddingBottom: "2em",
    backgroundColor: theme.palette.secondary.dark,
    background: `url(${shortenImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "1em",
    borderRadius: 5,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
      marginLeft: "2em",
      background: `url(${shortenMobileImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  input: {
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: 700,
    fontFamily: "Poppins",
    height: 40,
  },
  outputContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: "5em",
    marginLeft: "5em",
    marginBottom: "2em",

    padding: theme.spacing(1, 2),
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
      marginLeft: "2em",
    },
  },
  advancedContainer: {
    margin: theme.spacing(10, 0),
  },
  advancedTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  advancedSubTitle: {
    maxWidth: "25em",
    textAlign: "center",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
      marginLeft: "2em",
    },
  },
  cardsWrapper: {
    margin: theme.spacing(8, 0),
    marginRight: "5em",
    marginLeft: "5em",
    marginBottom: "10em",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
      marginLeft: "2em",
      marginBottom: "5em",
    },
  },
  cardContainer: {
    minWidth: 275,
    maxWidth: 275,
    maxHeight: 220,
    minHeight: 220,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: "2rem",
    },
  },
  cardTitle: {
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight: 700,
    color: "#000",
    paddingTop: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  cardSubTitle: {
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight: 700,
    color: "#A9a9a9",
    lineHeight: 1.7,
  },
  cardLogoWrapper: {
    display: "flex",
    position: "absolute",
    backgroundColor: theme.palette.common.dark,
    borderRadius: 50,
    height: 80,
    width: 80,
    marginTop: -50,
    justifyItems: "center",
    [theme.breakpoints.down("xs")]: {
      left: "calc(50% - 2.8em)",
    },
  },
  cardLogo: {
    alignSelf: "center",
    margin: "0 auto",
  },
  cardSroke: {
    position: "absolute",
    height: 10,
    width: "25em",
    margin: "0 auto",
    top: "8em",
    zIndex: -1,
    backgroundColor: theme.palette.common.cyan,
    [theme.breakpoints.down("xs")]: {
      height: "45em",
      width: 8,
    },
  },
  mobileNavContainer: {
    backgroundColor: theme.palette.common.dark,
    borderRadius: 10,
    width: "85%",
    height: "28em",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2rem",
  },
  tab: {
    ...theme.typography.tab,
    fontSize: "1.2rem",
    color: "#fff",
    textDecoration: "none",
    margin: theme.spacing(2, 0),
    maxWidth: 200,
  },
  signupButton: {
    backgroundColor: theme.palette.common.cyan,
    height: 45,
    width: 245,
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "1.2rem",
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
    color: "#fff",
    fontSize: "1.2rem",

    margin: theme.spacing(2, 0),
    "&:hover": {
      background: "none",
    },
  },
}));
function LandingPage({ isNavOpen }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.only("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.only("xl"));

  const [shorten, setShorten] = React.useState("");
  const [shortenURL, setShortenURL] = React.useState();
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [copied, setIsCopied] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setChecked(true);
  }, []);

  const cardLists = [
    {
      title: "Brand Recognition",
      subtitle:
        "Boost your brand recongition with each click. Generic links don't mean athing. Branded links help instil confidence in your content.",
      icon: brandIcon,
    },
    {
      title: "Detailed Records",
      subtitle:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: recordIcon,
    },
    {
      title: "Fully Customizable",
      subtitle:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: customizableIcon,
    },
  ];
  /**
   * URL validator REGEX
   * @param {string}
   */
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  /**
   *This handles submission
   */
  const shortenHandler = () => {
    setShortenURL(undefined);

    if (shorten.length <= 0) {
      setError(true);
      setErrorMsg("Please add a link");
      return;
    }
    if (!validURL(shorten)) {
      setError(true);
      setErrorMsg("Please add a valid link");
      return;
    }
    setIsLoading(true);
    axios
      .post(
        "https://enye-cors.herokuapp.com/https://cleanuri.com/api/v1/shorten",
        { url: shorten }
      )
      .then((res) => {
        setShortenURL(res.data.result_url);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        setErrorMsg(error.message);
      });
  };

  /**
   * This will handle user input
   * @param {Event}  DOM event
   */
  const handleInput = (e) => {
    e.preventDefault();
    setShortenURL(undefined);

    const value = e.target.value.trim();
    if (value.length > 0) {
      setError(false);
    } else {
      setError(true);
      setErrorMsg("Please add a link");
    }

    setShorten(value);
  };

  /**
   * Copy Link to the clipboard
   */
  const copyHandle = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          {/** Hero Section */}
          <Grid container direction="row" className={classes.heroContainer}>
            {isNavOpen && (
              <Grid
                item
                style={{ margin: "auto" }}
                component={Card}
                elevation={2}
                className={classes.mobileNavContainer}
              >
                <div className={classes.tabContainer}>
                  <Link className={classes.tab} to="/">
                    Features
                  </Link>
                  <Link className={classes.tab} to="/">
                    Pricing
                  </Link>
                  <Link className={classes.tab} to="/">
                    Resources
                  </Link>
                  <hr
                    style={{
                      width: "80%",
                      marginLeft: "2rem",
                      marginRight: "2rem",
                    }}
                  />
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
                </div>
              </Grid>
            )}
            <Hidden mdUp>
              {!isNavOpen && (
                <Grid item style={{ margin: "auto" }}>
                  <img
                    src={workIllustration}
                    className={classes.illustration}
                    alt="Work Illustration"
                  />
                </Grid>
              )}
            </Hidden>

            <Grid
              item
              style={{
                maxWidth: matchesSM ? "40em" : "30em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid container direction="column">
                <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
                  <Grid item>
                    <Typography variant="h1" className={classes.title}>
                      More than just shorter links
                    </Typography>
                  </Grid>
                </Collapse>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.subtitle}
                  >
                    Build your brand's recongnition and get detailed insights on
                    how your links are performing.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item style={{ marginLeft: "auto" }}>
                <img
                  src={workIllustration}
                  className={classes.illustration}
                  alt="Work Illustration"
                />
              </Grid>
            </Hidden>
          </Grid>

          {/** Shorten Link Input Section */}
          <Grid className={classes.shorten}>
            <Grid container justify="space-around" direction="row" spacing={2}>
              <Grid item md={10} sm={12} xs={12}>
                <TextField
                  id="serach"
                  label=""
                  value={shorten}
                  error={error}
                  helperText={error ? errorMsg : ""}
                  placeholder="Shorten a link here..."
                  onChange={(e) => handleInput(e)}
                  fullWidth
                  variant="outlined"
                  autoComplete={false}
                  disabled={isLoading}
                  InputProps={{
                    disableUnderline: true,
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item md={2} sm={12} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{
                    borderRadius: 5,
                    marginBottom: 0,
                    width: matchesSM ? "100%" : 125,
                  }}
                  onClick={shortenHandler}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress color="primary" size={22} />
                  ) : (
                    " Shorten It!"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/** Copy Link Section */}
          {shortenURL && (
            <Grid
              component={Card}
              elevation={3}
              className={classes.outputContainer}
            >
              <Grid
                container
                direction={matchesXS ? "column" : "row"}
                justify="space-between"
                alignItems="center"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h6" color="inherit">
                    {shorten}
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <Grid item style={{ marginRight: 5 }}>
                      <Typography variant="h6" color="primary">
                        {shortenURL}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CopyToClipboard text={shortenURL}>
                        <Button
                          variant="contained"
                          color={copied ? "secondary" : "primary"}
                          onClick={copyHandle}
                          className={classes.copyButton}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </Button>
                      </CopyToClipboard>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {/**Advanced Stats Text Section */}
          <Grid className={classes.advancedContainer}>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    color="initial"
                    className={classes.advancedTitle}
                    gutterBottom
                  >
                    Advanced Statistics
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.advancedSubTitle}
                  >
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/**Advanced Stat Cards */}
          <Grid className={classes.cardsWrapper}>
            <Grid
              container
              direction="row"
              justify="center"
              spacing={matchesSM ? 6 : 4}
            >
              <div className={classes.cardSroke} />
              {cardLists.map(({ title, icon, subtitle }, index) => (
                <Grid item>
                  <Card
                    className={classes.cardContainer}
                    elevation={5}
                    key={index}
                    style={{
                      marginTop:
                        (matchesXL || matchesLG || matchesMD) &&
                        (index === 1
                          ? "2rem"
                          : index === 2
                          ? "4rem"
                          : undefined),
                    }}
                  >
                    <CardContent>
                      <div className={classes.cardLogoWrapper}>
                        <img
                          src={icon}
                          alt={title}
                          className={classes.cardLogo}
                        />
                      </div>
                      <Typography
                        color="textPrimary"
                        variant="h4"
                        className={classes.cardTitle}
                        gutterBottom
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                        className={classes.cardSubTitle}
                      >
                        {subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </React.Fragment>
  );
}
export default LandingPage;
