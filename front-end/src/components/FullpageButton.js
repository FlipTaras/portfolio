import React, { useState, useEffect, useCallback } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setPageIndex } from "../static/store/actions";

const mapActionToProps = {
  setPageIndex,
};

export default connect(
  null,
  mapActionToProps
)(({ setPageIndex }) => {
  const [active, setActive] = useState("tesla");
  const ButtonElements = [
    {
      link: "#tesla",
      active: true,
      className: classnames(
        "fullpage__element",
        active === "tesla" && "fullpage__element--active"
      ),
      title: "tesla",
    },
    {
      link: "#portfolio",
      active: false,
      className: classnames(
        "fullpage__element",
        active === "portfolio" && "fullpage__element--active"
      ),
      title: "portfolio",
    },
  ];

  /* Change the active class when user changing the section */
  const darkAndActiveCheck = useCallback(() => {
    const index = document
      .querySelector("body")
      .classList.value.split(" ")[0]
      .split("-")[2];
    if (index) {
      setPageIndex(index);
      setActive(ButtonElements[index]?.title);
    }
  }, [ButtonElements, setPageIndex]);

  useEffect(() => {
    const darkAndActiveTimer = () =>
      window.setTimeout(() => {
        darkAndActiveCheck();
      }, 200);

    /* For scroll navigation */
    window.addEventListener("wheel", darkAndActiveCheck);

    // /* For key navigation */
    window.addEventListener("keydown", darkAndActiveTimer);

    /* For Phones */
    window.addEventListener("touchmove", darkAndActiveCheck);
    return () => {
      window.removeEventListener("touchmove", darkAndActiveCheck);
      window.removeEventListener("wheel", darkAndActiveCheck);
      window.removeEventListener("keydown", darkAndActiveTimer);
    };
  }, [darkAndActiveCheck]);

  const clickHandler = (index, el) => {
    if (window.fullpage_api) {
      setActive(el.title);
      window.fullpage_api.moveTo(index);
      darkAndActiveCheck();
    }
  };

  return (
    <div id="fp-nav" className="fullpage">
      <ul className="fullpage__buttons">
        {ButtonElements.map((el, index) => (
          <li
            onClick={() => clickHandler(index + 1, el)}
            key={index}
            className={el.className}
          >
            <a href={el.link} className="fullpage__link">
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
