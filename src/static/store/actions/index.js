export const SET_LOADING = "SET_LOADING";
export const TOGGLE_LIGHTMODE = "TOGGLE_LIGHTMODE";

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
