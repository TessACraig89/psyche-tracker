import React, {Component} from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return (
      <div className="header">
        <header>
            <img className="yingyangBlk" src={require("../static/images/heart&brain_black.png")}></img>
          <div className="headerText">
            <h1 class="headerTitle">Psyche Tracker</h1>
            <h2 class="headerSubtitle">{"A personal logger and tracker of one's emotional and mental health"}</h2>
          </div>
            <img className="yingyangWht" src={require("../static/images/heart&brain_white.png")}></img>
        </header>
      </div>
    )
  }
}

export default Header
