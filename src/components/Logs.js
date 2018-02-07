import React, {Component} from 'react';
import Log from './Log';
import {Link} from 'react-router-dom';

class Logs extends Component{
  render(){
    return (
      <div>
				<Link class="toAboutLink" to={'/'}>CLICK HERE TO LEARN MORE ABOUT PSYCHE TRACKER</Link>
        <h1 class="logsTitle">Logs</h1>
				<button><i className="fa fa-plus-circle">ADD A NEW LOG</i></button>
        <Log/>
      </div>
    )
  }
}

export default Logs
