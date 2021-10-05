import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredArticles } from "../store/actions/articleActions";
import {
  setAllSources,
  setSelectedSource,
} from "../store/actions/sourceActions";
import { SourceApi } from "../services/api";

const isEmpty = (obj) => {
  if (!obj || obj.length < 1) return true;
  return false;
};

function Dropdown() {
  const dispatch = useDispatch();
  const sources = useSelector((state) => state.sources);
  const allSources = sources.all || [];

  const handleChange = (e) => {
    document.getElementById("searchInput").value = null;
    const selected = allSources[e.target.selectedIndex];
    if (selected) {
      dispatch(setSelectedSource(selected));
    }
    dispatch(setFilteredArticles(undefined));
  };

  useEffect(() => {
    SourceApi.get()
      .then((data) => dispatch(setAllSources(data.sources)))
      .catch((data) => console.error(data));
  }, []);

  useEffect(() => {
    if (isEmpty(allSources) || sources.selected) return;
    dispatch(setSelectedSource(allSources[0]));
  }, [allSources]);

  if (!allSources || allSources.length < 1) return "";
  return (
    <select
      name="sources"
      className="sourcesSelect"
      value={sources?.selected?.name}
      onChange={handleChange}
    >
      {allSources.map((source) => (
        <option value={source.name} key={source.id}>
          {source.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
