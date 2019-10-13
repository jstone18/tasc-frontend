import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAttendance } from '../redux/actions/attendances'

class AttendanceInput extends Component {
  constructor(props) {
    super(props)

    this.state = { check_in: false, check_out: false }; 
  }

  handleChecked = (event) => {
    return this.setState({
      [event.target.name]: event.target.checked
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createAttendance(this.state, this.props.student.id )
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="checkbox">
              <label>Check In</label>
              <input 
                type='checkbox'
                name='check_in'
                onChange={this.handleChecked}
                checked={this.state.check_in}
              />
            </div>
          </div>
          <div>
            <div className="checkbox">
              <label>Check Out</label>
              <input 
                type='checkbox'
                name='check_out'
                onChange={this.handleChecked}
                checked={this.state.check_out}
              />
            </div>
          </div>
          <div>
            <button class="attendance-button" type="submit">Submit</button>
          </div>
        </form>
      </>
    )
  }
}

export default connect(null, { createAttendance })(AttendanceInput);