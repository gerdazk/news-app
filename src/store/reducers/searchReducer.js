export default function (state = {}, action) {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return { ...state, input: action.payload };
    default:
      return state;
  }
}
