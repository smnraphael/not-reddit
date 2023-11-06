import React from 'react';
import './Article.css';

function Article({ article }) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <a className="post" href={`https://www.reddit.com${ article.permalink }`} target="_blank">
        <h3>{ article.title }</h3>
        <p>{ article.subreddit_name_prefixed }</p>
        <p>{ article.ups }</p>
        <img src={ article.thumbnail } />
      </a>
    </div>
  )
}

export default Article
