import React, { useCallback } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { setLoading, setActiveNav } from "../static/store/actions";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});
const mapActionToProps = {
  setLoading,
  setActiveNav,
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
        const delayRedirect = (e) => {
          const to = e.target.getAttribute("href");
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            push(to);
          }, 1200);
        };
        return paragraphText.map((el, index) => {
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
      }, [link1, link2, paragraphText, push, setLoading, lightMode]);
      return (
        <p className={paragraphClassNames}>
          <span className="titleComponent__tag titleComponent__tag--topP">
            {"<p>"}
          </span>
          {renderParagraphText()}
          <span className="titleComponent__tag titleComponent__tag--bottomP">
            {"</p>"}
          </span>
        </p>
      );
    }
  )
);
