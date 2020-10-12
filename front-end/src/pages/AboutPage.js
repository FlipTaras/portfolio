import React from "react";
import Icon from "../components/Icon";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import LineElement from "../components/LineElement";

export default () => {
  const paragraphText = [
    {
      text:
        "I'm a Front-end web developer with over one year experience, currently studying Computer Science in WSB University in Gdansk.",
    },
    {
      text:
        "Looking for a job where I can use all the knowledge I gained so far and where I can grow as a professional.",
    },
    {
      text:
        "Few words about me: I'm 21 years old, I love to read, trying to read at least one book a week. For the last year my biggest passion is coding. My web application I make using React.js library.",
    },
    {
      text: `My goal is to turn my hobby into a career. Check out examples of my work link1. Reach out to me link2, if you like what I make`,
    },
  ];

  return (
    <Section classNames="aboutPage__section">
      <InnerContainer classNames="aboutPage__innerContainer">
        <Icon icon="coffee" />
        <Icon icon="codeIcon" />
        <Icon icon="book" />
        <Icon icon="react" />
        <Container classNames="aboutPage__container">
          <TitleComponent
            titleWidth="41rem"
            smallTitleWidth="16rem"
            title="About"
            tag="h1"
            classNames="aboutPage__title"
          />
          <ParagraphComponent
            link1="/projects"
            link2="/contact"
            paragraphText={paragraphText}
          />
        </Container>
      </InnerContainer>
      <LineElement />
    </Section>
  );
};
