import React, {Component} from 'react'
import Logs from '../Logs'
import CreateLogForm from './CreateLogForm'

class LogsContainer extends Component {
  constructor(){
    super()
    // set initial state
    this.state = {
      logs: [],
    }
    // bind create, delete, update, edit
  	this.createLog = this.createLog.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.editLog = this.editLog.bind(this);
  }
  // update log
  updateLog(log) {
    this.setState({
    })
    // update log in db
  }
  // edit log
  editLog(log){
    this.setState({
    })
    // edit log in db
  }
  // delete log
  deleteLog(log) {
      this.setState({logs})
    })
    //delete log from db

  // create log
  createLog(log) {
    // new log
  	let newLog = {
  		body: log
  	}
    // create log db
  }
  // Mount
componentWillMount(){
//   const previousIngredients = this.state.recipes;
// const previousTitle = this.state.title;
//
// //Ingredients:////////
// //data snapshot
//
// this.database.on('child_added', snap => {
//   previousIngredients.push({
//     id: snap.key,
//     recipeContent: snap.val().recipeContent,
//
//
//   })
//   this.setState({
//     recipes: previousIngredients,
//
//   })
// })
// this.database.on('child_added', snap => {
//   previousTitle.push({
//     id: snap.key,
//     titleContent: snap.val().titleContent
//   })
//   this.setState({
//     title: previousTitle
//   })
// })
// this.database.on('child_removed', snap => {
//   for(var i=0; i < previousIngredients.length; i++){
//     if(previousIngredients[i].id === snap.key){
//       previousIngredients.splice(i, 1);
//     }
//   }
//   this.setState({
//     recipes: previousIngredients
//   })
// })
// this.database.on('child_removed', snap => {
//   for(var i=0; i < previousTitle.length; i++){
//     if(previousTitle[i].id === snap.key){
//       previousTitle.splice(i, 1);
//     }
//   }
//   this.setState({
//     title: previousTitle
//   })
// })
}
  render(){
    return (
      <div className='LogsContainer'>
        <Logs
          logs={this.state.logs}
          onEditLog={this.editLog}
          onDeleteLog={this.deleteLog} />
        <CreateLogForm
          createLog={this.createLog} />
      </div>
    )
  }
}

export default LogsContainer
