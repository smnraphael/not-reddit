import React, { useState } from 'react';
import axios from 'axios';
import SideBar from './components/SideBar';
import Article from './components/Article';
import Spinner from './components/Spinner';
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

      <div>
        <SideBar handleSearch={handleSearch} subreddit={subreddit} setSubreddit={setSubreddit} handleDivClick={handleDivClick} />
        <div className="articles d-flex flex-column align-items-center">
          {loading && <Spinner />}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && articles.length === 0 && <p>No article found.</p>}
          {!loading && !error && articles.length > 0 && articles.map((article, id) => <Article article={article.data} key={id} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
