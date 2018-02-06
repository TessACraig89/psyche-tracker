import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Resources from './components/Resources';
import Logs from './components/Logs';

// import LogsContainer from './containers/LogsContainer';

class App extends Component {

////////////////
// Testing DB //
///////////////
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={ About }/>
            <Route path='/logs' component={ Logs }/>
          </Switch>
          <Resources/>
          <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={ el => this.inputEl = el }/>
            <input type="submit"/>
            <ul>
              { /* Render the list of messages */
                this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
              }
            </ul>
          </form>
      </div>
    );
  }
}
///////////////////
export default App;
