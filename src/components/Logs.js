// render Logs Page
import React, {Component} from 'react';
import Log from './LogForm/Log';
import {Link} from 'react-router-dom';

class Logs extends Component{
  render(){
    // // map logs
    // let logs = this.props.logs.map( (log) => {
    // return (
    //     <Log
    //       key={log._id}
    //       log={log}
    //       editingLogId={this.props.editingLogId}
    //       onEditLog={this.props.onEditLog}
    //       onDeleteLog={this.props.onDeleteLog}
    //       onUpdateLog={this.props.onUpdateLog}
    //     />
    //   )
    // })
    return (
      <div>
				<Link class="toAboutLink" to={'/'}>CLICK HERE TO LEARN MORE ABOUT PSYCHE TRACKER</Link>
        <h1 class="logsTitle">Logs</h1>
        {/* attach trigger createLogForm */}
				<button><i className="fa fa-plus-circle">ADD A NEW LOG</i></button>
        <div className="logs">
          {/*logs*/}
          <Log/>
        </div>
      </div>
    )
  }
}

export default Logs
