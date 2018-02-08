// render Logs Page
import React, {Component} from 'react';
import Log from './LogForm/Log';
import CreateLogForm from './LogForm/CreateLogForm';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
class Logs extends Component{
//   constructor(props){
//     super(props);
// //bind add clicked
//     this.handleAddLog = this.handleAddLog.bind(this);
//   }
//   // handle add click
//   handleAddLog(id){
//     // this.props.AddLog(id);
//     <CreateLogForm/>
//     console.log('Log has been added');
//   }

  render(){
    // map logs
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
				// <span className="AddBtn" onClick={()=> this.handleAddLog(this.Id)}><i className="fa fa-plus-circle">ADD A NEW LOG</i></span>
        <CreateLogForm/>
        <div className="logs">
        </div>
      </div>
    )
  }
}

Logs.propTypes = {
  logsContent: PropTypes.string,
}


export default Logs
