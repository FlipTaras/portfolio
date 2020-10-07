import React, { useEffect } from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import { toggleSideBar, setSideBar } from "../static/store/actions";

const defaultStyle = {
  transition: "opacity .2s ease-in-out",
  opacity: 0,
  display: "none",
};
const transitionStyles = {
  entering: { opacity: 0.8, display: "block" },
  entered: { opacity: 0.8, display: "block" },
  exiting: { opacity: 0.8, display: "block" },
  exited: { opacity: 0, display: "none" },
};

const mapStateToProps = (state) => ({
  activeSideBar: state.page.activeSideBar,
});

const mapActionToProps = {
  toggleSideBar,
  setSideBar,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(({ activeSideBar, setSideBar }) => {
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 900) {
        setSideBar(false);
      }
    };
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <Transition in={activeSideBar} timeout={200}>
      {(state) => (
        <div
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          onClick={() => setSideBar(false)}
          className="backdrop"
        ></div>
      )}
    </Transition>
  );
});
