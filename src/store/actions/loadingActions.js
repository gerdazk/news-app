import { SET_LOADING } from "./actionNames";

export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
