import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ children, lightMode }) => {
  const containerClassNames = classnames(
    "container",
    lightMode && "container--lightMode"
  );
  return <div className={containerClassNames}>{children}</div>;
});
