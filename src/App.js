import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Resources from './components/Resources';
import Logs from './components/Logs';
import { Button } from 'reactstrap';

// import LogsContainer from './containers/LogsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={ About }/>
            <Route path='/logs' component={ Logs }/>
          </Switch>
          <Resources/>
      </div>
    );
  }
}
export default App;
