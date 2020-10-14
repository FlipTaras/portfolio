import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setLoading,
  setActiveNav,
  toggleSideBar,
  setSideBar,
  setNavInfoElements,
  toggleLightMode,
} from "../static/store/actions";
import Image from "../static/images/logo.png";
import classnames from "classnames";
import { Transition } from "react-transition-group";
import NavBarElement from "./NavBarElement";

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
  setNavInfoElements,
  width,
  toggleLightMode,
  lightMode,
}) => {
  const navbarClassNames = classnames(sidebar ? "sidebar" : "navbar");

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
      if (to === "/projects") {
        if (lightMode) toggleLightMode(false);
      }
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
              <NavBarElement
                pathname="/about"
                linkText="Learn about me"
                linkTitle="About"
                id="about"
                linkIcon="far fa-user navbar__icon"
                delayRedirect={delayRedirect}
              />
              <NavBarElement
                pathname="/skills"
                linkText="My Skills"
                linkTitle="Skills"
                id="skills"
                linkIcon="far fa-lightbulb navbar__icon"
                delayRedirect={delayRedirect}
              />
              <NavBarElement
                pathname="/projects"
                linkText="My Projects"
                linkTitle="Projects"
                id="projects"
                linkIcon="far fa-eye navbar__icon"
                delayRedirect={delayRedirect}
              />
              <NavBarElement
                pathname="/contact"
                linkText="Contact Me"
                linkTitle="Contact"
                id="contact"
                linkIcon="far fa-envelope navbar__icon"
                delayRedirect={delayRedirect}
              />
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
  toggleLightMode,
};
export default connect(mapStateToProps, mapActionToProps)(withRouter(Navbar));
