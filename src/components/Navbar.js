import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { setLoading } from "../static/store/actions";
import Image from "../static/images/logo.png";

const Navbar = ({ loading, setLoading, history: { push } }) => {
  const [activeElement, setActiveElement] = useState(null);
  const delayRedirect = (e) => {
    const to = e.target.getAttribute("href");
    console.log(e.target);
    if (activeElement) {
      activeElement.classList.remove("navbar__icon--active");
    }
    setActiveElement(e.target.childNodes[0]);
    if (e.target.childNodes[0]) {
      e.target.childNodes[0].classList.add("navbar__icon--active");
    }
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push(to);
    }, 1200);
  };
  return (
    <nav className="navbar">
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
            <i className="far fa-user navbar__icon"></i>
            <span className="navbar__text">About</span>
          </Link>
          <Link
            className="navbar__element"
            onClick={delayRedirect}
            to={{ pathname: "/skills" }}
          >
            <i className="far fa-lightbulb navbar__icon"></i>
            <span className="navbar__text">Skills</span>
          </Link>
          <Link
            className="navbar__element"
            onClick={delayRedirect}
            to={{ pathname: "/projects" }}
          >
            <i className="far fa-eye navbar__icon"></i>
            <span className="navbar__text">Projects</span>
          </Link>
          <Link
            className="navbar__element"
            onClick={delayRedirect}
            to={{ pathname: "/contact" }}
          >
            <i className="far fa-envelope navbar__icon"></i>
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
  );
};
const mapStateToProps = (state) => ({
  loading: state.page.loading,
});
const mapActionToProps = {
  setLoading,
};
export default connect(mapStateToProps, mapActionToProps)(withRouter(Navbar));
