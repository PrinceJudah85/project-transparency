import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div id="home">
        <Link exact to="/"> Home </Link>
      </div>
      <div id="title">
        <Link exact to="/"><h1 id="header-font">Transparency</h1></Link>
      </div>
    </header>
  )
}

export default Header