import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ children, lightMode }) => {
  const sectionClassNames = classnames(
    "section",
    lightMode && "section--lightMode"
  );
  return <section className={sectionClassNames}>{children}</section>;
});
