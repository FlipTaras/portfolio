import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { setLoading } from "../static/store/actions";
import Image from "../static/images/logo.png";

const Navbar = ({ loading, setLoading, history: { push } }) => {
  const [activeElement, setActiveElement] = useState(null);
  const delayRedirect = (e) => {
    const to = e.target.parentNode.getAttribute("href");
    if (activeElement) {
      activeElement.classList.remove("navbar__icon--active");
    }
    setActiveElement(e.target);
    e.target.classList.add("navbar__icon--active");

    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push(to);
    }, 1000);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link
          activeClassName="navbar__element--active"
          className="navbar__element"
          onClick={delayRedirect}
          to="/"
        >
          <img className="navbar__logo" src={Image} alt="logo" />
        </Link>
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
          to={{ pathname: "/contacts" }}
        >
          <i className="far fa-envelope navbar__icon"></i>
          <span className="navbar__text">Contact</span>
        </Link>
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
