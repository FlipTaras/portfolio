import React from "react";
import { connect } from "react-redux";
import { setLoading } from "../static/store/actions";

const mapActionToProps = {
  setLoading,
};

export default connect(
  null,
  mapActionToProps
)(({ setLoading }) => {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>About Page</div>
  );
});
