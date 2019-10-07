/* eslint-disable eqeqeq */
import React from 'react'
import { connect } from 'react-redux'

const StudentProfile = ({student}) => {
  console.log(student);
  if (student.length == 0) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
      {student.first_name}
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const student = state.students.filter(student => student.id == id)

  return { student } 
}

export default connect(mapStateToProps)(StudentProfile)
