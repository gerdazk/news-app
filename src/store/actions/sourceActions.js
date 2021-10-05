import { SET_SOURCES, SET_SELECTED_SOURCE } from "./actionNames";

export const setAllSources = (data) => {
  return {
    type: SET_SOURCES,
    payload: data,
  };
};

export const setSelectedSource = (data) => {
  return {
    type: SET_SELECTED_SOURCE,
    payload: data,
  };
};
