import React from "react";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import CoffeeImage from "../static/images/Coffee.svg";

export default () => {
  const paragraphText = [
    {
      text: "Hello World",
    },
  ];
  return (
    <Section>
      <InnerContainer>
        <img className="coffeImage" src={CoffeeImage} alt="coffe" />
        <Container>
          <TitleComponent
            titleWidth="41rem"
            smallTitleWidth="16rem"
            title="About"
            tag="h1"
          />
          <ParagraphComponent paragraphText={paragraphText} />
        </Container>
      </InnerContainer>
    </Section>
  );
};
