export const SET_LOADING = "SET_LOADING";
export const TOGGLE_LIGHTMODE = "TOGGLE_LIGHTMODE";
export const SET_ACTIVE_NAV = "SET_ACTIVE_NAV";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const SET_SIDEBAR = "SET_SIDEBAR";
export const SET_NAV_INFOELEMENTS = "SET_NAV_INFOELEMENTS";
export const SET_PAGEINDEX = "SET_PAGEINDEX";
export const SET_WIDTH = "SET_WIDTH";

export const setWidth = (width) => (dispatch) => {
  dispatch({
    type: SET_WIDTH,
    payload: width,
  });
};
export const setPageIndex = (index) => (dispatch) => {
  dispatch({
    type: SET_PAGEINDEX,
    payload: index,
  });
};

export const setNavInfoElements = (payload) => (dispatch) => {
  dispatch({
    type: SET_NAV_INFOELEMENTS,
    payload,
  });
};

export const setSideBar = (payload) => (dispatch) => {
  dispatch({
    type: SET_SIDEBAR,
    payload,
  });
};
export const toggleSideBar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  });
};

export const toggleLightMode = (payload) => (dispatch) => {
  dispatch({
    type: TOGGLE_LIGHTMODE,
    payload,
  });
};

export const setLoading = (payload) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload,
  });
};

export const setActiveNav = (navElement) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_NAV,
    payload: navElement,
  });
};
