import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Table } from 'reactstrap';


class Log extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th><button>EDIT</button></th>
            <th>          </th>
            <th>          </th>
            <th>10/15/2018</th>
            <th>          </th>
            <th>          </th>
            <th><button>DELETE</button></th>
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
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Comment:</td>
            <td>Comment:</td>
            <td>Comment:</td>
            <td>Comment:</td>
            <td>Comment:</td>
            <td>Comment:</td>
            <td>Comment:</td>
          </tr>

        </tbody>
      </Table>
    );
  }
}
export default Log;
