import pageReducer from "./pageReducer";
import { combineReducers } from "redux";

export default combineReducers({
  page: pageReducer,
});
