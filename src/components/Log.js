import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class Log extends Component {
  render() {
    return (
      <div>
				<Link class="toAboutLink" to={'/about'}>CLICK HERE TO LEARN MORE ABOUT PSYCHE TRACKER</Link>
        <h1 class="logsTitle">Logs</h1>
				<button><i className="fa fa-plus-circle">ADD A NEW LOG</i></button>
      </div>
    );
  }
}

export default Log;
