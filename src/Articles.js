// Articles.js
import React from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from './data';

const Articles = () => {
  return (
    <div className="articles">
      {articlesData.map((article, index) => (
        <Link to={`/article/${article.id}`} key={article.id} className="article-link">
          <div className={`article ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <img src={article.image} alt={article.alt} />
            <div className="text">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Articles;
