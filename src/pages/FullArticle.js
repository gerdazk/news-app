import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { setFullArticle } from "../store/actions/articleActions";
import { setLoading } from "../store/actions/loadingActions";
import { NewsApi } from "../services/api";
import placeholder from "../assets/placeholder.jpeg";
import HomeButton from "../components/HomeButton";
import { useHistory } from "react-router-dom";
import ReadMoreButton from "../components/ReadMoreButton";

const resolveImageUrl = (article) => {
  if (article.urlToImage && article.urlToImage !== "null")
    return article.urlToImage;
  return placeholder;
};

const decode = (data) => data.split("*").join(" ");

export default function FullArticle() {
  const id = decode(useParams().id);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const loading = useSelector((state) => state.loading);
  const sources = useSelector((state) => state.sources);
  let history = useHistory();

  const getSourceId = () => {
    return sources.selected ? sources.selected.id : "";
  };

  const getData = (id, source) => {
    NewsApi.getFiltered(id, source)
      .then((data) => {
        if (data.totalResults < 1 || id === "404") {
          dispatch(setFullArticle(undefined));
          history.push("/404");
        } else {
          dispatch(setFullArticle(data.articles[0]));
        }
      })
      .catch((data) => console.error(data))
      .finally(() => dispatch(setLoading(false)));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    const sourceId = getSourceId();
    getData(id, sourceId);
  }, []);

  const article = articles.full;
  if (loading.ongoing || !article) return <Loading />;

  return (
    <div className="fullArticle">
      <div>
        <img src={resolveImageUrl(article)} className="articleImage" />
        <HomeButton text="Back to home page" />
      </div>
      <div className="articleTextContainer">
        <div className="articleSource">{`${article.source.name} - ${article.author}`}</div>
        <div className="articleDate">{article.publishedAt.slice(0, 10)}</div>
        <h2>{article.title}</h2>
        <hr className="longLine" />
        <div className="articleDescription">{article.description}</div>
        <hr />
        <div>{article.content}</div>
        <ReadMoreButton url={article.url} />
      </div>
    </div>
  );
}
