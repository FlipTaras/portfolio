import React, { useEffect } from "react";
import { connect } from "react-redux";
import LineElement from "../components/LineElement";
import TitleComponent from "../components/TitleComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import { setSideBar } from "../static/store/actions";
import classnames from "classnames";

const mapActionToProps = {
  setSideBar,
};

const mapStateToProps = (state) => ({
  lightMode: state.page.lightMode,
  activeSideBar: state.page.activeSideBar,
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(({ setSideBar, lightMode, activeSideBar }) => {
  const messageClassNames = classnames(
    "notFoundPage__message",
    lightMode && "notFoundPage__message--lightMode"
  );
  const containerClassNames = classnames(
    "notFoundPage__container",
    activeSideBar && "notFoundPage__container--blured"
  );
  useEffect(() => {
    setTimeout(() => {
      setSideBar(true);
    }, 4000);
  }, [setSideBar]);

  return (
    <Section classNames="notFoundPage">
      <Container classNames={containerClassNames}>
        <InnerContainer classNames="notFoundPage__innerContainer">
          <TitleComponent
            classNames="notFoundPage__title"
            title="Ooops, Page Is Not Found 404"
            tag=""
          ></TitleComponent>
          <p className={`${messageClassNames} notFoundPage__message--1`}>
            It's seems like you got lost lemme help you out
          </p>
          <p className={`${messageClassNames} notFoundPage__message--2`}>
            Choose from the list on your left
          </p>
        </InnerContainer>
      </Container>
      <LineElement />
    </Section>
  );
});
