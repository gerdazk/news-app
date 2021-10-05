import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Article from "./Article";
import Loading from "./Loading";
import { setAllArticles } from "../store/actions/articleActions";
import { setLoading } from "../store/actions/loadingActions";
import { NewsApi } from "../services/api";

function Articles() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const sources = useSelector((state) => state.sources);
  const loading = useSelector((state) => state.loading);

  const getSourceId = () => {
    return sources.selected ? sources.selected.id : undefined;
  };

  const getData = (id) => {
    NewsApi.getAll(id)
      .then((data) => dispatch(setAllArticles(data.articles)))
      .catch((data) => console.error(data))
      .finally(() => dispatch(setLoading(false)));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    const id = getSourceId();
    if (!id) return;
    getData(id);
  }, [sources.selected]);
  if (loading.ongoing) {
    return <Loading />;
  }

  const allArticles = articles.filtered || articles.all || [];
  return (
    <div className="articles">
      {allArticles.length > 0 &&
        allArticles.map((article) => (
          <Article key={article.url} article={article} />
        ))}
      {allArticles.length == 0 && "No articles to display"}
    </div>
  );
}

export default Articles;
