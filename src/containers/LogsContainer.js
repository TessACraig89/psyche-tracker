import React, {Component} from 'react'
import LogModel from '../models/Log'
import Logs from '../components/Logs'

class LogsContainer extends Component {
  constructor(){
    super()
    this.state = {
      logs: [],
    }
  }
  render(){
    return (
      <div className='LogsContainer'>
        <h2>This is the Logs Container</h2>
      </div>
    )
  }
}

export default LogsContainer
