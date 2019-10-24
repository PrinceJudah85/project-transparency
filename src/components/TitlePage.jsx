import React from 'react';
import { Link } from 'react-router-dom';
import HoCTheme from '../HoCTheme.mp3'

class TitlePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    let audio = new Audio(HoCTheme);
    return (
      <Link to="/main" onClick={async () => await
        audio.play()} >
        <div id="title-page">
          <h1 className="title-font"> Transparency </h1>
          <p id="quote">"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."<br /> <br /> - Benjamin Franklin</p>
        </div>
      </Link >
    )
  }
}
export default TitlePage;