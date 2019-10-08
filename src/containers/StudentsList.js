import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentsHeader from '../studentComponents/StudentsHeader'
import StudentCard from '../studentComponents/StudentCard'


class StudentsList extends Component {
  
  render() {

    if (this.props.students.length === 0) {
      return <p>Loading...</p>
    }

    const studentCard = this.props.students.map(student => (
      <StudentCard key={student.id} student={student} />
    ));

    return (
      <div className='ui container student-list'>
        <StudentsHeader />
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

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentsList)
