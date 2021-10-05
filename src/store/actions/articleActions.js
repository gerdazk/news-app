import {
  SET_ALL_ARTICLES,
  SET_FILTERED_ARTICLES,
  SET_FULL_ARTICLE,
} from "./actionNames";

export const setAllArticles = (data) => {
  return {
    type: SET_ALL_ARTICLES,
    payload: data,
  };
};

export const setFilteredArticles = (data) => {
  return {
    type: SET_FILTERED_ARTICLES,
    payload: data,
  };
};

export const setFullArticle = (data) => {
  return {
    type: SET_FULL_ARTICLE,
    payload: data,
  };
};
