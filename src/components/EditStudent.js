/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../redux/actions/students'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      first_name: props.student.first_name,
      last_name: props.student.last_name,
      age: props.student.age,
      room_id: props.student.room_id
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student.first_name !== this.props.student.first_name) {
      this.setState({
        first_name: this.props.student.first_name,
        last_name: this.props.student.last_name,
        age: this.props.student.age,
        room_id: this.props.student.room_id
      })
    };
  };  

  handleInputChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  update = (event) => {
    event.preventDefault()

    this.props.updateStudent(this.state, this.props.student.id, this.props.history)
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <h3>PERSONAL INFO</h3>
          <form onSubmit={this.update}>
            <div className="required field">
              <label>First Name</label>
              <input
                required 
                type="text" 
                name="first_name" 
                placeholder="First Name" 
                onChange={this.handleInputChange}
                value={this.state.first_name}
              />
            </div>
            <div className="required field">
              <label>Last Name</label>
              <input 
                required
                type="text" 
                name="last_name" 
                placeholder="Last Name" 
                onChange={this.handleInputChange}
                value={this.state.last_name}
              />
            </div>
            <div className="required field">
              <label>Age</label>
              <input 
                required 
                type="number" 
                name="age" 
                placeholder="Age" 
                onChange={this.handleInputChange}
                value={this.state.age}
              />
            </div>
            <select className="ui dropdown"
                    name="room_id" 
                    value={this.state.room_id}
                    onChange={this.handleInputChange}>
              <option value="">Room Assignment</option>
              <option value="1">Yellow Room</option>
              <option value="2">Blue Room</option>
              <option value="3">Red Room</option>
              <option value="4">Green Room</option>
            </select>
            <br/>
            <br/>
            <button className="ui primary button" type="submit">Update Profile</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const student = state.students.filter(student => student.id == id)[0]
  return {
    student
  };
};

export default connect(mapStateToProps, { updateStudent })(EditStudent);