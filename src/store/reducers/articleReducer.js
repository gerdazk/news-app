export default function (state = {}, action) {
  switch (action.type) {
    case "SET_ALL_ARTICLES":
      return { ...state, all: action.payload };
    case "SET_FILTERED_ARTICLES":
      return { ...state, filtered: action.payload };
    case "SET_FULL_ARTICLE":
      return { ...state, full: action.payload };
    default:
      return state;
  }
}
