import React, { Component } from 'react'
import AttendanceCreateForm from '../components/AttendanceCreateForm'
import Attendances from '../components/Attendances'

class AttendanceContainer extends Component {

  render() {
    const { attendances } = this.props.student

    return (
      <div className="sixteen wide column">
        <h3 className="ui top attached header">
          Attendance Record
        </h3>
        <div className="ui attached segment">
          <AttendanceCreateForm />
          <Attendances attendances={attendances} />       
        </div>
      </div>
    )
  }
}

export default AttendanceContainer;
