import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Article from './components/Article';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (subreddit) => {
    setLoading(true);
    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => {
        setArticles(res.data.data.children);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(subreddit);
  };

  const handleDivClick = (text) => {
    setSubreddit(text);
    fetchData(text);
  };

  return (
    <div className="App">

      <NavBar handleSearch={handleSearch} subreddit={subreddit} setSubreddit={setSubreddit} />

      <div className="container">

        <Menu handleDivClick={handleDivClick} />

        <div className="articles d-flex flex-column align-items-center">
          {loading && 
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && articles.length === 0 &&
          <div class="d-flex justify-content-center">
            <p>No article found.</p>
          </div>
          }
          {!loading && !error && articles.length > 0 && articles.map((article, id) => <Article article={article.data} key={id} />)}
        </div>

      </div>

      
  
    </div>
  );
}

export default App;
