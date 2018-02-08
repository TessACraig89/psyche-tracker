import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'reactstrap';
import firebase from '../config/fire.js';

class Logs extends Component{
  constructor() {
    super();
    this.state = {
      //data
      date: '',
      // comments
      comment1: '',
      comment2: '',
      comment3: '',
      comment4: '',
      comment5: '',
      comment6: '',
      comment7: '',
      // ratings
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      rating6: '',
      rating7: '',
      logs: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    //comments
    this.handleComment1Change = this.handleComment1Change.bind(this);
    this.handleComment2Change = this.handleComment2Change.bind(this);
    this.handleComment3Change = this.handleComment3Change.bind(this);
    this.handleComment4Change = this.handleComment4Change.bind(this);
    this.handleComment5Change = this.handleComment5Change.bind(this);
    this.handleComment6Change = this.handleComment6Change.bind(this);
    this.handleComment7Change = this.handleComment7Change.bind(this);
    // ratings
    this.handleRating1Change = this.handleRating1Change.bind(this);
    this.handleRating2Change = this.handleRating2Change.bind(this);
    this.handleRating3Change = this.handleRating3Change.bind(this);
    this.handleRating4Change = this.handleRating4Change.bind(this);
    this.handleRating5Change = this.handleRating5Change.bind(this);
    this.handleRating6Change = this.handleRating6Change.bind(this);
    this.handleRating7Change = this.handleRating7Change.bind(this);
    }
    componentDidMount() {
      const logsRef = firebase.database().ref('logs');
      logsRef.on('value', (snapshot) => {
        let logs = snapshot.val();
        let newState = [];
        for (let log in logs) {
          newState.push({
            id: log,
            date: logs[log].date,
            //comments
            comment1: logs[log].comment1,
            comment2: logs[log].comment2,
            comment3: logs[log].comment3,
            comment4: logs[log].comment4,
            comment5: logs[log].comment5,
            comment6: logs[log].comment6,
            comment7: logs[log].comment7,
            //ratings
            rating1: logs[log].rating1,
            rating2: logs[log].rating2,
            rating3: logs[log].rating3,
            rating4: logs[log].rating4,
            rating5: logs[log].rating5,
            rating6: logs[log].rating6,
            rating7: logs[log].rating7
          });
        }
        this.setState({
          logs: newState
        });
      });
    }
  //////////////////////////////////////////////////////////////////
  handleSubmit(e) {
    e.preventDefault();
    const logsRef = firebase.database().ref('logs');
    const log = {
      date: this.state.date,
      //comments
      comment1: this.state.comment1,
      comment2: this.state.comment2,
      comment3: this.state.comment3,
      comment4: this.state.comment4,
      comment5: this.state.comment5,
      comment6: this.state.comment6,
      comment7: this.state.comment7,
      //ratings
      rating1: this.state.rating1,
      rating2: this.state.rating2,
      rating3: this.state.rating3,
      rating4: this.state.rating4,
      rating5: this.state.rating5,
      rating6: this.state.rating6,
      rating7: this.state.rating7,
    }
    logsRef.push(log);
    this.setState({
      date: '',
      //comments
      comment1: '',
      comment2: '',
      comment3: '',
      comment4: '',
      comment5: '',
      comment6: '',
      comment7: '',
      //ratings
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      rating5: '',
      rating6: '',
      rating7: '',
    });
  }
  ////////////////////////////////////////////////////////////////
  handleDateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // Comments
  handleComment1Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment2Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment3Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment4Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment5Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment6Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleComment7Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // Ratings
  handleRating1Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating2Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating3Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating4Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating5Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating6Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleRating7Change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  removeLog(logId) {
    const logRef = firebase.database().ref(`/logs/${logId}`);
    logRef.remove();
  }
      render() {
        return (
          <div className='logPage'>
            <header>
                <div className='wrapper'>
                    <Link class="toAboutLink" to={'/'}>CLICK HERE TO LEARN MORE ABOUT PSYCHE TRACKER</Link>
                    <h1 class="logsTitle">Logs</h1>
                </div>
            </header>
            <div className='container'>
              <section className='add-log'>
                  <form onSubmit={this.handleSubmit}>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>
                            <button>ADD</button>
                          </th>
                          <th>          </th>
                          <th>          </th>
                          <th><input type="text" name="date" placeholder="date" onChange={this.handleDateChange} value={this.state.date}/></th>
                          <th>          </th>
                          <th>          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Exhaustion</td>
                          <td>Hunger</td>
                          <td>Anxiety</td>
                          <td>Anger</td>
                          <td>Mania</td>
                          <td>Depression</td>
                          <td>Stress</td>
                        </tr>
                        <tr> {/* reference column rating data */}
                          <td><input type="text" name="rating1" placeholder="rating1" onChange={this.handleRating1Change} value={this.state.rating1}/></td>
                          <td><input type="text" name="rating2" placeholder="rating2" onChange={this.handleRating2Change} value={this.state.rating2}/></td>
                          <td><input type="text" name="rating3" placeholder="rating3" onChange={this.handleRating3Change} value={this.state.rating3}/></td>
                          <td><input type="text" name="rating4" placeholder="rating4" onChange={this.handleRating4Change} value={this.state.rating4}/></td>
                          <td><input type="text" name="rating5" placeholder="rating5" onChange={this.handleRating5Change} value={this.state.rating5}/></td>
                          <td><input type="text" name="rating6" placeholder="rating6" onChange={this.handleRating6Change} value={this.state.rating6}/></td>
                          <td><input type="text" name="rating7" placeholder="rating7" onChange={this.handleRating7Change} value={this.state.rating7}/></td>
                        </tr>
                        <tr>  {/* reference column comment data */}
                          <td>Comment: <input type="text" name="comment1" placeholder="comment1" onChange={this.handleComment1Change} value={this.state.comment1}/></td>
                          <td>Comment: <input type="text" name="comment2" placeholder="comment2" onChange={this.handleComment2Change} value={this.state.comment2}/></td>
                          <td>Comment: <input type="text" name="comment3" placeholder="comment3" onChange={this.handleComment3Change} value={this.state.comment3}/></td>
                          <td>Comment: <input type="text" name="comment4" placeholder="comment4" onChange={this.handleComment4Change} value={this.state.comment4}/></td>
                          <td>Comment: <input type="text" name="comment5" placeholder="comment5" onChange={this.handleComment5Change} value={this.state.comment5}/></td>
                          <td>Comment: <input type="text" name="comment6" placeholder="comment6" onChange={this.handleComment6Change} value={this.state.comment6}/></td>
                          <td>Comment: <input type="text" name="comment7" placeholder="comment7" onChange={this.handleComment7Change} value={this.state.comment7}/></td>
                        </tr>
                      </tbody>
                    </Table>
                  </form>
              </section>
              <section className='display-log'>
                <div className='wrapper'>
                  <ul>
                    {this.state.logs.map((log) => {
                        return (
                          <li key={log.id}>
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>
                                    <button>EDIT</button>
                                  </th>
                                  <th>          </th>
                                  <th>          </th>
                                  <th>{log.date}</th>
                                  <th>          </th>
                                  <th>          </th>
                                  <th>
                                    <button onClick={() => this.removeLog(log.id)}>DELETE</button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Exhaustion</td>
                                  <td>Hunger</td>
                                  <td>Anxiety</td>
                                  <td>Anger</td>
                                  <td>Mania</td>
                                  <td>Depression</td>
                                  <td>Stress</td>
                                </tr>
                                <tr> {/* reference column rating data */}
                                  <td>{log.rating1}</td>
                                  <td>{log.rating2}</td>
                                  <td>{log.rating3}</td>
                                  <td>{log.rating4}</td>
                                  <td>{log.rating5}</td>
                                  <td>{log.rating6}</td>
                                  <td>{log.rating7}</td>
                                </tr>
                                <tr>  {/* reference column comment data */}
                                  <td>Comment: {log.comment1}</td>
                                  <td>Comment: {log.comment2}</td>
                                  <td>Comment: {log.comment3}</td>
                                  <td>Comment: {log.comment4}</td>
                                  <td>Comment: {log.comment5}</td>
                                  <td>Comment: {log.comment6}</td>
                                  <td>Comment: {log.comment7}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        );
      }
  }

export default Logs
