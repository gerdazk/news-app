import { SET_SEARCH_INPUT } from "./actionNames";

export const setSearchInput = (data) => {
  return {
    type: SET_SEARCH_INPUT,
    payload: data,
  };
};
