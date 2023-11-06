import React from 'react';
import './SideBar.css';
import logo from '../assets/logo.png';

function NavBar({ handleSearch, subreddit, setSubreddit, handleDivClick }) {
  return (
    <nav className="sidebar d-flex flex-column align-items-center">
      <div className="list-group list-group-flush">
        <a className="navbar-brand">
          <img className="logo" src={logo} />
        </a>
        <form className="form" onSubmit={handleSearch}>
          <input
          className="input"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={subreddit}
          onChange={e => setSubreddit(e.target.value)}
          />
        </form>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("popular")}>r/popular</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("askreddit")}>r/askreddit</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("worldnews")}>r/worldnews</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("todayilearned")}>r/todayilearned</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("movies")}>r/movies</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("askscience")}>r/askscience</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("space")}>r/space</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("food")}>r/food</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("books")}>r/books</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("funny")}>r/funny</a>
        <a className="list-group-item list-group-item-action" onClick={() => handleDivClick("programming")}>r/programming</a>
      </div>
  </nav>
  );
}

export default NavBar;
