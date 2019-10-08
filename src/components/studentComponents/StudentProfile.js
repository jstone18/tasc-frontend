/* eslint-disable eqeqeq */
import React from 'react'
import { connect } from 'react-redux'
import faker from 'faker'

const StudentProfile = props => {
  console.log(props.student);
  if (!props.found) {
    return <p>Student not found.</p>
  }

  if (!props.student) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <div id="students-header">
        <img className="ui tiny circular image" src={faker.image.avatar()} alt=''/>
        <h3>{props.student.first_name}</h3>
      </div>
      <div className="ui grid container">
        <div className="eight wide column">
          <h3 class="ui top attached header">
            Personal Information
          </h3> 
          <div className="ui attached segment">
          <p>Name: {props.student.first_name} {props.student.last_name}</p> 
            <p>Address:</p> 
            <p>Birthday: &nbsp;&nbsp;&nbsp;&nbsp;Age: {props.student.age}</p>
          </div>
        </div>
        <div className="eight wide column">
          <h3 class="ui top attached header">
            Medical Information
          </h3>
          <div className="ui attached segment">
            <p>Allergies:</p>
            <p>Medications: </p>
          </div>
        </div>
        <div className="sixteen wide column">
          <h3 className="ui top attached header">
            Contact Information
          </h3>
          <div className="ui attached segment">
            <table className="ui celled table">
              <thead>
                <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Releationship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">Person 1</td>
                  <td data-label="Phone Number">555-555-0101</td>
                  <td data-label="Relationship">Mother</td>
                </tr>
                <tr>
                  <td data-label="Name">Person 2</td>
                  <td data-label="Phone Number">555-555-0101</td>
                  <td data-label="Relationship">Father</td>
                </tr>
                <tr>
                  <td data-label="Name">Person 3</td>
                  <td data-label="Phone Number">555-555-0101</td>
                  <td data-label="Relationship">Grandmother</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
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
