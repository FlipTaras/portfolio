import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(
  ({ children, lightMode, classNames }) => {
    const containerClassNames = classnames(
      "container",
      lightMode && "container--lightMode",
      classNames
    );
    return <div className={containerClassNames}>{children}</div>;
  }
);
