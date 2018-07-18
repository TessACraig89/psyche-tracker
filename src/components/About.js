import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Link class="toLink" to={'/logs'}>START TRACKING YOUR PSYCHE</Link>
        <h1 class="Title"> About</h1>
        <p class="aboutP">
        Psyche Tracker is for tracking and analyzing the patterns in one’s emotional, mental, and physical health in order to fuel personal growth. Users are able to create logs containing a date, ratings for various attributes, and comments. My motivation for developing Psyche Tracker was that I noticed positive results when I used a spreadsheet mirroring this concept for my own self improvement.</p><p className="aboutPar2">Lorem ipsum dolor sit amet, soleat senserit vis eu. Eu velit possit electram eam, pro id quot primis recusabo. Cu est tale salutandi, sea ex mollis impedit. Oratio eripuit ornatus et duo, usu cibo viris ne. Mel id rebum dolore euismod, ignota option splendide ea sed.Lorem ipsum dolor sit amet, soleat senserit vis eu. Eu velit possit electram eam, pro id quot primis recusabo. Cu est tale salutandi, sea ex mollis impedit. Oratio eripuit ornatus et duo, usu cibo viris ne. Mel id rebum dolore euismod, ignota option splendide.</p>

        <a className="devLink" href="http://tesscraig.com">LEARN MORE ABOUT THE DEVELOPER</a>
      </div>
    );
  }
}

export default About;
