import React, {Component} from 'react';

class LogForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newLogContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeLog = this.writeLog.bind(this);
  }
  handleUserInput(e){
    this.setState({
      newLogContent: e.target.value
    })
  }
  writeLog(){
    this.props.addLog(this.state.newLogContent);
    this.setState({
      newLogContent: '',
    })
  }

  render(){
    return(
      <div className="formWrapper">
          <input className = "logInput"
          placeholder="write comment"
          value={this.state.newLogContent}
          onChange={this.handleUserInput} />
          <button className="logButton"
          onClick={this.writeLog}>Add Comment</button>
      </div>
    )
  }
}

export default LogForm;
