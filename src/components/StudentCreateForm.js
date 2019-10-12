import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../redux/actions/students'

class NewStudentForm extends Component {
  
  state = {
    first_name: '',
    last_name: '',
    age: 0,
    room_id: 0
  }

  handleInputChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (event) => {
    event.preventDefault()
    
    this.props.createStudent(this.state, this.props.history)
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <h3>PERSONAL INFO</h3>
          <form onSubmit={this.submit}>
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
            <select required className="ui dropdown"
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
            <button className="ui primary button" type="submit">Create Student</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createStudent })(NewStudentForm);