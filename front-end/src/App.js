import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router";
import Loader from "./components/Loader";
import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import classnames from "classnames";
import Hamburger from "hamburger-react";
import ProjectsPage from "./pages/ProjectsPage";
import Backdrop from "./components/Backdrop";
import NotFoundPage from "./pages/NotFoundPage";

import {
  setWidth,
  toggleLightMode,
  toggleSideBar,
} from "./static/store/actions";

const mapStateToProps = (state) => ({
  activeSideBar: state.page.activeSideBar,
  lightMode: state.page.lightMode,
});

const mapActionToProps = {
  setWidth,
  toggleLightMode,
  toggleSideBar,
};

function App({ toggleSideBar, lightMode, activeSideBar, setWidth }) {
  const hamburgerClassNames = classnames(
    "hamburger",
    lightMode && "hamburger--lightMode",
    activeSideBar && "hamburger--activeSideBar"
  );
  /* Check the width of the page */
  useEffect(() => {
    const unsubscribe = () => setWidth(window.innerWidth);
    window.addEventListener("resize", unsubscribe);
    return window.removeEventListener("resize", unsubscribe);
  }, [setWidth]);

  return (
    <div className="app">
      <Navbar sidebar={false} />
      <Backdrop />
      <div className={hamburgerClassNames}>
        <Navbar sidebar />
        <Hamburger
          toggle={toggleSideBar}
          toggled={activeSideBar}
          size="20"
          direction="right"
        />
      </div>
      <Loader />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapActionToProps)(withRouter(App));
