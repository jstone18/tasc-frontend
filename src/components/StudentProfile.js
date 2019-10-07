/* eslint-disable eqeqeq */
import React from 'react'
import { connect } from 'react-redux'

const StudentProfile = props => {
  console.log(props.student);
  if (!props.found) {
    return <p>Student not found.</p>
  }

  if (!props.student) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
    <h1>Student Profile</h1>
      <p>Name: {props.student.first_name} {props.student.last_name}</p>
      <p>Age: {props.student.age}</p>
      <p>Room: {props.student.room.title}</p>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const student = state.students.filter(student => student.id == id)[0]
  console.log(student);
  
  const found = !!student

  return { 
    student, 
    found 
  } 
}

export default connect(mapStateToProps)(StudentProfile)
