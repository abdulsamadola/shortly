import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./ui/LandingPage";

function App() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline />
        {/**Hack to go up for Nav incase user not there yet! */}
        <div id="top" />
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LandingPage isNavOpen={isNavOpen} {...props} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
