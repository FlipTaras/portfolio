import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ParagraphComponent from "../components/ParagraphComponent";
import Container from "../LayoutComponents/Container";
import InnerContainer from "../LayoutComponents/InnerContainer";
import Section from "../LayoutComponents/Section";
import ReactFullpage from "@fullpage/react-fullpage";
import FullpageButton from "../components/FullpageButton";
import classnames from "classnames";

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
    setLoading,
    setNavInfoElements,
    setSideBar,
    pageIndex,
    history: { push },
  }) => {
    const [loaded, setLoaded] = useState(null);
    const videoRefCheck = useRef(null);
    const videoRef = useRef(null);
    const [noDelay, setNoDelayAnimation] = useState(false);

    const paragraphText = [
      {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
    ];

    useEffect(() => {
      videoRefCheck.current.addEventListener("load", setLoaded(true));
      setTimeout(() => {
        setNoDelayAnimation(true);
      }, 5000);
    }, []);

    useEffect(() => {
      if (loaded) {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 2000);
      }
    }, [loaded, videoRef.current]);

    const delayRedirect = (e) => {
      const to = e.target.getAttribute("href");
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setNavInfoElements(false);
        setSideBar(false);
        setLoading(false);
        push(to);
      }, 1200);
    };

    return (
      <>
        <FullpageButton />
        {
          <video
            ref={videoRefCheck}
            style={{ display: "none" }}
            src="https://template-practice-88ad8.web.app/Videos/Tesla.mp4"
          ></video>
        }
        <ReactFullpage
          //fullpage options
          licenseKey={process.env.REACT_APP_FULLPAGE}
          scrollingSpeed={400} /* Options here */
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Section noToggle>
                  <Container classNames="projectPage__container">
                    <InnerContainer classNames="projectPage__innerContainer">
                      {pageIndex === "0" && (
                        <>
                          <h1
                            className={classnames(
                              "projectPage__title",
                              noDelay && "projectPage__title--nodelay"
                            )}
                          >
                            Tesla Clone
                          </h1>
                          {loaded && (
                            <Link
                              className="projectPage__videoContainer"
                              to="/tesla"
                              onClick={delayRedirect}
                            >
                              <video
                                loop
                                ref={videoRef}
                                preload="auto"
                                playsInline
                                muted
                                className={classnames(
                                  "projectPage__video",
                                  noDelay && "projectPage__video--nodelay"
                                )}
                              >
                                <source
                                  src="https://template-practice-88ad8.web.app/Videos/Tesla.mp4"
                                  type="video/mp4"
                                ></source>
                              </video>
                            </Link>
                          )}
                          <ParagraphComponent
                            classNames={classnames(
                              "projectPage__paragraph",
                              noDelay && "projectPage__paragraph--nodelay"
                            )}
                            paragraphText={paragraphText}
                          />
                        </>
                      )}
                    </InnerContainer>
                  </Container>
                </Section>
                <Section noToggle>
                  <Container classNames="projectPage__container">
                    <InnerContainer classNames="projectPage__innerContainer">
                      {pageIndex === "1" && (
                        <>
                          <h1 className="projectPage__title projectPage__title--nodelay">
                            Portfolio
                          </h1>
                          {loaded && (
                            <Link
                              className="projectPage__videoContainer"
                              to="/tesla"
                              onClick={delayRedirect}
                            >
                              <video
                                loop
                                // ref={videoRef}
                                preload="auto"
                                playsInline
                                muted
                                className="projectPage__video projectPage__video--nodelay"
                              >
                                <source
                                  src="https://template-practice-88ad8.web.app/Videos/Tesla.mp4"
                                  type="video/mp4"
                                ></source>
                              </video>
                            </Link>
                          )}
                          <ParagraphComponent
                            classNames="projectPage__paragraph projectPage__paragraph--nodelay"
                            paragraphText={paragraphText}
                          />
                        </>
                      )}
                    </InnerContainer>
                  </Container>
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </>
    );
  }
);
