import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setLoading,
  setActiveNav,
  toggleSideBar,
  setSideBar,
  setNavInfoElements,
} from "../static/store/actions";
import Image from "../static/images/logo.png";
import classnames from "classnames";
import { Transition } from "react-transition-group";
import Icon from "./Icon";

/* Animation Settings */
const defaultStyle = {
  transition: "transform .2s ease-out",
  transform: "translateX(-110%)",
};
const transitionStyles = {
  entering: {
    transform: "translateX(0)",
    transitionDelay: ".2s",
  },
  entered: {
    transform: "translateX(0)",
  },
  exiting: {
    transform: "translateX(0)",
    transitionDelay: "0s",
  },
  exited: {
    transform: "translateX(-110%)",
  },
};

const Navbar = ({
  activeNav,
  setActiveNav,
  setLoading,
  history,
  history: { push },
  sidebar,
  activeSideBar,
  setSideBar,
  navInfoElements,
  setNavInfoElements,
  width,
  lightMode,
}) => {
  const navbarClassNames = classnames(sidebar ? "sidebar" : "navbar");
  const infoElementsClassNames = classnames(
    "navbar__infoTextContainer",
    activeSideBar && "navbar__infoTextContainer--active",
    lightMode && "navbar__infoTextContainer--lightMode"
  );

  /* Set active nav Element UI */
  useEffect(() => {
    setActiveNav(
      document.getElementById(`${history.location.pathname.split("/")[1]}`)
    );
    if (activeNav) {
      activeNav.classList.add("navbar__icon--active");
    }
    return () => {
      if (activeNav) {
        activeNav.classList.remove("navbar__icon--active");
      }
    };
  }, [history.location.pathname, setActiveNav, activeNav]);

  const delayRedirect = (e) => {
    let to = e.target.getAttribute("href");
    if (!to) {
      to = e.target.dataset.link;
    }
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setNavInfoElements(false);
      setLoading(false);
      setSideBar(false);
      push(to);
    }, 1200);
  };
  /* Set infoElemet */
  useEffect(() => {
    if (activeSideBar) {
      document.querySelector("body").classList.add("overscroll-off");
      setNavInfoElements(true);
    } else {
      document.querySelector("body").classList.remove("overscroll-off");
      if (width < 1024) {
        setNavInfoElements(false);
      } else if (history.location.pathname === "/") {
        setNavInfoElements(true);
      } else {
        setNavInfoElements(false);
      }
    }
  }, [activeSideBar, history.location.pathname, setNavInfoElements, width]);

  return (
    <Transition in={sidebar ? activeSideBar : true} timeout={0}>
      {(state) => (
        <nav
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className={navbarClassNames}
        >
          <div className="navbar__container">
            <div className="navbar__logoContainer">
              <Link className="navbar__element" onClick={delayRedirect} to="/">
                <img className="navbar__logo" src={Image} alt="logo" />
              </Link>
            </div>
            <div className="navbar__linksContainer">
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/about" }}
              >
                {navInfoElements && (
                  <div
                    className={`${infoElementsClassNames} navbar__infoTextContainer--about`}
                  >
                    <Icon icon="arrow-straight" />
                    <h1 data-link="/about">Learn about me</h1>
                  </div>
                )}

                <i id="about" className="far fa-user navbar__icon"></i>
                <span className="navbar__text">About</span>
              </Link>

              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/skills" }}
              >
                {navInfoElements && (
                  <div
                    className={`${infoElementsClassNames} navbar__infoTextContainer--skills`}
                  >
                    <Icon icon="arrow-straight" />
                    <h1 data-link="/skills">My skills</h1>
                  </div>
                )}
                <i id="skills" className="far fa-lightbulb navbar__icon"></i>
                <span className="navbar__text">Skills</span>
              </Link>
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/projects" }}
              >
                {navInfoElements && (
                  <div
                    className={`${infoElementsClassNames} navbar__infoTextContainer--projects`}
                  >
                    <Icon icon="arrow-straight" />
                    <h1 data-link="/projects">My projects</h1>
                  </div>
                )}
                <i id="projects" className="far fa-eye navbar__icon"></i>
                <span className="navbar__text">Projects</span>
              </Link>
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/contact" }}
              >
                {navInfoElements && (
                  <div
                    className={`${infoElementsClassNames} navbar__infoTextContainer--contact`}
                  >
                    <Icon icon="arrow-straight" />
                    <h1 data-link="/contact">Contact me</h1>
                  </div>
                )}
                <i id="contact" className="far fa-envelope navbar__icon"></i>
                <span className="navbar__text">Contact</span>
              </Link>
            </div>
            <div className="navbar__links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="navbar__link"
                href="https://github.com/FlipTaras"
              >
                <i className="fab fa-github "></i>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="navbar__link"
                href="https://www.facebook.com/taras.shinkarenko/"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </nav>
      )}
    </Transition>
  );
};
const mapStateToProps = (state) => ({
  loading: state.page.loading,
  activeNav: state.page.activeNav,
  activeSideBar: state.page.activeSideBar,
  navInfoElements: state.page.navInfoElements,
  width: state.page.width,
  lightMode: state.page.lightMode,
});
const mapActionToProps = {
  setLoading,
  setActiveNav,
  toggleSideBar,
  setSideBar,
  setNavInfoElements,
};
export default connect(mapStateToProps, mapActionToProps)(withRouter(Navbar));
