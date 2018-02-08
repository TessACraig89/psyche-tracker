import React, {Component} from 'react'
import { Table } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';
import PropTypes from 'prop-types';
import Comments from './Comments';
import Ratings from './Ratings';

class CreateLogForm extends Component {
    constructor(props){
      super(props);
      this.logId = props.logId;
      this.handleAddLog = this.handleAddLog.bind(this);
      this.handleCancelLog = this.handleCancelLog.bind(this);
      this.state = {
          newComment: '',
        };
          this.handleUserInput = this.handleUserInput.bind(this);
          this.writeComment = this.writeComment.bind(this);
    }
    // handle edit click
    handleAddLog(id){
      this.props.addLog(id);
      console.log('Log has been added');
    }

    handleCancelLog(id){
      this.props.cancelLog(id);
      console.log('Log create has been canceled');
    }
    handleUserInput(e){
      this.setState({
        newComment: e.target.value,


      })
    }
    writeComment() {
      //calls a method that sets the entryContent
      this.props.addComment(this.state.newComment);
      //sets field back to empty
      this.setState ({
        newComment: '',
      })
    }
  render() {
    return (
      <div>
        <h1>ADD A NEW LOG</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>
                <button className={() => this.handleAddLog(this.logId)}>Add</button>
              </th>
              <th>          </th>
              <th>          </th>
              <th>          </th>
              <th>          </th>
              <th>          </th>
              <th><button className={() => this.handleCancelLog(this.logId)}>Cancel</button></th>
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
              <td><textarea className="col1RatingInput" value={this.state.newcol1} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating2Input" value={this.state.newcol2} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating3Input" value={this.state.newcol3} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating4Input" value={this.state.newcol4} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating5Input" value={this.state.newcol5} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating6Input" value={this.state.newcol6} onChange={this.handleUserInput} placeholder="1"/>

              </td>
              <td><textarea className="colRating7Input" value={this.state.newcol7} onChange={this.handleUserInput} placeholder="1"/>

              </td>
            </tr>
            <tr>  {/* reference column comment data */}
              <td></td>
              <td></td>
              <td></td>
              <td>Comment:<textarea className="commentInput" value={this.state.newComment} onChange={this.handleUserInput} placeholder="..."/>
                   <button color="primary" className="saveCommentBtn" onClick={this.writeComment}>Save Comment</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>
        </Table>
      </div>
    );
  }
}
//     return (
//       <div className='createForm LogForm'>
//         <form onSubmit={ this.onAddLog }>
//           <button>Add</button>
//           <input
//             onChange={ this.onInputChange }
//             type='text'
//             value={this.state.log} />
//         </form>
//       </div>
//     )
//   }
// }
CreateLogForm.propTypes = {
  createLogFormContent: PropTypes.string,
}

export default CreateLogForm
