import React, {Component} from 'react'
import { Table } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from '../../config/fire';
import PropTypes from 'prop-types';
import Comments from './Comments';
import Ratings from './Ratings';

class CreateLogForm extends Component {
    constructor(props){
      super(props);
      //
      this.logId = props.logId;
      this.handleAddLog = this.handleAddLog.bind(this);
      this.handleCancelLog = this.handleCancelLog.bind(this);
      // Comments
      this.state = {
          newComment1: '',
        };
          this.handleUserInputComment1 = this.handleUserInputComment1.bind(this);
          this.writeComment1 = this.writeComment1.bind(this);
      }
      this.state = {
          newComment2: '',
        };
          this.handleUserInputComment2 = this.handleUserInputComment2.bind(this);
          this.writeComment2 = this.writeComment2.bind(this);
      }
      this.state = {
          newComment3: '',
        };
          this.handleUserInputComment3 = this.handleUserInputComment3.bind(this);
          this.writeComment3 = this.writeComment3.bind(this);
      }
      this.state = {
          newComment4: '',
        };
          this.handleUserInputComment4 = this.handleUserInputComment4.bind(this);
          this.writeComment4 = this.writeComment4.bind(this);
      }
      this.state = {
          newComment5: '',
        };
          this.handleUserInputComment5 = this.handleUserInputComment5.bind(this);
          this.writeComment5 = this.writeComment5.bind(this);
      }
      this.state = {
          newComment6: '',
        };
          this.handleUserInputComment6 = this.handleUserInputComment6.bind(this);
          this.writeComment6 = this.writeComment6.bind(this);
      }
      this.state = {
          newComment7: '',
        };
          this.handleUserInputComment7 = this.handleUserInputComment7.bind(this);
          this.writeComment7 = this.writeComment7.bind(this);
      }
      //Ratings
    // handle edit click
    handleAddLog(id){
      this.props.addLog(id);
      console.log('Log has been added');
    }

    handleCancelLog(id){
      this.props.cancelLog(id);
      console.log('Log create has been canceled');
    }
    //Comments
    handleUserInputComment1(e){
      this.setState({
        newComment1: e.target.value,


      })
    }
    //
    writeComment1() {
      //calls a method that sets the entryContent
      this.props.addComment1(this.state.newComment1);
      //sets field back to empty
      this.setState ({
        newComment1: '',
      })
    }
    handleUserInputComment2(e){
      this.setState({
        newComment2: e.target.value,


      })
    }
    writeComment2() {
      //calls a method that sets the entryContent
      this.props.addComment2(this.state.newComment2);
      //sets field back to empty
      this.setState ({
        newComment2: '',
      })
    }
    handleUserInputComment3(e){
      this.setState({
        newComment3: e.target.value,


      })
    }
    writeComment3() {
      //calls a method that sets the entryContent
      this.props.addComment1(this.state.newComment1);
      //sets field back to empty
      this.setState ({
        newComment3: '',
      })
    }
    handleUserInputComment2(e){
      this.setState({
        newComment2: e.target.value,


      })
    }
    writeComment2() {
      //calls a method that sets the entryContent
      this.props.addComment2(this.state.newComment2);
      //sets field back to empty
      this.setState ({
        newComment2: '',
      })
    }
    handleUserInputComment3(e){
      this.setState({
        newComment3: e.target.value,


      })
    }
    writeComment3() {
      //calls a method that sets the entryContent
      this.props.addComment3(this.state.newComment3);
      //sets field back to empty
      this.setState ({
        newComment3: '',
      })
    }
    handleUserInputComment4(e){
      this.setState({
        newComment4: e.target.value,


      })
    }
    writeComment4() {
      //calls a method that sets the entryContent
      this.props.addComment4(this.state.newComment4);
      //sets field back to empty
      this.setState ({
        newComment4: '',
      })
    }
    handleUserInputComment5(e){
      this.setState({
        newComment5: e.target.value,


      })
    }
    writeComment5() {
      //calls a method that sets the entryContent
      this.props.addComment5(this.state.newComment5);
      //sets field back to empty
      this.setState ({
        newComment5: '',
      })
    }
    handleUserInputComment6(e){
      this.setState({
        newComment6: e.target.value,


      })
    }
    writeComment6() {
      //calls a method that sets the entryContent
      this.props.addComment6(this.state.newComment6);
      //sets field back to empty
      this.setState ({
        newComment6: '',
      })
    }
    handleUserInputComment7(e){
      this.setState({
        newComment7: e.target.value,


      })
    }
    writeComment7() {
      //calls a method that sets the entryContent
      this.props.addComment7(this.state.newComment7);
      //sets field back to empty
      this.setState ({
        newComment7: '',
      })
    }
    // Ratings
    handleUserInputRating1(e){
      this.setState({
        newRating1: e.target.value,


      })
    }
    writeComment7() {
      //calls a method that sets the entryContent
      this.props.addComment7(this.state.newComment7);
      //sets field back to empty
      this.setState ({
        newComment7: '',
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
              <td>
                  <textarea className="col1RatingInput" value={this.state.newcol1} onChange={this.handleUserInputRating1} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating1}>Save</button>
              </td>
              <td>
                  <textarea className="colRating2Input" value={this.state.newcol2} onChange={this.handleUserInputRating2} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating2}>Save</button>
              </td>
              <td>
                  <textarea className="colRating3Input" value={this.state.newcol3} onChange={this.handleUserInputRating3} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating3}>Save</button>
              </td>
              <td>
                  <textarea className="colRating4Input" value={this.state.newcol4} onChange={this.handleUserInputRating4} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating4}>Save</button>
              </td>
              <td>
                  <textarea className="colRating5Input" value={this.state.newcol5} onChange={this.handleUserInputRating5} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating5}>Save</button>
              </td>
              <td>
                  <textarea className="colRating6Input" value={this.state.newcol6} onChange={this.handleUserInputRating6} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating6}>Save</button>
              </td>
              <td>
                  <textarea className="colRating7Input" value={this.state.newcol7} onChange={this.handleUserInputRating7} placeholder="1"/>
                  <button color="primary" className="saveRatingBtn" onClick={this.writeRating7}>Save</button>
              </td>
            </tr>
            <tr>  {/* reference column comment data */}
              <td>
                  Comment:<textarea className="comment1Input" value={this.state.newComment1} onChange={this.handleUserInputComment1} placeholder="..."/>
                  <button color="primary" className="saveComment1Btn" onClick={this.writeComment1}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment2Input" value={this.state.newComment2} onChange={this.handleUserInputComment2} placeholder="..."/>
                  <button color="primary" className="saveComment2Btn" onClick={this.writeComment2}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment3Input" value={this.state.newComment3} onChange={this.handleUserInputComment3} placeholder="..."/>
                  <button color="primary" className="saveComment3Btn" onClick={this.writeComment3}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment4Input" value={this.state.newComment4} onChange={this.handleUserInputComment4} placeholder="..."/>
                  <button color="primary" className="saveComment4Btn" onClick={this.writeComment4}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment5Input" value={this.state.newComment5} onChange={this.handleUserInputComment5} placeholder="..."/>
                  <button color="primary" className="saveComment5Btn" onClick={this.writeComment5}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment6Input" value={this.state.newComment6} onChange={this.handleUserInputComment6} placeholder="..."/>
                  <button color="primary" className="saveComment6Btn" onClick={this.writeComment6}>Save Comment</button>
              </td>
              <td>
                  Comment:<textarea className="comment7Input" value={this.state.newComment7} onChange={this.handleUserInputComment7} placeholder="..."/>
                  <button color="primary" className="saveComment7Btn" onClick={this.writeComment7}>Save Comment</button>
              </td>
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
