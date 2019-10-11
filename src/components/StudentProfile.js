/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteStudent } from '../redux/actions/students'
import { Link } from 'react-router-dom'
import faker from 'faker'

class StudentProfile extends Component {

  delete = () => {
    this.props.deleteStudent(this.props.student.id, this.props.history)
  }

  render () {
    const { student, found } = this.props

    if (!found) {
      return <p>Student not found.</p>
    }
  
    if (!student) {
      return <p>Loading...</p>
    }

    return (
      <>
        <div id="students-header">
          <img className="ui tiny circular image" src={faker.image.avatar()} alt=''/>
          <h3>{student.first_name}</h3>
        </div>

        <div className="ui grid container">
          <div className="eight wide column"> 
            <h3 className="ui top attached header">
              Personal Information
            </h3> 
            <div className="ui attached segment">
            <p><strong>Name: </strong>{student.first_name} {student.last_name}</p> 
              <p><strong>Street Address: </strong>{student.street_address}</p>
              <p>
                <strong>City: </strong>{student.city} &nbsp;&nbsp;&nbsp;&nbsp;
                <strong>State: </strong>{student.state} &nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Zip: </strong>{student.zip
              }</p>
              <p><strong>Birthday: </strong>{student.dob} &nbsp;&nbsp;&nbsp;&nbsp;<strong>Age: </strong>{student.age}</p>
            </div>
          </div>
          <div className="eight wide column">
            <h3 className="ui top attached header">
              Medical Information
            </h3>
            <div className="ui attached segment">
              <p><strong>Allergies: </strong>{student.allergies}</p>
              <p><strong>Medications: </strong>{student.medications}</p>
              <p><strong>Doctor Name: </strong>{student.dr_name}</p>
              <p><strong>Doctor Phone #: </strong>{student.dr_phone}</p>
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
                  <th><strong>Name</strong></th>
                  <th><strong>Phone Number</strong></th>
                  <th><strong>Releationship</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Name">{student.contact1_name}</td>
                    <td data-label="Phone Number">{student.contact1_phone}</td>
                    <td data-label="Relationship">{student.contact1_relationship}</td>
                  </tr>
                  <tr>
                    <td data-label="Name">{student.contact2_name}</td>
                    <td data-label="Phone Number">{student.contact2_phone}</td>
                    <td data-label="Relationship">{student.contact2_relationship}</td>
                  </tr>
                  <tr>
                    <td data-label="Name">{student.contact3_name}</td>
                    <td data-label="Phone Number">{student.contact3_phone}</td>
                    <td data-label="Relationship">{student.contact3_relationship}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <button className="positive ui button">Attendance Record</button>
        <Link to={`/students/${student.id}/edit`}><button className="positive ui button">Edit Profile</button></Link>
        <button className="negative ui button" onClick={this.delete}>Delete Student</button>
        
      </>
    )
  } 
}


const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const student = state.students.filter(student => student.id == id)[0]
  const found = !!student

  return { 
    student, 
    found 
  } 
}

export default connect(mapStateToProps, { deleteStudent })(StudentProfile)
