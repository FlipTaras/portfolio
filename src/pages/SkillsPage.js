import React, { useEffect, useState, useRef } from "react";
import Icon from "../components/Icon";
import classnames from "classnames";
import { connect } from "react-redux";
import TitleComponent from "../components/TitleComponent";
import ParagraphComponent from "../components/ParagraphComponent";
import StaticArrowContainer from "../components/StaticArrowContainer";
import ToggleLightModeComponent from "../components/ToggleLightModeComponent";

const mapStateToProps = (state) => ({
  loading: state.page.loading,
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ loading, lightMode }) => {
  const [touchDevice, setTouchDevice] = useState(null);
  const gitRef = useRef(null);
  const jsRef = useRef(null);
  const reduxRef = useRef(null);
  const sassRef = useRef(null);
  const reactRef = useRef(null);
  /* Check the touch screen device */
  useEffect(() => {
    try {
      document.createEvent("TouchEvent");
      setTouchDevice(true);
    } catch (e) {
      setTouchDevice(false);
    }
  }, []);

  const paragraphText = [
    {
      text:
        "The main area of my expretise is front end development (client side of the web)",
    },
    {
      text:
        "HTML, CSS (Sass), JS, building small and medium web apps with React.js, animations, responsive web apps, coding interactive layouts.",
    },
    {
      text:
        "Familiar knowledge of TypeScript, Git, Node.js, Express.js, MongoDB.",
    },
    {
      text: "Visit my portfolio for work examples, contact me for more datails",
    },
  ];

  /* ClassNames for the dark mode */

  const arrowClassNames = classnames(
    "skillsPage__arrow",
    lightMode && "skillsPage__arrow--lightMode"
  );
  const arrowHoverClassNames = classnames(
    "skillsPage__arrow",
    "skillsPage__arrow--light",
    lightMode && "skillsPage__arrow--lightMode"
  );
  const StaticToggleClassnames = classnames(
    "staticArrowContainer__toggle",
    lightMode && "staticArrowContainer__toggle--lightMode"
  );
  const staticBrightClassnames = classnames(
    "staticArrowContainer__bright",
    lightMode && "staticArrowContainer--lightMode"
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

  return (
    <section className={skillPageClassNames}>
      <div className={innerContainerClassNames}>
        <StaticArrowContainer
          containerClassName={staticBrightClassnames}
          icon="arrow"
          iconOrder="2"
          arrowClassNames={arrowClassNames}
          text={`${touchDevice ? "Click" : "Hover"} to add some colors`}
          textOrder="1"
          childrenOrder="3"
        >
          <Icon
            reference={reduxRef}
            icon="redux"
            classNames="skillsPage__icon skillsPage__icon__redux skillsPage__icon__redux--initial"
            hovered="skillsPage__icon__redux--hovered"
          />
        </StaticArrowContainer>
        <StaticArrowContainer
          containerClassName={StaticToggleClassnames}
          icon="arrow"
          iconOrder="2"
          textOrder="3"
          childrenOrder="1"
          arrowClassNames={arrowHoverClassNames}
          textLight="Too much light? Toggle then"
          textDark="Too Dark? Toggle then"
        >
          <ToggleLightModeComponent />
        </StaticArrowContainer>
        <div className="skillsPage__iconsContainer">
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
        </div>
        <div className={containerClassNames}>
          <TitleComponent title="Skills" tag="h1" />
          <ParagraphComponent paragraphText={paragraphText} />
        </div>
      </div>
    </section>
  );
});
