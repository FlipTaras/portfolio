import * as actionType from "../actions";

const initialState = {
  loading: false,
  lightMode: false,
  activeNav: null,
  activeSideBar: false,
  navInfoElements: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_NAV_INFOELEMENTS:
      return { ...state, navInfoElements: action.payload };
    case actionType.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionType.TOGGLE_LIGHTMODE:
      return { ...state, lightMode: !state.lightMode };
    case actionType.SET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload };
    case actionType.TOGGLE_SIDEBAR:
      return { ...state, activeSideBar: !state.activeSideBar };
    case actionType.SET_SIDEBAR:
      return { ...state, activeSideBar: action.payload };
    default:
      return state;
  }
};
