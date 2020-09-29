import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ lightMode, title, tag }) => {
  const titleClassNames = classnames(
    "titleComponent",
    lightMode && "titleComponent--lightMode"
  );
  return (
    <h1 className={titleClassNames}>
      <span className="titleComponent__tag titleComponent__tag--leftH1">
        {`<${tag}>`}
      </span>
      {title}
      <span className="titleComponent__tag titleComponent__tag--rightH1">
        {`</${tag}>`}
      </span>
    </h1>
  );
});
