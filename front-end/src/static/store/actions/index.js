export const SET_LOADING = "SET_LOADING";
export const TOGGLE_LIGHTMODE = "TOGGLE_LIGHTMODE";
export const SET_ACTIVE_NAV = "SET_ACTIVE_NAV";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const SET_SIDEBAR = "SET_SIDEBAR";

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
