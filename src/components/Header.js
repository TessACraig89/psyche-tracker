import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>About</Link>
        <Link to={'/logs'}>Logs</Link>
      </header>
    )
  }
}

export default Header
