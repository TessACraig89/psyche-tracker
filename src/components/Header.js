import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <h1 class="headerTitle">Psyche Tracker</h1>
        <h2 class="headerSubtitle">{"A personal logger and tracker of one's emotional and mental health"}</h2>
      </header>
    )
  }
}

export default Header
