import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Icon from "./Icon";

const mapStateToProps = (state) => ({
  navInfoElements: state.page.navInfoElements,
  activeSideBar: state.page.activeSideBar,
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(
  ({
    delayRedirect,
    pathname,
    navInfoElements,
    activeSideBar,
    lightMode,
    linkText,
    linkTitle,
    linkIcon,
    id,
  }) => {
    const infoElementsClassNames = classnames(
      "navbar__infoTextContainer",
      activeSideBar && "navbar__infoTextContainer--active",
      lightMode && "navbar__infoTextContainer--lightMode"
    );
    return (
      <Link
        className="navbar__element"
        onClick={delayRedirect}
        to={{ pathname: pathname }}
      >
        {navInfoElements && (
          <div
            className={`${infoElementsClassNames} navbar__infoTextContainer--about`}
          >
            <Icon icon="arrow-straight" />
            <h1 data-link={pathname}>{linkText}</h1>
          </div>
        )}

        <i id={id} className={linkIcon}></i>
        <span className="navbar__text">{linkTitle}</span>
      </Link>
    );
  }
);
