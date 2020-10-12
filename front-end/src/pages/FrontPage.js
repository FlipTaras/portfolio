import React from "react";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import FrontPageName from "../components/FrontPageName";
import LineElement from "../components/LineElement";
import Icon from "../components/Icon";
import classnames from "classnames";
import { connect } from "react-redux";
import { setNavInfoElements } from "../static/store/actions";

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
});

const mapActionToProps = {
  setNavInfoElements,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(({ lightMode, setNavInfoElements }) => {
  const spanText = [
    { text: "<html>" },
    { text: "</head>" },
    { text: "<title>Hello World!</title>" },
    { text: "</head>" },
    { text: "</html>" },
  ];
  const writingTextClassnames = classnames(
    "frontPage__writingText",
    lightMode && "frontPage__writingText--lightMode"
  );
  return (
    <Section classNames="frontPage">
      <Container classNames="frontPage__container">
        <InnerContainer classNames="frontPage__innerContainer">
          <Icon classNames="frontPage__jsIcon" icon="js" />
          <Icon classNames="frontPage__reactIcon" icon="react" />
          <Icon classNames="frontPage__sassIcon" icon="sass" />
          <FrontPageName />
          <div className="frontPage__textContainer">
            {spanText.map((el, i) => (
              <p
                className={`${writingTextClassnames} frontPage__writingText--${i}`}
                key={i}
              >
                {el.text}
              </p>
            ))}
          </div>
        </InnerContainer>
      </Container>
      <LineElement />
    </Section>
  );
});
