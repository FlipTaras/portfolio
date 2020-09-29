import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { toggleLightMode } from "../static/store/actions";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

const mapActionToProps = {
  toggleLightMode,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(({ toggleLightMode, lightMode }) => {
  const circleClassNames = classnames(
    "toggleDark__circle",
    lightMode && "toggleDark__circle--lightMode"
  );
  const toggleClassNames = classnames(
    "toggleDark__toggle",
    lightMode && "toggleDark__toggle--lightMode"
  );
  const lightModeHandler = () => {
    toggleLightMode();
  };
  return (
    <div onClick={lightModeHandler} className={toggleClassNames}>
      <div className={circleClassNames}></div>
    </div>
  );
});
