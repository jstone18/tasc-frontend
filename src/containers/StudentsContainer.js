import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudents } from '../redux/actions/students'


import StudentsList from './StudentsList'
import StudentsHeader from '../components/StudentsHeader'



class StudentsContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchStudents()
  // }

  render() {
    return (
      <div>
        <StudentsHeader />
        <StudentsList students={this.props.students} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentsContainer);
