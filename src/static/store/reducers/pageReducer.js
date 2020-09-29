import * as actionType from "../actions";

const initialState = {
  loading: false,
  lightMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionType.TOGGLE_LIGHTMODE:
      return { ...state, lightMode: !state.lightMode };
    default:
      return state;
  }
};
