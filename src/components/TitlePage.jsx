import React from 'react';
import { Link } from 'react-router-dom';

export default function TitlePage() {
  return (
    <Link to="/main">
      <div id="title-page">
        <h1 className="title-font"> Transparency </h1>
        <p id="quote">"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."<br /> <br /> - Benjamin Franklin</p>
      </div>
    </Link>
  )
}