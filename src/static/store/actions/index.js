export const SET_LOADING = "SET_LOADING";

export const setLoading = (payload) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload,
  });
};
