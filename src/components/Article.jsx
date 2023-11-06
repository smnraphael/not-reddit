import React from 'react';
import './Article.css';
import { BiSolidUpvote } from 'react-icons/bi';
import { BiSolidCommentDetail } from 'react-icons/bi';
import placeholder from '../assets/placeholder.jpg';

function Article({ article }) {

  const thumb = placeholder;

  const thumbnailSrc = article.thumbnail.includes('default') || article.thumbnail.includes('external') || article.thumbnail.includes('nsfw') || article.thumbnail.includes('self') || !article.thumbnail ? thumb : article.thumbnail;

  return (
    <a className="container-fluid" href={`https://www.reddit.com${ article.permalink }`} target="_blank">
      <div className="row">
        <div className="col col-1 d-flex">
          <div className="ups d-flex flex-column justify-content-center align-items-center">
            <BiSolidUpvote />
            <p>{ article.ups }</p>
          </div>
        </div>
        <div className="col col-3 d-flex">
          <img className="thumbnail" src={thumbnailSrc} alt="Thumbnail" />
        </div> 
        <div className="col column">

            <div className="content d-flex flex-column">

              <div className="title">
                <h4>{ article.title }</h4>
              </div>
              
              <div className="meta d-flex justify-content-between">
              <div className="author">
                <p>Posted by <span className="orange">{ article.author }</span></p>
              </div>
              <div className="comments d-flex flex-row align-items-center grey">
                <BiSolidCommentDetail />
                <p className="comment">{ article.num_comments }</p>
              </div>
            </div>
            
          </div>
        </div>
          
          

      </div>
      
    </a>
  )
}

export default Article;
