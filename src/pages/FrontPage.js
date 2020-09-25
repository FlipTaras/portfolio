import React from "react";
import { connect } from "react-redux";
import { setLoading } from "../static/store/actions";

const mapActionToProps = {
  setLoading,
};
export default connect(
  null,
  mapActionToProps
)(() => {
  return <section>FrontPage</section>;
});
