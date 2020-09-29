import React from "react";
import { connect } from "react-redux";
import StaticArrowContainer from "./StaticArrowContainer";
import ToggleElement from "./ToggleElement";
import classnames from "classnames";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});
export default connect(mapStateToProps)(({ lightMode }) => {
  const StaticToggleClassnames = classnames(
    "staticArrowContainer__toggle",
    lightMode && "staticArrowContainer__toggle--lightMode"
  );
  return (
    <StaticArrowContainer
      containerClassName={StaticToggleClassnames}
      icon="arrow"
      iconOrder="2"
      textOrder="3"
      childrenOrder="1"
      arrowClassNames={"arrow--toggle"}
      textLight="Too much light? Toggle then"
      textDark="Too Dark? Toggle then"
    >
      <ToggleElement />
    </StaticArrowContainer>
  );
});
