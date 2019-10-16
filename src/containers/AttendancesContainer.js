import React, { Component } from 'react'
import AttendanceInput from '../components/AttendanceInput'
import Attendances from '../components/Attendances'

class AttendanceContainer extends Component {

  render() {

    return (
      <div className="sixteen wide column">
        <h3 className="ui top attached header">
          Attendance Record
        </h3>
        <div className="ui attached segment">
          <AttendanceInput student={ this.props.student } />
          <Attendances attendances={ this.props.student.attendances } />       
        </div>
      </div>
    )
  }
}

export default AttendanceContainer;
