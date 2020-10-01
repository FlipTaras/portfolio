import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(
  ({ children, lightMode, classNames }) => {
    const sectionClassNames = classnames(
      "section",
      lightMode && "section--lightMode",
      classNames
    );
    return <section className={sectionClassNames}>{children}</section>;
  }
);
