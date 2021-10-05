export default function (state = {}, action) {
  switch (action.type) {
    case "SET_SOURCES":
      return { ...state, all: action.payload };
    case "SET_SELECTED_SOURCE":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
