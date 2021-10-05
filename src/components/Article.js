import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import placeholder from "../assets/placeholder.jpeg";
import ReadMoreButton from "./ReadMoreButton";

const resolveImageUrl = (article) => {
  if (article.urlToImage && article.urlToImage !== "null")
    return article.urlToImage;
  return placeholder;
};

const encode = (data) => data.split(" ").join("*");

function Article({ article }) {
  return (
    <div className="article">
      <Link to={encode(article.title)} className="articleLink">
        <img src={resolveImageUrl(article)} className="articleImage" />
        <div className="articleTextContainer">
          <div className="articleSource" data-testid="articleSource">
            {article.source.name}
          </div>
          <div className="articleDate">{article.publishedAt.slice(0, 10)}</div>
          <h2>{article.title}</h2>
          <hr />
          <div>{article.description}</div>
        </div>
      </Link>
      <ReadMoreButton url={article.url} />
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
