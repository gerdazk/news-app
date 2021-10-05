import "./App.css";
import React from "react";
import Articles from "../../components/Articles";
import Dropdown from "../../components/Dropdown";
import Search from "../../components/Search";
import rootReducer from "../../store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FullArticle from "../FullArticle";
import NoMatch from "../NoMatch";
import ErrorBoundary from "./ErrorBoundary";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/404">
              <NoMatch />
            </Route>
            <Route path="/:id">
              <FullArticle />
            </Route>
            <Route path="/">
              <div className="app">
                <Dropdown />
                <Search />
                <Articles />
              </div>
            </Route>
          </Switch>
        </Provider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
