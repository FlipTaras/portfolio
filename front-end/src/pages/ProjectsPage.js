import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";
import FullpageButton from "../components/FullpageButton";
import ProjectSection from "../components/ProjectSection";

import { toggleLightMode } from "../static/store/actions";

const mapStateToProps = (state) => ({
  pageIndex: state.page.pageIndex,
  width: state.page.width,
  lightMode: state.page.lightMode,
});
const mapActionToProps = {
  toggleLightMode,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(({ pageIndex, width, toggleLightMode, lightMode }) => {
  const [loaded, setLoaded] = useState(null);
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  /* Change initial after 3s appear page */
  const [initial, setInitial] = useState(true);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("load", setLoaded(true));
    }
    setTimeout(() => {
      setInitial(false);
    }, 4000);
  }, []);

  /* Sections Ref for mobile animation */

  useEffect(() => {
    if (loaded && width > 900) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
        if (videoRef2.current) {
          videoRef2.current.play();
        }
      }, 2000);
    } else {
      if (pageIndex === "0" && videoRef.current) {
        videoRef.current.play();
      }
      if (pageIndex === "1" && videoRef2.current) {
        videoRef2.current.play();
      }
    }
  }, [loaded, pageIndex, width]);

  const paragraphTextTesla = [
    {
      text: `Fully responsive Tesla clone web application. Based on original design of tesla.com. Main page and ModelS pages are finished. Navigation is achieved with a usage of React Router.`,
    },
    {
      text: `React with hooks is used for the front end of the application. Redux is used for global state management. Sass for the styling. FullPage.js package is used for the layout on Product page.`,
    },
  ];

  const paragraphTextPortfolio = [
    {
      text:
        "Single Page Portfolio Application made with React and Redux. React-Router is used for client-side routing.",
    },
    {
      text:
        "Sass is used for styling. Website is decorated using different SVG animations. Layout on /projects route is achived using Fullpage.js package. Website is fully responsive",
    },
    {
      text:
        "Server side of the app is made using Node.js and Express.js. MongoDB is used as a database.",
    },
  ];

  return (
    <>
      <FullpageButton />
      <ReactFullpage
        licenseKey={process.env.REACT_APP_FULLPAGE}
        scrollingSpeed={400} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <ProjectSection
                userPageIndex="0"
                noToggle
                title="Tesla Clone (In Progress)"
                videoLink="https://template-practice-88ad8.web.app/Videos/Tesla.mp4"
                liveLink="https://axis-9f3a8.firebaseapp.com"
                gitLink="https://github.com/FlipTaras/tesla-clone"
                paragraphText={paragraphTextTesla}
                initial={initial}
                videoRef={videoRef}
              />
              <ProjectSection
                userPageIndex="1"
                noToggle
                title="Portfolio"
                videoLink="https://template-practice-88ad8.web.app/Videos/Portfolio.mp4"
                liveLink="https://tarasshynkarenko.com"
                gitLink="https://github.com/FlipTaras/portfolio"
                customVideoClassNames="projectPage__videoContainer--portfolio"
                customParagraphClassNames="projectPage__paragraph--portfolio"
                customGitLiveClassNames="liveGitElement--portfolio"
                paragraphText={paragraphTextPortfolio}
                initial={initial}
                videoRef={videoRef2}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
});
