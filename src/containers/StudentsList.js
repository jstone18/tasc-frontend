import React, { Component } from 'react'
import StudentCard from '../components/StudentCard'


class StudentsList extends Component {
  
  render() {

    if (this.props.students.length === 0) {
      return <p>There are currently no students.</p>
    }

    const studentCard = this.props.students.map(student => (
      <StudentCard key={student.id} student={student} attendances={student.attendances} />
    ));
    
    return (
      <div className='ui container student-list'>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>
            { studentCard }
        </table> 
      </div>         
    )
  }
}


export default StudentsList;
