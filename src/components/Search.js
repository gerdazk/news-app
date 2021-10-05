import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchInput } from "../store/actions/searchActions";
import { setFilteredArticles } from "../store/actions/articleActions";
import { NewsApi } from "../services/api";

function Search() {
  const search = useSelector((state) => state.search);
  const articles = useSelector((state) => state.articles);
  const sources = useSelector((state) => state.sources);
  const dispatch = useDispatch();

  const getData = (id, source) => {
    NewsApi.getFiltered(id, source)
      .then((data) => {
        dispatch(setFilteredArticles(data.articles));
      })
      .catch((data) => console.error(data));
  };

  const handleClick = () => {
    if (!articles.all) return;
    if (!search.input) {
      dispatch(setFilteredArticles(articles.all));
      return;
    }
    getData(search.input, sources.selected.id);
  };

  const handleChange = (e) => {
    dispatch(setSearchInput(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      handleClick();
    }
  };

  return (
    <div className="searchContainer">
      <input
        className="search"
        id="searchInput"
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="searchButton" id="searchButton" onClick={handleClick}>
        Search
      </div>
    </div>
  );
}

export default Search;
