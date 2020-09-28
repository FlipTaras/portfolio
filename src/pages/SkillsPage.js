import React, { useEffect, useState, useRef } from "react";
import Icon from "../components/Icon";
import classnames from "classnames";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loading: state.page.loading,
});

export default connect(mapStateToProps)(({ loading }) => {
  const [lightMode, setLightMode] = useState(false);
  const gitRef = useRef(null);
  const jsRef = useRef(null);
  const reduxRef = useRef(null);
  const sassRef = useRef(null);
  const reactRef = useRef(null);

  /* ClassNames for the dark mode */
  const arrowClassNames = classnames(
    "skillsPage__arrow",
    lightMode && "skillsPage__arrow--lightMode"
  );
  const skillPageClassNames = classnames(
    "skillsPage",
    lightMode && "skillsPage--lightMode",
    loading && "skillsPage--loading"
  );
  const innerContainerClassNames = classnames(
    "skillsPage__innerContainer",
    loading && "skillsPage__innerContainer--loading"
  );
  const containerClassNames = classnames(
    "skillsPage__container",
    lightMode && "skillsPage__container--lightMode"
  );
  const titleClassNames = classnames(
    "skillsPage__title",
    lightMode && "skillsPage__title--lightMode"
  );
  const smalltextContainerBrightClassNames = classnames(
    "skillsPage__smalltextContainer",
    "skillsPage__smalltextContainer__bright",
    lightMode && "skillsPage__smalltextContainer--lightMode"
  );
  const smalltextContainerToggleClassNames = classnames(
    "skillsPage__smalltextContainer",
    "skillsPage__smalltextContainer__toggle",
    lightMode && "skillsPage__smalltextContainer__toggle--lightMode"
  );
  const circleClassNames = classnames(
    "skillsPage__circle",
    lightMode && "skillsPage__circle--lightMode"
  );
  const toggleClassNames = classnames(
    "skillsPage__toggle",
    lightMode && "skillsPage__toggle--lightMode"
  );

  useEffect(() => {
    setTimeout(() => {
      gitRef.current.classList.remove("skillsPage__icon__git--initial");
      gitRef.current.classList.add("skillsPage__icon__git--animated");
      jsRef.current.classList.remove("skillsPage__icon__js--initial");
      jsRef.current.classList.add("skillsPage__icon__js--animated");

      reduxRef.current.classList.remove("skillsPage__icon__redux--initial");
      reduxRef.current.classList.add("skillsPage__icon__redux--animated");
      sassRef.current.classList.remove("skillsPage__icon__sass--initial");
      sassRef.current.classList.add("skillsPage__icon__sass--animated");
      reactRef.current.classList.remove("skillsPage__icon__react--initial");
      reactRef.current.classList.add("skillsPage__icon__react--animated");
    }, 3400);
  }, []);
  const lightModeHandler = () => {
    setLightMode((prevState) => !prevState);
  };
  return (
    <section className={skillPageClassNames}>
      <div className={innerContainerClassNames}>
        <div className={smalltextContainerBrightClassNames}>
          <p>Hover to make me brighter</p>
          <Icon icon="arrow" classNames={arrowClassNames} />
          <Icon
            reference={reduxRef}
            icon="redux"
            classNames="skillsPage__icon skillsPage__icon__redux skillsPage__icon__redux--initial"
            hovered="skillsPage__icon__redux--hovered"
          />
        </div>
        <div onClick={lightModeHandler} className={toggleClassNames}>
          <div className={circleClassNames}></div>
        </div>
        <div className={smalltextContainerToggleClassNames}>
          <Icon
            icon="arrow"
            classNames={arrowClassNames.concat(" skillsPage__arrow--light")}
          />
          {lightMode ? (
            <p className="skillsPage__smalltextContainer__text">
              Too much light? Toggle then
            </p>
          ) : (
            <p>Too dark? Toggle then</p>
          )}
        </div>
        <Icon
          icon="js"
          reference={jsRef}
          classNames="skillsPage__icon skillsPage__icon__js skillsPage__icon__js--initial"
          hovered="skillsPage__icon__js--hovered"
        />
        <Icon
          reference={reactRef}
          icon="react"
          classNames="skillsPage__icon skillsPage__icon__react skillsPage__icon__react--initial"
          hovered="skillsPage__icon__react--hovered"
        />
        <Icon
          reference={sassRef}
          icon="sass"
          classNames="skillsPage__icon skillsPage__icon__sass skillsPage__icon__sass--initial"
          hovered="skillsPage__icon__sass--hovered"
        />
        <Icon
          icon="git"
          reference={gitRef}
          classNames="skillsPage__icon skillsPage__icon__git skillsPage__icon__git--initial"
          hovered="skillsPage__icon__git--hovered"
        />
        <div className={containerClassNames}>
          <h1 className={titleClassNames}>
            <span className="skillsPage__tag skillsPage__tag--leftH1">
              {"<h1>"}
            </span>
            Skills
            <span className="skillsPage__tag skillsPage__tag--rightH1">
              {"</h1>"}
            </span>
          </h1>
          <p className="skillsPage__text">
            <span className="skillsPage__tag skillsPage__tag--topP">
              {"<p>"}
            </span>

            <span>
              The main area of my expretise is front end development (client
              side of the web)
            </span>
            <span>
              HTML, CSS (Sass), JS, building small and medium web apps with
              React.js, animations, responsive web apps, coding interactive
              layouts.
            </span>
            <span>
              Familiar knowledge of TypeScript, Git, Node.js, Express.js,
              MongoDB.
            </span>
            <span>
              Visit my portfolio for work examples, contact me for more datails
            </span>
            <span className="skillsPage__tag skillsPage__tag--bottomP">
              {"</p>"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
});
