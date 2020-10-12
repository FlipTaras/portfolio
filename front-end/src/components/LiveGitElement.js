import React from "react";
import Icon from "./Icon";
import classnames from "classnames";

export default ({ gitLink, liveLink, customGitLiveClassNames }) => {
  const liveGitElementClassNames = classnames(
    "liveGitElement",
    customGitLiveClassNames && customGitLiveClassNames
  );
  return (
    <div className={liveGitElementClassNames}>
      <div className="liveGitElement__arrowContainer">
        <Icon classNames="liveGitElement__arrowIcon" icon="arrow-straight" />
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="liveGitElement__link liveGitElement__link--live"
          href={liveLink}
        >
          Live
        </a>
      </div>
      <div className="liveGitElement__linksContainer">
        <a
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginBottom: "0", marginRight: "1rem" }}
          className="navbar__link navbar__link--git"
          href={gitLink}
        >
          <i className="fab fa-github "></i>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="liveGitElement__link"
          href={gitLink}
        >
          Code
        </a>
      </div>
    </div>
  );
};
