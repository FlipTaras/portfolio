import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { toggleSideBar } from "../static/store/actions";
import ToggleLightModeComponent from "../components/ToggleLightModeComponent";

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
)(({ children, lightMode, classNames, noToggle, reference }) => {
  const sectionClassNames = classnames(
    "section",
    lightMode && "section--lightMode",
    classNames
  );
  return (
    <section ref={reference} className={sectionClassNames}>
      {!noToggle && <ToggleLightModeComponent />}
      {children}
    </section>
  );
});
