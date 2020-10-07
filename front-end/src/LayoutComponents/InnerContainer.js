import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loading: state.page.loading,
});

export default connect(mapStateToProps)(({ children, loading, classNames }) => {
  const innerContainerClassNames = classnames(
    "innerContainer",
    loading && "innerContainer--loading",
    classNames
  );
  return <div className={innerContainerClassNames}>{children}</div>;
});
