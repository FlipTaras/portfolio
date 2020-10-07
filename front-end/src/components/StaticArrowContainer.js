import React from "react";
import Icon from "../components/Icon";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(
  ({
    containerClassName,
    lightMode,
    icon,
    arrowClassNames,
    textLight,
    textDark,
    text,
    children,
    textOrder,
    childrenOrder,
    iconOrder,
  }) => {
    const containerClassNames = classnames(
      "staticArrowContainer",
      containerClassName
    );
    return (
      <div className={containerClassNames}>
        <Icon
          style={{ order: iconOrder }}
          icon={icon}
          classNames={arrowClassNames}
        />
        {textLight ? (
          <div style={{ order: textOrder }}>
            {lightMode ? (
              <p className="staticArrowContainer__textLightMode">{textLight}</p>
            ) : (
              <p className="staticArrowContainer__textDarkMode">{textDark}</p>
            )}
          </div>
        ) : (
          <p style={{ order: textOrder }}>{text}</p>
        )}
        <div style={{ order: childrenOrder }}>{children}</div>
      </div>
    );
  }
);
