import React, {Component} from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return (
      <div className="header">
        <header>
          <h1 class="headerTitle">Psyche Tracker</h1>
          <h2 class="headerSubtitle">{"A personal logger and tracker of one's emotional and mental health"}</h2>
          <img src={require("../static/images/heart&brain.png")}></img>
        </header>
      </div>
    )
  }
}

export default Header
