import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import classnames from "classnames";
import { connect } from "react-redux";
import TitleComponent from "../components/TitleComponent";
import ParagraphComponent from "../components/ParagraphComponent";
import StaticArrowContainer from "../components/StaticArrowContainer";
import Section from "../LayoutComponents/Section";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";

const mapStateToProps = (state) => ({
  loading: state.page.loading,
  lightMode: state.page.lightMode,
});

export default connect(mapStateToProps)(({ loading, lightMode }) => {
  const [touchDevice, setTouchDevice] = useState(null);

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
        "Familiar knowledge of TypeScript, Git, Webpack, Node.js, Express.js, MongoDB.",
    },
    {
      text: "Visit my portfolio for work examples, contact me for more datails",
    },
  ];

  /* ClassNames for the dark mode */
  const staticBrightClassnames = classnames(
    "staticArrowContainer__bright",
    lightMode && "staticArrowContainer--lightMode"
  );

  return (
    <Section>
      <InnerContainer>
        <StaticArrowContainer
          containerClassName={staticBrightClassnames}
          icon="arrow"
          iconOrder="2"
          text={`${touchDevice ? "Click" : "Hover"} to add some colors`}
          textOrder="1"
          childrenOrder="3"
        >
          <Icon icon="redux" />
        </StaticArrowContainer>
        <Icon icon="js" />
        <Icon icon="react" />
        <Icon icon="sass" />
        <Icon icon="git" />
        <Container>
          <TitleComponent
            title="Skills"
            tag="h1"
            titleWidth="38rem"
            smallTitleWidth="14rem"
          />
          <ParagraphComponent paragraphText={paragraphText} />
        </Container>
      </InnerContainer>
    </Section>
  );
});
