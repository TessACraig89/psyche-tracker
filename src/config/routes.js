import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import LogsContainer from '../containers/LogsContainer';

export default (
  <Switch>
    <Route exact path='/' component={ About }/>
    <Route path='/logs' component={ LogsContainer }/>
  </Switch>
)
