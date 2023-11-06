import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

function NavBar({ handleSearch, subreddit, setSubreddit }) {
  return (
    <nav className="navbar">
        <a className="navbar-brand">
            <img className="logo" src={logo} />
            <h1>NotReddit</h1>
        </a>
        <form className="form" onSubmit={handleSearch}>
            <input
            className="input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={subreddit}
            onChange={e => setSubreddit(e.target.value)}
            />
        <button className="btn" type="submit"></button>
      </form>
    </nav>
  );
}

export default NavBar;
