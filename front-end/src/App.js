import React from "react";
import { Route, Switch, withRouter } from "react-router";
import Loader from "./components/Loader";
import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { setLoading, setActiveNav } from "./static/store/actions";
import ProjectsPage from "./pages/ProjectsPage";

const mapActionToProps = {
  setLoading,
  setActiveNav,
};

function App() {
  return (
    <div className="app">
      <Navbar sidebar={false} />
      <Loader />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default connect(null, mapActionToProps)(withRouter(App));
