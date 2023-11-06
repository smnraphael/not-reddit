import React from 'react';
import './Article.css';
import { BiSolidUpvote } from 'react-icons/bi';
import { BiSolidCommentDetail } from 'react-icons/bi';
import placeholder from '../assets/placeholder.jpg';

function Article({ article }) {

  const thumb = placeholder;

  const thumbnailSrc = article.thumbnail.includes('default') || article.thumbnail.includes('external') || article.thumbnail.includes('nsfw') || article.thumbnail.includes('self') ? thumb : article.thumbnail;

  return (
    <a className="container" href={`https://www.reddit.com${ article.permalink }`} target="_blank">
      <div className="row">
        <div className="col">
          <div className="ups d-flex flex-column justify-content-center align-items-center">
            <BiSolidUpvote />
            <p>{ article.ups }</p>
          </div>
        </div>
        <div className="col">
          <img className="thumbnail" src={thumbnailSrc} alt="Thumbnail" />
        </div> 
        <div className="col-6">
            <div className="content">
              <div className="title">
                <h3>{ article.title }</h3>
              </div>
            <div className="meta d-flex flex-row justify-content-between align-items-end">
              <div className="author">
                <p>Posted by <span>{ article.author }</span></p>
              </div>
              <div className="comments d-flex flex-row align-items-center">
                <BiSolidCommentDetail />
                <p>{ article.num_comments }</p>
              </div>
            </div>
          </div>
        </div>
          
          

      </div>
      
    </a>
  )
}

export default Article;
