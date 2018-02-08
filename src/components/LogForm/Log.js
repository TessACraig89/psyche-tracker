//render single log
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Comments from './Comments';
import Ratings from './Ratings';

class Log extends Component {
  constructor(props){
    super(props);
//bind edit clicked
// bind delete clicked
    this.handleEditLog = this.handleEditLog.bind(this);
    this.handleDeleteLog = this.handleDeleteLog.bind(this);
  }
  // handle edit click
  handleEditLog(id){
    this.props.editLog(id);
    console.log('Log has been edited');
  }

  handleDeleteLog(id){
    this.props.deleteLog(id);
    console.log('Log has been deleted');
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>
              <button className={() => this.handleEditLog(this.logId)}>EDIT</button>
            </th>
            <th>          </th>
            <th>          </th>
            {/* reference log date data */}
            <th>{this.date}</th>
            <th>          </th>
            <th>          </th>
            <th><button className={() => this.handleDeleteLog(this.logId)}>DELETE</button></th>
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
            <td>{ this.column1Rating }</td>
            <td>{ this.column2Rating }</td>
            <td>{ this.column3Rating }</td>
            <td>{ this.column4Rating }</td>
            <td>{ this.column5Rating }</td>
            <td>{ this.column6Rating }</td>
            <td>{ this.column7Rating }</td>
          </tr>
          <tr>  {/* reference column comment data */}
            <td>Comment: { this.column1Comment }</td>
            <td>Comment: { this.column2Comment }</td>
            <td>Comment: { this.column3Comment }</td>
            <td>Comment: { this.column4Comment }</td>
            <td>Comment: { this.column5Comment }</td>
            <td>Comment: { this.column6Comment }</td>
            <td>Comment: { this.column7Comment }</td>
          </tr>

        </tbody>
      </Table>
    );
  }
}

Log.propTypes = {
  logContent: PropTypes.string,
}

export default Log;
