import React, {Component} from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return (
      <div className="header">
        <header>
            <img id="yingyangBlk" src={require("../static/images/heart&brain_black.png")}></img>
          <div id="headerText">
            <h1 className="headerTitle">Psyche Tracker</h1>
            <h2 id="headerSubtitle">{"A personal logger and tracker of one's emotional and mental health"}</h2>
          </div>
            <img id="yingyangWht" src={require("../static/images/heart&brain_white.png")}></img>
        </header>
      </div>
    )
  }
}

export default Header
