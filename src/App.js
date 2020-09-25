import React from "react";
import { Route, Switch } from "react-router";
import Loader from "./components/Loader";
import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { setLoading } from "./static/store/actions";

const mapActionToProps = {
  setLoading,
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <Loader />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

export default connect(null, mapActionToProps)(App);
