import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAttendance } from '../../redux/actions/attendances'

class AttendanceInput extends Component {
  constructor(props) {
    super(props)

    this.state = { checkIn: false, checkOut: false }; 
  }

  handleChecked = event => {
    return this.setState({
      [event.target.name]: event.target.checked
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createAttendance( this.state, this.props.student.id )
    this.setState({ checkIn: false, checkOut: false })
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
                name='checkIn'
                onChange={this.handleChecked}
                checked={this.state.checkIn}
              />
            </div>
          </div>
          <div>
            <div className="checkbox">
              <label>Check Out</label>
              <input 
                type='checkbox'
                name='checkOut'
                onChange={this.handleChecked}
                checked={this.state.checkOut}
              />
            </div>
          </div>
          <div>
            <button className="attendance-button" type="submit">Submit</button>
          </div>
        </form>
      </>
    )
  }
}

export default connect(null, { createAttendance })(AttendanceInput);