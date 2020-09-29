import React from "react";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";

export default () => {
  const paragraphText = [
    {
      text: "Hello World",
    },
  ];
  return (
    <Section>
      <InnerContainer>
        <Container>
          <TitleComponent
            title="Contact"
            tag="h1"
            titleWidth="45rem"
            smallTitleWidth="19rem"
          />
          <ParagraphComponent paragraphText={paragraphText} />
        </Container>
      </InnerContainer>
    </Section>
  );
};
