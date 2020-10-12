import * as actionType from "../actions";

const initialState = {
  loading: false,
  lightMode: false,
  activeNav: null,
  activeSideBar: false,
  navInfoElements: false,
  pageIndex: "0",
  width: window.innerWidth,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_WIDTH:
      return { ...state, width: action.payload };
    case actionType.SET_PAGEINDEX:
      return { ...state, pageIndex: action.payload };
    case actionType.SET_NAV_INFOELEMENTS:
      return { ...state, navInfoElements: action.payload };
    case actionType.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionType.TOGGLE_LIGHTMODE:
      return {
        ...state,
        lightMode: action.payload ? action.payload : !state.lightMode,
      };
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
