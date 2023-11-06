import React from 'react';
import './Menu.css';

function Menu({ handleDivClick }) {
  return (
    <div className="menu">
      <a className="clickable-div" onClick={() => handleDivClick("popular")}>
        r/popular
      </a>
      <a className="clickable-div" onClick={() => handleDivClick("askreddit")}>
        r/askreddit
      </a>
      <a className="clickable-div" onClick={() => handleDivClick("todayilearned")}>
        r/todayilearned
      </a>
      <a className="clickable-div" onClick={() => handleDivClick("funny")}>
        r/funny
      </a>
      <a className="clickable-div" onClick={() => handleDivClick("programming")}>
        r/programming
      </a>
    </div>
  );
}

export default Menu;
