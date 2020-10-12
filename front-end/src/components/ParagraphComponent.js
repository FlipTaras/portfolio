import React, { useCallback } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setLoading,
  setActiveNav,
  setNavInfoElements,
  setSideBar,
} from "../static/store/actions";
import LiveGitElement from "./LiveGitElement";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
  width: state.page.width,
});
const mapActionToProps = {
  setLoading,
  setActiveNav,
  setNavInfoElements,
  setSideBar,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(
  withRouter(
    ({
      paragraphText,
      lightMode,
      link1,
      link2,
      setLoading,
      history: { push },
      classNames,
      setNavInfoElements,
      setSideBar,
      width,
      showLiveGit,
      gitLink,
      liveLink,
      customGitLiveClassNames,
    }) => {
      const paragraphClassNames = classnames(
        "paragraphComponent",
        lightMode && "paragraphComponent--lightMode",
        classNames
      );

      const renderParagraphText = useCallback(() => {
        const linkClassNames = classnames(
          "paragraphComponent__link",
          lightMode && "paragraphComponent__link--lightMode"
        );

        return paragraphText.map((el, index) => {
          const delayRedirect = (e) => {
            const to = e.target.getAttribute("href");
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setNavInfoElements(false);
              setSideBar(false);
              setLoading(false);
              push(to);
            }, 1200);
          };

          if (el.text.includes("link1") || el.text.includes("link2")) {
            const splitFirst = el.text.split("link1");
            if (el.text.includes("link2")) {
              const splitSecond = splitFirst[1].split("link2");
              return (
                <span key={index}>
                  {splitFirst[0]}
                  <Link
                    className={linkClassNames}
                    onClick={delayRedirect}
                    to={link1}
                  >
                    here
                  </Link>
                  {splitSecond[0]}
                  {
                    <Link
                      className={linkClassNames}
                      onClick={delayRedirect}
                      to={link2}
                    >
                      here
                    </Link>
                  }
                  {splitSecond[1]}
                </span>
              );
            }

            return (
              <span key={index}>
                {splitFirst[0]}
                <a href={link1}>here</a>
                {splitFirst[1]}
              </span>
            );
          } else {
            return <span key={index}>{el.text}</span>;
          }
        });
      }, [
        link1,
        link2,
        paragraphText,
        push,
        setLoading,
        lightMode,
        setNavInfoElements,
        setSideBar,
      ]);
      return (
        <>
          <div className={paragraphClassNames}>
            {showLiveGit && width <= 1100 && (
              <LiveGitElement
                customGitLiveClassNames={customGitLiveClassNames}
                gitLink={gitLink}
                liveLink={liveLink}
              />
            )}
            <span className="titleComponent__tag titleComponent__tag--topP">
              {"<p>"}
            </span>
            {renderParagraphText()}
            <span className="titleComponent__tag titleComponent__tag--bottomP">
              {"</p>"}
            </span>
            {showLiveGit && width > 1100 && (
              <LiveGitElement
                customGitLiveClassNames={customGitLiveClassNames}
                gitLink={gitLink}
                liveLink={liveLink}
              />
            )}
          </div>
        </>
      );
    }
  )
);
