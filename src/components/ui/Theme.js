import { createMuiTheme } from "@material-ui/core/styles";

const shortlyCyan = "hsl(180, 66%, 49%)";
const shortlyDark = "hsl(257, 27%, 26%)";
const shortlyRed = "hsl(0, 87%, 67%)";
const shortlyVeryDark = "#000";

export default createMuiTheme({
  palette: {
    common: {
      red: shortlyRed,
      cyan: shortlyCyan,
      dark: shortlyDark,
      veryDark: shortlyVeryDark,
    },
    primary: {
      main: shortlyCyan,
    },
    secondary: {
      main: shortlyDark,
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      textTransform: "none",
      color: shortlyDark,
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Poppins",
      textTransform: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: "1.6rem",
    },
    h6: {
      fontFamily: "Poppins",
      textTransform: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "Poppins",
      textTransform: "none",
      color: "#d9d9d9",
      fontWeight: 900,
      fontSize: "1rem",
    },
    tab: {
      fontFamily: "Poppins",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
  //   overrides:{
  //   }
});
