import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import searchReducer from "./searchReducer";
import sourceReducer from "./sourceReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  sources: sourceReducer,
  search: searchReducer,
  loading: loadingReducer,
});

export default rootReducer;
