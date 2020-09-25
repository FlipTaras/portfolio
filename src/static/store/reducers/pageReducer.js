import * as actionType from "../actions";

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
