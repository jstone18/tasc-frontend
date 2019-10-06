import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentCard from '../components/StudentCard'


class StudentsList extends Component {
  
  render() {
    if (this.props.students.length === 0) {
      return <p>Loading...</p>
    }
    const studentCard = this.props.students.map(student => <StudentCard key={student.id} student={student} />)
    return (
      <div className='ui container'>
        <h1>StudentsList</h1>
        { studentCard }
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
