import React, {Component} from 'react'

class CreateLogForm extends Component {
  constructor(){
    super()
    //sets the initial state to empty string
    this.state = {
      log: ''
    }
    //on input change bind
    //on add log bind
    //on cancel of add log bind
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddLog = this.onAddLog.bind(this);
  }
  // on input change event handler
    // set state
  onInputChange(event){
    this.setState({
      log: event.target.value
    })
  }
  // on add log bind
  onAddLog(event){
    event.preventDefault()
    let log = this.state.log
    this.props.createLog(log)
    this.setState({
      log: ""
    })
  }
  render(){
    return (
      <div className='createForm LogForm'>
        <form onSubmit={ this.onAddLog }>
          <button>Add</button>
          <input
            onChange={ this.onInputChange }
            type='text'
            value={this.state.log} />
        </form>
      </div>
    )
  }
}

export default CreateLogForm
