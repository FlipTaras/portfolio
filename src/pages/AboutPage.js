import React from "react";
import { connect } from "react-redux";
import { setLoading } from "../static/store/actions";
import CoffeeImage from "../static/images/Coffee.svg";

const mapActionToProps = {
  setLoading,
};

export default connect(
  null,
  mapActionToProps
)(({ setLoading }) => {
  return (
    <section className="aboutPage">
      <img className="coffeImage" src={CoffeeImage} alt="coffe" />
    </section>
  );
});
