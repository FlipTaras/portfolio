import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});
export default connect(mapStateToProps)(({ paragraphText, lightMode }) => {
  const paragraphClassNames = classnames(
    "paragraphComponent",
    lightMode && "paragraphComponent--lightMode"
  );
  return (
    <p className={paragraphClassNames}>
      <span className="titleComponent__tag titleComponent__tag--topP">
        {"<p>"}
      </span>
      {paragraphText.map((el, index) => (
        <span key={index}>{el.text}</span>
      ))}
      <span className="titleComponent__tag titleComponent__tag--bottomP">
        {"</p>"}
      </span>
    </p>
  );
});
