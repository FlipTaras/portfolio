import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import Section from "../LayoutComponents/Section";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import ParagraphComponent from "./ParagraphComponent";

import {
  setLoading,
  setNavInfoElements,
  setSideBar,
} from "../static/store/actions";

const mapStateToProps = (state) => ({
  pageIndex: state.page.pageIndex,
});

const mapActionToProps = {
  setLoading,
  setNavInfoElements,
  setSideBar,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(
  ({
    pageIndex,
    title,
    userPageIndex,
    initial,
    paragraphText,
    videoRef,
    noToggle,
    videoLink,
    liveLink,
    gitLink,
    reference,
    classNames,
    customVideoClassNames,
    customParagraphClassNames,
    customGitLiveClassNames,
  }) => {
    const videoClassnames = classnames(
      "projectPage__videoContainer",
      customVideoClassNames && customVideoClassNames
    );
    return (
      <Section
        reference={reference}
        classNames={classNames}
        noToggle={noToggle}
      >
        <Container classNames="projectPage__container">
          <InnerContainer classNames="projectPage__innerContainer">
            <h1
              className={classnames(
                "projectPage__title",
                initial && "projectPage__title--initial",
                pageIndex === userPageIndex && "projectPage__title--animated"
              )}
            >
              {title}
            </h1>
            {/* {loaded && ( */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={videoClassnames}
              href={liveLink}
            >
              {pageIndex === userPageIndex && (
                <video
                  loop
                  ref={videoRef}
                  preload="auto"
                  playsInline
                  muted
                  className={classnames(
                    "projectPage__video",
                    initial && "projectPage__video--initial",
                    pageIndex === userPageIndex &&
                      "projectPage__video--animated"
                  )}
                >
                  <source src={videoLink} type="video/mp4"></source>
                </video>
              )}
            </a>
            <ParagraphComponent
              showLiveGit
              gitLink={gitLink}
              liveLink={liveLink}
              classNames={classnames(
                "projectPage__paragraph",
                initial && "projectPage__paragraph--initial",
                customParagraphClassNames && customParagraphClassNames,
                pageIndex === userPageIndex &&
                  "projectPage__paragraph--animated"
              )}
              paragraphText={paragraphText}
              customGitLiveClassNames={customGitLiveClassNames}
            />
          </InnerContainer>
        </Container>
      </Section>
    );
  }
);
