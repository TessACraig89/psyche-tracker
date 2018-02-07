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
            <th></th>
            <th></th>
            <th>10/15/2018</th>
            <th></th>
            <th></th>
            <th><button>DELETE</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default Log;
