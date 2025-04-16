// ArticlePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from './data';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find((item) => item.id === parseInt(id, 10));

  if (!article) {
    return (
      <div className="article-container">
        <h1>Article Not Found</h1>
        <Link to="/" className="home-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <Link to="/" className="home-link">🏠 Home</Link>
      <div className="article-container">
        <img className="article-image" src={article.image} alt={article.alt} />
        <div className="article-content">
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
