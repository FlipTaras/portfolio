import React, { useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(
  ({ lightMode, title, tag, titleWidth, smallTitleWidth, classNames }) => {
    useEffect(() => {
      document.documentElement.style.setProperty("--titleWidth", titleWidth);
      document.documentElement.style.setProperty(
        "--smallTitleWidth",
        smallTitleWidth
      );
    }, [titleWidth, smallTitleWidth]);
    const titleClassNames = classnames(
      "titleComponent",
      lightMode && "titleComponent--lightMode",
      classNames
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
  }
);
