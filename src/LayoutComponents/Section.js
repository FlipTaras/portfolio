import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import Hamburger from "hamburger-react";
import { toggleSideBar } from "../static/store/actions";
import Backdrop from "../components/Backdrop";
import Navbar from "../components/Navbar";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
  activeSideBar: state.page.activeSideBar,
});

const mapActionToProps = {
  toggleSideBar,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(({ children, lightMode, classNames, toggleSideBar, activeSideBar }) => {
  const sectionClassNames = classnames(
    "section",
    lightMode && "section--lightMode",
    classNames
  );
  const hamburgerClassNames = classnames(
    "hamburger",
    lightMode && "hamburger--lightMode"
  );
  return (
    <section className={sectionClassNames}>
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
      {children}
    </section>
  );
});
