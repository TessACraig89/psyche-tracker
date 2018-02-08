import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

class Log extends Component {
  constructor(props){
    super(props);

//comments
    this.column1Comment = props.column1Comment;
    this.column2Comment = props.column2Comment;
    this.column3Comment = props.column3Comment;
    this.column4Comment = props.column4Comment;
    this.column5Comment = props.column5Comment;
    this.column6Comment = props.column6Comment;
    this.column7Comment = props.column7Comment;

    //comment ids
    this.column1CommentId = props.column1CommentId;
    this.column2CommentId = props.column2CommentId;
    this.column3CommentId = props.column3CommentId;
    this.column4CommentId = props.column4CommentId;
    this.column5CommentId = props.column5CommentId;
    this.column6CommentId = props.column6CommentId;
    this.column7CommentId = props.column7CommentId;

//rating
    this.column1Rating = props.column1Rating;
    this.column2Rating = props.column2Rating;
    this.column3Rating = props.column3Rating;
    this.column4Rating = props.column4Rating;
    this.column5Rating = props.column5Rating;
    this.column6Rating = props.column6Rating;
    this.column7Rating = props.column7Rating;

    // rating ids
    this.column1RatingId = props.column1RatingId;
    this.column2RatingId = props.column2RatingId;
    this.column3RatingId = props.column3RatingId;
    this.column4RatingId = props.column4RatingId;
    this.column5RatingId = props.column5RatingId;
    this.column6RatingId = props.column6RatingId;
    this.column7RatingId = props.column7RatingId;


//buttons
    this.handleEditLog = this.handleEditLog.bind(this);
    this.handleDeleteLog = this.handleDeleteLog.bind(this);
  }

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
            <th>10/15/2018</th>
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
          <tr>
            <td>{ this.column1Rating }</td>
            <td>{ this.column2Rating }</td>
            <td>{ this.column3Rating }</td>
            <td>{ this.column4Rating }</td>
            <td>{ this.column5Rating }</td>
            <td>{ this.column6Rating }</td>
            <td>{ this.column7Rating }</td>
          </tr>
          <tr>
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
