import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setLoading,
  setActiveNav,
  toggleSideBar,
  setSideBar,
} from "../static/store/actions";
import Image from "../static/images/logo.png";
import classnames from "classnames";
import { Transition } from "react-transition-group";

/* Animation Settings */
const defaultStyle = {
  transition: "transform .2s ease-out",
  transform: "translateX(-100%)",
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
    transform: "translateX(-100%)",
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
}) => {
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
    const to = e.target.getAttribute("href");
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push(to);
    }, 1200);
  };
  if (activeSideBar) {
    document.querySelector("body").classList.add("overscroll-off");
  } else {
    document.querySelector("body").classList.remove("overscroll-off");
  }

  const navbarClassNames = classnames(sidebar ? "sidebar" : "navbar");
  return (
    <Transition in={sidebar ? activeSideBar : true} timeout={0}>
      {(state) => (
        <nav
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className={navbarClassNames}
          onClick={() => setSideBar(false)}
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
                <i id="about" className="far fa-user navbar__icon"></i>
                <span className="navbar__text">About</span>
              </Link>
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/skills" }}
              >
                <i id="skills" className="far fa-lightbulb navbar__icon"></i>
                <span className="navbar__text">Skills</span>
              </Link>
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/projects" }}
              >
                <i id="projects" className="far fa-eye navbar__icon"></i>
                <span className="navbar__text">Projects</span>
              </Link>
              <Link
                className="navbar__element"
                onClick={delayRedirect}
                to={{ pathname: "/contact" }}
              >
                <i id="contact" className="far fa-envelope navbar__icon"></i>
                <span className="navbar__text">Contact</span>
              </Link>
            </div>
            <div className="navbar__links">
              <a className="navbar__link" href="https://github.com/FlipTaras">
                <i className="fab fa-github "></i>
              </a>
              <a
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
});
const mapActionToProps = {
  setLoading,
  setActiveNav,
  toggleSideBar,
  setSideBar,
};
export default connect(mapStateToProps, mapActionToProps)(withRouter(Navbar));
