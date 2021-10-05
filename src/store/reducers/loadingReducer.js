export default function (state = {ongoing: true}, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {...state, ongoing: action.payload };
    default:
      return state;
  }
}
